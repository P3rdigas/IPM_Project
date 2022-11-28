package pt.unl.fct.di.lifters.resources;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.apache.commons.codec.digest.DigestUtils;

import com.google.appengine.repackaged.com.google.gson.reflect.TypeToken;
import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.Key;
import com.google.cloud.datastore.PathElement;
import com.google.cloud.datastore.Query;
import com.google.cloud.datastore.QueryResults;
import com.google.cloud.datastore.StringValue;
import com.google.cloud.datastore.StructuredQuery.CompositeFilter;
import com.google.cloud.datastore.StructuredQuery.PropertyFilter;
import com.google.cloud.datastore.Transaction;
import com.google.cloud.datastore.Value;
import com.google.gson.Gson;
import pt.unl.fct.di.lifters.utils.WorkoutData;

@Path("/{username}")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
public class UsersResource {

    private final Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    private final Gson g = new Gson();

    public UsersResource() {
        // Nothing to be done here
    }

    @POST
    @Path("/workout")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addWorkout(@PathParam("username") String username, WorkoutData data) {

        Key userKey = datastore.newKeyFactory().setKind("User").newKey(username);

        Key workoutKey = datastore.allocateId(datastore.newKeyFactory().setKind("Workout").newKey());

        Transaction txn = datastore.newTransaction();

        try {

            Entity user = txn.get(userKey);

            if (user == null) {
                txn.rollback();
                return Response.status(Status.NOT_FOUND).entity("User doesn't exists.").build();
            }

            Entity property = Entity.newBuilder(workoutKey).set("workout_user", username)
                    .set("workout_title", data.getTitle())
                    .set("workout_exercises",  data.getExercises())
                    .set("workout_muscles", data.getMuscles())
                    .build();

            txn.add(property);
            txn.commit();

            return Response.ok(g.toJson(property)).build();

        } finally {
            if (txn.isActive())
                txn.rollback();
        }
    }

    @GET
    @Path("/workouts")
    public Response getWorkouts(@PathParam("username") String username) {

        Key userKey = datastore.newKeyFactory().setKind("User").newKey(username);

        Transaction txn = datastore.newTransaction();

        try {
            
            Entity user = txn.get(userKey);

            if (user == null) {
                txn.rollback();
                return Response.status(Status.NOT_FOUND).entity("User doesn't exists.").build();
            }

            List<Entity> list = new ArrayList<>();

            Query<Entity> query = Query.newEntityQueryBuilder().setKind("Exercises")
                    .setFilter(PropertyFilter.eq("workout_user", username)).build();

            QueryResults<Entity> logs = datastore.run(query);

            logs.forEachRemaining(exercise -> {
                list.add(exercise);
            });

            txn.commit();

            return Response.ok(g.toJson(list)).build();
        } finally {
            if (txn.isActive())
                txn.rollback();
        }
    }
}

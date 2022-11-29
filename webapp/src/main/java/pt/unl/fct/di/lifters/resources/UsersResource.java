package pt.unl.fct.di.lifters.resources;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.Key;
import com.google.cloud.datastore.Query;
import com.google.cloud.datastore.QueryResults;
import com.google.cloud.datastore.StructuredQuery.PropertyFilter;
import com.google.cloud.datastore.Transaction;
import com.google.gson.Gson;
import pt.unl.fct.di.lifters.utils.InjuryData;
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
    @Path("/injuries")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response getInjuries(@PathParam("username") String username) {

        Key userKey = datastore.newKeyFactory().setKind("User").newKey(username);

        Transaction txn = datastore.newTransaction();

        try {

            Entity user = txn.get(userKey);

            if (user == null) {
                txn.rollback();
                return Response.status(Status.NOT_FOUND).entity("User doesn't exists.").build();
            }

            List<Entity> list = new ArrayList<>();

            Query<Entity> query = Query.newEntityQueryBuilder().setKind("Injuries")
                    .setFilter(PropertyFilter.eq("injury_user", username)).build();

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

    @POST
    @Path("/injury")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addInjury(@PathParam("username") String username, InjuryData data) {

        Key userKey = datastore.newKeyFactory().setKind("User").newKey(username);

        Key injuryKey = datastore.allocateId(datastore.newKeyFactory().setKind("Injuries").newKey());

        Transaction txn = datastore.newTransaction();

        try {

            Entity user = txn.get(userKey);

            if (user == null) {
                txn.rollback();
                return Response.status(Status.NOT_FOUND).entity("User doesn't exists.").build();
            }

            Entity property = Entity.newBuilder(injuryKey).set("injury_user", username)
                    .set("injury_muscle", data.getMuscle())
                    .set("injury_seriousness", data.getSeriousness())
                    .set("injury_start", data.getStartDate())
                    .set("injury_end", data.getEndDate())
                    .build();

            txn.add(property);
            txn.commit();

            return Response.ok(g.toJson(property)).build();

        } finally {
            if (txn.isActive())
                txn.rollback();
        }
    }

    @DELETE
    @Path("/injury/{id}")
    public Response deleteInjury(@PathParam("username") String username, @PathParam("id") String injuryID) {
        Key injuryKey = datastore.newKeyFactory().setKind("Injuries").newKey(Long.parseLong(injuryID));

        Transaction txn = datastore.newTransaction();

        try {
            Entity workout = txn.get(injuryKey);

            if(workout == null) {
                txn.rollback();
                return Response.status(Status.NOT_FOUND).entity("Injury doesn't exists.").build();
            }

            txn.delete(injuryKey);
            txn.commit();
            return Response.ok().build();

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

            Query<Entity> query = Query.newEntityQueryBuilder().setKind("Workout")
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

    @DELETE
    @Path("/{id}")
    public Response deleteWorkout(@PathParam("id") String workoutId) {
        Key workoutKey = datastore.newKeyFactory().setKind("Workout").newKey(Long.parseLong(workoutId));

        Transaction txn = datastore.newTransaction();

        try {
            Entity workout = txn.get(workoutKey);

            if(workout == null) {
                txn.rollback();
                return Response.status(Status.NOT_FOUND).entity("Workout doesn't exists.").build();
            }

            txn.delete(workoutKey);
            txn.commit();
            return Response.ok().build();

        } finally {
            if (txn.isActive())
                txn.rollback();
        }
    }
}

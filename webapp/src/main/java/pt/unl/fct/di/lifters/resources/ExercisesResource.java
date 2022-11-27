package pt.unl.fct.di.lifters.resources;


import com.google.cloud.datastore.*;
import com.google.cloud.datastore.StructuredQuery.PropertyFilter;
import com.google.gson.Gson;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;

@Path("/exercises")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
public class ExercisesResource {

    private final Datastore datastore = DatastoreOptions.getDefaultInstance().getService();

    private final Gson g = new Gson();

    public ExercisesResource() {    }

    @GET
    @Path("/{filters}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response getExercises(@PathParam("filters") String filters) {

        Transaction txn = datastore.newTransaction();

        try {
            List<Entity> list = new ArrayList<>();

            String[] filtersLst = filters.split("_");

            for(String filter: filtersLst) {
                Query<Entity> query = Query.newEntityQueryBuilder().setKind("Exercises")
                        .setFilter(PropertyFilter.eq("exercise_muscle", filter)).build();

                QueryResults<Entity> logs = datastore.run(query);

                logs.forEachRemaining(list::add);
            }
            
            txn.commit();

            return Response.ok(g.toJson(list)).build();
        } finally {
            if (txn.isActive())
                txn.rollback();
        }
    }
}

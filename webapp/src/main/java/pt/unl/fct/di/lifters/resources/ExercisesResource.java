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

                logs.forEachRemaining(exercise -> {
                    list.add(exercise);
                });
            }

            txn.commit();

            return Response.ok(g.toJson(list)).build();
        } finally {
            if (txn.isActive())
                txn.rollback();
        }
    }

    @GET
    @Path("/workout/{filters}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response getGeneratedWorkout(@PathParam("filters") String filters) {

        Transaction txn = datastore.newTransaction();

        try {
            String[] filtersLst = filters.split("_");

            List<Entity> list = new ArrayList<>();
            List<Entity> result = new ArrayList<>();
            List<List<Entity>> lst = new ArrayList<>();

            for(String filter: filtersLst) {
                Query<Entity> query = Query.newEntityQueryBuilder().setKind("Exercises")
                        .setFilter(PropertyFilter.eq("exercise_muscle", filter)).build();

                QueryResults<Entity> logs = datastore.run(query);

                logs.forEachRemaining(exercise -> {
                    list.add(exercise);
                });

                lst.add(list);
            }

            int numberFilters = filtersLst.length;

            boolean oneFilter = numberFilters == 1;

            int numberExercises;

            if(oneFilter)
                numberExercises = 4;
            else
                numberExercises = 8;

            if(oneFilter) {
                List<Entity> exercises = lst.get(0);

                int size = exercises.size();
                int i = 0;

                while(i < numberExercises) {
                    int index = (int) Math.floor(Math.random() * size);

                    result.add(exercises.get(index));
                    exercises.remove(index);
                    size = exercises.size();

                    i++;
                }
            } else {
                int i = 0;
                int indexFilters = 0;

                while(i < numberExercises) {
                    List<Entity> exercises = lst.get(indexFilters);

                    int size = exercises.size();
                    int index = (int) Math.floor(Math.random() * size);

                    result.add(exercises.get(index));
                    exercises.remove(index);

                    lst.remove(indexFilters);
                    lst.add(0, exercises);

                    indexFilters++;

                    if(indexFilters >= numberFilters)
                        indexFilters = 0;

                    i++;
                }
            }

            txn.commit();

            return Response.ok(g.toJson(result)).build();
        } finally {
            if (txn.isActive())
                txn.rollback();
        }
    }
}

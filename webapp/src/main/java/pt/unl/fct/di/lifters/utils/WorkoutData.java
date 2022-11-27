package pt.unl.fct.di.lifters.utils;

import java.util.List;

public class WorkoutData {
    private String title;
    private List<ExerciseData> exercises;
    private List<String> muscles;

    public WorkoutData() {  }

    public WorkoutData(String title, List<ExerciseData> exercises, List<String> muscles) {
        this.title = title;
        this.exercises = exercises;
        this.muscles = muscles;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<ExerciseData> getExercises() {
        return exercises;
    }

    public void setExercises(List<ExerciseData> exercises) {
        this.exercises = exercises;
    }

    public List<String> getMuscles() {
        return muscles;
    }

    public void setMuscles(List<String> muscles) {
        this.muscles = muscles;
    }
}

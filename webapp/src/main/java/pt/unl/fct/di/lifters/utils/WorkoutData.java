package pt.unl.fct.di.lifters.utils;

import java.util.List;

public class WorkoutData {
    private String title;
    private String exercises;
    private String muscles;

    public WorkoutData() {  }

    public WorkoutData(String title, String exercises, String muscles) {
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

    public String getExercises() {
        return exercises;
    }

    public void setExercises(String exercises) {
        this.exercises = exercises;
    }

    public String getMuscles() {
        return muscles;
    }

    public void setMuscles(String muscles) {
        this.muscles = muscles;
    }
}

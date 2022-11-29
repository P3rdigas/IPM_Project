package pt.unl.fct.di.lifters.utils;

import java.util.Date;

public class InjuryData {

    private String username;
    private String muscle;
    private String seriousness;
    private String startDate;
    private String endDate;

    public InjuryData() {}

    public InjuryData(String username, String muscle, String seriousness, String startDate, String endDate) {
        this.username = username;
        this.muscle = muscle;
        this.seriousness = seriousness;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getMuscle() {
        return muscle;
    }

    public void setMuscle(String muscle) {
        this.muscle = muscle;
    }

    public String getSeriousness() {
        return seriousness;
    }

    public void setSeriousness(String seriousness) {
        this.seriousness = seriousness;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }
}

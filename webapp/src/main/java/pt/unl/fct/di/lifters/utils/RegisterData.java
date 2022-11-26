package pt.unl.fct.di.lifters.utils;

public class RegisterData {
    private String username;
    private String password;
    private String name;
    private String email;
    private String gender;
    private int age;
    private double height;
    private double weight;
    private String fileURL;

    public RegisterData() { }

    public RegisterData(String username, String password, String name, String email, String gender, int age, double height, double weight, String fileURL) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.fileURL = fileURL;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getGender() {
        return gender;
    }

    public int getAge() {
        return age;
    }

    public double getHeight() {
        return height;
    }

    public double getWeight() {
        return weight;
    }

    public String getFileURL() {
        return fileURL;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public void setFileURL(String fileURL) {
        this.fileURL = fileURL;
    }
}

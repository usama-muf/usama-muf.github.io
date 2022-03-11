package io.javabrains.coronavirustracker.models;

public class LocationStats {
    private int count;
    private  String state;
    private  String country;
    private int latestTotalCases;
    private int changePreviousDay;
    private int totalVaccinations;
    private int peopleVaccinated;
    private int peopleFullyVaccinated;

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getLatestTotalCases() {
        return latestTotalCases;
    }

    public void setLatestTotalCases(int latestTotalCases) {
        this.latestTotalCases = latestTotalCases;
    }

    public int getChangePreviousDay() {
        return changePreviousDay;
    }

    public void setChangePreviousDay(int changePreviousDay) {
        this.changePreviousDay = changePreviousDay;
    }

    public int getTotalVaccinations() {
        return totalVaccinations;
    }

    public void setTotalVaccinations(int totalVaccinations) {
        this.totalVaccinations = totalVaccinations;
    }

    public int getPeopleVaccinated() {
        return peopleVaccinated;
    }

    public void setPeopleVaccinated(int peopleVaccinated) {
        this.peopleVaccinated = peopleVaccinated;
    }

    public int getPeopleFullyVaccinated() {
        return peopleFullyVaccinated;
    }

    public void setPeopleFullyVaccinated(int peopleFullyVaccinated) {
        this.peopleFullyVaccinated = peopleFullyVaccinated;
    }

    @Override
    public String toString() {
        return "LocationStats{" +
                "count=" + count +
                ", state='" + state + '\'' +
                ", country='" + country + '\'' +
                ", latestTotalCases=" + latestTotalCases +
                ", changePreviousDay=" + changePreviousDay +
                ", totalVaccinations=" + totalVaccinations +
                ", peopleVaccinated=" + peopleVaccinated +
                ", peopleFullyVaccinated=" + peopleFullyVaccinated +
                '}';
    }
}

package io.javabrains.coronavirustracker.services;

//service which is going to give us the data so when the application loads
//its going to make a call to the url and fetches the data

import io.javabrains.coronavirustracker.models.LocationStats;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVRecord;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.io.StringReader;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;

@Service //mark it as a spring service
public class CoronaVirusDataService {
    private static String VIRUS_DATA_URL = "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.csv";
    private List<LocationStats> allStats = new ArrayList<>(); //saves all data in list allStats

    public List<LocationStats> getAllStats() {
        return allStats;
    }

    @PostConstruct
    //application start executing "PostConstruct" basically telling that when you construct an instance of
    //CoronaVirusDataService after its done just execute the method "fetchVirusData"

    @Scheduled(cron = "* * * 1 * *") //(ss mm hh day month year)
    //Run the below method on a regular basis && go to main class and enable @EnableScheduling

    public void fetchVirusData() throws IOException, InterruptedException {
        List<LocationStats> newStats = new ArrayList<>();

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder().uri(URI.create(VIRUS_DATA_URL)).build();
        HttpResponse<String> httpResponse = client.send(request,HttpResponse.BodyHandlers.ofString());

        //System.out.println(httpResponse.body());
        StringReader csvBodyReader = new StringReader(httpResponse.body());

        Iterable<CSVRecord> records = CSVFormat.RFC4180.parse(csvBodyReader);
        boolean counter = false;
        int count=1;
        for (CSVRecord record : records) {
            if(counter && record.get(1)!=""){
                LocationStats locationStat = new LocationStats();
                locationStat.setState(record.get(1));
                locationStat.setCountry(record.get(2));

                double tempTestCases=0.0,tempSecondTestCases=0.0;
                if(record.get(4)!="")
                    tempTestCases = Double.parseDouble(record.get(4));
                int latestCases = (int)tempTestCases;//Integer.parseInt(record.get(4));//Integer.parseInt(record.get(record.size() - 1));


                if(record.get(5)!="")
                    tempSecondTestCases = Double.parseDouble(record.get(5));
                int secondLatestCases  = (int)tempSecondTestCases;
                locationStat.setCount(count++);
                locationStat.setLatestTotalCases(latestCases);
                locationStat.setChangePreviousDay(secondLatestCases);
                locationStat.setTotalVaccinations((record.get(34)==""?((int)Double.parseDouble("0")):(int)Double.parseDouble(record.get(34))));
                locationStat.setPeopleVaccinated((record.get(35)==""?((int)Double.parseDouble("0")):(int)Double.parseDouble(record.get(35))));
                locationStat.setPeopleFullyVaccinated((record.get(36)==""?((int)Double.parseDouble("0")):(int)Double.parseDouble(record.get(36))));
                newStats.add(locationStat);

                //System.out.println(record.get(4));

            }
        counter=true;
        }
        this.allStats=newStats;
        System.out.println("Done with coronaVirusDataServices.java file");

    }
}

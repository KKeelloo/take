package lab.app;

import jakarta.ws.rs.client.Client;
import jakarta.ws.rs.client.ClientBuilder;
import jakarta.ws.rs.client.Entity;
import jakarta.ws.rs.client.WebTarget;
import jakarta.ws.rs.core.GenericType;
import jakarta.ws.rs.core.MediaType;
import lab.dto.ComplaintDTO;

import java.text.MessageFormat;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

public class Main {
    public static void main(String[] args) {
        Client client = ClientBuilder.newClient();
        WebTarget base = client.target("http://localhost:8080/Server-1.0-SNAPSHOT/" +
                "api/complaints");
        List<ComplaintDTO> status = base
                        .request(MediaType.APPLICATION_JSON)
                        .get(new GenericType<List<ComplaintDTO>>(){});

        System.out.println("Status: ");
        final String formatString = "\"id\": {0}, \"complaintDate\": \"{1}\", \"complaintText\": \"{2},  \"author\": \"{3}\", \"status\": \"{4}\"";
        AtomicReference<Long> openId = new AtomicReference<>();
        status.forEach(e -> {
            System.out.println("{"+MessageFormat.format(
                    formatString,
                    e.getId(),
                    e.getComplaintDate(),
                    e.getComplaintText(),
                    e.getAuthor(),
                    e.getStatus())+"}");
            if (openId.get() == null && e.getStatus().equals("open")) {
                openId.set(e.getId());}
        });


        ComplaintDTO open = base.path(openId.toString())
                .request(MediaType.APPLICATION_JSON)
                .get(ComplaintDTO.class);

        System.out.println("Open: {"
                + MessageFormat.format(
                        formatString,
                        open.getId(),
                        open.getComplaintDate(),
                        open.getComplaintText(),
                        open.getAuthor(),
                        open.getStatus())
                + "}");


        open.setStatus("closed");
        base.path(openId.toString())
                .request(MediaType.APPLICATION_JSON)
                .put(Entity.json(open));

        List<ComplaintDTO> allOpen = base
                .queryParam("status", "open")
                .request(MediaType.APPLICATION_JSON)
                .get(new GenericType<List<ComplaintDTO>>(){});

        System.out.println("All open: ");
        allOpen.forEach(e -> {
            System.out.println("{"+MessageFormat.format(
                    formatString,
                    e.getId(),
                    e.getComplaintDate(),
                    e.getComplaintText(),
                    e.getAuthor(),
                    e.getStatus())+"}");
        });
        client.close();
    }
}

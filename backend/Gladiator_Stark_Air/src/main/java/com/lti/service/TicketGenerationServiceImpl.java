package com.lti.service;

import java.io.File;
import java.io.IOException;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.interactive.form.PDAcroForm;
import org.apache.pdfbox.pdmodel.interactive.form.PDField;
import org.springframework.stereotype.Service;

@Service("ticketGenerationService")
public class TicketGenerationServiceImpl implements TicketGenerationService{
	public void generateTicket(String flightNumber, String bookingId, String source, String destination, String name,
			String age, String dateTime, String sex,String seat, int call) {
		try {
			PDDocument pDDocument = PDDocument.load(new File("C:/Gladiator Stark Air Final/gladiator_sme/backend/Template.pdf"));
			PDAcroForm pDAcroForm = pDDocument.getDocumentCatalog().getAcroForm();
			PDField field = pDAcroForm.getField("Name1");
			field.setValue(name);
			field = pDAcroForm.getField("Age");
			field.setValue(age);
			field = pDAcroForm.getField("Sex");
			field.setValue(sex);
			field = pDAcroForm.getField("Flight_Number");
			field.setValue(flightNumber);
			field = pDAcroForm.getField("Booking_Id");
			String set=bookingId.substring(0,bookingId.length()-6);
			field.setValue(set);
			field = pDAcroForm.getField("Source");
			field.setValue(source);
			field = pDAcroForm.getField("Destination");
			field.setValue(destination);
			field = pDAcroForm.getField("Date_Time");
			field.setValue(dateTime);
			field = pDAcroForm.getField("Name_Alt");
			field.setValue(name);
			field = pDAcroForm.getField("Flight_Number_Alt");
			field.setValue(flightNumber);
			field = pDAcroForm.getField("Booking_Id_Alt");
			field.setValue(set);
			field = pDAcroForm.getField("Date_Time_Alt");
			field.setValue(dateTime);
			field = pDAcroForm.getField("Seat_Number");
			field.setValue(seat);
			pDAcroForm.refreshAppearances();
			pDAcroForm.flatten();
			pDDocument.save("C:/Gladiator Stark Air Final/gladiator_sme/backend/Generated Ticket/"+bookingId+"Passenger"+call+".pdf");
			pDDocument.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}

package com.lti.service;

public interface BookingEmailService {
	public void sendEmailWithTicket(String emailId, int attachmentNumber, String bookingId, String dateTime, String flightNumber);

}

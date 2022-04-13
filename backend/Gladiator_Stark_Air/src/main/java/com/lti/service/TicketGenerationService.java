package com.lti.service;

public interface TicketGenerationService {
	public void generateTicket(String flightNumber, String bookingId, String source, String destination, String name,
			String age, String dateTime, String sex,String seat, int call);

}

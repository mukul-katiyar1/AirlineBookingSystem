package com.lti.service;

public interface CustomerCancellationMailService {
	
	public void sendCustomerCancellationMail(String emailId, int attachmentNumber, String bookingId, String dateTime, String flightNumber);

}

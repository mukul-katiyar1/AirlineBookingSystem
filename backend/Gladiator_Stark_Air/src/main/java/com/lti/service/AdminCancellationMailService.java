package com.lti.service;

public interface AdminCancellationMailService {
	public void sendAdminCancellationMail(String emailId, int attachmentNumber, String bookingId, String dateTime, String flightNumber);

}

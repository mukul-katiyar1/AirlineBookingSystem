package com.lti.service;

import java.util.List;

import com.lti.model.Customer;
import com.lti.model.FlightBooked;

public interface CustomerService {

	public boolean addCustomer(Customer customer);

	public List<Customer> findAllCustomers();

	public boolean modifyCustomer(Customer customer);

	public boolean removeCustomer(String emailId);

	public Customer findCustomerById(String emailId);

	public String customerLoginAuthentication(String emailId, String password);

	public String customerUpdatePassword(String emailId, String password);
	
	public void sendBookingEmail(FlightBooked fb);
	
	public void sendCancellationMail(FlightBooked fb);
}

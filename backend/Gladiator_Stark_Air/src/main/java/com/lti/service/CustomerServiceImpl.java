package com.lti.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.lti.dao.CustomerDao;
import com.lti.model.Customer;
import com.lti.model.Flight;
import com.lti.model.FlightBooked;
import com.lti.model.PassengerDetails;


@Service("customerService")
public class CustomerServiceImpl implements CustomerService{

	@Autowired
	private CustomerDao customerDao;
	
	@Autowired
	private TicketGenerationService ticketGenerationService;
	
	@Autowired
	private BookingEmailService bookingEmailService;
	
	@Autowired
	private CustomerCancellationMailService customerCancellationMailService;
	
	@Autowired
	private PassengerDetailsService passengerDetailsService;

	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public boolean addCustomer(Customer customer) {

		String result = customerDao.createCustomer(customer);
		return (result!=null) ? true : false;
	}

	@Override
	public List<Customer> findAllCustomers() {
		return customerDao.readAllCustomers();
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public boolean modifyCustomer(Customer customer) {
		Customer result = customerDao.updateCustomer(customer);
		return (result!=null) ? true : false;
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public boolean removeCustomer(String emailId) {
		int result = customerDao.deleteCustomer(emailId);
		return (result == 1) ? true : false;
	}

	@Override
	public Customer findCustomerById(String emailId) {
		return customerDao.readCustomerById(emailId);
	}

	@Override
	public String customerLoginAuthentication(String emailId, String password) {
		Customer result = customerDao.readCustomerById(emailId);
		
		if(result!=null) {
		if(password.equals(result.getPassword()))
			return "Success";
		else
			return "Faliure. Invalid password";
		}
		else
			return "Invalid username";
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public String customerUpdatePassword(String emailId, String password) {
		Customer customer = customerDao.readCustomerById(emailId);

		System.out.println(customer);
		customer.setPassword(password);
		customerDao.updateCustomer(customer);
		Customer customer2 = customerDao.readCustomerById(emailId);
		System.out.println("chenged");
		System.out.println(customer2);
		return "ok";
	}

	@Override
	public void sendBookingEmail(FlightBooked fb) {
		
		String name="",age="",sex="",seat="";
		int seatNumber=0;
		PassengerDetails details = passengerDetailsService.findPassengerDetailsById(fb.getBookingId());
		Flight flight = fb.getFlight();
		String flightNumber = flight.getfId().getFlightNumber();
		String dateTime = flight.getfId().getTravelDate()+" "+flight.getDepartureTime();
		String source = flight.getSource();
		String destination = flight.getDestination();
		String bookingId = fb.getBookingId();
		char arr[]= {'F','A','B','C','D','E'};
		
		for(int i=1;i<=fb.getBookedSeats();i++) {
			if(i==1) {
			name = details.getPassenger1Name();
			age = details.getPassenger1Age()+"";
			sex= details.getPassenger1Gender();
			seatNumber= details.getPassenger1SeatNumber();
			int tmp=(seatNumber/6);
			if((seatNumber%6!=0)) {
				tmp++;
			}
			
			seat=(tmp+""+arr[seatNumber%6]);
			}
			if(i==2) {
				name = details.getPassenger2Name();
				age = details.getPassenger2Age()+"";
				sex= details.getPassenger2Gender();
				seatNumber= details.getPassenger2SeatNumber();
				int tmp=(seatNumber/6);
				if((seatNumber%6!=0)) {
					tmp++;
				}
				
				seat=(tmp+""+arr[seatNumber%6]);
				}
			if(i==3) {
				name = details.getPassenger3Name();
				age = details.getPassenger3Age()+"";
				sex= details.getPassenger3Gender();
				seatNumber= details.getPassenger3SeatNumber();
				int tmp=(seatNumber/6);
				if((seatNumber%6!=0)) {
					tmp++;
				}
				
				seat=(tmp+""+arr[seatNumber%6]);
				}
			if(i==4) {
				name = details.getPassenger4Name();
				age = details.getPassenger4Age()+"";
				sex= details.getPassenger4Gender();
				seatNumber= details.getPassenger4SeatNumber();
				int tmp=(seatNumber/6);
				if((seatNumber%6!=0)) {
					tmp++;
				}
				
				seat=(tmp+""+arr[seatNumber%6]);
				
				}
			ticketGenerationService.generateTicket(flightNumber, bookingId, source, destination, name, age, dateTime, sex,seat, i);
			}
		Customer customer = fb.getCustomer(); 
		
		bookingEmailService.sendEmailWithTicket(customer.getEmailId(), fb.getBookedSeats(), bookingId, dateTime, flightNumber);
		
		
	}

	@Override
	public void sendCancellationMail(FlightBooked fb) {
		Flight flight = fb.getFlight();
		String flightNumber = flight.getfId().getFlightNumber();
		String dateTime = flight.getfId().getTravelDate()+" "+flight.getDepartureTime();
		Customer customer = fb.getCustomer();
		String bookingId= fb.getBookingId().substring(0, fb.getBookingId().length()-6);
		customerCancellationMailService.sendCustomerCancellationMail(customer.getEmailId(), fb.getBookedSeats(), bookingId, dateTime, flightNumber);
		
	}

}

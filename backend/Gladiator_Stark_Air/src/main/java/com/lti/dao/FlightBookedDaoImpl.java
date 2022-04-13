package com.lti.dao;

import java.sql.Date;
import java.util.Calendar;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.lti.model.Flight;
import com.lti.model.FlightBooked;
import com.lti.model.FlightID;
import com.lti.model.PassengerDetails;
import com.lti.service.AdminCancellationMailService;

@Repository("flightBookedDao")
public class FlightBookedDaoImpl implements FlightBookedDao {

	@PersistenceContext
	EntityManager entityManager;
	
	@Autowired
	AdminCancellationMailService adminCancellationMailService;
	
	@Override
	public List<FlightBooked> readAllFlightBooked() {
		String jpql = "Select f from FlightBooked f where f.adminCancellationStatus=0 AND f.customerCancellationStatus=0";
		TypedQuery<FlightBooked> tquery = entityManager.createQuery(jpql, FlightBooked.class);
		return tquery.getResultList();
	}

	@Override
	@Transactional(propagation = Propagation.MANDATORY)
	public int deleteFlightBookedByCustomer(String bookingId) {
		FlightBooked fb = entityManager.find(FlightBooked.class, bookingId);
		System.out.println(fb);

		if (fb != null && fb.getCustomerCancellationStatus() == 0) {
			fb.setCustomerCancellationStatus(1);
			entityManager.merge(fb);
			return 1;
		} else
			return 0;
	}
	
	@Override
	@Transactional(propagation = Propagation.MANDATORY)
	public void deleteFlightBookedByAdmin(FlightID fId) {
	    String jpql = "Select fb from FlightBooked fb where fb.flight.fid=:fId AND fb.adminCancellationStatus=0";
		TypedQuery<FlightBooked> tquery = entityManager.createQuery(jpql,FlightBooked.class);
		tquery.setParameter("fId", fId);
		List<FlightBooked> list = tquery.getResultList();
		
		for(FlightBooked fb:list) {
			fb.setAdminCancellationStatus(1);
			Flight flight = fb.getFlight();
			String flightNumber = flight.getfId().getFlightNumber();
			String dateTime = flight.getfId().getTravelDate()+" "+flight.getDepartureTime();
			String bookingId= fb.getBookingId().substring(0,fb.getBookingId().length()-6);
			if(fb.getCustomerCancellationStatus()==0)
			adminCancellationMailService.sendAdminCancellationMail(fb.getCustomer().getEmailId(), fb.getBookedSeats(), bookingId, dateTime, flightNumber);
		}

	}

	@Override
	public FlightBooked readFlightBookedById(String bookingId) {

		return entityManager.find(FlightBooked.class, bookingId);
	}

	@Override
	public FlightBooked addPassengerDetails(PassengerDetails details, String bookingId) {
		FlightBooked fb = readFlightBookedById(bookingId);
		fb.addDetails(details);
		return fb;
	}

	@Override
	public List<FlightBooked> readFlightHistory(String emailId) {
		String jpql = "select f from FlightBooked f where f.customer.emailId=:emailId AND f.adminCancellationStatus=0 AND f.customerCancellationStatus=0 AND f.flight.fid.travelDate<:today";
		TypedQuery<FlightBooked> tquery = entityManager.createQuery(jpql, FlightBooked.class);
		tquery.setParameter("emailId",emailId);
		tquery.setParameter("today",new java.sql.Date(Calendar.getInstance().getTimeInMillis()));
		return tquery.getResultList();
        
	}

	@Override
	public List<FlightBooked> readUpcomingFlight(String emailId) {
		String jpql = "select f from FlightBooked f where f.customer.emailId=:emailId AND f.adminCancellationStatus=0 AND f.customerCancellationStatus=0 AND f.flight.fid.travelDate>=:today";
		TypedQuery<FlightBooked> tquery = entityManager.createQuery(jpql, FlightBooked.class);
		tquery.setParameter("emailId",emailId);
		tquery.setParameter("today",new java.sql.Date(Calendar.getInstance().getTimeInMillis()));
		return tquery.getResultList();
	}

}

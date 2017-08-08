package com.hrm.model;



import com.hrm.commons.Status;


public class Response {
	private Status status;
   
    private Employee employee;

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}
   
	
    
}
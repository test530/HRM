package com.hrm.dao;



import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Component;

import com.hrm.model.Employee;





@Component
public class LoginDao {

	@PersistenceContext
	private EntityManager em;

	public void persist(Employee mem) {
		em.persist(mem);
	}

	public List<Employee> verifyLogin(Employee mem) { 
		return em.createQuery("FROM Employee m WHERE m.email=:email and m.password=:password").setParameter("email",mem.getEmail()).setParameter("password",mem.getPassword()).getResultList();
	}

}

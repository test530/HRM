package com.hrm.service;




import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.hrm.dao.LoginDao;
import com.hrm.model.Employee;


@Component
public class LoginService {

	@Autowired
	private LoginDao loginDao;

	@Transactional(readOnly = true)
	public boolean verifyLogin(Employee mem) {
		List<Employee> memSuccess=loginDao.verifyLogin(mem);
		if(memSuccess.size()>=1) return true;
		else return false;

	}

}

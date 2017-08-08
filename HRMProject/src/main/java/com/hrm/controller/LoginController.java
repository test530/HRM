package com.hrm.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.hrm.commons.ResApiConstants;
import com.hrm.commons.Status;
import com.hrm.model.Employee;
import com.hrm.model.Response;
import com.hrm.service.LoginService;




public class LoginController {
	private static final Logger logger = LoggerFactory.getLogger(LoginController.class);
	
	
	@Autowired
	LoginService loginservice;
	
	@RequestMapping(value = ResApiConstants.MEMBER_LOGIN, method = RequestMethod.POST)
	@ResponseStatus(value = HttpStatus.OK)
	public @ResponseBody Response verifyLogin(@RequestBody Employee mem) {
		logger.info("VERIFY LOGIN");
		Response res=new Response();
		try
		{
			if(loginservice.verifyLogin(mem))
			setSuccessResponse(res,"Login Successfull");
			else
			setSuccessResponse(res,"Login Un Successfull");	
		}catch(Exception e)
		{
			logger.error("Exception occurred"+e.getMessage());
			setErrorResponse(res);
		}
		logger.info("VERIFY LOGIN COMPLETED");
		return res;
	}
	public Response setSuccessResponse(Response res,String message)
	{
		Status s=new Status();
		s.setCode(200);
		s.setMessage(message);
		s.setSuccess(true);
		res.setStatus(s);
		return res;
	}
	
	public Response setErrorResponse(Response res)
	{
		Status s=new Status();
		s.setMessage("Error Occurred");
		s.setSuccess(false);
		res.setStatus(s);
		return res;
	}
		
}

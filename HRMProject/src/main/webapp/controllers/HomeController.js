var app = angular.module('app', ['ngMaterial', 'ngMessages']);
app.controller('HomeController', function($scope) {
	
	  
	 
	$scope.immigration =["------none------","Hi Visa", "B1 Visa", "CPT","EAD","F1","GC","GC EAD"];
	$scope.immigrationName = $scope.immigration[0];
	$scope.department =["------none------","IT", "Recruiting", "Sales","HR","Accounting","Finance","Sales/Recruiting","Other","Bench Sales","Exec. Management"];
	$scope.deptName = $scope.department[0];
	$scope.employeeType=["------none------","1099", "C2C", "Full-Time","Internal Staff","W2-Hourly","W2-salaried."];
	$scope.empType = $scope.employeeType[0];
	$scope.reportsTo=["------none------","Admin", "Abdul Habeeb Mohammad", "Anup raja sarabu","Atreyee duttagupta"];
	$scope.reportsto = $scope.reportsTo[0];
	$scope.country=["------none------","Australia", "China", "Canada","France","Germany","India"];
	$scope.countryList = $scope.country[0];
	$scope.vendor=["------none------","CODEFORCE 360", "Conrep Test", "Hallmark Global","Saibersys, Inc.","Xtream IT people"];
	$scope.subVendor = $scope.vendor[0];
	$scope.reason=["------none------","Terminated", "End of Contract", "Resign-Opportunity","Resign-Money","Resign-Converted","Resign-Other","Other"];
	$scope.terminationReason = $scope.reason[0];
	$scope.division=["------none------","USA"];
	$scope.divisions = $scope.division[0];
	$scope.maritalStatus=["------none------","Single","Married"];
	$scope.gend = $scope.maritalStatus[0];
	$scope.gender=["------none------","Male","Female","Other"];
	$scope.terminationReason = $scope.gender[0];
	$scope.jobTitle=["------none------","Account Manager(Sales)","Sales Manager","Sales Lead","Sales Person","Sales (Bench)","Recruiting Manager"];
	$scope.jobtitle = $scope.jobTitle[0];
	$scope.state=["------none------","Alabama","Alaska","Arizona","-----------"];
	$scope.states = $scope.state[0];





});
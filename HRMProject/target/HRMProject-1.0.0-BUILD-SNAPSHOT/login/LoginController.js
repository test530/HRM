mainModule.controller("LoginController", ['$scope', '$state','Flash',
function ($scope, $state,Flash) {
	
        var vm = this;
        vm.signIn = true;
        //access login
        vm.login = function (data) {
		if(data.email=='test' && data.password=='test'){
			$state.go('home');
		}
		else{
            Flash.create('danger', 'Invalid Username/Password', 'large-text');
            }
        	console.log(data);
        	

     
          
         
        };

        //get registration details
       vm.register = function () {
           
        };

    }]);

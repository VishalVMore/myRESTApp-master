myApp.controller('HomeCtrl', function($scope,dataFactory,$location) {   
    
    $scope.sport = [];
    /* connection to Sport URL */
    dataFactory.getSports().then(function(data) {
      $scope.sport = data.data[0];
    });
        
    /* Function gets call from Upcoming Events and redirect to ticket booking page */
	    $scope.BookTicket=function(eventId){
		    
		    sessionStorage.setItem("eventId",eventId);
            $location.path("/TicketBooking");
		    
	    }
    /* Function Gets call from Sport and redirecting to sport page*/
      $scope.evevtSelection=function(sport){
          
          sessionStorage.setItem("sportId",sport.sport_id);
          $location.path('/sport');
      }
        
    });
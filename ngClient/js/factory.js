myApp.factory('dataFactory', function ($http,$window) {
    var urlSport = 'http://localhost:7000/api/sport';
    var urlEvent = 'http://localhost:7000/api/SingleSport';
    var urlStand = 'http://localhost:7000/api/Stand';
    function sportFactory() {
        return $http.get(urlSport);
    };

    function eventFactory() {
        return $http.get(urlEvent+'/'+sessionStorage.getItem("sportId"));
    };
    function ticketFactory(){
        return $http.get(urlStand+'/'+sessionStorage.getItem("eventId"));
    };
    function standFactory(standData){
        //alert($window.sessionStorage.token);
        alert(JSON.stringify(standData));
       return $http({
                    method:'POST',
                    url:'http://localhost:7000/api/BuyNow',
                    /*headers:{
                         'x-access-token': $window.sessionStorage.token
                    },*/
                    data:standData
                }).then(function(result) {
                    var tickets = [];
                    tickets=result.data[1];
                    sessionStorage.setItem("cartid",tickets[0].cartId);
                    sessionStorage.setItem("stockstatusid",tickets[0].stockstatusId);
                    alert(sessionStorage.getItem("cartid"))
            });
    };
    function ticSummaryFactory(customer){
    $http({
    method: 'POST',
    url: 'http://localhost:7000/api/customerDetails',
     data: customer
    /*headers: {
        'Content-Type': 'application/json'
    }*/}).then(function(result) {
           /*console.log("Result"+JSON.stringify(result));
           console.log("Data"+JSON.stringify(result.data[1]));*/
        var customerId = [];
        customerId = result.data[1];
        /*console.log($scope.customerId[0].addressId);*/
          sessionStorage.setItem("customerid",customerId[0].customerId);
          sessionStorage.setItem("addressid",customerId[0].addressId);
          alert("customerId"+sessionStorage.getItem("customerid"));
       })
    };
    
    return {
        getSports: sportFactory,
        getEvents: eventFactory,
        getTickets: ticketFactory,
        setTickets: standFactory,
        setCustomers: ticSummaryFactory
    };
});
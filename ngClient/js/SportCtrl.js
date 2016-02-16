    /* sport Controller */
    myApp.controller('SportCtrl', function ($scope, dataFactory, $rootScope, $location) {
        /* bach button url to redirect to home page i.g. event page */
        $rootScope.back = {
            url: '#/'
        };
        /* BookNow function gets called from Sport View and redirecting to TicketBooking view */
        $scope.BookNow = function (event) {
                /* Event Id gets from event controller */
                sessionStorage.setItem("eventId", event.event_id);
                $scope.dateformat = $scope.event.eventtime;
                sessionStorage.setItem("price", event.price);
                sessionStorage.setItem("match", event.name);
                sessionStorage.setItem("stadium", event.stadiumname);
                sessionStorage.setItem("eventTime", event.eventtime);
                $location.path('/ticket');
            }
            /*$http.get(MYSQL_URL+"/SingleSport"+"/"+sessionStorage.getItem("sportId"))
            .then(function(response) {
            $scope.event=response.data[0];*/
        alert(sessionStorage.getItem("sportId"));
        dataFactory.getEvents().then(function (data) {
            $scope.event = data.data[0];
            /* showing more events  */
            var pagesShown = 1;
            var pageSize = 3;

            $scope.paginationLimit = function (data) {
                return pageSize * pagesShown;
            };

            $scope.hasMoreItemsToShow = function () {
                return pagesShown < ($scope.event.length / pageSize);
            };

            $scope.showMoreItems = function () {
                pagesShown = pagesShown + 1;
            };
        });
    });
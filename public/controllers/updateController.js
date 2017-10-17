angular.module('smoothieApp').controller('updateController', function($scope, service, $window){

    service.getAllOrders().then(
        function(response) {

            $scope.orders = response.data;
            
        }
    );

    service.getUserByEmail().then(
        function(response) {

            $scope.user = response.data;
            console.log("update controller user:",$scope.user)
            
        }
    );

    // $scope.findValue = function(enteredValue) {     
    //     angular.forEach(, function(value, key) {
    //       if (key === enteredValue) {
    //         $scope.results.push({serial: key, owner: value[0].Owner});
    //       }
    //     });
    //   };

    $scope.update = function(updateInfo) {
        // console.log(updateInfo);
        service.updateOrderInfo(updateInfo).then(
            function(response) {
                $scope.orderInfo = response;
            }
        );

    };

    $scope.delete = function(userId) {
        console.log("delete user: ",userId)
        service.deleteUser(userId).then(
            

        );

    };

    $scope.reload = () => {
        $window.location.reload();
    };
});
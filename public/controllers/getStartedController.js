angular.module('smoothieApp').controller('getStartedController', function($scope, service){
    
        // $scope.smoothieOrder = {};
        
        $scope.next = function(smoothieOrder) {
    
            // if (($scope.smoothieOrder.proteinBase) && ($scope.smoothieOrder.vegetable) && ($scope.smoothieOrder.fruit)
            // ($scope.smoothieOrder.twoweeksorder) && ($scope.smoothieOrder.size)) {
                
                service.addOrder(smoothieOrder).then(
                    function(response) {
                        
                        $scope.order = response;
                        
                    }
                );
    
            // }
            // else {
            //     alert('Smoothie specifications not selected!');
            // }
        };
    
        service.getAllOrders().then(
            function(response) {
    
                $scope.orders = response.data;
                
            }
        );
    
        $scope.toOrder = function(smoothieUser) {
                        
            // if (($scope.smoothieUser.firstName) && ($scope.smoothieUser.lastName) && ($scope.smoothieUser.email)
            //             ($scope.smoothieUser.address)) {
    
    
                service.addUser(smoothieUser).then(
                    function(response) {
                                
                            $scope.users = response;
                                
                    }
                );
            
            // }
            // else {
            //         alert('Smoothie specifications not selected!')
            // }
    
        };

    
    
    
    });




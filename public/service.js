angular.module('smoothieApp').service('service', function($http){
    
    
        this.getAllOrders = function() {
           return $http.get('/api/orders/');
        },
    
        this.addOrder = function(smoothieOrder) {
            
            // console.log("service", smoothieOrder);
            return $http.post('/api/orders', smoothieOrder);
        
        },
    
        this.addUser = function(smoothieUser) {
            
            // console.log("service", smoothieUser);
            return $http.post('/api/users', smoothieUser);
        },
        
    
        this.getAllUsers = function() {
           return $http.get('/api/users/');
        },

        this.getUserByEmail = function() {
            return $http.get('/api/userbyemail');
        }, 
        
        this.updateOrderInfo = function(updateInfo) {
            // console.log(updateInfo);
            return $http.put('/api/updateOrderInfo', updateInfo);
        }, 

        this.deleteUser = function(userId) {
            return $http.delete('/api/deleteUser/' + userId);
        }

    });
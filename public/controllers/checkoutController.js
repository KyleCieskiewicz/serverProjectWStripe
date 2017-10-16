angular.module('smoothieApp').config(function() {
    window.Stripe.setPublishableKey('pk_test_8FbbmBHROOIMxGF7oeezdeT1');
}).controller('checkoutController', function($scope, service, $state){

    $scope.stripeCallback = function (code, result) {
        if (result.error) {
            window.alert('it failed! error: ' + result.error.message);
        } else {
            window.alert('success! token: ' + result.id);
            $state.go('paysuccess');
        }
    };

});
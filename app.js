(function() {
	//module named gemStore
	var app = angular.module('gemStore', []);
	//controller named StoreController
	app.controller('StoreController', function(){
	//code here is the ananoymous function and
	//what gets executed when StoreController is called
	this.product = gem;
	});
	var gem = {
	name: 'Azurite',
	price: 110.50,
	canPurchase: true,
	soldOut: true
	};
})();
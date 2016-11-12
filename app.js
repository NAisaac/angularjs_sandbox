(function() {
	//module named gemStore. Parameter = ('name', [array of dependencies])
	var app = angular.module('gemStore', []);
	//controller named StoreController
	app.controller('StoreController', function(){
	//code here is the ananoymous function and
	//what gets executed when StoreController is called
	this.products = gems;
	});
	var gems = [
	{ name: 'Azurite', price: 110.50, canPurchase: true, soldOut: false },
	{ name: 'Bloodstone', price: 5.95, canPurchase: false, soldOut: true },
    { name: 'Zircon', price: 3.95, canPurchase: true, soldOut: false }
	];
})();
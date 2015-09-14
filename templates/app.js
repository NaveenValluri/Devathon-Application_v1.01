(function(){
	var app = angular.module('store', []);
	
	app.controller('StoreController', function(){
		this.products = transactions;
	});
	
	app.controller('ReviewController', function(){
		this.review = {};
	});
	
	app.controller('PanelController', function(){
		this.tab = 1;
		var tabFilter = {1:"name", 2:"type", 3:"amount", 4:"tags", 5:"fromacc", 6:"toacc", 7:"date",};
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		
		this.isSelected = function(checkTab){
			
			return this.tab ===checkTab;
		};
		
		this.tabIndex = function(tabVal){
			return this.tabFilter[tabVal];
		};
	});
	
	var transactions = [{
		type:'savings',
		amount:15000,
		fromacc:'Account 1',
		toacc:'Account 2',
		tags:'Tag 1',
		name:'Naveen',
		date:'21-05-2015',
	},
	{
		type:'savings',
		amount:100,
		fromacc:'Account 1',
		toacc:'Account 2',
		tags:'Tag 4',
		name:'Naveen',
		date:'21-05-2015',
	},
	{
		type:'savings',
		amount:1000,
		fromacc:'Account 1',
		toacc:'Account 2',
		tags:'Tag 6',
		name:'Naveen',
		date:'21-05-2015',
	},
	]
	
})();


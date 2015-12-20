var inventory = (function() {
	var backet = [];
	var lookItem = function() {
		console.log(backet);
	};
	var addItem = function(item) {
		backet.push(item);
	};
	var removeItem = function(item) {
		var index = backet.indexOf(item);
		backet.splice(index, 1);
	};
	return {
		look: function(){
			lookItem();
		},
		add: function(item) {
			addItem(item)
		},
		remove: function(item) {
			removeItem(item)
		}
	}
})();
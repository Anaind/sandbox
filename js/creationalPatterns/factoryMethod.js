function Factory() {
	this.createHero = function(type) {
		var hero;

		if(type === "carry") {
			hero = new Carry();
		} else if (type === "support") {
			hero = new Support();
		} else if (type === "nuker") {
			hero = new Nuker();
		}

		hero.type = type;

		hero.say = function() {
			console.log(this.type + ": my main function is:" +this.mainFunction);			
		}

		return hero;
	}
}	

	var Carry = function() {
		this.mainFunction = "Carrying team to win";
	}
	var Support = function() {
		this.mainFunction = "Supporting team";
	}
	var Nuker = function() {
		this.mainFunction = "Kill ememy in 1 second";
	}
	var log = {
		log: "",
		add: function(msg) {
			log += msg + "\n";
		},
		show: function() {
			console.log(log);
			log = "";
		}
	}
	function run() {
		var heroes = [],
			factory = new Factory(),
			i = 0,
			len = 0;

		heroes.push(factory.createHero("carry"));
		heroes.push(factory.createHero("support"));
		heroes.push(factory.createHero("nuker"));

		for(var i = 0, len = heroes.length; i < len; i++) {
			heroes[i].say();
		}

	};
	run();
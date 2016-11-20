	// create the controller and inject Angular's $scope
	weatheraApp.controller('mainController', function($scope, $http) {
		$scope.myFunction = function() {
			$("#myModal").modal('show');
		}		
	});
	
	weatheraApp.controller('shareLocationController',function($scope, $http) {
		var locationurl= "https://geoip-db.com/json/geoip.php?jsonp=callback=JSON_CALLBACK";
		$('#myModal').modal('hide');
		$('.modal-backdrop.in').remove()
		
		$scope.locationFunction = function() {
			$http.jsonp(locationurl).success(function(data) {
				$scope.country = data.country_name;
				$scope.state = data.state;
				$scope.city = data.city;
				$scope.latitude = data.latitude;
				$scope.longitude = data.longitude;
				var weatherurl = "http://api.openweathermap.org/data/2.5/weather?lat="+data.latitude+"&lon="+data.longitude+"&appid=916a147ccb8525e5e190563ad728d323";
				$scope.weatherFunction(weatherurl);
			});
		}
		$scope.weatherFunction = function(wurl) {
			console.log(wurl);
			$http.get(wurl).success(function(response) {
				$scope.weathers = response.weather;
				$scope.temp = response.main.temp;
				$scope.humidity = response.main.humidity;
				$scope.visibility = response.visibility;
				$scope.speed = response.wind.speed;
				$scope.deg = response.wind.deg;
				$scope.sunrise = response.sys.sunrise;
				$scope.sunset = response.sys.sunset;
			});
		}
		$scope.locationFunction(); 
	});
	
	weatheraApp.controller('contactController',function($scope, $http) {
		$('#myModal').modal('hide');
		$('.modal-backdrop.in').remove()
		
		$scope.citiFunction = function() {
			var citi= $("#citi").val();
			var citirurl = "http://api.openweathermap.org/data/2.5/weather?q="+citi+"&appid=916a147ccb8525e5e190563ad728d323";
			console.log(citirurl);
			
			$http.get(citirurl).success(function(cdata) {
				$scope.cweather = cdata.weather;
				$scope.temp = cdata.main.temp;
				$scope.humidity = cdata.main.humidity;
				$scope.sealevel = cdata.main.sea_level;
				$scope.grndlevel = cdata.main.grnd_level;
				$scope.speed = cdata.wind.speed;
				$scope.deg = cdata.wind.deg;
				$scope.sunrise = cdata.sys.sunrise;
				$scope.sunset = cdata.sys.sunset;
				$scope.country = cdata.sys.country;
				$scope.name = cdata.name;
				
				
			});
						
		}	
		
		$scope.zipFunction = function() {
			var zip= $("#zip").val();4
			var scountry = $('#country option:selected').val();
			var ziprurl = "http://api.openweathermap.org/data/2.5/weather?zip="+zip+"&lon="+scountry+"&appid=916a147ccb8525e5e190563ad728d323";
			console.log(ziprurl);
			
			$http.get(ziprurl).success(function(zdata) {
				$scope.cweather = zdata.weather;
				$scope.temp = zdata.main.temp;
				$scope.humidity = zdata.main.humidity;
				$scope.sealevel = zdata.main.sea_level;
				$scope.grndlevel = zdata.main.grnd_level;
				$scope.speed = zdata.wind.speed;
				$scope.deg = zdata.wind.deg;
				$scope.sunrise = zdata.sys.sunrise;
				$scope.sunset = zdata.sys.sunset;
				$scope.country = zdata.sys.country;
				$scope.name = zdata.name;
				
				
			});
						
		}	
	});
	
	

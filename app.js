//create module
var portfolio = angular.module('portfolioApp', ['ngRoute']);
    
//configure routes
portfolio.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
    
    $routeProvider.
    when('/', {
        templateUrl: 'partials/main.html'
        
    }).
    when('/details', {
        templateUrl: 'partials/details.html'
         }).
    when('/portfolio', {
        templateUrl: 'partials/main.html'
        
   
    }).otherwise({
        redirectTo: '/'
      
    });
    
    //$locationProvider.html5Mode(true);
    
}]);

//this is the main controller
portfolio.controller('projectInfo', function ($scope, $http) {
   


   //These are the arrays for photogallerys
   
    $scope.adm = [
        {src: 'images/project/adm/adm1.png', desc: 'PHP generated results from log file'}];
        
    $scope.map = [
        {src: 'images/project/map/map1.png', desc: 'Work order application'},
        {src: 'images/project/map/map2.png', desc: 'Filter work oder by'}];
   
    $scope.capstone = [
        {src: 'images/project/capstone/login1.jpg', desc: 'Before Loging In'},
        {src: 'images/project/capstone/login2.jpg', desc: 'After Logging in'}];
    $scope.stt = [
        {src: 'images/project/stt/inout.png', desc: 'in out page for technicians'},
        {src: 'images/project/stt/createtest.png', desc: 'create Technician test'},
        {src: 'images/project/stt/truefalse.png', desc: 'True or False'},
        {src: 'images/project/stt/testresults.png', desc: 'Test Results'}];
    $scope.winApps = [
        {src: 'images/project/phoneapps/energycalculator.jpg', desc: 'Energy Calculator'},
        {src: 'images/project/phoneapps/exercise.jpg', desc: 'Energy Calculator'},
        {src: 'images/project/phoneapps/sub1.jpg', desc: 'submarine game'},
        {src: 'images/project/phoneapps/sub2.jpg', desc: 'after losing'}];
   
    
    //This function will pass the value of the selected image and retrieve the corresponding value in the Javascript Array
    //This function will also  choose the correct photogallery depending on the value that was passed to it
    
    $scope.pick = function(value)
    {
        $scope.num = value;
        if(value == 0)
        {
           $scope.projgallery = $scope.adm; 
        }
        else if(value == 1)
        {
           $scope.projgallery = $scope.map; 
        }
         else if(value == 2)
        {
           $scope.projgallery = $scope.capstone; 
        }
         else if(value == 3)
        {
           $scope.projgallery = $scope.stt; 
            
        }
        else if(value == 4)
        {
           $scope.projgallery = $scope.winApps; 
        }
        else if(value == 5)
        {
           $scope.projgallery = ""; 
        }
    }
    
    //jQuery call / Ajax - Retrieves json file containing about me information
    $http.get("json/projectsinfo.json").success(function(response){
       $scope.projects = response;
       });
    
    //jQuery call / Ajax - Retrieves json file containing project information
    $http.get("json/aboutme.json").success(function (response){
        $scope.aboutme = response;
        });
   

	 
	    // initial image index	    $scope._Index = 0;	 
	    // if a current image is the same as requested image
	    $scope.isActive = function (index) {
	        return $scope._Index === index;
	    };
	 
	    // show prev image
	    $scope.showPrev = function () {
	        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
	    };
	 
	    // show next image
	    $scope.showNext = function () {
	        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
	    };
	 
	    // show a certain image
	    $scope.showPhoto = function (index) {
	        $scope._Index = index;
	    };
        
	


});


    









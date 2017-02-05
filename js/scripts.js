angular.module('MainApp', ['ui.bootstrap', 'ngAnimate', 'ngRoute'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            template: '<test-stuff></test-stuff>'
        })
        .when('/about', {
            template: '<h3>About view</h3>'
        })
        .when('/contact',{
            template: "<h3>Contact view</h3>"
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.hashPrefix('');
}])

.component('mainHead', {
    templateUrl: 'htmlTemplates/mainHead.component.html'
})

.component('mainHeader', {
    templateUrl: 'htmlTemplates/mainHeader.component.html'
})

.component('topNavbar', {
    bindings: {
        sitename: "@"
    },
    templateUrl: 'htmlTemplates/topNavbar.component.html',
    controller: function(){
        var $ctrl = this;
        $ctrl.links = [
            {
                name: "Home",
                url: "/"
            },
            {
                name: "About",
                url: "#/about"
            },
            {
                name: "Contact",
                url: "#/contact"
            }
        ];
        $ctrl.sitename = "Website Template";
    }
})

.component('inlineNavbar', {
    bindings: {
        sitename: "@"
    },
    templateUrl: 'htmlTemplates/inlineNavbar.component.html',
    controller: function(){
        var $ctrl = this;
        $ctrl.links = [
            {
                name: "Home",
                url: "/"
            },
            {
                name: "About",
                url: "#/about"
            },
            {
                name: "Contact",
                url: "#/contact"
            }
        ];
        $ctrl.sitename = "Website Template";
    }
})

.component('testStuff', {
    templateUrl: 'htmlTemplates/testStuff.component.html'
});
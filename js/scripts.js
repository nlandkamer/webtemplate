angular.module('MainApp', ['ui.bootstrap', 'ngAnimate'])

.component('mainHead', {
    templateUrl: 'htmlTemplates/mainHead.component.html'
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
                name: "Contact",
                url: "/Home/Contact"
            },
            {
                name: "About",
                url: "/Home/About"
            }
        ];
        $ctrl.sitename = "Website Template";
    }
})

.component('testStuff', {
    templateUrl: 'htmlTemplates/testStuff.component.html'
});
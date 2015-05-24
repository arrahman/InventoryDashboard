var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'view/partial-home.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('category', {
            url: '/category',
            templateUrl: 'view/category.html',
            controller: 'CategoryCtrl' 
        }).state('category_add', {
            url: "/category/add",
            controller: "CategoryAddCtrl",
            templateUrl: "view/category.add.html"
        }).state('category_edit', {
            url: "/category/:id/edit",
            controller: "CategoryEditCtrl",
            templateUrl: "view/category.edit.html"
        });
        
});
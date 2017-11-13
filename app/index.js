import angular from 'angular';

const NgModule = angular.module('app',[]);

require('./directives')(NgModule);

console.log(NgModule);
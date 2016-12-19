import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Crud from './crud/crud';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Crud
])

.name;

export default componentModule;

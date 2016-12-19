import angular from 'angular';
import uiRouter from 'angular-ui-router';
import crudComponent from './crud.component';

let crudModule = angular.module('crud', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('crud', {
      url: '/crud',
      component: 'crud'
    });
})

.component('crud', crudComponent)
  
.name;

export default crudModule;

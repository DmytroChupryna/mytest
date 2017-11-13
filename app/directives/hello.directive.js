module.exports = (ngModule) => {
  ngModule.directive('hello',() => {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'directives/hello.directive.html',
      controllerAs: vm,
      controller: function () {

        let vm = this;

        vm.greeting = 'Hello world!'
      }
    }
  })
};
'use strict';

function ExampleCtrl() {

  // ViewModel
  const vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;

  vm.grid = [
      "A1", "A2", "A3",
      "B1", "B2", "B3",
      "C1", "C2", "C3"
  ]

}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};

import angular from "angular";

class AppCtrl {
  constructor() {
      this.coucou = "yes";
  }
}

angular.module("app", [])
  .controller('AppCtrl', AppCtrl);


//Déclaration du module newApp et insertion dans la variable app
var app = angular.module('newApp', []);
//Création d'un controlleur showHide et création d'une fonction
app.controller('showHide', function($scope) {
  //Déclaration de la variable paragraphe
  $scope.paragraphe = 'Le roman est ennemi de la vitesse, la lecture doit être lente et le lecteur doit rester sous le charme d\'une page, d\'un paragraphe, d\'une phrase même.';
  //Déclaration de la fonction showText()
  $scope.showText = function() {
    //Application de la valeur 'true' a l'attribut parag de ng-show
    $scope.parag = 'true';
  }
  //Déclaration de la fonction hideText()
  $scope.hideText = function() {
    //Application de la valeur 'false' a l'attribut parag de ng-show
    $scope.parag = 'false';
  }
});

/**
 * Created by gq-work on 4/19/17.
 */
angular.module('app', ['ui.bootstrap']);
function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slide = [
    {
      image: './src/assets/homescreen.png'
    },
    {
      image: './src/assets/girl.png'
    },
    {
      image: './src/assets/boy.png'
    },
    {
      image: './src/assets/life.jpg'
    }

  ];
}

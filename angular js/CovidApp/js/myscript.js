const URL = "https://covid19.mathdro.id/api";

let app = angular.module("MyApp", []);

app.controller('MyCtrl',($scope)=>{
    //this is controller
    $scope.title = "Stay Home Stay Safe";

    $scope.changeValue = () =>{
        $scope.title = "This is home time";
    }

    console.log("App Loaded");

    //calling api

    $http.get(URL).then( (response)=>{
        //Success
        console.log(response.data);
        $scope.all_data = response.data;
    } , (error)=>{
        //error
        console.log(error);
    } )
});
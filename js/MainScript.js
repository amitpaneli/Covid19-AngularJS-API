const URL ="https://covid19.mathdro.id/api";

//Created API. 
let app = angular.module('Myapp', []);

app.controller('MyCtrl',function($scope,$http) {
    //This is The Controller 
    $scope.title = "Covid-19 Wordwide live Confirm, Recoved, and Deaths Cases";
    $scope.SubTitle = "Project Using AngularJS + Bootstrap";
    $scope.image = "src: 'img/iam-logo.png'"

// Call API to get WordWide cases data here
    $http.get(URL).then(
        (response)=>{
            //On Success
            console.log(response);
            $scope.all_data=response.data;
            console.log(response.lastUpdate);
    } ,
        (error)=>{
            //On Error
            console.log(error);
    });


// Call API to Get Country Data
$scope.get_c_data = () => {
    let country = $scope.c; 

    if (country == ""){
        //Variable undifine to hide all country box while remove text from input field.
        $scope.c_data = undefined;
        return;
    }

// Call API to get data country wise https://covid19.mathdro.id/api/countries/india 
   $http.get(`${URL}/countries/${country}`).then(
        (response)=>{
            console.log(response.data);
            $scope.c_data = response.data;
        },
        (error)=>{
            console.log(error);
        })
    };
});
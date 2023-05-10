var app =  angular.module("App",[]);
// gasn controller vs module
app.controller('contactController',function($scope){
    var uid = 1;
    //contact: là một mảng thuộc tính chứa giá trị model
    $scope.contacts=[
        {
            id:0,
            'name':'Phu Trong',
            'email':'abc@mailcom',
            'phone':'014567789'
        },
        
    ];
    $scope.saveContact = function(){
        if($scope.newcontact.id==null){
            $scope.newcontact.id=uid++;
            $scope.contacts.push($scope.newcontact);
        }else{
            console.log('id not null');
            for(i in $scope.contacts){
                if($scope.contacts[i].id==$scope.newcontact.id){
                    $scope.contacts[i]=$scope.newcontact;
            }
        }
    }
        $scope.newcontact={}
    }
    $scope.delete = function(id){
        for(i in $scope.contacts){
            if($scope.contacts[i].id==id){
                $scope.contacts.splice(i,1);
                $scope.newcontact={}
            }
        }
    }
    $scope.edit = function(id){
        for(i in $scope.contacts){
            if($scope.contacts[i].id==id){
                $scope.newcontact = angular.copy($scope.contacts[i])
            }
        }
    }
});
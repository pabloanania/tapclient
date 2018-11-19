/*
*   MODULO LISTA DE MENSAJES
*/
// Registra el componente, con su controller y template asociado
angular.module('ChatApp').component('messageList', {
    template:
        '<div class="text_item_list" ng-controller="MessageListController" >' + 
            '<div ng-repeat="(key, val) in msgs">' +
                '<div class="text_item">{{key}}:</br>{{val}}</div>' + 
            '</div>' + 
            '<input type="submit" id="message_list_refresh"  ng-click="refresh()" value="Actualizar">' + 
        '</div>'
});
  
angular.module('ChatApp').controller('MessageListController', function($scope, $http){
    $scope.refresh = function(){
        Services.Messages.getUnreadAngular($http, function(res){
            $scope.msgs = {};
            var received = res.data.messages;
            
            for (var i=0; i<received.length; i++){
                $scope.msgs[received[i].from] = received[i].message;
            }
        }, function(res){
            alert(res.data.error);
            toggleLoginFromChatPanel();
        });
    }
});

/*
*   MODULO LISTA DE USERS
*/
angular.module('ChatApp').component('userList', {
    template:
        '<div class="text_item_list" ng-controller="UserListController" >' + 
            '<div ng-repeat="(key, val) in usrsLoggedIn">' +
                '<div class="text_item"><input class="user_check" type="checkbox" user_id="{{key}}" user_name="{{val}}">{{val}}</div>' + 
            '</div>' + 
            '<div ng-repeat="(key, val) in usrsLoggedOut">' +
                '<div class="text_item grayed"><input class="user_check" type="checkbox" user_id="{{key}}" user_name="{{val}}">{{val}}</div>' + 
            '</div>' + 
            '<input type="submit" id="user_list_refresh" ng-click="refresh()" value="Actualizar">' + 
        '</div>'
});

angular.module('ChatApp').controller('UserListController', function($scope, $http){
    $scope.refresh = function(){
        Services.Users.getAngular($http, function(res){
            $scope.usrsLoggedIn = {};
            $scope.usrsLoggedOut = {};
            var users = res.data.users;
            
            for (var i=0; i<users.length; i++){
                if (users[i].logged)
                    $scope.usrsLoggedIn[users[i]._id] = users[i].username;
                else
                    $scope.usrsLoggedOut[users[i]._id] = users[i].username;
            }
        }, function(res){
            alert(res.data.error);
            toggleLoginFromChatPanel();
        });
    }
});
'use strict';

var Ctrls = angular.module('Ctrls', []);

Ctrls.controller('RoomCtrl', function($scope, socket){
    $scope.msgz = [];
    
    socket.emit('getAllMsgz');
    
    socket.on('allMsgz', function(msgz){        
        $scope.msgz = msgz;
    });
    
    socket.on('msgAdded', function(msg){        
        $scope.msgz.push(msg);
    });
});


Ctrls.controller('MessageCreatorCtrl', function($scope, socket) {
  $scope.neoMsg = '';
  
  $scope.createMessage = function () {
    if ($scope.neoMsg === '') {
      return;
    }
    
    socket.emit('createMsg', $scope.neoMsg);
    
    $scope.neoMsg = '';
  };
});
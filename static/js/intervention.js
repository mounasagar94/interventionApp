angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function ($uibModal, $log, $document) {

  var $ctrl = this;
  $ctrl.animationsEnabled = true;

  $ctrl.open = function (size, parentSelector) {
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($uibModalInstance, $http, $scope) {
  var $ctrl = this;

  // $ctrl.ok = function () {
  //   $uibModalInstance.close($ctrl.selected.item);
  // };
  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $ctrl.saveData = function($scope) {
    console.log('save data')
    var data = {
      label: document.getElementById("labelInput").value,
      name: document.getElementById("nameInput").value,
      description: document.getElementById("descInput").value,
      place: document.getElementById("placeInput").value,
      date: document.getElementById("dateInput").value,
      state: 'draft'
    }
    console.log('reponse', data)
    $http.put('/intervention/api/', data)
    $uibModalInstance.close();
}
});

// Please note that the close and dismiss bindings are from $uibModalInstance.

angular.module('ui.bootstrap.demo').component('modalComponent', {
  templateUrl: 'myModalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function ($scope) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
    };

    $ctrl.ok = function () {
      $ctrl.close();
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };

    $ctrl.saveData = function() {
      console.log('save data')
      var data = {label: $scope.labelInput, name: $scope.nameInput, description: $scope.descInput, place: $scope.placeInput, date: $scope.dateInput, state: 'draft'}
      $http.put('/intervention/api/', data)
      $uibModalInstance.close();
  }
  }
});

angular.module('ui.bootstrap.demo').controller('crudController', function($scope, $http){
    $http.get('/intervention/api/').then(function(response) {
        $scope.interventions = [];
        for (var i = 0; i < response.data.length; i++) {
            var intervention = {};
            intervention.label = response.data[i].label
            intervention.name = response.data[i].name
            intervention.description = response.data[i].description
            intervention.place = response.data[i].place
            intervention.date = response.data[i].date
            intervention.state = response.data[i].state
            intervention.id = response.data[i].id
            $scope.interventions.push(intervention);
        }
    })

    //Delete, this function check if the intervention in state done, so we can delete it
      $scope.remove = function() {
        var oldList = $scope.interventions;
        $scope.List = [];
        angular.forEach(oldList, function(inter) {
            if (inter.state == 'done') {
                $http.delete('/todo/api/' + inter.id + '/');
            } else {
                $scope.List.push(inter);
            }
        })
    }

    //editIntervention()
    // $scope.editIntervention = function(){

    // }
   });


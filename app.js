(function(){
  "use strict";

  angular.module("toBuyListApp", [])
  .controller("toBuyList", toBuyList)
  .controller("alreadyBoughtList", alreadyBoughtList)
  .service("customService", customService);

  toBuyList.$inject = ["customService", "$scope"];
  function toBuyList(customService, $scope){
    var list1 = this;

    $scope.name = "Mohit";

    list1.itemName = "";
    list1.itemQuantity = "";

    list1.addItem = function(){
      list1.item = {
        itemName: list1.itemName,
        itemQuantity: list1.itemQuantity
      };
      customService.addItem(list1.item);
      list1.itemName = "";
      list1.itemQuantity = "";
    };

    list1.items = customService.getItems();

    list1.removeThisItem = function(index){
      customService.mssg = "";
      customService.removeThisItem(index);
    };

  };

// 2nd controller
  alreadyBoughtList.$inject = ["customService", "$scope"];
  function alreadyBoughtList(customService, $scope){
    var list2 = this;

    console.log($scope.name);

    list2.alreadyBoughtItems = customService.getAlreadyBoughtItems();

    list2.label = customService.mssg;
  };

// Code of our service
  function customService(){
    var customService = this;

    var items = [
      {
        itemName:"Oreo",
        itemQuantity:"4 packets"
      },
      {
        itemName:"Coke",
        itemQuantity:"3 bottles"
      },
      {
        itemName:"Water Bottles",
        itemQuantity:"5"
      },
      {
        itemName:"Sandwiches",
        itemQuantity:"3"
      },
      {
        itemName:"Room Freshner",
        itemQuantity:"2 pieces"
      }
    ];

    var alreadyBoughtItems = [];

    var appendingValue;

    customService.mssg = "Nothing bought yet!";

    customService.addItem = function(item){
      items.push(item);
    };

    customService.getItems = function(){
      return items;
    };

    customService.removeThisItem = function(index){
      customService.mssg = "";
      appendingValue = items[index];
      alreadyBoughtItems.push(appendingValue);
      items.splice(index, 1);
    };
    customService.getAlreadyBoughtItems = function(){
      return alreadyBoughtItems;
    };
  };

})();

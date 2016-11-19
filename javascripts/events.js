'use strict';

let DOMGuy = require("./view.js"),
    Robot = require("./model.js");

let events = function () {
  $('#setup').show();
  $('#arena').hide();
  
  let goToArena = $('#goToArena').click(function(event) {
    if ($('select option:selected')[0].value === 'null' || $('select option:selected')[1].value === 'null'){
      alert("Please choose a model!");
    } else {
console.log("name1: ", $('#name1').val());
console.log("name2: ", $('#name2').val());
      let robotModel1 = new Robot[$('select option:selected')[0].id]($('#name1').val());
      let robotModel2 = new Robot[$('select option:selected')[1].id]($('#name2').val());
      $('#setup').hide();
      $('#arena').show();
      DOMGuy.Arena(robotModel1, robotModel2);
    }
  });

  let fightem = $('#fight').click(function(event) {
    DOMGuy.Fight();
  });

};

// THIS should be a big function declaration for all event listeners

module.exports = events;
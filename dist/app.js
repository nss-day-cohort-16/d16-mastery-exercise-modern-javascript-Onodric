(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let Armor = function () {
  /* body... */
};

let Light = function () {
  this.name = "Light";
  this.absorb = 30;
};

Light.prototype = new Armor();

let Heavy = function () {
  this.name = "Heavy";
  this.absorb = 50;
};

Heavy.prototype = new Armor();

module.exports = {Light, Heavy};
},{}],2:[function(require,module,exports){
'use strict';

let DOMGuy = require("./view.js"),
    Robot = require("./model.js");

// THIS should be a big function declaration for all event listeners
},{"./model.js":3,"./view.js":5}],3:[function(require,module,exports){
'use strict';

let DOMGuy = require("./view.js"),
    Weapon = require("./weapons.js"),
    Armor = require("./armor.js");

console.log("Weapon.js: ", Weapon.Divebomb());

// 1. A base Robot function.
let RobotFrame = function(){
  this.healthBase = 50;
  this.frameName = "Mark";
  this.damageBaseRam = 10;
};

// 1. Define three robot type functions (e.g. Drone, Bipedal, ATV).
// 1. Each type must have a unique property, for example, if it is aerial or ground based.
let Flier = function () {
  this.typeName = "Anemoi";
  this.healthBonus = -10;
  this.aerial = true;
  this.weapon = new Weapon.Divebomb();
};

Flier.prototype = new RobotFrame();

// 1. Define at least 2 specific robot model functions for each type.
// 1. Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function in JavaScript.
// 1. Give each robot model a different range of damage they do using the same technique.

let Bee = function () {
  this.modelName = "Stymphalian";
  this.damage = Math.floor(Math.random() * 10) + this.weapon.damage;
  this.armor = new Armor.Light();
  this.health = Math.floor(Math.random() * 50) + this.healthBase + this.healthBonus + this.armor.absorb;
};

Bee.prototype = new Flier();

let Bird = function () {
  this.modelName = "Harpy";
  this.damage = Math.floor(Math.random() * 20) + this.weapon.damage;
  this.armor = new Armor.Heavy();
  this.health = Math.floor(Math.random() * 100) + this.healthBase + this.healthBonus + this.armor.absorb;
};

Bird.prototype = new Flier();

let Walker = function () {
  this.typeName = "";
  this.healthBonus = 10;
  this.mobile = true;
  this.weapon = new Weapon.Constrict();
};

Walker.prototype = new RobotFrame();

let Spider = function () {
  this.modelName = "Arachne";
  this.damage = Math.floor(Math.random() * 10) + this.weapon.damage;
  this.armor = new Armor.Light();
  this.health = Math.floor(Math.random() * 50) + this.healthBase + this.healthBonus + this.armor.absorb;
};

Spider.prototype = new Walker();

let Dog = function () {
  this.modelName = "Cerebus";
  this.damage = Math.floor(Math.random() * 20) + this.weapon.damage;
  this.armor = new Armor.Heavy();
  this.health = Math.floor(Math.random() * 100) + this.healthBase + this.healthBonus + this.armor.absorb;
};

Dog.prototype = new Walker();

// 1. Define at least 2 specific robot model functions for each type.
// 1. Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function in JavaScript.
// 1. Give each robot model a different range of damage they do using the same technique.

let Crawler = function () {
  this.typeName = "Ouroboros";
  this.healthBonus = 20;
  this.grappler = true;
  this.weapon = new Weapon.Hammer();
};

Crawler.prototype = new RobotFrame();

// 1. Define at least 2 specific robot model functions for each type.
// 1. Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function in JavaScript.
// 1. Give each robot model a different range of damage they do using the same technique.

let Snake = function () {
  this.modelName = "Amphisbaena";
  this.damage = Math.floor(Math.random() * 10) + this.weapon.damage;
  this.armor = new Armor.Light();
  this.health = Math.floor(Math.random() * 50) + this.healthBase + this.healthBonus + this.armor.absorb;
};

Snake.prototype = new Crawler();

let Gorgon = function () {
  this.modelName = "Medusa";
  this.damage = Math.floor(Math.random() * 20) + this.weapon.damage;
  this.armor = new Armor.Heavy();
  this.health = Math.floor(Math.random() * 100) + this.healthBase + this.healthBonus + this.armor.absorb;
};

Gorgon.prototype = new Crawler();

//    + Instantiation of new objects creates the inheritance you expect
//    + Calculations for health, damage, armor, etc. work properly
//    + Passing in arguments to set properties like `name` or `number of arms` creates those properties

// 1. You must use jQuery for interacting with the DOM.

// ### Logical Requirements

// You'll be building robots to battle each other.


// ### Functional Requirements

// 1. When your user interface first loads, provide 2 text inputs to name the two robots that will do battle.
// 1. You must also provide a select element underneath each text input so that the user can select one of the 6 robot models you defined.
// 1. Provide a Attack! button that, when clicked, simply applies the damage output of each robot against the other one.
// 1. Once either robot's health is <0 display a message that the battle is over, and which one won. For example...

// ##### The Viper Drone defeated the Behemoth ATV with its flamethrower.

module.exports = {Snake, Gorgon, Spider, Dog, Bee, Bird};
},{"./armor.js":1,"./view.js":5,"./weapons.js":6}],4:[function(require,module,exports){
'use strict';

let Events = require("./events.js"),
    Robot = require("./model.js");

let gorgon = new Robot.Gorgon();
console.log("robot: ", gorgon);

let snake = new Robot.Snake();
console.log("robot: ", snake);

let bee = new Robot.Bee();
console.log("robot: ", bee);

let bird = new Robot.Bird();
console.log("robot: ", bird);

let dog = new Robot.Dog();
console.log("robot: ", dog);

let spider = new Robot.Spider();
console.log("robot: ", spider);


// # Modern JavaScript Developer Quiz
// # Robot Battledome

// ## Instructions

// ### Code/Tools Requirements

// 1. Use ES6 language features wherever you can. At a minimum, you should be using **let**, **const**, fat arrows, property shorthand, method properties, and string templates.
// 1. Have a Grunt task running at all times to validate your JavaScript. We will be validating your project and we should see 0 errors.
// 1. You must have a very basic, just a few, test suite that validates the core logic of the application.
// Some things to test:
//    + Instantiation of new objects creates the inheritance you expect
//    + Calculations for health, damage, armor, etc. work properly
//    + Passing in arguments to set properties like `name` or `number of arms` creates those properties

// 1. You must use jQuery for interacting with the DOM.

// ### Logical Requirements

// You'll be building robots to battle each other.

// 1. A base Robot function.
// 1. Define three robot type functions (e.g. Drone, Bipedal, ATV).
// 1. Each type must have a unique property, for example, if it is aerial or ground based.
// 1. Define at least 2 specific robot model functions for each type.
// 1. Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function in JavaScript.
// 1. Give each robot model a different range of damage they do using the same technique.

// ### Functional Requirements

// 1. When your user interface first loads, provide 2 text inputs to name the two robots that will do battle.
// 1. You must also provide a select element underneath each text input so that the user can select one of the 6 robot models you defined.
// 1. Provide a Attack! button that, when clicked, simply applies the damage output of each robot against the other one.
// 1. Once either robot's health is <0 display a message that the battle is over, and which one won. For example...

// ##### The Viper Drone defeated the Behemoth ATV with its flamethrower.

},{"./events.js":2,"./model.js":3}],5:[function(require,module,exports){
'use strict';

// 1. Use ES6 language features wherever you can. At a minimum, you should be using **let**, **const**, fat arrows, property shorthand, method properties, and string templates.

// Some things to test:
//    + Instantiation of new objects creates the inheritance you expect
//    + Calculations for health, damage, armor, etc. work properly
//    + Passing in arguments to set properties like `name` or `number of arms` creates those properties

// 1. You must use jQuery for interacting with the DOM.

// You'll be building robots to battle each other.

// 1. A base Robot function.
// 1. Define three robot type functions (e.g. Drone, Bipedal, ATV).
// 1. Each type must have a unique property, for example, if it is aerial or ground based.
// 1. Define at least 2 specific robot model functions for each type.
// 1. Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function in JavaScript.
// 1. Give each robot model a different range of damage they do using the same technique.

// ### Functional Requirements

// 1. When your user interface first loads, provide 2 text inputs to name the two robots that will do battle.
// 1. You must also provide a select element underneath each text input so that the user can select one of the 6 robot models you defined.
// 1. Provide a Attack! button that, when clicked, simply applies the damage output of each robot against the other one.
// 1. Once either robot's health is <0 display a message that the battle is over, and which one won. For example...

// ##### The Viper Drone defeated the Behemoth ATV with its flamethrower.

module.exports = null;
},{}],6:[function(require,module,exports){
"use strict";

let Weapon = function () {
  this.mount = true;
};

let Divebomb = function () {
  this.name = "Divebomb";
  this.damage = 20;
};

Divebomb.prototype = new Weapon();

let Constrict = function () {
  this.name = "Constrict";
  this.damage = 20;
};

Constrict.prototype = new Weapon();

let Hammer = function () {
  this.name = "Hammer";
  this.damage = 20;
};

Hammer.prototype = new Weapon();

module.exports = {Divebomb, Constrict, Hammer};
},{}]},{},[4]);

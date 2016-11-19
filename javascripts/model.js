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
const controller ={}
var Sequelize = require('sequelize');

// imporconst controller = {}
// import model
var Customers = require('./model/Customer');
const { Op } = require("sequelize");

controller.index =(req,res)=> {
    const data = {
        name:"Abdul Rafay",
        age:"20",
        city:"Karachi"
    }
    res.json(data);
}


controller.list = async (req, res) => {
    console.log("call");
    const response = await Customers.findAll()
    .then(function(data){
      const res = { success: true, data: data }
      return res;
    })
    .catch(error =>{
      const res = { success: false, error: error }
      return res;
    })
    res.json(response);
  
  }
  
  controller.create = async ( req, res) =>{
  
    try {
  
      const response = await Customers.create({
        name:"John Smith",
        email:"john@smith.com",
        address:"Cll 100 Malibu",
        phone:"123456789"
      })
      .then(function(data){
        const res = { success: true, data: data, message:"created successful" }
        return res;
      })
      .catch(error=>{
        const res = { success: false, error: error }
        return res;
      })
      res.json(response);
  
    } catch (e) {
      console.log(e);
    }
  }
  
  controller.update = async ( req, res) =>{
  
    try {
  
      const id = 19;
  
      const response = await Customers.update({
        name:"Jhon Milan",
        email:"milan@milo.com",
        address:"Cll 100 California",
        phone:"123456789"
      },{
        where: { id: id}
      })
      .then(function(data){
        const res = { success: true, data: data, message:"updated successful" }
        return res;
      })
      .catch(error=>{
        const res = { success: false, error: error }
        return res;
      })
      res.json(response);
  
    } catch (e) {
      console.log(e);
    }
  }
  
  controller.get = async ( req, res) =>{
  
    try {
  
      const { id } = req.params;
  
      const response = await Customers.findAll({
        where: { id: id}
        // where: { id: [ 1, 2, 4 ] }
        // like: { name: "Milan" }
        // where: {
        //   name: {
        //     [Op.like]: '%Milan%'
        //   }
        // }
      })
      .then( function(data){
        const res = { success: true, data: data }
        return res;
      })
      .catch(error => {
        const res = { success: false, error: error }
        return res;
      })
      res.json(response);
  
    } catch (e) {
      console.log(e);
    }
  }
  
  
  controller.delete = async ( req, res) =>{
  
    try {
  
      const { id } = req.params;
  
      const response = await Customers.destroy({
        where: { id: id }
      })
      .then( function(data){
        const res = { success: true, data: data, message:"Deleted successful" }
        return res;
      })
      .catch(error => {
        const res = { success: false, error: error }
        return res;
      })
      res.json(response);
  
    } catch (e) {
      console.log(e);
    }
  }
  
module.exports = controller;
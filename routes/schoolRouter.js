const express = require('express')
const router = express.Router()
const db = require('../models/db')
const bodyParser = require('body-parser')


// STUDENT TABLE 

// GET 
router.get("/student",(req,res) =>{
    let sql = "SELECT * FROM student" ;
     db.query(sql,(err,rows,fields)=>{
        if(err){
            res.status(500).send(`Error : ${err}`)
        }
        res.json(rows)
    })
})

// GET with a specific id
router.get("/student/:id",(req,res) =>{
    const id = req.params.id
    let sql = `SELECT * FROM student WHERE id=${id}` ;
     db.query(sql,(err,rows,fields)=>{
        if(err){
            res.status(500).send(`Error : ${err}`)
        }
        else{
            res.json(rows)
        }
    })
})

// POST 
router.post("/student",(req,res) =>{
    const name = req.body.name ;
    const cls = req.body.class ; 
    let sql = `insert into student(name , class) values("${name}",${cls})`
     db.query(sql,(err,rows,fields)=>{
        if(err){
            res.status(500).send(`Error : ${err}`)
        }
        else{
            res.json({message : "Record added" })
        }
    })
})

//UPDATE 

router.put("/student/:id",(req,res) =>{
    const id = req.params.id
    const name = req.body.name ;
    const cls = req.body.class ; 
    let sql = `UPDATE student SET name="${name}" , class=${cls} where id=${id}`
     db.query(sql,(err,rows,fields)=>{
        if(err){
            res.status(500).send(`Error : ${err}`)
        }
        else{
            res.json({message : "Record Updated" })
        }
        
    })
})


// DELETE 

router.delete("/student/:id",(req,res) =>{
    const id = req.params.id ;
    let sql = `DELETE from student where id=${id}`
     db.query(sql,(err,rows,fields)=>{
        if(err){
            res.status(500).send(`Error : ${err}`)
        }
        else{
            res.json({message : "record deleted" })
        }
        
    })
})

//------------------------------------------------------------
// TEACHERS TABLE 
// GET 
router.get("/teachers",(req,res) =>{
    let sql = "SELECT * FROM classteacher" ;
     db.query(sql,(err,rows,fields)=>{
        if(err){
            res.status(500).send(`Error : ${err}`)
        }
        res.json(rows)
    })
})

// GET with a specific class
router.get("/teachers/:class",(req,res) =>{
    const id = req.params.class
    let sql = `SELECT * FROM classteacher WHERE class=${id}` ;
     db.query(sql,(err,rows,fields)=>{
        if(err){
            res.status(500).send(`Error : ${err}`)
        }
        else{
            res.json(rows)
        }
    })
})

// POST 
router.post("/teachers",(req,res) =>{
    const cls = req.body.Class ;
    const name = req.body.Name ;
    const contact = req.body.Contact ; 
    console.log(cls)
    console.log(name)
    console.log(contact)
    let sql = `insert into classteacher(class, name , contact_no) values(${cls},"${name}","${contact}")`

     db.query(sql,(err,rows,fields)=>{
        if(err){
            res.status(500).send(`Error : ${err}`)
        }
        else{
            res.json({message : "Record Added" })
        }
    })
})

//UPDATE 

router.put("/teachers/:class",(req,res) =>{
    const id = req.params.Class
    const name = req.body.Name ;
    const contact = req.body.Contact ; 
    let sql = `UPDATE classteacher SET name="${name}" , contact_no=${contact} where class=${id}`
     db.query(sql,(err,rows,fields)=>{
        if(err){
            res.status(500).send(`Error : ${err}`)
        }
        else{
            res.json({message : "success" })
        }
        
    })
})


// DELETE 

router.delete("/teachers/:class",(req,res) =>{
    const id = req.params.class ;
    let sql = `DELETE from student where class=${id}`
     db.query(sql,(err,rows,fields)=>{
        if(err){
            res.status(500).send(`Error : ${err}`)
        }
        else{
            res.json({message : "record deleted " })
        }
        
    })
})

module.exports = router
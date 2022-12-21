const express = require('express');
const router = require('express').Router();
const { User, Entry, Comment } = require('../Models')

router.get("/", (req, res) => {
    Entry.findAll({
      include:[User, Comment]
    }).then((entries) => {
      const entriesHbsData = entries.map((entry) => entry.get({ plain: true }));
      res.render("home", {
        entries: entriesHbsData,
      });
    });
  });

  router.get("/sessions", (req,res)=>{
    res.json(req.session)
  })
  
  router.get("/entry/:id", (req, res) => {
    Entry.findByPk(req.params.id, {
      include: [User]
    }).then((entry) => {
      const entryHbsData = entry.get({ plain: true });
      console.log(entry)
      console.log(entryHbsData)
      res.render("singleentry", entryHbsData);
    });
  });
  
  router.get("/login", (req, res) => {
    if(req.session.logged_in) {
      return res.redirect("/profile")
    }
      res.render("login")
  })
  
  router.get("/logout", (req, res) => {
    if(req.session.logged_in) {
      return res.redirect("/login")
    }
      res.render("login")
  })
  
  
  router.get("/profile", (req, res) => {
      if(!req.session.logged_in) {
        return res.redirect("/login")
      }
      User.findByPk(req.session.user_id, {
        include:[entry, Comment]
      }).then(userData=>{
        const hbsData = userData.get({plain:true});
        console.log(hbsData)
        res.render("profile", hbsData)
      })
  })
  
  module.exports = router;
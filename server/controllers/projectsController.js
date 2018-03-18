const express = require('express');

const projectsController = {};

projectsController.index = (req, res) => { //- index is action
          const projects = [{
            title: 'Social Network',
            slug: 'https://repl.it/@stacksaj/facebook-clone',
            tags: ['html5', 'css3'],
            date: '12/24/17',
            img: '/img/fbscreen.png',
          },
          {
            title: 'Album Saved',
            slug: 'python',
            tags: ['html5', 'sass', 'javascript'],
            date: '12/24/17',
            img: '/img/onclickscreen.png',
          },
          {
            title: 'Pokedex clone',
            slug: 'ai',
            tags: ['jQuery', 'sass', 'Ajax', 'json'],
            date: '12/24/17',
            img: '/img/pokemondata.png',
          },
        ];
          var testingVar = process.env.DB_USERNAME;

          res.render('projects/index', {
            projects: projects, //- callback, pass down an object
            testingVar: testingVar, //- pass it down to view
          });
        };

projectsController.create = (req, res) => {
        res.render('projects/create');  };

projectsController.store = (req, res) => {
        res.send({
          saved: true,
        });  };

projectsController.show = (req, res) => {
        res.render('projects/show');  };

projectsController.edit = (req, res) => {
        res.render('projects/edit');  };

projectsController.update = (req, res) => {
  res.send({
    updated: true,
  });  };

projectsController.destroy = (req, res) => {
  res.send({
    deleted: true,
  });  };



module.exports = projectsController;

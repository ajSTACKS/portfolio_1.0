const express = require('express');

const projectsController = {};

projectsController.index = (req, res) => { //- index is action
          const projects = [{
              title: 'ebook E-commerce buy & sell',
              slug: 'https://ebook-app-aj.herokuapp.com/',
              tags: ['Ruby on Rails','HTML5', 'SASS'],
              date: '12/24/17',
              img: '/img/ebook.PNG',
            },{
              title: 'Restaurant',
              slug: 'https://phomimosawa.com',
              tags: ['PHP', 'CSS3', 'WordPress'],
              date: '12/24/17',
              img: '/img/phomimosa.PNG',
            },{
            title: 'Tour Guide',
            slug: 'https://baligocab.com',
            tags: ['Animation', 'Elementor', 'WordPress'],
            date: '12/24/17',
            img: '/img/baligocab.PNG',
          },{
            title: 'Travel Service',
            slug: 'http://skyplanet.herokuapp.com/',
            tags: ['HTML5', 'Materialized CSS', 'JQuery'],
            date: '12/24/17',
            img: '/img/skyplanet.PNG',
          },
          {
            title: 'On Click Notifications',
            slug: 'https://repl.it/@stacksaj/onclick-notifications',
            tags: ['HTML5', 'CSS3', 'javascript'],
            date: '12/24/17',
            img: '/img/onclickscreen.png',
          },
          {
            title: 'Pokedex clone',
            slug: 'https://codepen.io/ajSTACKS/project/editor/ARPKBz',
            tags: ['JQuery', 'SASS', 'AJAX', 'json'],
            date: '12/24/17',
            img: '/img/pokemondata.png',
          },{
          title: 'Facebook clone First-Project-EVER',
          slug: 'https://repl.it/@stacksaj/facebook-clone',
          tags: ['HTML5', 'CSS3'],
          date: '12/24/17',
          img: '/img/fbscreen.png',
        },
          {
            title: 'Realestate',
            slug: '/img/realestateapp.PNG',
            tags: ['HTML5', 'CSS3', 'Design'],
            date: '12/24/17',
            img: '/img/realestateapp.PNG',
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

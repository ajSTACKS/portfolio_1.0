const express = require('express');

const projectsController = {};

projectsController.index = (req, res) => { //- index is action
          const projects = [{
            title: 'Dashboard',
            slug: 'dashboard',
            tags: ['html', 'css', 'javascript', 'php'],
            date: '12/24/17',
            img: 'https://cdn.dribbble.com/users/13307/screenshots/1574202/fashion.jpg',
          },
          {
            title: 'Python',
            slug: 'python',
            tags: ['html', 'REST api', 'react', 'python'],
            date: '12/24/17',
            img: 'https://cdn.dribbble.com/users/412187/screenshots/2022118/landing.png',
          },
          {
            title: 'AI/ML',
            slug: 'ai',
            tags: ['ML', 'AI', 'js', 'Tensorflow'],
            date: '12/24/17',
            img: 'https://cdn.dribbble.com/users/1274655/screenshots/3178348/1233333_1x.jpg',
          },
          {
            title: 'Blog',
            slug: 'blog',
            tags: ['html5', 'css3', 'Angular', 'Node'],
            date: '12/24/17',
            img: 'https://cdn.dribbble.com/users/13307/screenshots/1574202/fashion.jpg',
          },
          {
            title: 'Backend',
            slug: 'backend',
            tags: ['JSON', 'XML', 'Linux', 'php'],
            date: '12/24/17',
            img: 'https://cdn.dribbble.com/users/14501/screenshots/1877706/upcoming-website.png',
          },
          {
            title: 'Dash',
            tags: ['VR', 'Heroku', 'PHP', 'MongoDB'],
            date: '12/24/17',
            img: 'https://cdn.dribbble.com/users/13307/screenshots/1574202/fashion.jpg',
          },
        ];

          res.render('projects/index', {
            projects: projects, //- callback, pass down an object
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

# Realtime Chat Application

![Video Chat](https://i.ibb.co/7WZRLD1/122.jpg)

## Introduction
This is a code repository for the corresponding video tutorial. 

In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.

Setup:
- run ```npm i && npm start``` for both client and server side to start the development server

## utube link
https://www.youtube.com/watch?v=oxFr7we3LC8

## Deploy Server on Heroku
https://dashboard.heroku.com/apps/react10-project-video-chat/deploy/heroku-git

Install the Heroku CLI
Download and install the Heroku CLI.

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

$ heroku login
Clone the repository
Use Git to clone react10-project-video-chat's source code to your local machine.

$ heroku git:clone -a react10-project-video-chat
$ cd react10-project-video-chat
Deploy your changes
Make some changes to the code you just cloned and deploy them to Heroku using Git.

$ git add .
$ git commit -am "make it better"
$ git push heroku master

--> Server running on https://react10-project-video-chat.herokuapp.com/

## Deploy client on Netlify

Update client/src/SocketContext.js
// const socket = io('http://localhost:5000');
const socket = io('https://react10-project-video-chat.herokuapp.com');

cd client
npm i
npm run build

Drag and drop your site output folder (=build) here:
https://app.netlify.com/teams/raphlev/sites

--> Client running on https://react10-project-video-chat.netlify.app/


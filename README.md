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

## deploy server heroku  
'process.env.PORT' will be populated automatically by heroku  
  
add Procfile :   
  web: node server.js  
  --> enable heroku to start the app as soon as the application is deployed  

Connect to Heroku and create new App: react10-project-video-chat  

Install the Heroku CLI  
Download and install the Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli  
npm install -g heroku  (not recommended method, make sure to use latest release of Node.js)  


heroku login 
heroku config 
cd ../server  
git init  
heroku git:remote -a react10-project-video-chat  
heroku config
git add .  
git commit -am "xx"  
heroku config  
heroku config:set DB_USER=xxxx  
heroku config:set DB_PASS=xxxx  
heroku config  
git push heroku master  
heroku logs --tail  

2021-05-07T11:10:36.000000+00:00 app[api]: Build succeeded
2021-05-07T11:10:39.079233+00:00 heroku[web.1]: Starting process with command `node index.js`
2021-05-07T11:10:42.417580+00:00 app[web.1]: Listening on 46257
2021-05-07T11:10:43.684618+00:00 heroku[web.1]: State changed from starting to up


--> Server URL: https://react10-project-video-chat.herokuapp.com/  

## Deploy client on Netlify

npm i  
npm run build  

Deploy from GIT  

Update Site Name to rlu-gdoc  

--> Client running on https://rlu-video-chat.netlify.app/

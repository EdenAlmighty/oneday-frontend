# oneday.com - pixel perfect, E2E clone of monday.com (React + Node.js). 

oneday is a full stack web application inspired by Monday that replicates the core functionalities of Monday.

[Live demo here](https://oneday-8mdx.onrender.com/ "oneday link")
## This project is built using React, Redux, NodeJS, ExpressJS, MongoDB, SASS, and Sockets.


For those of you who are already familliar with Monday, we added some intersting and unique [features](#application-features).
If you are not familliar with the App, read about it [here](#oneday-description).
And if you are tired and just want to see some images of the website, [scroll to the bottom...](#showcase)

![Main board image](https://res.cloudinary.com/die0jjugu/image/upload/v1716232803/oneday-img1_wjppq1.png)

___

### Table of Contents
- [oneday Description](#oneday-description)
- [Application Features](#application-features)
- [Technologies](#technologies)
- [Getting started](#getting-started)
- [Showcase](#showcase)

## oneday Description
oneday (Monday clone) is a work operating system and project management platform designed to help teams collaborate and manage tasks. It provides a visual and customizable interface for planning, tracking, and organizing work, allowing teams to streamline their workflows, communicate effectively, and stay organized. oneday is used by businesses and teams of various sizes to enhance project management and team collaboration.

## Application Features
- Create ***Boards*** and manage projects: Utilize ***Drag and Drop (D&D)*** functionality to seamlessly create, remove, and update groups and tasks.
- Create, edit and archive ***Task*** to the deepest level: Labels, Due date, Timeline, Members, Files, Activity log and more.
- ***Side Menu:*** - Filter boards by text, edit boards and switch between them.
- Users system, along with regular authentication which is encrypted and safe.
- Live updates with ***Web Sockets*** .
- Visualize your project using the and dashboard.
- Integration with ***Slack APi*** to notify when tasks are completed.
- Introducing ***Automations*** capable of accepting conditions and executing actions when the set conditions are met.
- And a lot more exciting things - check it out [Live demo here](https://oneday-8mdx.onrender.com/ "oneday link").


## Technologies

The technology stack we used was MERN - MongoDB, Express, React, Node.js.
The app uses webSockets to update the board in real-time.
The API calls to the backend are done with the REST API method , and we used middlewares to authenticate and authorize actions.

We have used many third side libraries for many goals, such as the cloudinary, monday-ui-style, D&D and more.
The layout and pixel-perfect were made with SASS (functions, mixins, variables). 

## Getting started

Head to the repository on top and clone the project or download the files.

```
git clone https://github.com/EdenAlmighty/oneday-frontend.git
git clone https://github.com/EdenAlmighty/backend-frontend.git
```

Enter the backend folder and make sure you have node_modules installed. After that we will initiate the server with 'npm start':

```
npm i 
npm start
```

You should get a console ouput that the server is up and running.
Enter the frontend folder and repeat the same process.

```
npm i 
npm run dev
```

You shuold get a console ouput that the server is up and running at localhost:5173.

That's it! The App should be opened automatically, enjoy!

## Showcase

### Homepage
The landing page in which the user can sign up / login, or press the call to action button to start demo if the are limited with time.

![Homepage image](https://res.cloudinary.com/die0jjugu/image/upload/v1716235552/oneday-img2_pdl0xn.png "Home-page")

### Workspace
All of the user's boards. Navigate between boards.

![Workspace image](https://res.cloudinary.com/die0jjugu/image/upload/v1716235554/oneday-img3_hp1zda.png "Workspace-page")

### Board
All the functionality that you have in Monday. D&D, live-updates, editing tasks to the deepest level, side-menu, editing board members and much more - just  [Check it out](https://oneday-8mdx.onrender.com/ "oneday link").

![Main board image](https://res.cloudinary.com/die0jjugu/image/upload/v1716232803/oneday-img1_wjppq1.png "Board-main-page")

### Signup
We created an e2e authentication flow, including encrypting the users' details, middlewears.

![Login image](https://res.cloudinary.com/die0jjugu/image/upload/v1716235549/oneday-img4_bzb2oi.png "login-page")


### Some mobile!
Just a taste of the mobile experience. We used different **mixins** and **conditional rendering**. 
<img src="https://res.cloudinary.com/die0jjugu/image/upload/v1716235549/oneday-img5_2_zjamax.png" width="25%" style="float: left;"/>


### Authors
 - [Eden Gilady](https://github.com/EdenAlmighty)
 - [Ran Sabban](https://github.com/RanSabban)
 - [Yahav Ganon](https://github.com/YahavGanon)

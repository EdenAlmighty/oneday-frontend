# oneday.com - pixel perfect, E2E clone of monday.com (React + Node.js). 

oneday is a full stack web application inspired by Monday that replicates the core functionalities of Monday.

[Live demo here](https://oneday-8mdx.onrender.com/ "oneday link")
## This project is built using React, Redux, NodeJS, ExpressJS, MongoDB, SASS, and Sockets.


For those of you who are already familliar with Monday, we added some intersting and unique [features](#application-features).
If you are not familliar with the App, read about it [here](#oneday-description).
And if you are tired and just want to see some images of the website, [scroll to the bottom...](#showcase)

![Main board image](/src/assets/img/onedayBoard.png "Board-main-page")

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
- Introducing ***Automations*** capable of accepting conditions and executing actions when the set conditions are met.
- And a lot more exciting things - check it out [Live demo here](https://oneday-8mdx.onrender.com/ "oneday link").


## Technologies

The technology stack we used was MERN - MongoDB, Express, React, Node.js.
The app uses webSockets to update the board in real-time.
The API calls to the backend are done with the REST API method , and we used middlewares to authenticate and authorize actions.

We have used many thirs side libraries for many goals, such as the cloudinary, monday-ui-style ,react-particles-js, D&D and more.
The layout and pixel-perfect were made with SASS (functions, mixins, variables). 

## Getting started

Head to the repository on top and clone the project or download the files.

```
git clone https://github.com/galbarcessat/oneday.git
git clone https://github.com/galbarcessat/oneday-backend.git
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

![Homepage image](src/assets/img/onedayHomePage.png "Home-page")

### Workspace
All of the user's boards. Navigate between boards.

![Workspace image](src/assets/img/onedayBoardIndex.png "Workspace-page")

### Board
All the functionality that you have in Monday. D&D, live-updates, editing tasks to the deepest level, side-menu, editing board members and much more - just  [Check it out](https://oneday-8mdx.onrender.com/ "oneday link").

![Main board image](/src/assets/img/onedayBoard.png "Board-main-page")

### Signup
We created an e2e authentication flow, including encrypting the users' details, middlewears.

![Login image](/src/assets/img/onedayLogin.png "login-page")

### Task details
Here, users can review task details, engage in a chat to allow members to leave comments on task progress, monitor the activity log, and attach files relevant to the task.
![Task details image](/src/assets/img/onedayTaskDetails.png "task-details")



### Some mobile!
Just a taste of the mobile experience. We used different **mixins** and **conditional rendering**. 
<img src="/src/assets/img/onedayHomeMobile.png" width="25%" style="float: left"/><img src="/src/assets/img/onedayBoardMobile.png" width="25%" style="float: left;"/><img src="/src/assets/img/onedayTaskDetailsMobile.png" width="25%" style="float: left;"/><img src="/src/assets/img/onedayDashboardMobile.png" width="25%" style="float: left;"/>


### Authors
 - [Eden Gilady](https://github.com/EdenAlmighty)
 - [Ran Sabban](https://github.com/RanSabban)
 - [Yahav Ganon](https://github.com/YahavGanon)

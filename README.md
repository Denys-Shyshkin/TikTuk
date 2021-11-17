# TikTuk :)

This project is a test task as a part of [Genesis](https://gen.tech) Front-End School competitive selection.

## In Brief

This project is a TikTok-like web application. The main goal is to display all data correctly. It consists of two pages: *Feed* - the list of posts from different users and *Profile* - given (or chosen) user info.

Main programming language - **TypeScript**.

List of major libraries that was used for development:
- [React](https://reactjs.org) for building user interfaces;
- [Material UI](https://mui.com/) for preconfigured and customizable React components;
- [React Router](https://reactrouter.com/) for client-side routing;
- [React Testing Library](https://testing-library.com) for unit and integration testing of React components;


## How to run

This Web Application is not hosted on the web, but you can run it on your local machine in the development mode.\
To do so, follow these steps:
1. Download the project to your local machine;
2. Open a terminal in the root folder of the project and run `npm install` or `yarn` (depending on your installed package manager) in order to download all required dependencies;
3. After all installations are complete, run `npm start` or `yarn start` in order to launch the application locally;
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser;

As a backend for this application RapidApi is used. In order for the application to work as it was intended you should provide it with a special key. To obtain this key (if already have one skip to step #4) follow these steps:
1. Register at [RapidApi](https://rapidapi.com/hub);
2. Follow this [link](https://rapidapi.com/premium-apis-premium-apis-default/api/tiktok33/) and under tab **Pricing** choose a suitable plan for you;
3. After that you should have available ***X-RapidAPI-Key*** at **Endpoints** tab, **Header Parameters** section;
4. Paste this key into file `src/api/constants.ts`.

<img width="470" alt="Screenshot 2021-11-17 at 11 03 25" src="https://user-images.githubusercontent.com/74503981/142169929-0bd6b041-6d50-4e1d-978b-3979b17e91ea.png">


**Have Fun!**



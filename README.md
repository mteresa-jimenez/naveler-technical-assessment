# Naveler Technical Assessment

This is an assessment for the selection process for Naveler. This project has been developed with **React, JavaScript, HTML5 and SASS**.

## DEMO

If you want to see the demo of this project deployed, you can visit the [Demo page](https://mteresa-jimenez.github.io/naveler-technical-assessment/#/ "Take a look").

## **DEVELOPMENT**

For the development of this project, this is the API needed:  http://dev.naveler.com:8007/api

When fetching the results of this API, a CORS error may appear. In order to avoid this problem in the production process and being able to use the data in the API, I have installed the Chrome extension "Allow CORS: Access-Control-Allow-Origin".

In the landing page, we can find three buttons which takes us to the three different sections in this website. We can navigate back to the landing page clicking in the "Naveler" logo in the header of each page.

> 1. **Latino country flags list**

To create the LatinoFlags compoments, first I have called the endpoint get_countries/ and fetched its result throught a GET method. Then, I have brought the data from the App component through "props" and filtered the needed data to render a list of the flags which have the "is_latino" boolean set to true.

For a responsive design, I have used Bootstrap Grid System.

> 2. **Login and display users data**

For this part of the exercide, I have called the endpoint login/ from the API through a POST method. It is necessary to login a username and a password to fetch the results from this endpoint. In order to do it, I have implemented the "FormData()" object, which simulates a form and allowed me to append two values ("username" and "password").

Before that, I tried two other different ways to login. However, in this case, the only successful way is the one used.

- By adding this to the fetch:
```
  headers: {
  "Content-type": "application/json",
  },
  body: JSON.stringify({
  username: "demo_front",
  password: "front_front12345",
  })
```

- Or adding this to the fetch:
```
  headers: {
  Authorization: "Basic " + btoa(username + ":" + password),
  }
 ```


In order to avoid errors when using the data in the UserData component due to asynchronism, I have previously selected the needed data in the "userCountry" attribute in the App component. When it is done in a lower component, such us UserData, the result is "undefined".

For a responsive design, I have used Bootstrap Grid System.

> 3. **Plot a graph**

First, I have selected the data from the get_countries/ endpoint that I am going to use to create a graph in which every country is a column and the value of each bar is the numeric part of the phone prefix.

To plot the graph, I have used the npm package "react-charts". This is the documentation: https://www.npmjs.com/package/react-charts

## **REACT APP COMPONENTS TREE**

```
src
 ├─ components
 |  ├─ App.js
 |  ├─ Footer.js
 |  ├─ Graph.js
 |  ├─ Header.js
 |  ├─ Landing.js
 |  ├─ LatinoFlags.js
 |  ├─ UserData.js
 |  └─ UserDataFlags.js
 |
 ├─ images
 |  └─ logo.png
 |
 ├─ services
 |  └─ api.js
 |
 ├─ styles
 |  ├─ App.scss
 |  ├─ Footer.scss
 |  ├─ Header.scss
 |  ├─ Landing.scss
 |  ├─ LatinoFlags.scss
 |  └─ UserData.scss
 |
 └─ index.js
```

---

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run docs`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---

⌨️  **by Teresa Jiménez**

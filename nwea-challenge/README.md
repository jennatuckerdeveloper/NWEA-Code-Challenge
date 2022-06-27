# NWEA Technical Code Challenge

This React app completes a coding challenge for NWEA.

The full instructions are included in `instructions.pdf` but will likely need to be opened outside of a code editor in a PDF reader (such as `Preview` on Mac).

## Specific Implementation And Reasoning

- This app uses React function components with hooks, specifically `useState` and `useEffect` rather than React class components. React previously recommended class components for stateful components and function components for stateless components. But the trend in React has been moving towards the use of function components with hooks and away from class components.

- This app uses Bootstrap styles, as the complexity added to the code should not be significant enough to distract from the focus of how the React components are composed and makes the example app much easier to quickly take in at a glance. The main goals were 1) to show the user what was clickable 2) to make the `ListGroup` component dynamic using grid.

- This app does not use TypeScript, as the developer was familiar with TypeScript and the general value of enforcing types in JavaScript (in this case with a strongly typed language) but not already proficient in using it.

- This app uses [`json-server`](https://www.npmjs.com/package/json-server) to deliver mock data, as this closely mirrors hitting backend endpoints without adding much complexity. This `README.md` includes a section on how to use a backup hardcoded version of the data instead of `json-server` to work with the React app.

## Run the application

Clone the GitHub repo to your local machine. You will need a recent version of `Node`.

Change into the directory `nwea-challenge`. This is an app made with `create-react-app`.

Inside the folder, at the same level as `package.json` run `npm install` to install dependencies.

Two scripts need to run to use the app:

Example data in `data.json` gets served using [`json-server`](https://www.npmjs.com/package/json-server).

Use the script `npm run server` to serve the data to `http://localhost:5000/data`.

In another terminal window, run `npm start` to run the React app in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## To run without `json-server`

In `src/services/httpService`:

Change import to `import backupData from '../backupData.json'`.

And `getCourses` return statement to `return backupData.data`.

## Interesting unexpected behavior that useEffect runs twice

[Explanation here](https://www.techiediaries.com/react-18-useeffect/#:~:text=If%20your%20application%20is%20acting,effect%20twice%20instead%20of%20once.), in React 18, useEffect gets called twice when in both strict mode and development mode.

### Run tests with script `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Create-React-App Also Includes Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

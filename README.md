# Contact Manager

* [Summary](#summary)
* [Project Structure](#project-structure)
* [Starting The App](#starting-the-app)
* [Testing](#testing)
* [Deploying Project](#build-project)

## Summary

Contact manager for listing contacts stored in an Aurora serverless database. 
The app was built with SailsJS framework. The user interface was built with ReactJS. 
The application is hosted on an aws ec2 instance.


## Project Structure
* The application is built with a SailsJs framework.
* The user interface is built using react.
* The build of the react application is stored in the assets directory of the sails application where it is served.
* The database used is AWS Aurora serveless.
* Dotenv is used to load the environment variables from the environment file `.env`.
* Automated tests are built into the application using Mocha,
* The application is hosted on an AWS EC2 instance running Ubuntu.
* Github serves as the central repository for the application.
* The ubuntu instance pulls the latest version of the application from github.
* The deployment process is automated using PM2.


## Setup
```shell
npm install
```


## Starting The App
Start the sails app using the following command:
```shell
npm run start
```
Run the following command to start the React UI application as a standalone:
```shell
npm run react-dev
```
To build the application for production:
```shell
npm run react-build
```


## Testing
* Tests are written using the [Mocha.js](https://mochajs.org/) library.
```shell
npm run test
```


## Deploying the Project
```shell
npm run deploy
```

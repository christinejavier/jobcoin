# Jobcoin

Jobcoin App

## Getting Set Up

I highly recommend running the application locally using Docker in order to avoid dealing with environment issues that may occur.
If running Docker is not possible, please follow the below instructions on running the server and client locally.
As a prerequisite to running the application, whether you use Docker or not, please follow the below instructions:

```
git clone git@github.com:christinejavier/jobcoin.git
cd jobcoin
```

### Running the application: Docker

You will need to [set up docker](https://docs.docker.com/get-docker/) before getting started.
Once you have Docker installed and running, please follow the below command:

```
(Make sure you are inside of the root of the jobcoin project)
docker-compose up --build
```

If the containers were successfully built, you should see this in the logs of your terminal:

```
client_1  | You can now view jobcoin in the browser.
client_1  |
client_1  |   Local:            http://localhost:3000
client_1  |   On Your Network:  http://172.18.0.3:3000
```

You can now browse the app by going to `http://localhost:3000` in your browser. Enjoy!

### Running the application: Start the client and server locally

To run the jobcoin application, you will need to run a server and client.
The server will proxy requests to Jobcoin APIs from the client, which contains all UI code.
You will need to run both simultaneaously to see full functionality of the app.
Please use Node version 14 to run the project. If you use nvm, this can be accomplished with:

```
nvm install 14
nvm use 14
```

#### How to run the server:

Open one terminal window. Then, from inside the project root, run the following commands:

```
cd server
npm i
npm run server
```

#### How to run the client:

In another terminal window, starting from inside the project root, go to the client directory:

```
cd client
```

There is default configuration for docker in `client/package.json` that you will need to update.
Line 5 of this package configuration by default says: `"proxy": "http://server:1234"`.
Update this line so that it says: `"proxy": "http://localhost:1234"`.

Next, run the below commands:

```
npm i
npm run client
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Creating a production build

The below commands bundle the app for production. The bundle is added to the `build` folder using Webpack.

```
cd client
npm i
npm run build
```

## Common Problems + Solutions

1. `Cannot find module 'typescript'`

- Try running the following: `npm install -g typescript` AND/OR `npm link typescript`

2. `Error: Can't resolve 'styled-components'`

- Try running the following:
  `npm i styled-components`

3. For docker-related issues, please try running the following:

```
docker system prune
Are you sure you want to continue? -> yes
docker-compose up --build
```

## Features

The application has two features: Login and Dashboard.

1. Login is where the user is able to sign in with their address, which in its current state, can be any string. Currently, there is not authentication mechanism enabled.
2. Dashboard is a feature that contains three core sections: Balance, History, and the Send Jobcoin Form. The Balance section simply displays the user's overall balance of Jobcoins. The History section renders a line chart that displays the user's Jobcoin balance over time. Lastly, the Send Jobcoin Form is where the user is able to send Jobcoin to other users.

## Architectural Decisions

1. Isolated Dependencies

   There are many lessons to take away from [The Twelve Factor App Methodlogy](https://12factor.net/), one of which is having isolated dependencies.
   Ideally, the `crypto` directory, which contains all of the required features, will be a standalone package with its own server configuration. This idea will allow for further extensibility as more features besides Login and Dashboard get added. The goal of this repository, and the file structure, is to act as a monorepo, containing multiple applications that can be deployed individually, while having the ability to share code.
   My goal with isolating dependencies was laid out in the file structure, whereby client and server code is separated, and individual features are assigned to their own directories. Please see the "File Structure" section for specifities.

2. React/Typescript

   I opted to use React because it provides a robust and flexible ecosystem with access to many tools that allowed for me to develop with speed and without friction. For example, I used [create-react-app](https://create-react-app.dev/) to bootstrap all my needs for this project. It is a library that I am most familiar with in my professional career, and I believe I can provide a lot of value in my experience here.
   I opted for Typescript for two reasons: 1. The built in type-checking provides me with a strong sense of assurance that my app doesn't contain hard-to-find bugs. 2. My discussion with my previous interviewer at Gemini, encouraged me to do this challenge in Typescript, as it is used at Gemini.
   In my professional experience, I code mostly in plain ES6, but I have spent a lot of time working on another Typescript codebase at N26.

3. Styled-components

   I have no prior experience with styled-components, but I opted for it because my last interviewer at Gemini mentioned they use it, and I wanted this chance to learn more about it. In this same way, I opted to leverage the Grommet library due to positive results in its usage of styled-components while maintaining accessibility standards. Professionally, I have extensive experience writing JS-in-CSS code.

## File structure: Client

```
├── src
│   ├── core
│   │   ├── components // Shared/reusable components
│   ├── crypto
│   │   ├── api // APIs that are called to the "crypto" server. Serves request so Login and Dashboard features
│   │   ├── features
│   │       ├── dashboard // Contains `Balance`, `History`, and the `Send Jobcoin Form`
│   │       |   ├── components // Components unique to Dashboard (should not be used elsewhere)
│   │       |   ├── contexts // Shared contexts to avoid prop drilling
│   │       |   ├── helpers // Helpers unique to Dashboard (should not be used elsewhere)
│   │       |   ├── pages // All the pages used within the Dashboard feature
│   │       ├── login
│   │           ├── components // Components unique to Login (should not be used elsewhere)
│   │           ├── pages // All the pages used within the Login feature
│   ├── App.tsx // lists routes of all the Jobcoin pages
│   ├── index.js // Entryway into client application
├── public // Assets deployed for production
│   ├── bundle.js
│   ├── index.html
│   ├── etc..
├── .prettierrc // Rules for formatting
├── craco.config.js // Aids in bundling for create-react-app
├── Dockerfile // Instructions for container-izing the client app
├── package.json
├── package-lock.json
├── tsconfig.json // Typescript configuration
├── webpack.config.js // Bundling rules
├── prettier.ignore
└── .gitignore
```

## File structure: Server

```
├── src
│   ├── requests // API resolutions to jobcoin services
│   ├── index.js // Express set up
├── Dockerfile // Instructions for container-izing the server app
├── package.json
└── package-lock.json
```

## Future Roadmap

There are many features I would like to add to this application, but I wanted to restrict the time spent in development to a reasonable amount as described in the challenge prompt.

Here are things I would like to work on if given more time:

1. 100% Test Coverage

   - I like Kent C. Dodd's recommendation in the article about the [Testing Tropy](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications), where it is recommended to have mostly Integration Tests. I wanted to provide some unit and integration tests to showcase my ability to do them, however, I ran out of time for this particular challenge. That being said, I believe it is important to add unit, integration, and end-to-end tests. I would've chosen Cypress, jest, and enzyme as I believe those tools have worked wonders in catching production bugs for me in the past.
   - Manual testing using VoiceOver to ensure that accessibility standards are met.

2. Security

   - The login page should have more robust authorization logic. I would make this a priority.

3. Accessibility

   - I would run a more extensive audit to see if [WCAG standards](https://www.w3.org/WAI/standards-guidelines/wcag/) are met
   - Add the ability for the user to configure animation speeds for those with cognitive disabilities.
   - Ensure that the application works well without Javascript enabled on the client.

4. Better User Experience

   - Add localized translations so that we can serve more people than those who speak only English.
   - Provide different preferences for individual needs. For example, I'd like to add features that provide the ability to select dark mode.
   - Add delightful little touches to the user experience. For example, the onSuccess handler when submitting a transaction can trigger a small animation indicating success.

5. Improved Developer Experience

   - Using aliases instead of relative paths for imports. I would like to have `@core/components` and `@crypto/features/dashboard` as an example.
   - Research different package managers like `pnpm` or `yarn` that would allow for faster or cleaner dependency resolution.
   - Adding a `Documentation` app, which would house all the information in this document. It would be a continuously updated directory as developers add new features, RFCs, new tools, etc.

6. Tech Stack

   - I would have liked to add Apollo Client and GraphQL as I believe this is a good choice for multiple developers working in one monorepository with multiple APIs to consume. Also, due to its popularity and modernity, it would make this a more desireable codebase for developers to learn from.
   - I would like to make the Webpack configuration more extensible, and look into plugins that would aid in code-splitting and tree-shaking.

7. Reducing Code Smells

   - Adding eslint rules would be nice to enforce a strict code style.
   - Providing environment configurations so that developers do not work on just one branch as code is pushed to production. I would opt for three branches, "development", "staging", and "production", leveraging .env variables for Node to read from.

8. Performance Improvements

   - I opted to use Charts.js for the visualization on history of transactions. Looking at webpack analyzer, I can see that it is the heaviest part of the bundle. I would've liked to integrate a more light-weight, cooler-looking chart.

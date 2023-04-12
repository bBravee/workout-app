# React Native Workout App
My workout-app is a mobile application built with React Native that aims to help people with their training routines. The app allows users to choose a body part they want to train, select from a list of exercises generated based on the chosen body part, filter exercises by difficulty, add exercises to their favorites, and view complete instructions on how to perform the selected exercise.

## Getting Started
To get started with workout-app on your computer, follow these steps:

## Prerequisites
- Node.js installed on your computer
- Expo Go app installed on your mobile device

## Instalation
### 1. Clone the workout-app repository from GitHub to your local machine.
```
git clone https://github.com/bBravee/workout-app.git
```

### 2. Change directory to the cloned project
```
cd workout-app
```

### 3. Install dependencies using npm or yarn
```
npm install
```

or

```
yarn install
```
### 4. Paste free API key
Sign up for a free API key on the API Ninjas website (https://api-ninjas.com/), and get your key (https://api-ninjas.com/profile). Once you have your API key, open the **screens/ExercisesScreen.js** and **screens/FavoritesScreen.js** files and replace the apiKey const with your API key.
```
const apiKey = 'YOUR_API_KEY_HERE';
```
## Usage
To use workout-app on your mobile device using Expo Go, follow these steps:

### 5. Start the development server
```
npm start
```
or

```
yarn start
```
### 6. Run app on your mobile device
Scan the QR code displayed in the terminal or in the Expo DevTools using the Expo Go app on your mobile device.

The app will be loaded on your mobile device, and you can now interact with it to choose body parts, select exercises, and view instructions.

## API Endpoints
workout-app utilizes the following API endpoints provided by https://api.api-ninjas.com to fetch exercise data
- Fetch exercises by muscle: https://api.api-ninjas.com/v1/exercises?muscle={bodyPartName}
- Fetch exercises by name: https://api.api-ninjas.com/v1/exercises?name={exerciseName}

## Feedback
Raising issues and giving feedback about the app are always welcome!

## ScreenShots
![Preview Screenshoot1](/screenshots/preview1.png) 

![Preview Screenshoot2](/screenshots/preview2.png)

![Preview Screenshoot](/screenshots/preview3.png)

![Preview Screenshoot](/screenshots/preview4.png)

![Preview Screenshoot](/screenshots/preview5.png)

![Preview Screenshoot](/screenshots/preview6.png)

![Preview Screenshoot](/screenshots/preview7.png)


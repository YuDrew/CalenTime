# CalenTime 📅 ⏱
 Timetracking using the Google Calendar API and Firebase. If you schedule your life out in Google Calendar, let's find out how much of that plan you actually follow...
## Current Functionality 🛠
* Basic formatting.
* Connected app to Firebase, though it's not used yet.
* Time elapsed is tracked and updates per second, though it doesn't save to Firebase yet
* You can navigate between pages 🎉
## Things to figure out 🔬
* Break up components into separate files for readability
* Set up Google Sign In and OAuth
* Connect to Google Calendar API to populate event information (titles, start times, and end times)
* Set up Firebase Realtime Database to track time elapsed
* Create detail views to display performance on each event (comparing planned activity to true activity)
* Create a tab that displays overall performance by day, week, and month
## References (mainly for myself) 📖
* Firebase Setup: https://rnfirebase.io/
* gitignore Template: https://github.com/facebook/react-native/blob/master/template/_gitignore
* React Native Docs: https://reactnative.dev/
* Calendar Auth: https://developers.google.com/calendar/auth
* Google OAuth: https://developers.google.com/identity/protocols/oauth2/
* Moment (DateTime Parsing): https://momentjs.com/docs/
* Google API for Node: https://github.com/googleapis/google-api-nodejs-client
* Everything Navigation: https://reactnavigation.org/docs/getting-started/
* Organizing the RN App: https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/
* Organizing Styles: https://thoughtbot.com/blog/structure-for-styling-in-react-native
* How to export: https://medium.com/dailyjs/javascript-module-cheatsheet-7bd474f1d829
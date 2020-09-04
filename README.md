# CalenTime
 Timetracking using the Google Calendar API and Firebase.
## Current Functionality
* Basic formatting.
* Connected app to Firebase, though it's not used yet.
* Time elapsed is tracked and updates per second, though it doesn't save to firebase yet
## To-Dos
* Break up components into separate files for readability
* Set up Google Sign In and OAuth
* Connect to Google Calendar API to populate event information (titles, start times, and end times)
* Set up Firebase Realtime Database to track time elapsed
* Create detail views to track performance on each event (comparing planned activity to true activity)
* Create a tab that compiles overall performance by day, week, and month
## References (mainly for myself)
* Firebase Setup: https://rnfirebase.io/
* gitignore Template: https://github.com/facebook/react-native/blob/master/template/_gitignore
* React Native Docs: https://reactnative.dev/
* Calendar Auth: https://developers.google.com/calendar/auth
* Google OAuth: https://developers.google.com/identity/protocols/oauth2/
* Moment (DateTime Parsing): https://momentjs.com/docs/
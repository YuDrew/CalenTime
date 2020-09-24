import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import {EventDetailScreen, HomeScreen} from './src/screens';
/*
//Google SignIn Setup
GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
  webClientId: '995886758585-ntrdidt3qpre6vq42fcfma5emlpj7b0o.apps.googleusercontent.com',
});
*/
//Navigation Setup
const Stack = createStackNavigator();

//const {google} = require('googleapis');
//const calendar = google.calendar('v3');

const App = () => {
  /*
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  //Handle user state changes
  function onAuthStateChanged(user){
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  GoogleSignin.configure({
    webClientId: '995886758585-ntrdidt3qpre6vq42fcfma5emlpj7b0o.apps.googleusercontent.com'
  });
  
  function GoogleSignIn() {
    return (
      <Button
        title="Google Sign-In"
        onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
      />
    );
  }
  
  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  if (!user){
    return(
      <SafeAreaView>
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn}
          disabled={this.state.isSigninInProgress} 
        />
      </SafeAreaView>
    )
  }

  */
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          option={{title: 'Welcome'}}
        />
        <Stack.Screen name="Event" component={EventDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

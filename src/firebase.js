import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA8mbY0ELiXlI7HGLm5AmsiN9QO9qTwRP0",
  authDomain: "senactions.firebaseapp.com",
  databaseURL: "https://senactions.firebaseio.com",
  projectId: "senactions",
  storageBucket: "senactions.appspot.com",
  messagingSenderId: "798734629726",
  appId: "1:798734629726:web:a213e3fc7c53368d14edcf"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
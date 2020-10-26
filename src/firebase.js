import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBGvvGdRQhIghFbZLzSeyQL0RnBXQCUjcw",
    authDomain: "todoist-74798.firebaseapp.com",
    databaseURL: "https://todoist-74798.firebaseio.com",
    projectId: "todoist-74798",
    storageBucket: "todoist-74798.appspot.com",
    messagingSenderId: "881687981524",
    appId: "1:881687981524:web:f4ba077a9a7fb28157ba41",
    measurementId: "G-FETVHGEBQ4"
});

export { firebaseConfig as firebase };
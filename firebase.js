import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBzMOhq3UsPRn8ktIUA4uPAoYJ-gcexw0A",
    authDomain: "yody-337503.firebaseapp.com",
    projectId: "yody-337503",
    storageBucket: "yody-337503.appspot.com",
    messagingSenderId: "29925849028",
    appId: "1:29925849028:web:bb6a1f794c8d1651621691",
    measurementId: "G-14Z33LLNXH"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth, firebase };
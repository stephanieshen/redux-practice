import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD42lhCgxE55bIY6q_khd9yx9-zZypvy5Y",
    authDomain: "projects-app-cd9bd.firebaseapp.com",
    databaseURL: "https://projects-app-cd9bd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "projects-app-cd9bd",
    storageBucket: "projects-app-cd9bd.appspot.com",
    messagingSenderId: "482815512509",
    appId: "1:482815512509:web:8109ecae91b3ef51194cd4",
    measurementId: "G-ET6RZWLDDW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();


export default storage;
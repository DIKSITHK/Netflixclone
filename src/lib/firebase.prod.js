import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const firebase = Firebase.initializeApp(config);

export { firebase };

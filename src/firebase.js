import firebase from 'firebase';

let firebaseApp = firebase.initializeApp({
            apiKey: "AIzaSyBy6_iPHXvUS6wPhBayXzbnAcR7YPgHEyE",
            authDomain: "akbarov-dev.firebaseapp.com",
            projectId: "akbarov-dev",
            storageBucket: "akbarov-dev.appspot.com",
            messagingSenderId: "307349919382",
            appId: "1:307349919382:web:23db676e1fba3b86d014b7",
            measurementId: "G-69HXF2K78L"
})
let db = firebaseApp.firestore()

export { db }
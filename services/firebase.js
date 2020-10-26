import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAdkMDyMdX1TmsObwBU-EjLrnids77iiQM",
    authDomain: "enjambre-7a952.firebaseapp.com",
    databaseURL: "https://enjambre-7a952.firebaseio.com",
    projectId: "enjambre-7a952",
    storageBucket: "enjambre-7a952.appspot.com",
    messagingSenderId: "295251234953",
    appId: "1:295251234953:web:a27f4e7825a3b4acb93658"
  };

  class Firebase{
      constructor(){
          firebase.initializeApp(firebaseConfig);
          this.auth = firebase.auth();
      }

      login = (email, password) => {
        return this.auth.signInWithEmailAndPassword(email, password)
      }

      createUser = async (name, email, password) => {
        await this.auth.createUserWithEmailAndPassword(email, password)
        this.auth.currentUser.updateProfile({
            displayName: name,
        })
      }

      getUser = () =>{
          return this.auth.currentUser.displayName
      }
  }

  const firebaseService = new Firebase;

  export default firebaseService;
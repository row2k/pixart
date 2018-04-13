// import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCAHbNIoPLKYH9sr_S_wlOhYJ87azO_3g0",
  authDomain: "pixart-65074.firebaseapp.com",
  databaseURL: "https://pixart-65074.firebaseio.com",
  projectId: "pixart-65074",
  storageBucket: "pixart-65074.appspot.com",
  messagingSenderId: "894258351728"
}

const base = firebase.initializeApp(config);

export default base;

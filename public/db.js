// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC99HQSAiwotQG1ut5xzf7YwvcknIlq-dY",
  authDomain: "stonk-4c9e6.firebaseapp.com",
  databaseURL: "https://stonk-4c9e6-default-rtdb.firebaseio.com",
  projectId: "stonk-4c9e6",
  storageBucket: "stonk-4c9e6.appspot.com",
  messagingSenderId: "185231998503",
  appId: "1:185231998503:web:39f9114282faefca829802",
  measurementId: "G-JQQ0YZXE32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function readData() {
    const querySnapshot = await getDocs(collection(db, "exercise"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  }
  
readData();
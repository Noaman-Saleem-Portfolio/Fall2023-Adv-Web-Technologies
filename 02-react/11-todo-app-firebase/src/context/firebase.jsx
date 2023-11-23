import { createContext, useContext } from "react";


const FirebaseContext = createContext(null)

export const useFirebaseContext = () => useContext(FirebaseContext)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
// import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMHaMUHDvwcM9pSANMO4conKVFKZsH66A",
  authDomain: "to-do-app-a45a9.firebaseapp.com",
  projectId: "to-do-app-a45a9",
  storageBucket: "to-do-app-a45a9.appspot.com",
  messagingSenderId: "295749311871",
  appId: "1:295749311871:web:30f070b6a207b76a270e4a",
  measurementId: "G-YBM6G86FNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const FirebaseContextProvider =  ({children}) => {
    <FirebaseContext.Provider value={app}>
        {children}
    </FirebaseContext.Provider>
}
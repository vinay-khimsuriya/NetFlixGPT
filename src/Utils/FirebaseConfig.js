import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC_KETSiAKGqsp7d3p_DLAQO2WrwbYS9nE",
  authDomain: "netflix-gpt-56ef5.firebaseapp.com",
  projectId: "netflix-gpt-56ef5",
  storageBucket: "netflix-gpt-56ef5.appspot.com",
  messagingSenderId: "876522997863",
  appId: "1:876522997863:web:40d50324ea6aac95ddecc2",
  measurementId: "G-93G0M84QW4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyC_KETSiAKGqsp7d3p_DLAQO2WrwbYS9nE",
//   authDomain: "netflix-gpt-56ef5.firebaseapp.com",
//   projectId: "netflix-gpt-56ef5",
//   storageBucket: "netflix-gpt-56ef5.appspot.com",
//   messagingSenderId: "876522997863",
//   appId: "1:876522997863:web:40d50324ea6aac95ddecc2",
//   measurementId: "G-93G0M84QW4",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default app;

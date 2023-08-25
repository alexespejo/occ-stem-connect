import {
 getAuth,
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 onAuthStateChanged,
} from "firebase/auth";

export const createUser = async (email: string, password: string) => {
 const auth = getAuth();
 const credentials = await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   // Signed in
   const user = userCredential.user;
   // ...
  })
  .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   // ..
  });
 return credentials;
};

export const signInUser = async (email: string, password: string) => {
 const auth = getAuth();
 const credentials = await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   // Signed in
   const user = userCredential.user;
   return user;
  })
  .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
  });

 return credentials;
};

export const initUser = async () => {
 const auth = getAuth();
 onAuthStateChanged(auth, (user) => {
  if (user) {
   // User is signed in, see docs for a list of available properties
   // https://firebase.google.com/docs/reference/js/auth.user
   const uid = user.uid;
   console.log(user);
  } else {
   // User is signed out
   // ...
  }
 });
};

export const signOutUser = async () => {
 const auth = getAuth();
 const res = await auth.signOut();
 console.log("sign out", res);
};
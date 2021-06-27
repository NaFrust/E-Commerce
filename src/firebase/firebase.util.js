import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAZuc0tDp3AG4VIAxsqlBPnClZfx3mTOG8",
    authDomain: "tiendaprueba-23a10.firebaseapp.com",
    projectId: "tiendaprueba-23a10",
    storageBucket: "tiendaprueba-23a10.appspot.com",
    messagingSenderId: "306816788094",
    appId: "1:306816788094:web:606894f24a085277151a2f",
    measurementId: "G-Z0FKF9YPBJ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log("error creando usuario", error.message)
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth =  firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
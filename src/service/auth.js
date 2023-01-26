import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { app } from './firebase';

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function onAuthChange(onUserChange) {
  onAuthStateChanged(auth, (user) => onUserChange(user));
}

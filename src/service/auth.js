import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';
import { app } from './firebase';

const auth = getAuth(app);
const database = getDatabase(app);
const provider = new GoogleAuthProvider();

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function onAuthChange(onUserChange) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    onUserChange(updatedUser);
  });
}

// async function adminUser(user) {
//   return onValue(ref(database, 'admins'), (snapshot) => {
//     const data = snapshot.val();
//     if (data === user.uid) {
//       return { ...user, isAdmin: true };
//     }
//     return user;
//   });
// }
async function adminUser(user) {
  return get(ref(database, 'admins')) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        //admins는 배열로 되어 있음
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}

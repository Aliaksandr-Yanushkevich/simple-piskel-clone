import firebase from 'firebase/app';
import 'firebase/auth';

export async function signOut() {
  await firebase.auth().signOut();
}

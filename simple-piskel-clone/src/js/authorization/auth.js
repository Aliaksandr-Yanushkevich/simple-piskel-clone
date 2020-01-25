import firebase from 'firebase/app';
import 'firebase/auth';

export function auth() {
  // Initialize Firebase
  const firebaseConfig = {
    apiKey: 'AIzaSyAn6-OZYkcEPKrgzbr5jS1hMdCpVDF1rdw',
    authDomain: 'simple-piskel-clone-a9803.firebaseapp.com',
    databaseURL: 'https://simple-piskel-clone-a9803.firebaseio.com',
    projectId: 'simple-piskel-clone-a9803',
    storageBucket: 'simple-piskel-clone-a9803.appspot.com',
    messagingSenderId: '865542291103',
    appId: '1:865542291103:web:e8ec94e023e9f772d4acaa',
    measurementId: 'G-VCL487YXK0',
  };
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      window.user = user;
      document.querySelector('.user-ico').style.backgroundImage = `url(${user.photoURL})`;
      document.querySelector('.user-name').textContent = user.displayName;
      document.querySelector('#sign-out').style.display = 'flex';
      document.querySelector('#sign-in').style.display = 'none';
    } else {
      window.user = null;
      document.querySelector('.user-name').textContent = '';
      document.querySelector('#sign-in').style.display = 'flex';
      document.querySelector('#sign-out').style.display = 'none';
    }
  });
}

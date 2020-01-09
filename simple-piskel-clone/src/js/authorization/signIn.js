export async function signIn() {
    // sign in/sign out
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    const result = await firebase.auth().signInWithPopup(provider);

    // This gives you a Google Access Token. You can use it to access the Google API.
    // The signed-in user info.
    var user = result.user;
    document.querySelector('.user-ico').style.backgroundImage = `url(${user.photoURL})`;
    document.querySelector('.user-name').textContent = result.additionalUserInfo.profile.name;
    document.querySelector('#sign-out').style.display = 'flex';
    document.querySelector('#sign-in').style.display = 'none';
}
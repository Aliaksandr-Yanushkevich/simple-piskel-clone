export async function signOut() {
    await firebase.auth().signOut();
}
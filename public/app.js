document.addEventListener("DOMContentLoaded", event =>{
    const app = firebase.app();
    console.log(app);
    const db = getFirestore(app);
});

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
            .then(result =>{
                const user = result.user;
                document.write(`Hello ${user.displayName}`);
                console.log(user);
            })
            .catch(console.log)
};

async function readData() {
    const querySnapshot = await getDocs(collection(db, "exercise"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  }
  
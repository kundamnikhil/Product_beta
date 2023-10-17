const firebaseConfig = {
    apiKey: "AIzaSyBHy9klyM9x08JL9D01c_anaO7Lg_8l_eY",
    authDomain: "product-beta-d831a.firebaseapp.com",
    databaseURL: "https://product-beta-d831a-default-rtdb.firebaseio.com",
    projectId: "product-beta-d831a",
    storageBucket: "product-beta-d831a.appspot.com",
    messagingSenderId: "707141456549",
    appId: "1:707141456549:web:1b2da2788adc83730fb34c",
    measurementId: "G-NDE86TJH6H"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}
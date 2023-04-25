
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyDohl1s35drFodA9y6JiO8fEVmn6a7bxHI",
  authDomain: "chat3-b760f.firebaseapp.com",
  databaseURL: "https://chat3-b760f-default-rtdb.firebaseio.com",
  projectId: "chat3-b760f",
  storageBucket: "chat3-b760f.appspot.com",
  messagingSenderId: "926184332475",
  appId: "1:926184332475:web:e40a95e82b7ac39ad01d9e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");
  roomName = localStorage.getItem("roomName");



function enviar(){
 var mensagem=document.getElementById("msg").value;
 firebase.database().ref(roomName).push({
  name:userName,
  message:mensagem,
  like:0
 });
 document.getElementById("msg").value="";
}

function getData() {  firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  childdata  = childSnapshot.val();

       
      
    });
  });

}

getData();



function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}


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
  if(childKey!="purpose"){
    idfirebase=childKey;
    var dado=childdata;

    var nomeuser=dado["name"];
    var messangemuser=dado["message"];
    var likeuser=dado["like"];
   nometag="<h4>"+nomeuser+"<img class='user_tick' src='tick.png' ></h4>";
  mensagemtag="<h4 class='message_h4'>"+messangemuser+"</h4>";
  tagbutton="<button id='"+idfirebase+"' value='"+likeuser+"' onclick='atualizalike(this.id)'";
  spantag="<span>like:"+like+" </span> </button> <hr>" ;
  var linha=nometag+mensagemtag+tagbutton+spantag;
  document.getElementById("output").innerHTML+=linha;
}
});
  });

}

getData();

function atualizalike(menssagenid){
  var idbutton=menssagenid;
   var likes=document.getElementById(idbutton).value;
   var soumalika=Number(likes)+1;
   firebase.database().ref(roomName).child(menssagenid).update({
    like:soumalika
   });

  
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}

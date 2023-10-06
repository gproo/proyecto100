const firebaseConfig = {
      apiKey: "AIzaSyCrQUZoRZQVpeumVcxEEvLyaORYrsFxvNc",
      authDomain: "clase-100-dd10a.firebaseapp.com",
      projectId: "clase-100-dd10a",
      storageBucket: "clase-100-dd10a.appspot.com",
      messagingSenderId: "27635576483",
      appId: "1:27635576483:web:1d0e51b3684a819b065916"
    };
    
    
    const app =  firebase.initializeApp(firebaseConfig);
//AGREGA TUS ENLACES DE FIREBASE AQUÍ

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código

      //Finaliza el código
      });});}
getData();

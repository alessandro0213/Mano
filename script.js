// Inicializar Firebase (asegúrate de configurar tu propia base de datos en Firebase)
var firebaseConfig = {
    apiKey: "tu-api-key",
    authDomain: "tu-auth-domain",
    projectId: "tu-project-id",
    storageBucket: "tu-storage-bucket",
    messagingSenderId: "tu-messaging-sender-id",
    appId: "tu-app-id"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Obtener referencia a la base de datos
  var database = firebase.database();
  
  // Función para registrar la respuesta en tiempo real
  function responder(respuesta) {
    var timestamp = new Date().toISOString();
  
    // Guardar la respuesta en la base de datos
    database.ref('respuestas/' + timestamp).set({
      respuesta: respuesta
    });
  
    alert('Has respondido: ' + respuesta);
  }
  
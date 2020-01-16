import openSocket from 'socket.io-client';

const  socket = openSocket('http://localhost:5000');

function subscribeToTimer(cb) {
  
  socket.on('reply', (data) => {
    console.log("entro");
    console.log(data);
    cb(data);
  })//timestamp => cb(null, timestamp)); //Se ejecuta al recibir un "mensaje" de tipo timer 
  
  socket.emit('notice', "prueba"); //Envia un "mensaje" a el servidor de tipo suscribeToTimer
}

export { subscribeToTimer };
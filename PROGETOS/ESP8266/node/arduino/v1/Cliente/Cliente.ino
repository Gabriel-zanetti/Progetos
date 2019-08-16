#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <SocketIoClient.h>

#define USE_SERIAL Serial

ESP8266WiFiMulti WiFiMulti;
SocketIoClient webSocket;

void event(const char * payload, size_t length) {
  USE_SERIAL.printf("got message: %s\n", payload);
  comandos(payload);

 }

void setup() {
    
    USE_SERIAL.begin(115200);

    USE_SERIAL.setDebugOutput(true);

    USE_SERIAL.println();
    USE_SERIAL.println();
    USE_SERIAL.println();

      for(uint8_t t = 4; t > 0; t--) {
          USE_SERIAL.printf("[SETUP] BOOT WAIT %d...\n", t);
          USE_SERIAL.flush();
          delay(1000);
      }

    WiFiMulti.addAP("gabriel", "gabrielzanetti");

    while(WiFiMulti.run() != WL_CONNECTED) {
        delay(100);
    }

    webSocket.on("a@a", event);
    webSocket.begin("192.168.1.127", 80, "/socket.io/?transport=websocket");
       
    // use HTTP Basic Authorization this is optional remove if not needed
    //webSocket.setAuthorization("username", "password");
}

void loop() {
    webSocket.loop(); 
}


void comandos(const char * payload){
 String g = String(payload);
   if(g.indexOf("ligar")&&g.indexOf("desligar")){
     webSocket.emit("EnviarCliente", "{\"user\":\"g@g\",\"comando\":\"comandoInvalido\"}");
  }
   if(g.equals("ligar")){
     webSocket.emit("EnviarCliente", "{\"user\":\"g@g\",\"comando\":\"ligar\"}");
  }
   if(g.equals("desligar")){
     webSocket.emit("EnviarCliente", "{\"user\":\"g@g\",\"comando\":\"desligado\"}");
  }
 }

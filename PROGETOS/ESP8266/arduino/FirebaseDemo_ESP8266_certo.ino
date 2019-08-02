  //
  // Copyright 2015 Google Inc.
  //
  // Licensed under the Apache License, Version 2.0 (the "License");
  // you may not use this file except in compliance with the License.
  // You may obtain a copy of the License at
  //
  //     http://www.apache.org/licenses/LICENSE-2.0
  //
  // Unless required by applicable law or agreed to in writing, software
  // distributed under the License is distributed on an "AS IS" BASIS,
  // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  // See the License for the specific language governing permissions and
  // limitations under the License.
  //
  
  // FirebaseDemo_ESP8266 is a sample that demo the different functions
  // of the FirebaseArduino API.
  
  #include <ESP8266WiFi.h>
  #include <FirebaseArduino.h>
  
  // Set these to run example.
  #define FIREBASE_HOST "arduino-95757.firebaseio.com"
  #define FIREBASE_AUTH "8i33myKUOQz5hBsStipgbG5PTVUKfPp40N7HHNzK"
  #define WIFI_SSID "TATIANA"
  #define WIFI_PASSWORD "tatiana2"
  boolean reler1 = false;
  boolean reler2 = false;
  boolean statusReler1 = false;
  boolean statusReler2 = false;
  void setup() {
      pinMode(12,OUTPUT);
      digitalWrite(12,HIGH);
        pinMode(14,OUTPUT);
        digitalWrite(14,HIGH);
    Serial.begin(9600);
  
    // connect to wifi.
    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    Serial.print("connecting");
    while (WiFi.status() != WL_CONNECTED) {
      Serial.print(".");
      delay(500);
    }
    Serial.println();
    Serial.print("connected: ");
    Serial.println(WiFi.localIP());
    
    Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  }
  
  void loop() {
   //reler 1
  statusReler1 = Firebase.getBool("rele1");
  if (Firebase.failed()) {
        Serial.print("setting /number failed:");
        Serial.println(Firebase.error());  
        return;
    }else{
      if(statusReler1 == true){
         digitalWrite(14,LOW); 
      reler1 = true;
      Serial.println("r1 true");
      Firebase.setBool("status1", true);
      }else{
        if(statusReler1 == false){
        reler1 = false;
        digitalWrite(14,HIGH);
        
        Serial.println("r1 false");
         Firebase.setBool("status1", false);
    
      }
      }
    }
    delay(1000);
  //reler 2
  statusReler2 = Firebase.getBool("rele2");
  Serial.println( "valor ");
  Serial.println(statusReler2);
  if (Firebase.failed()) {
        Serial.print("setting /number failed:");
        Serial.println(Firebase.error());  
        return;
    }else{
      if(statusReler2 == true){
        Serial.println("r2 true");
        reler2 = true;
          digitalWrite(12,LOW);
        Firebase.setBool("status2", true);
    
      }else{
        if(statusReler2 ==false){
          Serial.println("r2 false");
          
          digitalWrite(12,HIGH);
        reler2 = false;
       Firebase.setBool("status2", false);
      }
      }
    }
  
  
    
    
    
    delay(1000);
  }

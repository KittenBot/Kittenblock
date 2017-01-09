#include <Wire.h>
#include "Adafruit_NeoPixel.h"

Adafruit_NeoPixel rgbled(16,NEO_GRB + NEO_KHZ800);

#define PORT_01 0
#define PORT_23 1
#define PORT_45 2
#define PORT_67 3
#define PORT_89 4
#define PORT_1011 5
#define PORT_1213 6
#define PORT_A0A1 7
#define PORT_A2A3 8
#define PORT_A6A7 9
#define PORT_I2C 10

#define LED 0
#define TOUCH 1
#define CRASH 2
#define BUZZER 3
#define RGB 4
#define TEMP 5
#define LIGHT 6
#define MIC 7
#define IRRX 8
#define GESTURE 9
#define JOYSTICK 10
#define LINEFINDER 11
#define PIR 12

const unsigned char portPin[11][2]={
{0,1},{2,3},{4,5},{6,7},{8,9},{10,11},{12,13},{A0,A1},{A2,A3},{A6,A7},{A4,A5}
};

void echo(int dev, int port, int value){
  Serial.print(dev);Serial.print(' ');
  Serial.print(port);Serial.print(' ');
  Serial.println(value);
}

void doLed(int port, int level){
  int pin = portPin[port][0];
  pinMode(pin,OUTPUT);
  digitalWrite(pin,level);
}

void getTouch(int port){
  int pin = portPin[port][0];
  pinMode(pin,INPUT);
  int value = digitalRead(pin);
  echo(TOUCH,port,value);
}

void getCrash(int port){
  int pin = portPin[port][0];
  pinMode(pin,INPUT);
  int value = digitalRead(pin);
  echo(CRASH,port,value);
}

void doBuzzer(int port, int hz, int time){
  int pin = portPin[port][0];
  tone(pin,hz,time);     
}

void doRGB(int port, int r, int g, int b){
  int pin = portPin[port][0];
  rgbled.setPin(pin);
  rgbled.setPixelColor(1,r,g,b);
  rgbled.show();
}

void getGesture(int port){

}

void getJoystick(int port){

}

void getLinefolloer(int port){

}

void getPir(int port){

}

void parseCmd(char * cmd){
  int arg[10];
  int argindex=0;
  char * tmp;
  char * str;
  str = cmd;
  tmp = cmd;
  while(str!=NULL){
    str = strtok_r(0, " ", &tmp);
    arg[argindex++] = atoi(str);
    if(argindex>10) return;
  }
  if(arg[0]==LED){
    doLed(arg[1],arg[2]);
  }else if(arg[0]==TOUCH){
    getTouch(arg[1]);
  }else if(arg[0]==CRASH){
    getCrash(arg[1]);
  }else if(arg[0]==BUZZER){
    doBuzzer(arg[1],arg[2],arg[3]);
  }else if(arg[0]==RGB){
    doRGB(arg[1],arg[2],arg[3],arg[4]);
  }else if(arg[0]==TEMP){
    
  }
  
  
}

void setup() {
  Serial.begin(115200);

}

char buf[64];
int8_t bufindex;
void loop(){
  while(Serial.available()){
    char c = Serial.read();
    buf[bufindex++]=c;
    if(c=='\n'){
      buf[bufindex]='\0';
      parseCmd(buf);
      memset(buf,0,64);
      bufindex = 0;
    }
    if(bufindex>=64){
      bufindex=0;
    }
  }
}




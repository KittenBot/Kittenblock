#include <Wire.h>
#include "SharpIR.h"
#include "ServoTimer2.h"
#include "AccelStepper.h"
#include "Adafruit_NeoPixel.h"

ServoTimer2 servo;
SharpIR SharpIR(A3, 1080);
Adafruit_NeoPixel rgbled(16);
AccelStepper stp1(AccelStepper::FULL4WIRE, 5, 9, 6, 10);
AccelStepper stp2(AccelStepper::FULL4WIRE, 7, 12, 8, 13);

#define FIRMWARE "KITTENBOT V1.7\n"

int16_t ax, ay, az;
int16_t gx, gy, gz;

// parse pin, 0~13 digital, 14.. analog pin
void parsePinVal(char * cmd,int * pin){
	if(cmd[0]=='A'){
	 sscanf(cmd,"A%d\n",pin);
	 *pin += A0;
	}else{
	 sscanf(cmd,"%d\n",pin);
	}
}


void parsePinVal(char * cmd,int * pin, int * v0){
	if(cmd[0]=='A'){
	 sscanf(cmd,"A%d %d\n",pin,v0);
	 *pin += A0;
	}else{
	 sscanf(cmd,"%d %d\n",pin,v0);
	}
}

void parsePinVal(char * cmd,int * pin, int * v0, int * v1){
	if(cmd[0]=='A'){
	 sscanf(cmd,"A%d %d %d\n",pin,v0,v1);
	 *pin += A0;
	}else{
	 sscanf(cmd,"%d %d %d\n",pin,v0,v1);
	}
}

void parsePinVal(char * cmd,int * pin, int * v0, int * v1, int * v2, int * v3){
	if(cmd[0]=='A'){
	 sscanf(cmd,"A%d %d %d %d %d\n",pin,v0,v1,v2,v3);
	 *pin += A0;
	}else{
	 sscanf(cmd,"%d %d %d %d %d\n",pin,v0,v1,v2,v3);
	}
}



// parse left or right value
void parseLR(char * cmd, int * lvalue, int * rvalue){
	char * tmp;
	char * str;
	*lvalue = 0;
	*rvalue = 0;

	str = cmd;
	tmp = cmd;
	while(str!=NULL){
	  str = strtok_r(0, " ", &tmp);
	  if(str[0]=='L'){
		*lvalue = atoi(str+1);
	  }else if(str[0]=='R'){
		*rvalue = atoi(str+1);
	  }
	}


}

void printPin(int pin){
	if(pin>=14){
		Serial.print("A"+String(pin-14));
	}else{
		Serial.print(String(pin));
	}
}

void echoPinValue(char * code,int pin, int value){
	Serial.print(String(code)+" ");
	printPin(pin);
	Serial.println(" "+String(value));
}

void echoPinValue(char * code,int pin, float value){
	Serial.print(String(code)+" ");
	printPin(pin);
	Serial.println(" "+String(value,2));
}


void echoValue(char * code,float value){
	Serial.print(String(code));
	Serial.println(" "+String(value,2));
}



void echoVersion(){
  Serial.print("M0 ");
  Serial.print(FIRMWARE);
}

void doPinMode(char * cmd){
  int pin,mod;
  parsePinVal(cmd,&pin,&mod);
  pinMode(pin,mod);
}

void doDigitalWrite(char * cmd){
  int pin,val;
  parsePinVal(cmd,&pin,&val);
  digitalWrite(pin,val);  
}

void doDigitalRead(char * cmd){
  int pin,val;
  parsePinVal(cmd,&pin);
  
  val = digitalRead(pin);
  echoPinValue("M3",pin,val);

}

void doAnalogWrite(char * cmd){
  int pin,val;
  parsePinVal(cmd,&pin,&val);
  if(pin==3 || pin==5 || pin==6 || pin==9 || pin==10 || pin==11){ // only work on 3,5,6,9,10,11
    analogWrite(pin,val);
  }
}

void doAnalogRead(char * cmd){
  int pin,val;
  parsePinVal(cmd,&pin);
  val = analogRead(pin);
  if(pin<14) return;
  echoPinValue("M5",pin,val);
}

void doTone(char * cmd){
  int pin,freq,t;
  parsePinVal(cmd,&pin,&freq,&t);
  tone(pin,freq,t);     
}

void doServo(char * cmd){
  int pin,degree;
  parsePinVal(cmd,&pin,&degree);

  // servotimer2 accept time pulse in ms
  degree = map(degree,0,180,1000,2000);
  servo.attach(pin);
  servo.write(degree);
}

void doEchoVin(){
  int a = analogRead(A7);
  float v = float(a)/1024.0*5.2*2;
  echoValue("M8",v);
}

void doRgb(char * cmd){
  int pin,pix,r,g,b;
  
  parsePinVal(cmd,&pin,&pix,&r,&g,&b);
  rgbled.setPin(pin);
  rgbled.setPixelColor(pix,r,g,b);
  rgbled.show();
}


// --- M100 ---
void doStepperSpeed(char * cmd){
  int spdL,spdR;
  parseLR(cmd,&spdL,&spdR);

  stp1.setSpeed(spdL);
  stp2.setSpeed(spdR);
  if(spdL==0 && spdR==0){
	doDisableStepper();
  }

}

void doStepperStep(char * cmd){
  int stpL=0,stpR=0;
  parseLR(cmd,&stpL,&stpR);

  stp1.move(-stpL);
  stp2.move(stpR);
  while(stp1.distanceToGo()!=0 || stp2.distanceToGo()!=0){
    stp1.run();
    stp2.run();
  }
  Serial.println("M101");
  // cool down
  doDisableStepper();
}

void doStepperStop(char * cmd){
  stp1.stop();
  stp2.stop();
  stp1.setSpeed(0);
  stp2.setSpeed(0);
  doDisableStepper();
}

void doEchoDistanceToGo(char * cmd){
  Serial.print("M103 ");
  Serial.print(stp1.distanceToGo());
  Serial.print(' ');
  Serial.println(stp2.distanceToGo());
}

void doEchoSpeed(char * cmd){
  Serial.print("M104 ");
  Serial.print(stp1.distanceToGo());
  Serial.print(' ');
  Serial.println(stp2.distanceToGo());
}

void doEchoPosition(char * cmd){
  Serial.print("M105 ");
  Serial.print(stp1.currentPosition());
  Serial.print(' ');
  Serial.println(stp2.currentPosition());
}

void doDisableStepper(){
  stp1.disableOutputs();
  stp2.disableOutputs();
}

// --- M110 ---
void doReadIraDistance(char * cmd){
  int pin;
  parsePinVal(cmd,&pin);
  SharpIR.attach(pin);
  float distance  = SharpIR.distance();
  echoPinValue("M110",pin,distance);
  
}

// --- M200 ---
void doDcSpeed(char * cmd){
  int spdL=0,spdR=0;
  parseLR(cmd,&spdL,&spdR);
  if(spdL<0){
    analogWrite(5,0);
    analogWrite(6,-spdL);
  }else{
    analogWrite(5,spdL);
    analogWrite(6,0);    
  }
  
  if(spdR<0){
    analogWrite(9,0);
    analogWrite(10,-spdR);  
  }else{
    analogWrite(9,spdR);
    analogWrite(10,0);  
  }
}

void doShoot(){
    analogWrite(9,0);
    analogWrite(10,200);  
    delay(300);
    analogWrite(9,0);
    analogWrite(10,0);  
}

void doPing(char * cmd){
 long duration, distance;
 int trig,echo;
 parsePinVal(cmd,&trig,&echo);
 pinMode(trig,OUTPUT);
 pinMode(echo,INPUT);
 digitalWrite(trig, LOW); 
 delayMicroseconds(2); 

 digitalWrite(trig, HIGH);
 delayMicroseconds(10); 
 
 digitalWrite(trig, LOW);
 duration = pulseIn(echo, HIGH);
 
 distance = duration/58.2;
 Serial.print("M202 ");
 Serial.println(distance);
}

void doSoftReset(){
  asm volatile ("  jmp 0");
}


// query related functions
char queryDigi[19];
char queryAnalog[7];
unsigned long timeMillis;
unsigned long lastMillis;

void resetQueryDigit(){
	int i;
	for(i=0;i<19;i++){
		queryDigi[i] = -1;
	}

}

void resetQueryAnalog(){
	int i;
	for(i=0;i<7;i++){
		queryAnalog[i] = -1;
	}
}

void doQueryDigit(){
	int i,tmp;
	for(i=0;i<19;i++){
		if(queryDigi[i]!=-1){
			tmp = digitalRead(i);
			if(tmp!=queryDigi[i]){
				queryDigi[i] = tmp;
				echoPinValue("M3",i,tmp);
			}
		}
	}
}

void doQueryAnalog(){
	int i;
	for(i=0;i<7;i++){
		if(queryAnalog[i]!=-1){
			int pin = A0+i;
			int val = analogRead(pin);
			echoPinValue("M5",pin,val);
		}
	}
}

void attachQueryDigit(char * cmd){
	int pin,val;
	parsePinVal(cmd,&pin,&val);
	if(pin>=0 && pin<19){
		if(val==1){
			queryDigi[pin] = 99; // make sure echo for the first time
		}else{
			queryDigi[pin] = -1;
		}
		
	}
}

void attachQueryAnalog(char * cmd){
	int pin,val;
	parsePinVal(cmd,&pin,&val);
	if(pin>=14 && pin<19){
		pin-=14;
		if(val==1){
			queryAnalog[pin] = 1;
		}else{
			queryAnalog[pin] = -1;
		}
		
	}

}


void parseMcode(char * cmd){
  int code;
  char * tmp;
  code = atoi(cmd);  
  cmd = strtok_r(cmd, " ", &tmp);  

  switch(code){
    case 0:
      echoVersion();
      break;
    case 1: // set pin mode: M1 pin mode
      doPinMode(tmp);
      break;
    case 2: // digital write: M2 pin level
      doDigitalWrite(tmp);
      break;
    case 3: // digital read: M3 pin
      doDigitalRead(tmp);
      break;
    case 4: // analog write: M4 pin pwm
      doAnalogWrite(tmp);
      break;
    case 5: // analog read: M5 pin
      doAnalogRead(tmp);
      break;
    case 6: // tone : M6 pin freq duration
      doTone(tmp);
      break;
    case 7: // servo : M7 pin degree
      doServo(tmp);
      break;
    case 8: // read vin voltage
      doEchoVin();
      break;
    case 9: // rgb led
      doRgb(tmp);
      break;
	case 13: // query digit
	  attachQueryDigit(tmp);
	  break;
	case 15: // query analog
	  attachQueryAnalog(tmp);
	  break;	
    case 100: // set stepper max speed: M100 L100 R200
      doStepperSpeed(tmp);
      break;
    case 101: // step: M101 L1000 R-2000
      doStepperStep(tmp);
      break;
    case 102: // stop motors
      doStepperStop(tmp);
      break;
    case 103: // echo distance to go
      doEchoDistanceToGo(tmp);
      break;
    case 104: // echo speed
      doEchoSpeed(tmp);
      break;
    case 105: // echo position
      doEchoPosition(tmp);
      break;
    case 106: // disable stepper
      doDisableStepper();
      break;
    case 110: // infra sensor 10~80cm
      doReadIraDistance(tmp);
      break;
    case 200:
      doDcSpeed(tmp);
      break;
    case 202:
      doPing(tmp);
      break;
    case 203:
      doShoot();
      break;
    case 999:
      doSoftReset();
      break;
  }

}

void parseCmd(char * cmd){
  if(cmd[0]=='G'){ // gcode
  
  }else if(cmd[0]=='M'){ // mcode
    parseMcode(cmd+1);
  }
  Serial.println("OK");
}


void setup() {
  Serial.begin(115200);
  stp1.setMaxSpeed(600.0);
  stp1.setAcceleration(200.0);
  stp2.setMaxSpeed(600.0);
  stp2.setAcceleration(200.0);  
  resetQueryDigit();
  resetQueryAnalog();
  echoVersion();
  rgbled.begin();
}

char buf[64];
int8_t bufindex;

void loop() {
  doQueryDigit();
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
  stp1.runSpeed();
  stp2.runSpeed();

  timeMillis= millis();
  if (timeMillis - lastMillis> 100) {
    lastMillis = timeMillis;
	doQueryAnalog();
  }
  
}


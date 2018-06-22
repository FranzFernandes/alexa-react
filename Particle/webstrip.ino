// This #include statement was automatically added by the Particle IDE.
#include <FastLED.h>

// This #include statement was automatically added by the Particle IDE.
#include "FastLED/FastLED.h"
FASTLED_USING_NAMESPACE;
#include "Particle.h"

#define NUM_LEDS 150
#define DATA_PIN 6 // green
#define CLOCK_PIN 7 // yellow
CRGB leds[NUM_LEDS];

// int rainbowWhole(String command);
uint8_t thishue= 0;
uint8_t deltahue = 5;

bool stateOn = true;
int r;
int g;
int b;
String device = "Web";

enum states {
    ON,
    OFF,
    ONECOLOR
};
enum states ledstates;

void setup() { 
    Particle.function("turnonoff", turnonoff);    // RainbowWhole program call 
    Particle.function("setcolor", setColor);
    FastLED.addLeds<APA102, DATA_PIN, CLOCK_PIN, EOrder::RGB, DATA_RATE_MHZ(2)>(leds,NUM_LEDS);
    delay(3000);                                        // delay in case off boot problems
    clearStrip();                                       //clearstrip to remove any artifacts
    rainbowCycle(20);

}
    
void loop() { 
    // TODO CHANGE TO SWITCH CASE FOR STATES
    if (ledstates == ON) {
        rainbow_still();
        delay(500);
    } else if (ledstates == OFF) {
        clearStrip();
        delay(500);
    } else if (ledstates == ONECOLOR) {
        setAll(r, g, b);
    }

}



//POST FUNCTIONS
int turnonoff(String command) {
    if (command == "on") {
        ledstates = ON;
        String data = dataToJson(device, "turnoff", command); // function, arg
        Particle.publish("logger", data, PRIVATE);
        return 1;
    } else if (command == "off") {
        ledstates = OFF;
        return 1;
    } else {
        return -1;
    }
}

int setColor(String _color) {
    int number = (int) strtol( &_color[1], NULL, 16);
    
    // Split them up into r, g, b values
    b = number >> 16;
    g = number >> 8 & 0xFF;
    r = number & 0xFF;
    ledstates = ONECOLOR;
    return 1;
}

//COLOR FUNCTIONS

void clearStrip(){
    for(int i = 0; i <NUM_LEDS; i++) {
        leds[i] = CRGB(0,0,0);
        FastLED.show();
    }
}

void setAll( int r, int g, int b) {
    for(int i = 0; i<NUM_LEDS; i++) {
        leds[i] = CRGB(r, g, b);
    } 
    FastLED.show();
}
// turns the entire ledstrip into a rainbow
void rainbow_still() {
    thishue++;
    fill_rainbow(leds, NUM_LEDS, thishue, deltahue);
    FastLED.show();
    delay(20);
}


void rainbowCycle(int SpeedDelay) {
  byte *c;
  uint16_t i, j;
  for(j=0; j<256*5; j++) { // 5 cycles of all colors on wheel
    for(i=0; i< NUM_LEDS; i++) {
      c=Wheel(((i * 256 / NUM_LEDS) + j) & 255);
      leds[i] = CRGB(*c, *(c+1), *(c+2));
    }
    // showStrip();
    FastLED.show();
    delay(SpeedDelay);
  }
}



// DEBUG FUNCTION
void debug(String message, int value) {
    char msg [50];
    sprintf(msg, message.c_str(), value);
    Particle.publish("DEBUG", msg);
}


// HELPER FUNCTIONS
String dataToJson(String device, String function, String arg) {
     String data = String::format(
    //Device name, Function, Value  
  "{\"device\":%c, \"function\":%c, \"value\":%c}",
  device, function, arg);
    debug("JSON DEBUG: " + data, 1);
    data = "{"
    return data; 
    
}

long stringToLong(String s) {
   char arr[12];
   s.toCharArray(arr, sizeof(arr));
   return atol(arr);
}

byte * Wheel(byte WheelPos) {
    static byte c[3];
    if(WheelPos < 85) {
            c[0]=WheelPos * 3;
            c[1]=255 - WheelPos * 3;
            c[2]=0;
        } else if(WheelPos < 170) {
            WheelPos -= 85;
            c[0]=255 - WheelPos * 3;
            c[1]=0;
            c[2]=WheelPos * 3;
        } else {
            WheelPos -= 170;
            c[0]=0;
            c[1]=WheelPos * 3;
            c[2]=255 - WheelPos * 3;
    }
    return c;
}


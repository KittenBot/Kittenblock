// ConstantSpeed.pde
// -*- mode: C++ -*-
//
// Shows how to run AccelStepper in the simplest,
// fixed speed mode with no accelerations
/// \author  Mike McCauley (mikem@airspayce.com)
// Copyright (C) 2009 Mike McCauley
// $Id: ConstantSpeed.pde,v 1.1 2011/01/05 01:51:01 mikem Exp mikem $

#include <AccelStepper.h>

AccelStepper stp1(AccelStepper::FULL4WIRE, 5, 9, 6, 10);
AccelStepper stp2(AccelStepper::FULL4WIRE, 7, 12, 8, 13);

void setup()
{  
   stepper.setMaxSpeed(1000);
   stepper.setSpeed(50);	
}

void loop()
{  
   stepper.runSpeed();
}

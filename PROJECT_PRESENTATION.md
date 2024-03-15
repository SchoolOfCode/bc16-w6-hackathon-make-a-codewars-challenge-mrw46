# Plan

## Setup

- install vitest and establish test script
- write a skeleton test to check it's working

## MVP 1

- Come up with an idea for a setting
- Decide on a simple problem for users to solve
- Write a short story to illustrate the problem
- Write specific instructions which define a valid solution
- Identify boundary value inputs
- Write tests to check those inputs

## MVP 2

- Add a another condition to the problem which makes any solution more complex
- Write further tests to check the boundary values for the new condition

## MVP 3

- Go through challenge with temporary code to check tests

# Capital Ship Intruders!

## Description

Welcome, Lieutenant! As you know, the Capital Space Fleet has made significant progress exploring the galaxy in the past few years.

What you may not know is that lots of our Stringships have encountered hostile aliens who kidnap crewmembers and replace them with imposters...

Capital Command needs your help! We need you to check our Stringships and identify anyone who is not a true Capital Crewmember. If you find an intruder, blast them out of the airlock!

If more than half of the crew has been replaced, the ship is lost and the remaining Capital Crewmembers must evacuate.

If the entire ship has been overrun, there's nothing we can do. You must set the self-destruct sequence (you remember the code from Capital Academy, right ? It's BLOW IT UP)

There are rumours of abandoned ghost ships floating around out there... Capital Command neither confirms nor denies these rumours, but if you find one, please destroy it using the self-destruct code.

### Instructions

- Write a function that takes in a string, removes any character which is not an uppercase letter, and returns the updated string.
- If more than half of the characters are not uppercase letters, return the string with the uppercase letters removed instead.
- If no characters are uppercase letters, return the string "BLOW IT UP"
- If the input string is empty, return the string "BLOW IT UP"

Put your plan, story, and any supporting material here, you could use the help of a readme markdown generator such as [readme.so](https://readme.so/)

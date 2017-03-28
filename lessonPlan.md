## Recursion Hackathon

### Overview
student
Participants will be introduced to the main concepts and case uses of recursion, a pattern used in programming that yields tremendous potential where conventional looping patterns do not scale.

##### Instructor Priorities

* Participants should understand where and why recursion could or should be used.
* Participants should be able to iterate through a variably complex set of data.

##### Instructor Notes

* Students only need to use node for these activities. No modules are needed.
* Use [This Powerpoint](slides.pptx)

* Make sure that participants are able to follow the flow of recursion accurately. Feel free to slow down in order to let them have a solid understanding of what exactly is going on at every step.
- - -

### Class Objectives

* To understand recursion and its strengths in contrast to common looping patterns.
* To use recursion to iterate through sets of data with varying complexity.
* To be able to recognize and create recursive patterns.
* To use recursion to find the highest prime factor of a number.
* To use recursion to find out if a maze is solvable.

- - -

### 1. Welcome participants and introduce Recursion

* Welcome participants to the Hackathon and try to get as many participants to interact near or before the beginning of the first activity.
* Introduce recursion with a simple definition:
    * Recursion is a pattern where a function will call itself to achieve its ultimate purpose
    * At first it may seem like it functions very similarly, however, it has quite a few very important differences
* Ask participants to take turns saying what they think is the advantage to calling a function from within itself, and how it can be better than a normal loop in some ways.
    * Make sure to provide positive reinforcement, even if their guess isn't entirely correct.
* After participants provide their feedback make sure to at least go over (example code) and touch upon these main points with them:
    * Each time a funtion calls itself, the new method call has its own variables
    * The amount of 'loops' are dependent on how many times the function calls itself, whereas you cannot have a variable number of nested for loops; there are only as many as you write
    * Recursion is not only dependent on a true/false comparison to execute

### 2. Manipulating complex data
* Present participants with slide 1
* Ask them how they would write a function that counts up the number of family members within a family tree
* Now present with slides 2 and 3
* Ask participants how this new set of information may pose a problem
* Explain to participants how having data with variable complexity can introduce problems with conventional looping
    * The best solution for the first set would to create three nested for loops and iterate through the multidimensional array
    * However when we have data that could have any number of layers, writing only three loops will only yield us information three layers deep
* Proceed to live code a solution using recursion and touch on these points using (example code):
    * By using recursion we are able to support any amount of complexity without having to write more code than we have to
    * We are using a base case to determine when each path of recursion stops
    * Loops are still being used within our recursive function!
* Present slides 4-8 to help demonstrate the recursive flow visually

### 3. Descendant counter
* **Instructions**
  * Send out this file: (unsolved code)
  * Your group will create a recursive function that returns the number of descendants any given person has in the object family

  * Your function must take in any position in the tree of objects
  * It must return the amount of objects below the given position
  * For example findBelow(family[0].desc[3]) will return 5

### 4. Descendant counter review
* (solved code)
* Quickly go over solved Descendant counter
* Evaluate common points of pain among participants and briefly make sure they are explained

### 5. Highest Prime Multiple Overview

* Ask participants if they have any idea on how to tackle the issue of returning the highest prime multiple
    * Make sure to explain how the problem can be broken up into smaller pieces by finding the largest multiple, then finding the largest multiple of that, and so on and so forth.
* Ask participants how they would write out a recursive function that would split this problem up appropriately
    * How does each recursion know what number it's trying to find the highest multiple of?
        * We pass it into the next recursion as an argument 
    * How will the function know if the number it has is a prime?
        * If we keep looking for the highest multiple in each recursion, we will end up with a prime number when we can't find a multiple
    * When checking a number for the highest multiple, what are the possible outcomes?
        * We either find a multiple at some point, or it is a prime number

### 6. Highest Prime Multiple
* **Instructions**
  * Send out this file (unsolved code)
  * Groups will create a recursive function that returns the highest prime multiple of an input number

### 7. Highest Prime Multiple Review
* (solved code)
* Quickly go over solved Highest Prime
* Make sure participants understand the following:
    * The basecase for prime
    * How information is being passed up the recursion chain
    * How information is being returned down to the original call

### 8. Maze overview
* Ask participants how they feel about recursion
* Let them know that this last example will show one of the largest strengths of recursion
* Show slide 9 to demonstrate activity
* Ask participants how they would use recursion to navigate through a maze like the one shown
    * Make sure they speak about it in a sort of verbal pseudo code manner
    * Make sure to provide encouraging feedback on their ideas
* Go into detail on branching paths and how they can be a problem with simpler loop methods
    * Basic loop methods either take too long to execute or write
    * We need to solve the problem in a more efficient way
* Explain how a recursive function can be applied to each step of the maze instead of all possible locations
    * This significantly decreases the amount of necessary steps as we are only dealing with what is possible get to from our starting point in the maze
* How do we define our starting point?
    * Introduce the idea of a starter function
    * Seperate function that performs operations in preparation of the main recursion
    * We can then pass in that information to our first recursive function
* How do we avoid going in circles
    * This is **extremely** important to go over
    * We can modify the maze as we navigate through it. By adding a '#' to the location just checked, we ensure any recursive functions after this branch of the search does not back track
    * This is an amazing feature of recursion: we can modify data as we move along recursions without affecting them outside of the current scope

### 9. Maze
* **Instructions**
  * Send out this file (unsolved code)
  * Groups will create a recursive function that returns if a maze is solvable
 
  * Bonus: return the path found

### 10. Maze review
* (solved code)
* Go over maze solution
* Make sure participants understand the following:
    * The setup function
    * How information is being passed up the recursion chain

### 11. Conclusion
* Congratulate participants on the work they've done so far
* Briefly touch on how recursion can be very powerful in situations where basic looping falls short:
    * Variable number of nested functions
    * Recursive methods have access to their own private variables
    * Can modify and pass information further up the chain of recursive functions
    * Navigation of variably complex structures

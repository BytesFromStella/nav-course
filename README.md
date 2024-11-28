# General documentation document
The purpose of this document is to log all the issues and challenges I encountered when completing the tasks from AOF.

## Week 1
The task required me to create a visual counter with an increment and decrement button.
Also created a design for the webpage for me to use for the other potential tasks. The body has a size of about 80% of the view port.

## Week 2
Basically nothing. I was sick the whole week yippieeeee.

## Week 3
Here I redesigned the webpage to display as gridboxes, with a flexbox on the navigation bar. 
One of the tasks I did was create a traffic light using ``javascript  let intervalid = setInterval(() => {code to run}1000);`` inside a function that I call with two buttons with event listeners; Start and Stop.

### Start
Simply sets a flag called ``cycleCheck`` to ``true``, then calls the function ``lightLoop`` with the interval timer in it.

### Stop
Sets the ``cycleCheck`` flag to ``False``, causing the negative condition check at the start of ``lightLoop`` to execute, exiting the loop.


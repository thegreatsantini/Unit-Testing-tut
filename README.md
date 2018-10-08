# Unit-Testing-tutorials

## Types of Test Doubles

* Created with Mock Frameworks Sinon.js
        ** Sinon.spy() keeps track of 
        * - How many times a function is called
        * - What paramaters were passed to the function
        * - What value the function returned or if threw exemption


        ** Sinon.stub() api for creating stub test doubles 
        * - stubs are like spies in that they can be anonymous or wrap existing functions
        * - supports the full spy testing API
        * - Stubs are different from spies in that they do NOT call the wrapped function 
        * - Stubs allow you to modify the behavionr of the stubbed function call

* Dummy - Objects that can be passed around as necessary but do not have any type of test implentation and should never be used. 

* Fake - These objects generally have a simplifies functional implemtation of a particular interface that is adequate for testing by not for production.

* Stub - These objets provide implementations with canned answers that are suitable for the test.

* Spies - These objects provide implementations that record the values that were passed in so they can be used by the test
JSTest - JS Unit Test Framework
===============================

JSTest is a class designed for easily running unit tests on your JavaScript code. Instead of using some third-party test framework, I figured I'd just work on creating my own and JSTest is the result. The results of the tests will be displayed with execution time, success or failure, and the order number for the given test. No other frameworks needed for JSTest to function.

You can test it out <a href="http://htmlpreview.github.com/?https://github.com/jakesankey/JSTest/blob/master/example/index.html" target="_blank">here</a>.

Simply add your config and tests to the bottom of the HTML and run it.

<b>CONFIGURATION</b>

	// Show how long each test took in milliseconds
	JSTest.showExecutionTime = true; 
	
	// If output should be written to same page
	JSTest.outputElement = document.getElementById('testResults'); 
	
	// Defaults to true. Displays test results in a popup window.
	JSTest.showOutputInPopup = true;

<b>TEST TYPES</b>

    "true" - (requires eval param) 
    "false" - (requires eval param)
    "assert" - (requires eval and goal params)
    "equal" - (requires eval and goal params)
    "strictEqual" - (requires eval and goal params)
    "null" - (requires eval params)
    "notEqual" - (requires eval and goal params)
    "notStrictEqual" - (requires eval and goal params)

<b>TEST OBJECT</b>

    // Option 1
    var test = {
              type:"true", 
              eval:1>0, 
              message:"1 is greater than 0" // optional
    };
	
    // Option 2
    var test = {};
    test.type = "assert";
    test.goal = 10;
    test.eval = 3+5+2;
    test.message = "3+5+2 == goal of 10"; // optional
  

<b>SIMPLE TEST</b>

    JSTest.Assertions.test({
    	type:"true", 
    	eval:1>0, 
    	message:"1 is greater than 0"
    });

<b>INSTANCE TESTS</b>

    var tests = new JSTest.Assertions();
    
    // addTest accepts a single test object
    tests.addTest({
    	type:"true", 
    	eval:1>0, 
    	message:"1 is greater than 0"
    });
    
    // addTests allows for an array of test objects
    tests.addTests([{
        type:"false", 
        eval:2<1, 
        message:"2 is greater than 1"
    },{
        type:"true", 
        eval:0<1, 
        message:"0 is less than 1"
    }]);
	
    tests.execute();

<b>REAL WORLD EXAMPLE:</b>

    function isDateTimeEven()
    {
    	var dt = new Date().getTime();
    	if ((dt % 2) == 0)
    	{
    		return true;
    	}
    	
    	return false;
    }
	
    // Instance
    var tests = new JSTest.Assert();
    tests.addTest({
    	type:"true", 
    	eval: isDateTimeEven(), 
    	message: "The datetime in ms is even."
    });
	
    tests.execute();
    
    // Static
    JSTest.Assertions.test({
          type:"true", 
          eval: isDateTimeEven(), 
          message: "The datetime in ms is even."
    });
			

<b>MIT LICENSE:</b>

Copyright (c) 2013 Jake Sankey

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

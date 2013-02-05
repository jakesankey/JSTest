JSTest - JS Unit Test Framework
===============================

JSTest is a class designed for easily running unit tests on your JavaScript code. Instead of using some third-party test framework, I figured I'd just work on creating my own and JSTest is the result. The results of the tests will be displayed with execution time, success or failure, and the order number for the given test. No other frameworks needed for JSTest to function.

You can test it out at http://jakesankey.com/projects/js/jstest/example

Simply add your config and tests to the bottom of the HTML and run it.

<b>CONFIGURATION</b>

	// Show how long each test took in milliseconds
	JSTest.showExecutionTime = true; 
	
	// If output should be written to same page
	JSTest.outputElement = document.getElementById('testResults'); 
	
	// Defaults to true. Displays test results in a popup window.
	JSTest.showOutputInPopup = true;

<b>TEST OBJECT</b>
(Types: true, false, assert, equal, strictEqual, null, notEqual, notStrictEqual)

    // Option 1
    var test = {
              type:"true", 
              eval:1>0, 
              message:"1 is greater than 0" // optional
    };
	
    // Option 2
    var test = {};
    test.type = "true";
    test.eval:1>0;
    test.message = "1 is greater than 0."; // optional
  

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
			

<b>LICENSE:</b>

Do whatever you want with it :)

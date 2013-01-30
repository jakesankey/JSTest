var JSTest = window.JSTest || {};

JSTest.outputElement = null;
JSTest.numberOfTests = 0;
JSTest.startTime = new Date().getTime();
JSTest.showExecutionTime = true;
JSTest.totalExecutionTime = 0;

setInterval(function(){JSTest.startTime = new Date().getTime();}, 1);

JSTest.assert = function(goal, test) 
{
	var result = "FAILED";
	
	try
	{
        	JSTest.numberOfTests++;
        
        	if (test == goal) 
        	{
            		result = "SUCCESS";
        	}
	}
	catch (err)
	{
		result = "FAILED";
	}
	
    JSTest.write(result);
};

JSTest.assertStrict = function(goal, test)
{
    JSTest.assertTrue(goal===test);
};

JSTest.assertTrue = function(test) 
{
	JSTest.assert(test, true);
};

JSTest.assertFalse = function(test) 
{
	JSTest.assert(test, false);
};

JSTest.assertNull = function(test)
{
	JSTest.assert(test, null);
};

JSTest.assertEqual = function(test1, test2)
{
    JSTest.assert(test1, test2);
};

JSTest.assertStrictEqual = function(test1, test2)
{
    JSTest.assertTrue(test1===test2);
};

JSTest.testPool = function(testArray)
{
    for (var i = 0; i < testArray.length; i++)
    {
        var testObj = testArray[i];

        if (testObj.type.toLowerCase() == "equal")
        {
            JSTest.assertEqual(testObj.goal, testObj.test);
        }
        else if (testObj.type.toLowerCase() == "strictequal")
        {
            JSTest.assertStrictEqual(testObj.goal, testObj.test);
        }
        else if (testObj.type.toLowerCase() == "null")
        {
            JSTest.assertNull(testObj.test);
        }
        else if (testObj.type.toLowerCase() == "false")
        {
            JSTest.assertFalse(testObj.test);
        }
        else if (testObj.type.toLowerCase() == "true")
        {
            JSTest.assertTrue(testObj.test);
        }
        else if (testObj.type.toLowerCase() == "strict")
        {
            JSTest.assertStrict(testObj.goal, testObj.test)
        }
        else if (testObj.type.toLowerCase() == "assert")
        {
            JSTest.assert(testObj.goal, testObj.test);
        }
    }
};

JSTest.write = function(message)
{
    var color = "red";

    if (message == "SUCCESS")
    {
        color = "#00b208";
    }
    
    var currTime = new Date().getTime();
    var timeDiff = currTime - JSTest.startTime;
    JSTest.totalExecutionTime += timeDiff;
    
    var html = JSTest.outputElement.innerHTML;
    html += "Test #" + JSTest.numberOfTests + ": ";
    html += "<font color='" + color + "'>" + message + "</font> ";
    if (JSTest.showExecutionTime)
    {
      html += "(" + timeDiff + " ms)";
    }
    html += "</br>";
    JSTest.outputElement.innerHTML = html;
};


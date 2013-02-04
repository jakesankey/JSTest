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

JSTest.assertNotEqual = function(test1, test2)
{
    JSTest.assertFalse(test1==test2);
};

JSTest.assertNotStrictEqual = function(test1, test2)
{
    JSTest.assertFalse(test1===test2);
};

JSTest.testPool = function(testArray)
{
    for (var i = 0; i < testArray.length; i++)
    {
        var testObj = testArray[i];

        switch (testObj.type.toLowerCase())
        {
 	    case "equal":
 	        JSTest.assertEqual(testObj.goal, testObj.test);
 	        break;
 	    case "strictequal":
                JSTest.assertStrictEqual(testObj.goal, testObj.test);
 	        break;
 	    case "null":
 	        JSTest.assertNull(testObj.test);
 	        break;
 	    case "false":
 	        JSTest.assertFalse(testObj.test);
 	        break;
 	    case "true":
 	        JSTest.assertTrue(testObj.test);
 	        break;
 	    case "strict":
 	        JSTest.assertStrict(testObj.goal, testObj.test);
 	        break;
            case "assert":
 	        JSTest.assert(testObj.goal, testObj.test);
 	        break;
 	    case "notequal":
 	        JSTest.assertNotEqual(testObj.goal, testObj.test);
 	        break;
 	    case "notstrictequal":
 	        JSTest.assertNotStrictEqual(testObj.goal, testObj.test);
 	        break;
 	    default:
 	        break;
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


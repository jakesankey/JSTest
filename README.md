JSTest - JS Unit Test Framework
===============================

JSTest is a class designed for easily running unit tests on your JavaScript code. The results of the tests will be displayed in the console with a summary of successes and failures. In the latest version, you now include a feature name as a constructor argument and the output will be categorized by this name. 
No other frameworks needed for JSTest to function.

You can test it out <a href="http://htmlpreview.github.com/?https://github.com/jakesankey/JSTest/blob/master/example/index.html" target="_blank">here</a>.

<b>TEST TYPES</b>

    "true" - (requires eval param) 
    "false" - (requires eval param)
    "equal" - (requires eval and goal params)
    "strictEqual" - (requires eval and goal params)
    "null" - (requires eval params)
    "notEqual" - (requires eval and goal params)
    "notStrictEqual" - (requires eval and goal params)

<b>QUICK TESTS</b>

    var test = new JSTest("My fancy new feature.");

    test.isEqual(
        {
            eval:50+50 == 100,
            message::"Yep, 50 + 50 is still 100"
        }
    );

<b>ARRAY OF TESTS</b>

    var tests = new JSTest('My great new feature.');

    tests.add([
        {
            type:"equal"
            goal:100,
            eval:50+50,
            message:"Yes, 50 + 50 = 100"
        },
        {
            type:"notequal"
            goal:100,
            eval:50+40,
            message:"No, 50 + 40 != 100"
        }    
    ]);

    tests.run();


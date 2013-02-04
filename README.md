JSTest - JS Unit Test Framework
===============================

JSTest is a class designed for easily running unit tests on your JavaScript code. Instead of using some third-party test framework, I figured I'd just work on creating my own and JSTest is the result. The results of the tests will be displayed with execution time, success or failure, and the order number for the given test. No other frameworks needed for JSTest to function.

You can test it out at http://jakesankey.com/projects/js/jstest/example

Simply add your config and tests to the bottom of the HTML and run it.

<b>SYNTAX:</b>

    JSTest.assert(goal, test);
    JSTest.assertTrue(test);

<b>EXAMPLES OF AVAILABLE FUNCTIONS:</b>

    <script>

      // Config
      JSTest.showExecutionTime = true; // Output how long test took in milliseconds
      JSTest.outputElement = document.getElementById('testResults'); // Required

      // Basic Tests
      JSTest.assert("myGoal", "myTest"); // FAILED
      JSTest.assert(1, 1); // SUCCESS because 1 == 1
      JSTest.assertTrue(20==15+5); // SUCCESS 15+5 == 20
      JSTest.assertNull(document.getElementById('fakeElement')); // SUCCESS
      JSTest.assertFalse(1==2); // SUCCESS 1 != 2
      JSTest.assertEqual(1,1); // SUCCESS (using ==)
      JSTest.assertStrictEqual(1,1); // SUCCESS (using ===)
      JSTest.assertStrict("Test", "Test"); // SUCCESS (using ===)
      JSTest.assertNotEqual(10, 5+1); // SUCCESS (using ==)
      JSTest.assertNotStrictEqual("10", 5+5); // Success (using ===)

      // Test Pool - You can also run multiple tests with one function and an array
      JSTest.testPool(
              [
                {
                  type: "assert",
                  goal: 1,
                  test: 2-1
                },
                {
                  type: "assert",
                  goal: Math,
                  test: Math
                },
                {
                  type: "false",
                  test: 1==2
                },
                {
                  type: "true",
                  test: 1==1
                },
                {
                  type: "null",
                  test: document.getElementById("fakeElement")
                },
                {
                  type: "strict",
                  goal: 10,
                  test: 8+2
                },
                {
                  type: "strictEqual",
                  goal: 10,
                  test: 5+5
                },
                {
                  type: "equal",
                  goal: "10",
                  test: 5+5
                },
                {
                  type: "notEqual",
                  goal: 10,
                  test: 5+1
                },
                {
                  type: "notStrictEqual",
                  goal: "10",
                  test: 5+5
                }
              ]
            );  

    </script>

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

    JSTest.outputElement = document.getElementById('testResults');
    JSTest.assertTrue(isDateTimeEven());
    // OR JSTest.assert(true, isDateTimeEven());

<b>LICENSE:</b>

Do whatever you want with it :)

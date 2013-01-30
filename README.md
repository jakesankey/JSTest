JSTest - JS Unit Test Framework
===============================

JSTest is a class designed for easily running unit tests on you JavaScript code. Instead of using some third-part test framework, I figured I'd just work on creating my own and JSTest is the result. The results of the tests will be displayed with execution time, success or failure, and the order number for the given test.

You can test it out at http://jakesankey.com/projects/js/jstest/example

Simply add your config and tests to the bottom of the HTML and run it.

SYNTAX:
JSTest.assert(goal, test);
JSTest.assertTrue(test);

EXAMPLES OF AVAILABLE FUNCTIONS:

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

      // Test Pool - You can also run multiple tests with one function and some JSON
      JSTest.testPool(
              [
                {
                  type:"assert",
                  goal:1,
                  test:2-1
                },
                {
                  type:"assert",
                  goal:Math,
                  test:Math
                },
                {
                  type:"false",
                  test:1==2
                },
                {
                  type:"true",
                  test:1==1
                },
                {
                  type:"null",
                  test:document.getElementById("fakeElement")
                },
                {
                  type:"strict",
                  goal:5+5,
                  test:10
                },
                {
                  type:"strictEqual",
                  goal:5+5,
                  test:10
                }
              ]
            );  

    </script>


LICENSE:

Do whatever you want with it :)

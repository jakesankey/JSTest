JSTest - JS Unit Test Framework
===============================

JSTest has been completely rewritten in CoffeeScript. The framework has also been simplified with a new syntax and is now providing only the essential operations.

`JSTest` is exposed on the `window` namespace. Also, `jst` is exposed on `window` and is an actual instance of `JSTest` for quick console tests.

You can test it out <a href="http://htmlpreview.github.com/?https://github.com/jakesankey/JSTest/blob/master/example/index.html" target="_blank">here</a>.

Test results will be displayed in the browser's console.

### QUICK TESTS

```js
    jst.expect(2+2).is(4)
    jst.expect(3+3).not(5)
    jst.expect(["foo", "bar", "baz"]).has("foo")
    jst.expect(window.foo).exists()
```

### TEST SUITES

```js
    var __ = new JSTest();

    __.setup("Math Test Suite", function() {

        var foo = 3;

        __.before(function() {
        	foo++;
        });

        __.after(function() {
            foo--;
        });

        __.ignore("foo is not 4", function() {
            /* invalid so we ignored it */
            __.expect(foo).not(4);
        });

        __.test("foo is 4", function() {
            __.expect(foo).is(4);
        });

        __.test("foo is still 4", function() {
            __.expect(foo).not(5);
        });
    });

    __.setup("Containment Test Suite", function() {

        __.test("string contains foo", function() {
            __.expect("foo bar baz").has("foo");
        });

        __.test("array contains bar", function() {
            __.expect(["foo", "bar", "baz"]).has("bar");
        });
    });

    __.setup("Existence Test Suite", function() {
        __.test("object exists", function() {
            __.expect(window).exists();
        });
    });

    __.setup("Error Test Suite", function() {

        function testFunc(val) {
            if (val > 5) {
            	throw Error("foo bar");
            }
        }

        __.test("testFunc throws an error", function() {
            /* Must pass in a reference to the function, not a call
               If the function takes params, wrap the call in a function */
            __.expect(function(){testFunc(6)}).throws("foo bar");
        });
    });
```

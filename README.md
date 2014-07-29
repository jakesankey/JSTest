JSTest - JS Unit Test Framework
===============================

JSTest has been completely rewritten in CoffeeScript. The framework has also been simplified with a new syntax and is now providing only the essential operations. 

You can test it out <a href="http://htmlpreview.github.com/?https://github.com/jakesankey/JSTest/blob/master/example/index.html" target="_blank">here</a>.

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
          
            __.test("two plus two is 4", function() {
                __.expect(2+2).is(4);
            });
          
            __.test("three plus three is not 5", function() {
                __.expect(3 + 3).not(5);
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
    ```
var JSTest = function (feature) {
    this.queue = [];
    this.testsComplete = 0;
    this.failCount = 0;
    this.writeSuccessToConsole("TESTING: " + feature);
};

JSTest.prototype.add = function (testObjs) {
    for (var i = 0; i < testObjs.length; i++) {
        this.queue.push(testObjs[i]);
    }
};

JSTest.prototype.isEqual = function (testObj) {
    this.assert(testObj);
};

JSTest.prototype.isStrictEqual = function (testObj) {
    testObj.eval = testObj.goal === testObj.eval;
    this.isTrue(testObj);
};

JSTest.prototype.isNull = function (testObj) {
    testObj.goal = null;
    this.assert(testObj);
};

JSTest.prototype.isFalse = function (testObj) {
    testObj.goal = false;
    this.assert(testObj);
};

JSTest.prototype.isTrue = function (testObj) {
    testObj.goal = true;
    this.assert(testObj);
};

JSTest.prototype.isNotEqual = function (testObj) {
    testObj.eval = testObj.goal === testObj.eval;
    this.isFalse(testObj);
};

JSTest.prototype.isNotStrictEqual = function (testObj) {
    testObj.eval = testObj.goal === testObj.eval;
    this.isFalse(testObj);
};

JSTest.prototype.assert = function (testObj) {
    var result = "FAILED";
    var success = false;
    var exception = "";

    try {
        this.testsComplete++;

        if (testObj.eval == testObj.goal) {
            result = "PASSED";
            success = true;
        }
    }
    catch (err) {
        result = "FAILED";
        exception = err;
    }

    if (testObj.message != null) {
        result += " - " + testObj.message + "  " + exception;
    }

    if (success) {
        this.writeSuccessToConsole("Test #" + this.testsComplete + ": " + result);
    } else {
        this.failCount++;
        this.writeFailureToConsole("Test #" + this.testsComplete + ": " + result);
    }
};

JSTest.prototype.run = function () {
    this.testsComplete = 0;
    this.failCount = 0;
    this.clearConsole();
    for (var i = 0; i < this.queue.length; i++) {
        var testObj = this.queue[i];

        switch (testObj.type.toLowerCase()) {
            case "equal":
                this.isEqual(testObj);
                break;
            case "strictequal":
                this.isStrictEqual(testObj);
                break;
            case "null":
                this.isNull(testObj);
                break;
            case "false":
                this.isFalse(testObj);
                break;
            case "true":
                this.isTrue(testObj);
                break;
            case "notequal":
                this.isNotEqual(testObj);
                break;
            case "notstrictequal":
                this.isNotStrictEqual(testObj);
                break;
            default:
                break;
        }

        if (this.queue.length > 1 && this.testsComplete == this.queue.length) {
            var summary = this.testsComplete - this.failCount + " TESTS PASSED, " + this.failCount + " TESTS FAILED";
            if (this.failCount > 0) {
                this.writeFailureToConsole(summary);
            } else {
                this.writeSuccessToConsole(summary);
            }
        }
    }
};

JSTest.prototype.writeFailureToConsole = function (message) {
    if (console !== 'undefined') {
        console.error(message);
    }
};

JSTest.prototype.writeSuccessToConsole = function (message) {
    if (console !== 'undefined') {
        console.log(message);
    }
};

JSTest.prototype.clearConsole = function () {
    if (console !== 'undefined') {
        // console.clear();
    }
};

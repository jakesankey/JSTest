// Generated by CoffeeScript 1.7.1
(function() {
  var JSTest;

  JSTest = (function() {
    function JSTest() {}

    JSTest.prototype.setup = function(feature, testsuite) {
      var summary;
      this.tests = 0;
      this.failures = 0;
      console.log(feature != null ? feature.toUpperCase() : void 0);
      testsuite();
      summary = "** " + (this.tests - this.failures) + " PASSED, " + this.failures + " FAILED **\n\n";
      if (this.failures === 0) {
        return console.log(summary);
      } else {
        return console.warn(summary);
      }
    };

    JSTest.prototype.test = function(description, scenario) {
      this.description = description;
      this.tests++;
      return scenario();
    };

    JSTest.prototype.expect = function(conditional) {
      var failed, message, notify, passed, _ref, _ref1;
      message = "" + ((_ref = this.tests) != null ? _ref : "1") + ": " + ((_ref1 = this.description) != null ? _ref1 : "test");
      passed = (function(_this) {
        return function() {
          return console.log("" + message + " -- OK");
        };
      })(this);
      failed = (function(_this) {
        return function() {
          _this.failures++;
          return console.error("" + message + " -- Actual: " + conditional + ", Expected: " + _this.expected);
        };
      })(this);
      notify = (function(_this) {
        return function(result) {
          if (!result) {
            return failed();
          } else {
            return passed();
          }
        };
      })(this);
      return {
        is: (function(_this) {
          return function(expected) {
            _this.expected = expected;
            return notify(conditional === _this.expected);
          };
        })(this),
        not: (function(_this) {
          return function(expected) {
            _this.expected = expected;
            return notify(conditional !== _this.expected);
          };
        })(this),
        has: (function(_this) {
          return function(expected) {
            _this.expected = expected;
            return notify(conditional.indexOf(_this.expected) !== -1);
          };
        })(this),
        exists: (function(_this) {
          return function() {
            _this.expected = "exists";
            return notify(conditional != null);
          };
        })(this)
      };
    };

    return JSTest;

  })();

  if (window.JSTest == null) {
    window.JSTest = JSTest;
  }

  if (window.jst == null) {
    window.jst = new JSTest();
  }

}).call(this);

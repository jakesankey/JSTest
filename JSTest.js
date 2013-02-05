var JSTest = window.JSTest || {};

JSTest.outputElement = null;
JSTest.showExecutionTime = true;
JSTest.showOutputInPopup = true;
var startTime = new Date().getTime();
var resultWindow = null;

JSTest.Assertions = function ()
{
    setInterval(function () { startTime = new Date().getTime(); }, .1);

    this.queue = [];

    this.addTest = function (testObj)
    {
        this.queue.push(testObj);
    };

    this.addTests = function (testObjs)
    {
        for (var i = 0; i < testObjs.length; i++)
        {
            this.queue.push(testObjs[i]);
        }
    };

    this.isEqual = function (testObj)
    {
        this.assert(testObj);
    };

    this.isStrictEqual = function (testObj)
    {
        this.isTrue(testObj.goal === testObj.eval);
    };

    this.isNull = function (testObj)
    {
        testObj.goal = null;
        this.assert(testObj);
    };

    this.isFalse = function (testObj)
    {
        testObj.goal = false;
        this.assert(testObj);
    };

    this.isTrue = function (testObj)
    {
        testObj.goal = true;
        this.assert(testObj);
    };

    this.isNotEqual = function (testObj)
    {
        this.isFalse(testObj.goal === testObj.eval);
    };

    this.isNotStrictEqual = function (testObj)
    {
        this.isFalse(testObj.goal === testObj.eval);
    };

    this.assert = function (testObj)
    {
        var result = "FAILED";

        try
        {
            JSTest.Assertions.testsComplete++;

            if (testObj.eval == testObj.goal)
            {
                result = "PASSED";
            }
        }
        catch (err)
        {
            result = "FAILED";
        }

        if (testObj.message != null)
        {
            result += " - " + testObj.message;
        }

        if (JSTest.outputElement != null)
        {
            JSTest.write(result);
        }

        if (JSTest.showOutputInPopup)
        {
            JSTest.writeResult(result);
        }
    };

    this.execute = function ()
    {
        for (var i = 0; i < this.queue.length; i++)
        {
            var testObj = this.queue[i];

            switch (testObj.type.toLowerCase())
            {
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
                case "assert":
                    this.assert(testObj);
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
        }
    };
};

JSTest.Assertions.testsComplete = 0;

JSTest.Assertions.test = function (newTest)
{
    var tTest = new JSTest.Assertions();
    tTest.addTest(newTest);
    tTest.execute();
};

JSTest.getResultsHTML = function (message)
{
    var color = "black";

    if (message.indexOf("PASSED") != -1)
    {
        color = "#00b208";
    }
    else if (message.indexOf("FAILED") != -1)
    {
        color = "red";
    }

    var currTime = new Date().getTime();
    var timeDiff = currTime - startTime;

    var html = "<table border=1 style='padding=5;border-style:solid'><tr>";
    html += "<td>Test #" + JSTest.Assertions.testsComplete + "</td>";
    html += "<td><font color='" + color + "'>" + message + "</font></td>";
    if (JSTest.showExecutionTime)
    {
        html += "<td>(" + timeDiff + " ms)</td>";
    }
    html += "</tr></table>";

    return html;
}

JSTest.write = function (message)
{
    var html = JSTest.getResultsHTML(message);
    JSTest.outputElement.innerHTML += html;
};

JSTest.writeResult = function (message)
{
    var html = "";
    if (resultWindow == null || resultWindow.closed)
    {
        var x = screen.width / 2 - 700 / 2;
        var y = screen.height / 2 - 450 / 2;
        resultWindow = window.open(null, null, "height=400,width=500,left=" + x + ",top=" + y + ",menubar=no,status=no,toolbar=no");
        resultWindow.document.title = "JSTest Results";
        html += "<b>JSTest Results:</b></br></br>";
    }

    html += JSTest.getResultsHTML(message);
    resultWindow.document.body.innerHTML += html;
};
















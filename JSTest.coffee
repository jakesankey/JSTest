class JSTest
    setup: (feature, testsuite) ->
        @tests = 0
        @failures = 0
        console.log feature?.toUpperCase()
        do testsuite
        summary = "** #{@tests - @failures} PASSED, #{@failures} FAILED **\n\n"
        if @failures is 0 then console.log summary else console.warn summary

    test: (@description, scenario) ->
        @tests++
        do scenario

    expect: (conditional) ->
        message = "#{@tests ? "1"}: #{@description ? "test"}"

        passed = =>
            console.log "#{message} -- OK"

        failed = =>
            @failures++
            console.error "#{message} -- Expected: #{@expected}, Actual: #{conditional}"

        notify = (result) =>
            if not result then do failed else do passed

        is: (@expected) =>
            notify conditional is @expected

        not: (@expected) =>
            notify conditional isnt @expected

        has: (@expected) =>
            notify conditional.indexOf(@expected) isnt -1

        exists: =>
            @expected = "exists"
            notify conditional?


window.JSTest ?= JSTest
window.jst ?= JSTest
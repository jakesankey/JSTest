class JSTest

    _originalAlert = window.alert

    mockAlert: ->
        window.alert = (message) ->
            return message

    unmockAlert: ->
        window.alert = _originalAlert

    suite: (feature, allTests) ->
        @tests = 0
        @failures = 0
        @ignored = 0
        console.log feature?.toUpperCase()
        do allTests
        summary = "** #{@tests - @failures - @ignored} PASSED, #{@ignored} IGNORED, #{@failures} FAILED **\n\n"
        if @failures isnt 0
            console.error summary
        else if @ignored isnt 0
            console.warn summary
        else
            console.log summary

    _before = ->

    _after = ->

    before: (setup) ->
      _before = setup

    after: (teardown) ->
      _after = teardown

    ignore: (@description, scenario) ->
        @tests++
        @ignored++
        console.warn "#{@tests}: #{description} -- Ignored"

    test: (@description, scenario) ->
        @tests++
        do _before
        try
            do scenario
        catch error
            console.error "#{@tests}: #{@description} -- #{error}"
        do _after

    expect: (conditional) ->
        message = "#{@tests ? "1"}: #{@description ? "test"}"

        passed = ->
            console.log "#{message} -- OK"

        failed = =>
            @failures++
            console.error "#{message} -- Actual: #{conditional}, Expected: #{@expected}"

        notify = (result) ->
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

        throws: (@expected) =>
            try
                conditional()
                conditional = "nothing thrown"
                notify conditional is @expected
            catch error
                notify error?.message is @expected


window.JSTest ?= JSTest
window.jst ?= new JSTest()

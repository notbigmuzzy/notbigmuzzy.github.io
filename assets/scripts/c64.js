$(document).ready(function () {
    //INDEX
    inputFocus()

    //INTERACTIVE - ALWAYS FOCUS LATEST INPUT, PREVENT TAB
    document.onkeydown = keydown;
    function keydown(e) {
        if (!e) e = event;
        if (e.ctrlKey && e.keyCode == 67) {
            clearPrompt();
        }
        if (e.keyCode == 9 || e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
            e.preventDefault()
        }
    }
    $(document).on('click', '.c64-portfolio', function () {
        inputFocus()
    })
    $(document).on('submit', '.editor-input .commandbox.active form', function (e) {
        e.preventDefault();
        theBrain($(this));
    })

    //MAIN LOGIC
    function theBrain(submitedForm) {
        var $submitValue = submitedForm.find('input').val();

        if ($submitValue.includes('"')) {
            var $submitCondition = $submitValue.substring(0, $submitValue.indexOf('"')),
                $submitSlice = $submitValue.substring($submitValue.indexOf('"') + 1, $submitValue.length),
                $submitParam = $submitSlice.substring(0, $submitSlice.indexOf('"'));
        } else {
            var $submitCondition = $submitValue;
        }

        switch ($submitCondition.toLowerCase()) {
            case "help":
                help()
                break;
            case "ls":
                help()
                break;
            case "?":
                help()
                break;
            case "clear":
                clearPrompt();
                break;
            case "c":
                clearPrompt();
                break;
            case "shell":
                window.location.hash = '#show-shell';
                restartPromptAfterSuccess('shell')
                break;
            case "cat":
                getShit('assets/templates/partials/c64/all')
                break;''
            case "load":
                if ($submitParam) {
                    if ($submitParam == 'work') {
                        getShit('assets/templates/partials/c64/work')
                        break;
                    } else if ($submitParam == "skills") {
                        getShit('assets/templates/partials/c64/skills')
                        break;
                    } else if ($submitParam == 'me') {
                        getShit('assets/templates/partials/c64/me')
                        break;
                    } else if ($submitParam == 'radio') {
                        $('.prompt.radio video').remove()
                        getShit('assets/templates/partials/c64/radio')
                        break;
                    } else {
                        getShit($submitParam);
                    }
                } else {
                    restartPromptNoLoadParams($submitCondition)
                    break;
                }
                break;
            default:
                restartPromptAfterError($submitCondition)
                break;
        }
    }

    //FUNCTIONS
    function inputFocus() {
        $('.editor-input .commandbox.active input').focus();
    }
    function help() {
        var c64Help = $('.c64-helper').html()
        $('.editor-input .commandbox.active').removeClass('active').after(c64Help)
        inputFocus()
    }
    function restartPromptAfterError(elem) {
        $('.editor-input .commandbox.active').removeClass('active').after('<div class="commandbox active"><span class="title">?SYNTAX ERROR.</span><span class="title">?<i class="no-command">' + elem + '</i> Command not found.</span><span class="title">Ready.</span><form autocomplete="off"><input type="text" id="editor" name="editor" autofocus="true"/></form></div>')
        inputFocus()
    }
    function restartPromptAfterSuccess(elem) {
        $('.editor-input .commandbox.active').removeClass('active').after('<div class="commandbox active"><span class="title">SEARCHING FOR ' + elem + '</span><span class="title">Loading</span><span class="title">Ready.</span><form autocomplete="off"><input type="text" id="editor" name="editor" autofocus="true"/></form></div>')
        inputFocus()
    }
    function restartPromptNoLoadParams(elem) {
        $('.editor-input .commandbox.active').removeClass('active').after('<div class="commandbox active"><span class="title">?SYNTAX ERROR.</span><span class="title">?<i class="no-command">' + elem + '</i> has no valid parameters.</span><span class="title">Type <i class="no-command">HELP</i>.</span><span class="title">ready.</span><form autocomplete="off"><input type="text" id="editor" name="editor" autofocus="true"/></form></div>')
        inputFocus()
    }
    function restartPromptLoadError(elem) {
        $('.editor-input .commandbox.active').removeClass('active').after('<div class="commandbox active"><span class="title">?LOAD ERROR.</span><span class="title">?<i class="no-command">' + elem + '</i> NOT FOUND.</span></span><span class="title">ready.</span><form autocomplete="off"><input type="text" id="editor" name="editor" autofocus="true"/></form></div>')
        inputFocus()
    }
    function clearPrompt() {
        $('.editor-input .commandbox').remove()
        $('.editor-input').append('<div class="commandbox active"><span class="title">Ready.</span><form autocomplete="off"><input type="text" id="editor" name="editor" autofocus="true"/></form></div>')
        inputFocus()
    }
    function writeOut(elem) {
        $('.editor-input .commandbox.active').before('<div class="commandbox writeout-text">' + elem + '</div>');
    }
    function getShit(elem) {
        $.ajax({
            url: elem,
            dataType: "html",
            success: function (response) {
                restartPromptAfterSuccess('content')
                writeOut(response)
                scrollEditor()
            },
            error: function (response) {
                restartPromptLoadError(response.status)
                scrollEditor()
            }
        });
    }
    function scrollEditor() {
        var editor = document.getElementById("editor"),
            scrollInterval = window.setInterval(scrollEditorAfterSuccess, 100);
        
        function scrollEditorAfterSuccess() {
            if (editor.scrollTop + editor.offsetHeight < editor.scrollHeight) {
                editor.scrollBy(0,25);
            } else {
                clearInterval(scrollInterval)
            }
        }
        scrollEditorAfterSuccess();

        //STOP PROMPT AUTO-SCROLL ON CLICK
        $(document).on('click', '.c64-portfolio', function () {
            clearInterval(scrollInterval)
        })

        //STOP PROMPT AUTO-SCROLL ON MOUSE/TOUCHPAD SCROLL
        document.getElementById("editor").onwheel = function() {
            clearInterval(scrollInterval)
            console.log('123')
        };
        document.getElementById("editor").ontouchmove = function() {
            clearInterval(scrollInterval)
            console.log('456')
        };

    }
})
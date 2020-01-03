$(document).ready(function () {
    //INDEX
    inputFocus()

    //INTERACTIVE - ALWAYS FOCUS LATEST INPUT, PREVENT TAB
    $(document).on('click', 'body', function () {
        inputFocus()
    })
    document.addEventListener('keydown', (e) => {
        if (e.code == "Tab") {
            e.preventDefault()
        }
    });
    $(document).on('submit', '.editor-input .commandbox.active form', function (e) {
        e.preventDefault();
        theBrain($(this));
    })

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
        $('.editor-input .commandbox.active').removeClass('active').after('<div class="commandbox active"><span class="title">?SYNTAX ERROR.</span><span class="title">?<i class="no-command">' + elem + '</i> Command not found.</span><form autocomplete="off"><input type="text" id="editor" name="editor" autofocus="true"/></form></div>')
        inputFocus()
    }
    function restartPromptAfterSuccess(elem) {
        $('.commandbox.active').removeClass('active').after('<div class="commandbox active"><span class="title">SEARCHING FOR ' + elem + '</span><span class="title">Loading</span><span class="title">Ready.</span><form autocomplete="off"><input type="text" id="editor" name="editor" autofocus="true"/></form></div>')
        inputFocus()
    }
    function clearPrompt() {
        $('.editor-input .commandbox').remove()
        $('.editor-input').append('<div class="commandbox active"><span class="title">Ready.</span><form autocomplete="off"><input type="text" id="editor" name="editor" autofocus="true"/></form></div>')
        inputFocus()
    }

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

        switch ($submitCondition) {
            case "help":
                help()
                break;
            case "?":
                help()
                break;
            case "clear":
                clearPrompt();
                break;
            case "shell":
                window.location.hash = '#show-shell';
                restartPromptAfterSuccess('shell')
                break;
            case "list":
                console.log('LIST')
                break;
            case "load":
                break;
            case "get":
                if ($submitParam) {
                    $.ajax({
                        url: $submitParam,
                        success: function (returnData) {
                            console.log(data);
                        }
                    });
                    restartPromptAfterSuccess($submitParam)
                } else {
                    restartPromptAfterError($submitCondition)
                }
                break;
            default:
                restartPromptAfterError($submitCondition)
                break;
        }
    }
})
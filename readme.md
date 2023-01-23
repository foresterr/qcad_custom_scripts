# Custom scripts for QCAD - Open Source CAD

To use/install, put contents of the Scripts folder into QCAD scripts folder (`<install_path>/scripts`, at least on Windows) and restart QCAD. New tools should appear both in the "Modify" menu, and under "Modify" in the toolbox.

1. TranslateNoCopy - commands: `mv0`, `m0`. Avoids the annoyance of forgetting whether your last use of Move/Copy had "Copy" selected and always turns Copy off. Otherwise, it's standard Move/Copy - you can even select Copy back on.
1. TranslateOneCopy - commands: `mv1`, `m1`.Avoids the annoyance of forgetting whether your last use of Move/Copy had "Copy" selected and always turns Copy on, setting number of copies to 1. Otherwise, it's still standard Move/Copy.
1. TranslateWithCopy - commands `mvn`, `mn`. Avoids the annoyance of forgetting whether your last use of Move/Copy had "Copy" selected and always turns it on. Also removes the annoyance of having to switch to the input box for number of copies if you are using the command line - it waits for you to input number of copies directly there (you can still input it in the toolbar if you change your mind). Otherwise, it's once again standard Move/Copy.

Please note that those commands do not implement key sequences, because it would unnecessarily duplicate native functionality. If you are not using the dialog and start typing a number right after the key sequence `m,v` it will directly update "Number of copies" input box; type "0" to effectively move the selection.
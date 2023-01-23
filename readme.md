# Custom scripts for QCAD - Open Source CAD

To use, put contents of the Scripts folder into QCAD scripts folder (`<install_path>/scripts`, at least on Windows). New tools should appear both in the "Modify" menu, and under "Modify" in the toolbox.

1. TranslateNoCopy - shortcut MM, commands mvn, mv0, mm. Avoids the annoyance of forgetting whether your last use of Move/Copy had "Copy" selected and always turns Copy off. Otherwise, it's standard Move/Copy - you can even select Copy back on.
1. TranslateOneCopy - shortcut M1, commands m1, mv1. Avoids the annoyance of forgetting whether your last use of Move/Copy had "Copy" selected and always turns Copy on, setting number of copies to 1. Otherwise, it's still standard Move/Copy - you can even select Copy back on.
1. TranslateWithCopy - shortcut MN, commands mvn, mn. Avoids the annoyance of forgetting whether your last use of Move/Copy had "Copy" selected and always turns it on. Also removes the annoyance of having to click the input box for number of copies - it waits for you to input number of copies using the command line (press Space to get to command line quickly). Otherwise, it's once again standard Move/Copy.
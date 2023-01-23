include("scripts/Modify/Translate/Translate.js");

/**
 * \class TranslateWithCopy
 * \ingroup ecma_modify
 */
function TranslateWithCopy(guiAction) {
    Translate.call(this, guiAction);
    this.useDialog = false;
    this.setUiOptions("scripts/Modify/Translate/Translate.ui");   
};

TranslateWithCopy.prototype = new Translate();

TranslateWithCopy.State = {
    SettingCopies: 10, //Translate's state table starts with 0 so can't put anything in front, sorry. Switch does not care.
    SettingReferencePoint : 0,
    SettingTargetPoint : 1
};

TranslateWithCopy.prototype.beginEvent = function() {
    Transform.prototype.beginEvent.call(this);

    if (!this.verifySelection()) {
        return;
    }

    var optionsToolBar = EAction.getOptionsToolBar();
    var w = optionsToolBar.findChild("Copy");
    w.setChecked(true);

    this.setState(TranslateWithCopy.State.SettingCopies);    
}

TranslateWithCopy.prototype.initState = function(state) {
    this.getDocumentInterface().setClickMode(RAction.PickingDisabled);

    var appWin = RMainWindowQt.getMainWindow();

    switch (this.state) {
    case TranslateWithCopy.State.SettingCopies:
        this.copies = 0;
        this.referencePoint = undefined;
        this.targetPoint = undefined;
        var trNoOfCopies = qsTr("Number of copies");
        this.setCommandPrompt(trNoOfCopies);
        break;

    default:
        Translate.prototype.initState.call(this);
        break;
    }
};

TranslateWithCopy.prototype.escapeEvent = function() {
    switch (this.state) {
    case TranslateWithCopy.State.SettingCopies:
        Transform.prototype.escapeEvent.call(this);
        break;
    case TranslateWithCopy.State.SettingReferencePoint:
        this.setState(TranslateWithCopy.State.SettingCopies);
        break;        
    case TranslateWithCopy.State.SettingTargetPoint:
        this.setState(TranslateWithCopy.State.SettingReferencePoint);
        break;
    }
};

TranslateWithCopy.prototype.commandEvent = function(event) {
    switch (this.state) {
    case TranslateWithCopy.State.SettingCopies:
        var optionsToolBar = EAction.getOptionsToolBar();
        
        var cmd = event.getCommand()

        if (!isNaN(parseInt(cmd)) && cmd % 1 === 0 && cmd > 0) {
            var w = optionsToolBar.findChild("NumberOfCopies");
            w.setValue(parseInt(cmd));
            event.accept();
            this.setState(TranslateWithCopy.State.SettingReferencePoint);
            return;
        }
        if (cmd == 0) {
            var w = optionsToolBar.findChild("Copy");
            w.setChecked(false);
            event.accept();
            this.setState(TranslateWithCopy.State.SettingReferencePoint);
            return;
        }
        break;

    default:
        Translate.prototype.commandEvent.call(this);
        break;
    }    
}

TranslateWithCopy.prototype.slotNumberOfCopiesChanged = function(v) {
    Translate.prototype.slotNumberOfCopiesChanged.call(this, v);
    this.setState(TranslateWithCopy.State.SettingReferencePoint);
};


TranslateWithCopy.init = function(basePath) {
    var action = new RGuiAction(qsTr("Copy N"), RMainWindowQt.getMainWindow());
    action.setRequiresDocument(true);
    action.setRequiresSelection(true);
    action.setScriptFile(basePath + "/TranslateWithCopy.js");
    action.setIcon(basePath + "/TranslateWithCopy.svg");
    action.setStatusTip(qsTr("Move/Copy with Copy turned on, number of duplicates input via command line"));
    action.setDefaultCommands(["mvn","mn"]);
    action.setGroupSortOrder(13100);
    action.setSortOrder(103);
    action.setWidgetNames(["ModifyMenu", "ModifyToolBar", "ModifyToolsPanel", "ModifyMatrixPanel"]);
};
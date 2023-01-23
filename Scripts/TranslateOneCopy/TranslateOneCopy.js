include("scripts/Modify/Translate/Translate.js");

/**
 * \class TranslateOneCopy
 * \ingroup ecma_modify
 */
function TranslateOneCopy(guiAction) {
    Translate.call(this, guiAction);
    this.setUiOptions("scripts/Modify/Translate/Translate.ui");   
};

TranslateOneCopy.prototype = new Translate();

TranslateOneCopy.prototype.beginEvent = function() {
    Transform.prototype.beginEvent.call(this);

    if (!this.verifySelection()) {
        return;
    }

    var optionsToolBar = EAction.getOptionsToolBar();
    var w = optionsToolBar.findChild("Copy");
    w.setChecked(true);
    var w = optionsToolBar.findChild("NumberOfCopies");
    w.setValue(1);

    this.setState(Translate.State.SettingReferencePoint);    
}

TranslateOneCopy.init = function(basePath) {
    var action = new RGuiAction(qsTr("Copy 1"), RMainWindowQt.getMainWindow());
    action.setRequiresDocument(true);
    action.setRequiresSelection(true);
    action.setScriptFile(basePath + "/TranslateOneCopy.js");
    action.setIcon(basePath + "/TranslateOneCopy.svg");
    action.setStatusTip(qsTr("Move/Copy with Copy turned on, pre-set to one copy"));
    action.setDefaultShortcut(new QKeySequence("m,1"));
    action.setDefaultCommands(["mv1","m1"]);
    action.setGroupSortOrder(13100);
    action.setSortOrder(102);
    action.setWidgetNames(["ModifyMenu", "ModifyToolBar", "ModifyToolsPanel", "ModifyMatrixPanel"]);
};
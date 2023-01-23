include("scripts/Modify/Translate/Translate.js");

/**
 * \class TranslateNoCopy
 * \ingroup ecma_modify
 */
function TranslateNoCopy(guiAction) {
    Translate.call(this, guiAction);
    this.setUiOptions("scripts/Modify/Translate/Translate.ui");
}

TranslateNoCopy.prototype = new Translate();

TranslateNoCopy.prototype.beginEvent = function() {
    Transform.prototype.beginEvent.call(this);

    if (!this.verifySelection()) {
        return;
    }

    var optionsToolBar = EAction.getOptionsToolBar();
    var w = optionsToolBar.findChild("Copy");
    w.setChecked(false);

    this.setState(Translate.State.SettingReferencePoint);
}


TranslateNoCopy.init = function(basePath) {
    var action = new RGuiAction(qsTr("Move"), RMainWindowQt.getMainWindow());
    action.setRequiresDocument(true);
    action.setRequiresSelection(true);
    action.setScriptFile(basePath + "/TranslateNoCopy.js");
    action.setIcon(basePath + "/TranslateNoCopy.svg");
    action.setStatusTip(qsTr("Move/Copy with Copy turned off"));
    action.setDefaultShortcut(new QKeySequence("m,m"));
    action.setDefaultCommands(["mvn","mv0","mm"]);
    action.setGroupSortOrder(13100);
    action.setSortOrder(101);
    action.setWidgetNames(["ModifyMenu", "ModifyToolBar", "ModifyToolsPanel", "ModifyMatrixPanel"]);
};
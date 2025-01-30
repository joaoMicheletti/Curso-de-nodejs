const sheetName = 'Dados';
const scriptProp = PropertiesService.getScriptProperties();

function initialSetup(){
    const activeSpreadsheet = SpreadsheetApp.getActiviSpreadsheet();
    scriptProp.setProperty('key', activeSpreadsheet.hetID());
}

function doPost (e) {
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);
}
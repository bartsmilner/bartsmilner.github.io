//Installation;
//npm install sync-request;
//Then in terminal run 
//node testAPID 
//from the same directory as this file and the sync-request installation;

//if it fails after AUTH, update sid: ;

var request = require('sync-request');
var fs = require('fs');

var Auth_get = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Auth_get.json')),
  Portfolios_save = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Portfolios_save.json')),
  Portfolios_list = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Portfolios_list.json')),
  Portfolios_del = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Portfolios_del.json')),
  Report_status = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Report_status.json')),
  Users_stats = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Users_stats.json')),
  Users_list = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Users_list.json')),
  Resources_list = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Resources_list.json')),
  Notify_count = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Notify_count.json')),
  Notify_list = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Notify_list.json')),
  Portfolio_export_StandardSecuritiesPositionCSV = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Portfolio_export_StandardSecuritiesPosition(CSV).json')),
  Portfolio_export_StandardCashPositionCSV = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Portfolio_export_StandardCashPosition(CSV).json')),
  Portfolio_export_ActivityStatementPDF = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Portfolio_export_ActivityStatementPDF.json')),
  Portfolio_export_AnalyticReportPDF = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Portfolio_export_AnalyticReportPDF.json')),
  Portfolios_list_pos_ed = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Portfolios_list_pos_ed.json')),
  Portfolios_listAccounts_all = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Portfolios_listAccounts_all.json')),
  Resources_listRelations = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Resources_listRelations.json')),
  Portfolios_listAccounts_active = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Portfolios_listAccounts_active.json')),
  Assets_list_aa = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Assets_list_aa.json')),
  Assets_list_key = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Assets_list_key.json')),
  Transactions_preview_aapl = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Transactions_preview_aapl.json')),
  Transactions_save_aapl_100 = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Transactions_save_aapl_100.json')),
  Transactions_save_ccy_USD7000 = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Transactions_save_ccy_USD7000.json')),
  Task_reportStatusHistory = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Task_reportStatusHistory.json')),
  Transactions_list = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Transactions_list.json')),
  Assets_list = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Assets_list.json')),
  Close_position_aapl_118613 = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Close_position_aapl_118613.json')),
  Import_standard_sec_pos = fs.readFileSync(__dirname + '/importCSV/FINCLUSTER-POSITION_SEC_CSV_sample_453756.csv','utf8'),
  Import_standard_cash_pos = fs.readFileSync(__dirname + '/importCSV/FINCLUSTER-POSITION_CASH_CSV_sample_453756.csv','utf8'),
  IMPORT_POSITION_SEC_CSV_headers = fs.readFileSync(__dirname + '/importCSV/FINCLUSTER-POSITION_SEC_CSV_headers.csv','utf8'),
  IMPORT_POSITION_CASH_CSV_headers = fs.readFileSync(__dirname + '/importCSV/FINCLUSTER-POSITION_CASH_CSV_headers.csv','utf8'),
  Import_run_sec_pos = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Import_run_sec_pos.json')),
  Import_run_cash_pos = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Import_run_cash_pos.json')),
  Resources_list_agenda = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Resources_list_agenda.json')),
  portfolioOrders = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/portfolioOrders.json')),
  Resources_save_agenda = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Resources_save_agenda.json')),
  Resources_list_agenda_event = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Resources_list_agenda_event.json')),
  Resources_edit_save_agenda = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Resources_edit_save_agenda.json')),
  File_save_jpeg = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/File_save_jpeg.json')),
  Resources_list_file_get = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Resources_list_file_get.json')),
  Resources_saveRelations_share_file = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Resources_saveRelations_share_file.json')),
  Resources_list_search_ACCOUNTS_by_chars = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Resources_list_search_ACCOUNTS_by_chars.json')),
  Resources_list_search_ACCOUNTS_by_key = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Resources_list_search_ACCOUNTS_by_key.json')),
  Portfolios_saveAccounts_ALLIANZ = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Portfolios_saveAccounts_ALLIANZ.json')),
  Portfolios_saveAccounts_Fideuram = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Portfolios_saveAccounts_Fideuram.json')),
  Portfolios_saveAccounts_Fideuram_Edit = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Portfolios_saveAccounts_Fideuram_Edit.json')),
  Portfolios_delAccounts_Fideuram = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Portfolios_delAccounts_Fideuram.json')),
  Transactions_save_sell_50BMW = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Transactions_save_sell_50BMW.json')),
  Transactions_save_sell_cash_BaseEuros = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Transactions_save_sell_cash_BaseEuros.json')),
  IMPORT_TRANSACTIONS_SEC_CSV_headers = fs.readFileSync(__dirname + '/importCSV/IMPORT_TRANSACTIONS_SEC_CSV_headers.csv','utf8'),
  IMPORT_PORTFOLIO_TRANSACTIONS = fs.readFileSync(__dirname + '/importCSV/IMPORT_PORTFOLIO_TRANSACTIONS_3994495.csv','utf8'),
  Transactions_preview_CHF7000 = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Transactions_preview_CHF7000.json')),
  Transactions_save_10GOOG_updateCash = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Transactions_save_10GOOG_updateCash.json')),
  portfolioOrdersPreview = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/portfolioOrdersPreview.json')),
  Transactions_save_ORDER_aapl = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Transactions_save_ORDER_aapl.json')),
  res, resObj, auth, newTestID, oldTestID = null, oldTestID1 = null, histTestID = null, activeAccount = null;

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';//to prevent Error: UNABLE_TO_VERIFY_LEAF_SIGNATURE;

//function Auth_get;//change username and password!;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Auth/get', {'json': {"username":"b.milner","password":"fcos14!"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nAUTH_get required only;',resObj);
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Auth/get', {'json': Auth_get});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nAUTH_get all params;',resObj);
auth = resObj.sid;

//function Portfolios_save;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Portfolios/save', {'json': {"Portfolios_name":"001testAPI1","sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolio_save required only;',resObj);
Portfolios_save.sid = auth;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Portfolios/save', {'json': Portfolios_save});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolio_save all params;', resObj);
newTestID = JSON.parse(res.getBody('utf8'));

//function Portfolios_list;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Portfolios/list', {'json': {"sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_list required only',resObj);
Portfolios_list.sid = auth;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Portfolios/list', {'json': Portfolios_list});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_list all params', resObj);

//get previous portfolio tests - for housekeeping;
for(var I = 0; I < resObj.rows.length; I++){
  if(resObj.rows[I].Portfolios_name == "001testAPI" && resObj.rows[I].Portfolios_key != newTestID.Portfolios_key){
    oldTestID = resObj.rows[I].Portfolios_key;
  }
  if(resObj.rows[I].Portfolios_name == "001testAPI1"){
    oldTestID1 = resObj.rows[I].Portfolios_key;
  }
  if(resObj.rows[I].Portfolios_name == "001testMochaIOHist"){
    histTestID = resObj.rows[I].Portfolios_key;
    //console.log('histTestID', histTestID);
  }
}

//function Portfolios_del;//keep current 001testAPI only;
//delete 001testAPI1;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Portfolios/del', {'json': {"qwhere":" AND \"Portfolios\".\"key\" in ("+ oldTestID1 + ")","sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_del required only;',resObj);
//delete previous 001testAPI;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Portfolios/del', {'json': {"qwhere":" AND \"Portfolios\".\"key\" in ("+ oldTestID + ")","sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_del required only;',resObj);
Portfolios_del.sid = auth;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Portfolios/del', {'json': Portfolios_del});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_del all params;',resObj);

//function Report_status;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Report/status', {'json': {"Portfolios_keys":[ newTestID.Portfolios_key],"sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nReport_status required only;',resObj);
Report_status.sid = auth;
Report_status.Portfolios_keys = newTestID.Portfolios_key;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Report/status', {'json': Report_status});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nReport_status all params;',resObj);

//function Users_stats
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Users/stats', {'json': {"sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nUsers_stats required only',resObj);
Users_stats.sid = auth;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Users/stats', {'json': Users_stats});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nUsers_stats all params', resObj);

//function Users_list
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Users/list', {'json': {"sid":auth,"qwhere":" AND (\"Users\".\"key\" = '400073')"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nUsers_list required only',resObj);
Users_list.sid = auth;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Users/list', {'json': Users_list});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nUsers_list all params', resObj);

//function Resources_list
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/list', {'json': {"sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_list required only',resObj);
Resources_list.sid = auth;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/list', {'json': Resources_list});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_list all params', resObj);

//function Notify_count//no longer in use

//function Notify_list
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Notify/list', {'json': {"sid":auth,"qcnt":0,rows: 10}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nNotify_list required only',resObj);

//for unread include "qwhere":" AND \"Notify\".read = 0 AND \"Notify\".lev >= 4 ",
//"qcnt":1 returns eg { rows: [ { count: '7126' } ], page: 1 }

/*Notify_list.sid = auth;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Notify/list', {'json': Notify_list});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nNotify_list all params', resObj);*/


//function Export_file: schema FINCLUSTER-POSITION_SEC_CSV
newTestID.Portfolios_key = [newTestID.Portfolios_key];
//console.log('newTestID.Portfolios_key', newTestID.Portfolios_key);
res = request('POST', 'https://paolo.fincluster.com:8081/api/NS-FINCLUSTER/Export/file', {'json': {"sid":auth, "schema":"FINCLUSTER-POSITION_SEC_CSV","Portfolios_keys":newTestID.Portfolios_key}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nExport_file required only',resObj);
Portfolio_export_StandardSecuritiesPositionCSV.sid = auth;
Portfolio_export_StandardSecuritiesPositionCSV.Portfolios_keys = newTestID.Portfolios_key;
res = request('POST', 'https://paolo.fincluster.com:8081/api/NS-FINCLUSTER/Export/file', {'json': Portfolio_export_StandardSecuritiesPositionCSV});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nExport_file all params', resObj);

var exportSecPortfolioData = new Buffer(resObj.file.content, 'base64').toString('ascii');
console.log('\nexportSecPortfolioData', exportSecPortfolioData);

//function Export_file: schema FINCLUSTER-POSITION_CASH_CSV
res = request('POST', 'https://paolo.fincluster.com:8081/api/NS-FINCLUSTER/Export/file', {'json': {"sid":auth, "schema":"FINCLUSTER-POSITION_CASH_CSV","Portfolios_keys":newTestID.Portfolios_key}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nExport_file required only',resObj);
Portfolio_export_StandardCashPositionCSV.sid = auth;
Portfolio_export_StandardCashPositionCSV.Portfolios_keys = newTestID.Portfolios_key;
res = request('POST', 'https://paolo.fincluster.com:8081/api/NS-FINCLUSTER/Export/file', {'json': Portfolio_export_StandardCashPositionCSV});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nExport_file all params', resObj);

var exportCashPortfolioData = new Buffer(resObj.file.content, 'base64').toString('ascii');
console.log('\nexportCashPortfolioData', exportCashPortfolioData);

//function Export_file: schema FINCLUSTER-PORTFOLIO_POSITION_NEW_PDF
/*res = request('POST', 'https://paolo.fincluster.com:8081/api/NS-FINCLUSTER/Export/file', {'json': {"sid":auth, "schema":"FINCLUSTER-PORTFOLIO_POSITION_NEW_PDF","Portfolios_keys":newTestID.Portfolios_key}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nExport_file required only',resObj);
Portfolio_export_ActivityStatementPDF.sid = auth;
Portfolio_export_ActivityStatementPDF.Portfolios_keys = newTestID.Portfolios_key;
res = request('POST', 'https://paolo.fincluster.com:8081/api/NS-FINCLUSTER/Export/file', {'json': Portfolio_export_ActivityStatementPDF});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nExport_file all params', resObj);*/


//function Export_file: schema FINCLUSTER-PORTFOLIO_PDF
//id set to 001testMochaIOHist;//reset after dbase update;
/*res = request('POST', 'https://paolo.fincluster.com:8081/api/NS-FINCLUSTER/Export/file', {'json': {"sid":auth, "schema":"FINCLUSTER-PORTFOLIO_PDF","Portfolios_keys":[histTestID],"startDate":"2015-06-25"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nExport_file required only',resObj);
Portfolio_export_AnalyticReportPDF.sid = auth;
Portfolio_export_AnalyticReportPDF.Portfolios_keys = [histTestID];
res = request('POST', 'https://paolo.fincluster.com:8081/api/NS-FINCLUSTER/Export/file', {'json': Portfolio_export_AnalyticReportPDF});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nExport_file all params', resObj);*/


//function Portfolios_list;For this portfolio (pos ed)
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Portfolios/list', {'json': {"sid":auth,"Portfolios_keys":newTestID.Portfolios_key,"qwhere":" AND (\"Portfolios\".\"key\" in (" + newTestID.Portfolios_key[0] + "))"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_list required for this portfolio only',resObj);
Portfolios_list_pos_ed.sid = auth;
Portfolios_list_pos_ed.Portfolios_keys = newTestID.Portfolios_key;
Portfolios_list_pos_ed.qwhere = " AND (\"Portfolios\".\"key\" in (" +Portfolios_list_pos_ed.Portfolios_keys + "))";
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Portfolios/list', {'json': Portfolios_list_pos_ed});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_list all params', resObj);

//function Portfolios_listAccounts;//pos ed 1
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Portfolios/listAccounts', {'json': {"sid":auth,"Accounts_PortfoliosKey":newTestID.Portfolios_key,"qwhere":" AND (\"Accounts\".\"PortfoliosKey\" = " + newTestID.Portfolios_key[0] + ")"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_listAccounts required for this portfolio only',resObj);
Portfolios_listAccounts_all.sid = auth;
Portfolios_listAccounts_all.Accounts_PortfoliosKey = newTestID.Portfolios_key;
Portfolios_listAccounts_all.qwhere = " AND (\"Accounts\".\"PortfoliosKey\" = " + newTestID.Portfolios_key[0] + ")";
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Portfolios/listAccounts', {'json': Portfolios_listAccounts_all});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_listAccounts all params', resObj);

activeAccount = resObj.rows[0].Accounts_key;
console.log('activeAccount', activeAccount);

//function Resources_listRelations;001testMochaIOHist: 4829283//2*PORTFOLIO-ORGANIZATION, 1*CRM//pos ed 1
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/listRelations', {'json': {"sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_listRelations required for this portfolio only',resObj);
//"Relations_Resources1Key": histTestID,
//Resources_listRelations.Accounts_PortfoliosKey = newTestID.Portfolios_key;
Resources_listRelations.sid = auth;
Resources_listRelations.qwhere = " AND (\"Relations\".\"Resources1Key\" = " + histTestID + ") AND (\"Relations\".\"type\" in ('PORTFOLIO-ORGANIZATION','PORTFOLIO-CRM'))";
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/listRelations', {'json': Resources_listRelations});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_listRelations all params', resObj);

//function Portfolios_listAccounts;//active account - pos ed 2
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Portfolios/listAccounts', {'json': {"sid":auth,"Portfolios_key":newTestID.Portfolios_key,"qwhere":" AND (\"Accounts\".\"key\" = " + activeAccount + ")"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_listAccounts required for this portfolio only',resObj);
Portfolios_listAccounts_active.sid = auth;
Portfolios_listAccounts_active.Portfolios_Key = newTestID.Portfolios_key;
Portfolios_listAccounts_active.Accounts_key  = activeAccount;
Portfolios_listAccounts_active.qwhere = " AND (\"Accounts\".\"key\" = " + activeAccount + ")";
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Portfolios/listAccounts', {'json': Portfolios_listAccounts_active});
//console.log('res', res);
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_listAccounts all params', resObj);

//function assets_list;//search chars;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Assets/list', {'json': {"sid":auth,
  "qwhere":" AND (\"Assets\".\"AssetID\" ilike '%aa%' or \"Assets\".\"AssetName\" ilike '%aa%' or \"Assets\".\"AssetShortName\" ilike '%aa%' or \"Assets\".\"AssetTicker\" ilike '%aa%' or \"Assets\".\"AssetFeederCode\" ilike '%aa%' or \"Assets\".\"AssetIsin\" ilike '%aa%')"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nAssets_list chars required params',resObj);
Assets_list_aa.sid = auth;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Assets/list', {'json': Assets_list_aa});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nAssets_list chars all params', resObj);

//function assets_list;//search Assets key;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Assets/list', {'json': {"sid":auth,"qwhere":" AND (\"Assets\".\"key\" = '118613')"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nAssets_list key required params',resObj);
Assets_list_key.sid = auth;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Assets/list', {'json': Assets_list_key});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nAssets_list key all params', resObj);

//function transactions_preview;//transactions;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/preview', {'json': {"sid":auth,"Trades_AssetsKey":"118613"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_preview key required params',resObj);
Transactions_preview_aapl.sid = auth;
Transactions_preview_aapl.Trades_PortfoliosKey = newTestID.Portfolios_key;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/preview', {'json': Transactions_preview_aapl});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_preview_aapl all params', resObj);

//function Transactions_save: equity (aapl) POSITION;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/save', {'json': {"sid":auth,"Trades_PortfoliosKey":newTestID.Portfolios_key,"Trades_AssetsKey":"118613","Trades_AccountsKey": activeAccount,"Trades_quota":"200","Trades_stage":"trade","Trades_group":"SECURITY","Trades_action":"POS","Trades_status":"POSITION","Trades_currency":"USD"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save_aapl_100 required params',resObj);
Transactions_save_aapl_100.sid = auth;
Transactions_save_aapl_100.Trades_PortfoliosKey = newTestID.Portfolios_key;
Transactions_save_aapl_100.Trades_AccountsKey = activeAccount;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/save', {'json': Transactions_save_aapl_100});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save_aapl_100 all params', resObj);

//function Transactions_save: fx ccy;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/save', {'json': {"sid":auth,"Trades_PortfoliosKey":newTestID.Portfolios_key,"Trades_AssetsKey":"118686","Trades_AccountsKey": activeAccount,"Trades_amount":"1000","Trades_quota":"1000","Trades_stage":"trade","Trades_group":"CASH","Trades_action":"POS","Trades_status":"POSITION","Trades_currency":"USD","Trades_changeCurrency":"EUR","Trades_netAmount":null,"Trades_price":null,"Trades_change":null}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save USD$1000 required params',resObj);
Transactions_save_ccy_USD7000.sid = auth;
Transactions_save_ccy_USD7000.Trades_PortfoliosKey = newTestID.Portfolios_key;
Transactions_save_ccy_USD7000.Trades_AccountsKey = activeAccount;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/save', {'json': Transactions_save_ccy_USD7000});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save_ccy_USD7000 all params', resObj);

//function Task_push;//Task_reportStatusHistory template;
res = request('POST', 'https://paolo.fincluster.com:8081/api/NS-FINCLUSTER/Task/push', {'json':{"sid":auth,"task":{"action":"Task_reportStatusHistory","data":{"qwhere":" AND \"Portfolios\".key IN (" + newTestID.Portfolios_key + ")","startDate":"2015-11-24"}}}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTask_push Task_reportStatusHistory required params',resObj);
Task_reportStatusHistory.sid = auth;
Task_reportStatusHistory.task.data.qwhere = " AND \"Portfolios\".key IN (" + newTestID.Portfolios_key + ")";
res = request('POST', 'https://paolo.fincluster.com:8081/api/NS-FINCLUSTER/Task/push', {'json': Task_reportStatusHistory});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTask_push Task_reportStatusHistory all params', resObj);

//function Transactions_list;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/list', {'json':{"sid":auth,"qwhere":" AND (\"Portfolios\".\"key\" = '" + newTestID.Portfolios_key + "') AND (\"Trades\".\"stage\" = 'trade') AND (\"Trades\".\"status\" in ('FILLED', 'PART-FILLED', 'CANCELED', 'ARCHIVED', 'POSITION', 'SIMULATED', 'CASH-UPDATE', 'ARCHIVED')) AND (\"Trades\".\"date\" >= '2014-11-26' AND \"Trades\".\"date\" <= '2015-12-04')"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\n Transactions_list required params',resObj);
Transactions_list.sid = auth;
Transactions_list.qwhere = " AND (\"Portfolios\".\"key\" = '" + newTestID.Portfolios_key + "') AND (\"Trades\".\"stage\" = 'trade') AND (\"Trades\".\"status\" in ('FILLED', 'PART-FILLED', 'CANCELED', 'ARCHIVED', 'POSITION', 'SIMULATED', 'CASH-UPDATE', 'ARCHIVED')) AND (\"Trades\".\"date\" >= '2014-11-26' AND \"Trades\".\"date\" <= '2015-12-04')";
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/list', {'json': Transactions_list});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_list all params', resObj);

//function Assets_list
//show 25 of Securities all as of left nav panel
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Assets/list', {'json':{"sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\n Assets_list Securities (all) required params',resObj);
Assets_list.sid = auth;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Assets/list', {'json': Assets_list});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nAssets_list Securities (25) all params', resObj);


//function Transactions_save;//Close position equity -aapl
/*res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/save', {'json': {"Trades_PortfoliosKey":newTestID,"Trades_stage":"trade","Trades_action":"POS","Trades_status":"POSITION","Trades_group":"SECURITY","Trades_currency":"USD","Trades_AssetsKey":"118613","sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save aapl close position',resObj);*/
Close_position_aapl_118613.sid = auth;
Close_position_aapl_118613.Trades_PortfoliosKey = newTestID.Portfolios_key;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/save', {'json': Close_position_aapl_118613});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save aapl close position req params', resObj);

//Close position USD
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/save', {'json': {"Trades_PortfoliosKey":newTestID.Portfolios_key,"Trades_stage":"trade","Trades_action":"POS","Trades_status":"POSITION","Trades_group":"CASH","Trades_currency":"USD","Trades_AssetsKey":"118686","sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save USD close position',resObj);

//Close position EUR
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/save', {'json': {"Trades_PortfoliosKey":newTestID.Portfolios_key,"Trades_stage":"trade","Trades_action":"POS","Trades_status":"POSITION","Trades_group":"CASH","Trades_currency":"EUR","Trades_AssetsKey":"118685","sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save EUR close position',resObj);

//function Import_run Standard Security Position CSV;
//console.log('\nImport_standard_sec_pos', Import_standard_sec_pos);
Import_standard_sec_pos = Import_standard_sec_pos.split('453756').join(newTestID.Portfolios_key);
//console.log('\nImport_standard_sec_pos + this portfolio id', Import_standard_sec_pos);

//Check sample headers;
/*var IMPORT_POSITION_SEC_CSV_headers_Base64 = new Buffer(IMPORT_POSITION_SEC_CSV_headers).toString('base64');
//console.log('\nIMPORT_POSITION_SEC_CSV_headers_Base64', IMPORT_POSITION_SEC_CSV_headers_Base64);*/

var importSecPortfolioDataBase64 = new Buffer(Import_standard_sec_pos).toString('base64');
//console.log('\nimportSecPortfolioDataBase64', importSecPortfolioDataBase64);

res = request('POST', 'https://paolo.fincluster.com:8081/api/NS-FINCLUSTER/Import/run', {'json': {"sid":auth,"Portfolios_keys":newTestID.Portfolios_key,"content":importSecPortfolioDataBase64,"delimiter":",","fmtdate":"YYYY-MM-DD","fmtnum":"std","schema":"FINCLUSTER-POSITION_SEC_CSV","fileName":"FINCLUSTER-POSITION_SEC_CSV_sample.csv","delayed":1,"Companies_key":3}});

/*res = request('POST', 'https://paolo.fincluster.com:8081/api/NS-FINCLUSTER/Import/run', {'json': {"sid":auth,"Portfolios_keys":newTestID.Portfolios_key,"content":importSecPortfolioDataBase64,"schema":"FINCLUSTER-POSITION_SEC_CSV"}});*/

resObj = JSON.parse(res.getBody('utf8'));
console.log('\nImport_run sample standard security position req params',resObj);

Import_run_sec_pos.sid = auth;
Import_run_sec_pos.Portfolios_keys = newTestID.Portfolios_key;
Import_run_sec_pos.content = importSecPortfolioDataBase64;
res = request('POST', 'https://paolo.fincluster.com:8081/api/NS-FINCLUSTER/Import/run', {'json': Import_run_sec_pos});
//console.log('\nImport_run_sec_pos', Import_run_sec_pos);
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nImport_run sec position all params', resObj);
console.log('\ndelayed: 1 - omitted');

//function Import_run Standard Cash Position CSV;
Import_standard_cash_pos = Import_standard_cash_pos.split('453756').join(newTestID.Portfolios_key);
var importCashPortfolioDataBase64 = new Buffer(Import_standard_cash_pos).toString('base64');
//console.log('\nimportCashPortfolioDataBase64', importCashPortfolioDataBase64);

res = request('POST', 'https://paolo.fincluster.com:8081/api/NS-FINCLUSTER/Import/run', {'json': {"sid":auth,"Portfolios_keys":newTestID.Portfolios_key,"content":importCashPortfolioDataBase64,"schema":"FINCLUSTER-POSITION_CASH_CSV"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nImport_run sample standard cash position req params',resObj);

Import_run_cash_pos.sid = auth;
Import_run_cash_pos.Trades_PortfoliosKey = newTestID.Portfolios_key;
Import_run_cash_pos.content = importCashPortfolioDataBase64;
res = request('POST', 'https://paolo.fincluster.com:8081/api/NS-FINCLUSTER/Import/run', {'json': Import_run_cash_pos});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nImport_run cash position all params', resObj);


//function Transactions_save: equity BUY 200 BMW;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/save', {'json': {"sid":auth,"Trades_PortfoliosKey":newTestID.Portfolios_key,"Trades_AssetsKey":"5071079","Trades_AccountsKey": activeAccount,"Trades_quota":200,"Trades_stage":"trade","Trades_group":"SECURITY","Trades_action":"BUY","Trades_status":"FILLED","Trades_currency":"EUR"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save_buy_200BMW required params',resObj);
var delTest1 = resObj.Trades_key;
//function Transactions_save: equity SELL 50 BMW;
Transactions_save_sell_50BMW.sid = auth;
Transactions_save_sell_50BMW.Trades_PortfoliosKey = newTestID.Portfolios_key;
Transactions_save_sell_50BMW.Trades_AccountsKey = activeAccount;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/save', {'json': Transactions_save_sell_50BMW});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save_sell_50BMW all params', resObj);



//Check Import Portfolio Transactions sample headers;
var IMPORT_TRANSACTIONS_SEC_CSV_headers_Base64 = new Buffer(IMPORT_TRANSACTIONS_SEC_CSV_headers).toString('base64');
//console.log('\nIMPORT_TRANSACTIONS_SEC_CSV_headers_Base64', IMPORT_TRANSACTIONS_SEC_CSV_headers_Base64);

res = request('POST', 'https://paolo.fincluster.com:8081/api/NS-FINCLUSTER/Import/run', {'json': {"sid":auth,"Portfolios_keys":newTestID.Portfolios_key,"content":IMPORT_TRANSACTIONS_SEC_CSV_headers_Base64,"delimiter":",","fmtdate":"YYYY-MM-DD","fmtnum":"std","schema":"FINCLUSTER-TRANSACTIONS_CSV","fileName":"sample_trades.csv","delayed":1,"Companies_key":3}});

resObj = JSON.parse(res.getBody('utf8'));
console.log('\nImport_run transactions sample headers inc optionals with req params',resObj);

//function Transactions_save: cash BUY €1500;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/save', {'json': {"sid":auth,"Trades_PortfoliosKey":newTestID.Portfolios_key,"Trades_AssetsKey":"118685","Trades_AccountsKey": activeAccount,"Trades_quota":1500,"Trades_stage":"trade","Trades_group":"CASH","Trades_action":"BUY","Trades_status":"FILLED","Trades_currency":"EUR"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save_buy_€1500 required params',resObj);
//function Transactions_save: cash SELL €500;
Transactions_save_sell_cash_BaseEuros.sid = auth;
Transactions_save_sell_cash_BaseEuros.Trades_PortfoliosKey = newTestID.Portfolios_key;
Transactions_save_sell_cash_BaseEuros.Trades_AccountsKey = activeAccount;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/save', {'json': Transactions_save_sell_cash_BaseEuros});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save_sell_cash_BaseEuros 500 all params', resObj);
var delTest2 = resObj.Trades_key;

//Check Import Portfolio Transactions;
IMPORT_PORTFOLIO_TRANSACTIONS = IMPORT_PORTFOLIO_TRANSACTIONS.split('3994495').join(newTestID.Portfolios_key);

var IMPORT_PORTFOLIO_TRANSACTIONS_Base64 = new Buffer(IMPORT_PORTFOLIO_TRANSACTIONS).toString('base64');
//console.log('\nIIMPORT_PORTFOLIO_TRANSACTIONS_Base64', IMPORT_PORTFOLIO_TRANSACTIONS_Base64);

res = request('POST', 'https://paolo.fincluster.com:8081/api/NS-FINCLUSTER/Import/run', {'json': {"sid":auth,"Portfolios_keys":newTestID.Portfolios_key,"content":IMPORT_PORTFOLIO_TRANSACTIONS_Base64,"delimiter":",","fmtdate":"YYYY-MM-DD","fmtnum":"std","schema":"FINCLUSTER-TRANSACTIONS_CSV","fileName":"IMPORT_PORTFOLIO_TRANSACTIONS.csv","delayed":1,"Companies_key":3}});

resObj = JSON.parse(res.getBody('utf8'));
console.log('\nIMPORT_PORTFOLIO_TRANSACTIONS req params',resObj);

//delete a security and a cash transaction;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/del', {'json': {"sid":auth, "qwhere": " AND \"Trades\".\"key\" in (" + delTest1 + "," + delTest2 + ")"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_del 2 transactions required params',resObj);
//Trans_del.json - not included here, but used in index.md

//function Transaction_preview 7000 CHF base Euro
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/preview', {'json': {"sid":auth,"Trades_AssetsKey":"3367103","Trades_quota":"70000"}});

Transactions_preview_CHF7000.sid = auth;
Transactions_preview_CHF7000.Portfolios_keys = newTestID.Portfolios_key;
Transactions_preview_CHF7000.Trades_AccountsKey = activeAccount;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/preview', {'json': Transactions_preview_CHF7000});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_preview transactions 7000 CHF with req params',resObj);
//console.log(JSON.stringify(resObj));

//Add 10 GOOG Transactions_save;//not in FINCLUSTER API reference;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/save', {'json': {"sid":auth,"Trades_data":{"validityDate":"2016-01-19","updateCash":true},"Trades_stage":"trade","Trades_class":"DEFAULT","Trades_group":"SECURITY","Trades_action":"BUY","Trades_commissionType":"ABSOLUTE","Trades_changeCurrency":"EUR","Trades_AssetsKey":"118614","Trades_currency":"USD","Trades_settleDate":"2016-01-05","Trades_status":"FILLED","Trades_PortfoliosKey":newTestID.Portfolios_key,"Trades_AccountsKey":activeAccount,"Trades_quota":10,"Trades_amount":null,"Trades_netAmount":null,"Trades_price":null,"Trades_change":null,"Trades_commission":"150","customerSaveProcess":1,"Trades_psign":1,"Companies_key":3}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save 16-01-05 10 GOOG all params',resObj);
var tradesKey = resObj.Trades_key;

Transactions_save_10GOOG_updateCash.sid = auth;
Transactions_save_10GOOG_updateCash.Trades_PortfoliosKey = newTestID.Portfolios_key;
Transactions_save_10GOOG_updateCash.Trades_AccountsKey = activeAccount;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/save', {'json': Transactions_save_10GOOG_updateCash});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save transactions 10 GOOG updateCash with all params',resObj);

//Edit -> 12 GOOG Transactions_save;
/*res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/save', {'json': {"sid":auth,"Trades_AssetsKey":"118614","Trades_currency":"USD","Trades_key":tradesKey,"Trades_PortfoliosKey":newTestID.Portfolios_key,"Trades_AccountsKey":activeAccount,"Trades_quota":12,"Trades_group":"SECURITY"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save edit -> 12 GOOG req params',resObj);*/

//updateCash -> true; update to 12 GOOG and updateCash with Transactions_save;//not in FINCLUSTER API reference;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/save', {'json': {"sid":auth,"Trades_data":{"updateCash":true},"Trades_stage":"trade","Trades_group":"SECURITY","Trades_currency":"USD","Trades_AssetsKey":"118614","Trades_key":tradesKey,"Trades_PortfoliosKey":newTestID.Portfolios_key,"Trades_AccountsKey":activeAccount,"Trades_quota":12,"customerSaveProcess":1}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save 12 GOOG  update cash req params',resObj);

//function Resources_save AGENDA
//newTestID.Portfolios_key is not parsed without [0];
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/save', {'json': {"Resources_type":"EVENT","Resources_data":{"type":"info","endsAt":"2015-12-09T16:47:32+00:00","startsAt":"2015-12-09T12:47:32+00:00"},"relations":[{"type":"RESOURCE-EVENT","Resources1_key":newTestID.Portfolios_key[0]}],"Resources_name":"TestAgenda","Companies_key":3,"sid":auth}});
//console.log({"Resources_type":"EVENT","Resources_data":{"type":"info","endsAt":"2015-12-09T16:47:32+00:00","startsAt":"2015-12-09T12:47:32+00:00"},"relations":[{"type":"RESOURCE-EVENT","Resources1_key":newTestID.Portfolios_key[0]}],"Resources_name":"TestAgenda","Companies_key":3,"sid":auth});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_save AGENDA -> EVENT (1) req only',resObj);

Resources_save_agenda.sid = auth;
Resources_save_agenda.relations[0].Resources1_key = newTestID.Portfolios_key[0];
//console.log('Resources_save_agenda', Resources_save_agenda);
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/save', {'json': Resources_save_agenda});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_save all params', resObj);

//function Resources_list AGENDA: all Events; 
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/list', {'json': {"sid":auth,"qwhere":" AND (\"Resources\".\"type\" in ('EVENT'))"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_list (all EVENTs) required only',resObj);

//Agenda: two new events;
Resources_list_agenda.sid = auth;
Resources_list_agenda.Relations_Resources1Key = newTestID.Portfolios_key[0];
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/list', {'json': Resources_list_agenda});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_list Agenda (1 event) all params', resObj);
var event0 = resObj.rows[0].Resources_key;
var event1 = resObj.rows[1].Resources_key;

//function Resources_list AGENDA: one Event; 
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/list', {'json': {"sid":auth,"qwhere":" AND (\"Resources\".\"key\" = " + event0 + ")"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_list Agenda with Resources_key - required only',resObj);

Resources_list_agenda_event.sid = auth;
Resources_list_agenda_event.Resources_key = event1;
Resources_list_agenda_event.qwhere = " AND (\"Resources\".\"key\" = " + event1 + ")";
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/list', {'json': Resources_list_agenda_event});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_list Agenda with Resources_key all params', resObj);

//Resources_save EVENT edit and save
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/save', {'json': {"sid":auth,"Resources_key":event0,"Resources_name":"TestAgenda - edit"}});
console.log('res', res);
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_save AGENDA save from edit - required only',resObj);

Resources_edit_save_agenda.sid = auth;
Resources_edit_save_agenda.relations[0].Resources1_key = newTestID.Portfolios_key[0];
Resources_edit_save_agenda.Resources_key = event1;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/save', {'json': Resources_edit_save_agenda});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_save edit Agenda Event all params', resObj);

//Resources_del EVENT delete
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/del', {'json': {"sid":auth,"qwhere":" AND \"Resources\".\"key\" = " + event1}});
//console.log('res', res);
//resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_del AGENDA Event - required only',resObj);

File_save_jpeg.sid = auth;
File_save_jpeg.files[0].Relations_Resources1Key = newTestID.Portfolios_key[0];
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/File/save', {'json': File_save_jpeg});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nFile_save jpeg all params', resObj);
var file1ID = resObj[1].resource.Resources_key;
//console.log('file1ID', file1ID);

//function File_download DOCUMENTS jpeg;
res = request('POST', 'https://paolo.fincluster.com:8081/api/NS-FINCLUSTER/File/download', {'json': {"sid":auth,"Resources_key":file1ID}});
//console.log('res', res);
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nFile_download - required only',resObj);

//Resources_list get file
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/list', {'json': {"sid":auth,"qwhere":" AND (\"Resources\".\"name\"::text ilike '%london_rent_map2.jpg%')"}});
console.log('\nResources_list get jpeg file - required only',resObj);
Resources_list_file_get.sid = auth;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/list', {'json': Resources_list_file_get});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_list get jpeg file all params', resObj);

//Resources_saveRelations file share
//Andrea
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/saveRelations', {'json': {"sid":auth,"Relations_Resources1Key":"400182","Relations_Resources2Key":file1ID,"Relations_type":"SHARE"}});
//console.log('res', res);
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_saveRelations share file - required only',resObj);
//Agent1
Resources_saveRelations_share_file.sid = auth;
Resources_saveRelations_share_file.Relations_Resources1Key = "400088";
Resources_saveRelations_share_file.Relations_Resources2Key = file1ID;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/saveRelations', {'json': Resources_saveRelations_share_file});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_saveRelations share file all params', resObj);

//Resources_del file
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/del', {'json': {"sid":auth,"qwhere":" AND \"Resources\".\"key\" in (" + file1ID + ")"}});
//console.log('res', res);
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_del delete file - required only',resObj);

//Portfolios_listAccounts ACCOUNTS
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Portfolios/listAccounts', {'json': {"sid":auth,"qwhere":" AND (\"Portfolios\".\"key\" = " + file1ID + ")"}});
//console.log('res', res);
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_listAccounts - required only',resObj);

//Resources_list ACCOUNTS find by chars
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/list', {'json': {"sid":auth,"qwhere":" AND \"Resources\".\"type\" in ('ORGANIZATION') AND (\"Resources\".\"name\" ilike '%fi%')"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_list_search_ACCOUNTS_by_chars - required only',resObj);
console.log('\nResources_list_search_ACCOUNTS_by_chars - resObj.Resources_data',resObj.rows[0].Resources_data);

Resources_list_search_ACCOUNTS_by_chars.sid = auth;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/list', {'json': Resources_list_search_ACCOUNTS_by_chars});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_list_search_ACCOUNTS_by_chars - all params', resObj);

//Resources_list ACCOUNTS find by Resources_key: ALLIANZ
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/list', {'json': {"sid":auth,"qwhere":" AND (\"Resources\".\"key\" = '120976')"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_list_search_ACCOUNTS_by_key - required only',resObj);

Resources_list_search_ACCOUNTS_by_key.sid = auth;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/list', {'json': Resources_list_search_ACCOUNTS_by_key});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_list_search_ACCOUNTS_by_key- all params', resObj);

//Portfolios_saveAccounts ACCOUNTS - New - find by Resources_key: Fideuram
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Portfolios/saveAccounts', {'json':
{"sid":auth,"Accounts_PortfoliosKey":newTestID.Portfolios_key[0],"Accounts_OrganizationsKey":"2661301","Accounts_iban":"000111","Accounts_currency":"EUR"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_saveAccounts_Fideuram - required only',resObj);
var Accounts_key1 = resObj.Accounts_key;

Portfolios_saveAccounts_Fideuram.sid = auth;
Portfolios_saveAccounts_Fideuram.Accounts_PortfoliosKey = newTestID.Portfolios_key[0];
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Portfolios/saveAccounts', {'json': Portfolios_saveAccounts_Fideuram});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_saveAccounts_Fideuram - all params', resObj);
var Accounts_key2 = resObj.Accounts_key;
//console.log('Accounts_key', Accounts_key);

//Portfolios_saveAccounts ACCOUNTS - edit - find by Accounts_key: Fideuram
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Portfolios/saveAccounts', {'json':
{"sid":auth,"Accounts_key":Accounts_key1,"Accounts_PortfoliosKey":newTestID.Portfolios_key[0],"Accounts_OrganizationsKey":"2661301","Accounts_iban":"000111000","Accounts_currency":"EUR"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_saveAccounts_Fideuram Edit - required only',resObj);

Portfolios_saveAccounts_Fideuram_Edit.sid = auth;
Portfolios_saveAccounts_Fideuram_Edit.Accounts_PortfoliosKey = newTestID.Portfolios_key[0];
Portfolios_saveAccounts_Fideuram_Edit.Accounts_key = Accounts_key2;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Portfolios/saveAccounts', {'json': Portfolios_saveAccounts_Fideuram_Edit});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_saveAccounts_Fideuram_Edit - all params', resObj);

//Portfolios_delAccounts ACCOUNTS using Accounts_key: Fideuram
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Portfolios/delAccounts', {'json':
{"sid":auth,"qwhere":" AND \"Accounts\".\"key\" in (" + Accounts_key1 + ")"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_delAccounts_Fideuram - required only',resObj);

Portfolios_delAccounts_Fideuram.sid = auth;
Portfolios_delAccounts_Fideuram.qwhere = " AND \"Accounts\".\"key\" in (" + Accounts_key2 + ")";
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Portfolios/delAccounts', {'json': Portfolios_delAccounts_Fideuram});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_delAccounts_Fideuram - all params', resObj);

//Resources_list CRM
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/list', {'json':
{"sid":auth,"qwhere":" AND (\"Resources\".\"type\" = 'CRM') AND (\"Resources\".data->>'active')::BOOL = true"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_list CRM - required only',resObj);

res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Resources/list', {'json':
{"sid":auth,"getPerm":1,"getShares":1,"page":1,"qwhere":" AND (\"Resources\".\"type\" = 'CRM') AND (\"Resources\".data->>'active')::BOOL = true","qorder":"\"Resources\".\"name\" asc","rows":25,"Companies_key":3}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_list CRM - all',resObj);
console.log('\nResources_list CRM - rows[0].Resources_data',resObj.rows[0].Resources_data);
console.log('\nResources_list CRM - rows[0].Resources_tags',resObj.rows[0].Resources_tags);


//function Transactions_list ORDERS/ADVICES;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/list', {'json':{"sid":auth,"qwhere":" AND (\"Portfolios\".\"key\" = '" + histTestID + "') AND (\"Trades\".\"stage\" = 'order') AND (\"Trades\".\"status\" in ('PENDING', 'ORDER-FILLED', 'ORDER-CANCELED', 'COMMITTED')) AND (\"Trades\".\"date\" >= '2014-11-26' AND \"Trades\".\"date\" <= '2015-12-04')"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\n Transactions_list ORDERS required params',resObj);

portfolioOrders.sid = auth;
portfolioOrders.qwhere = " AND (\"Portfolios\".\"key\" = '" + histTestID + "') AND (\"Trades\".\"stage\" = 'order') AND (\"Trades\".\"status\" in ('PENDING', 'ORDER-FILLED', 'ORDER-CANCELED', 'COMMITTED')) AND (\"Trades\".\"date\" >= '2014-11-26' AND \"Trades\".\"date\" <= '2015-12-04')";
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/list', {'json': portfolioOrders});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_list ORDERS all params', resObj);

//function Report_position ORDERS/ADVICES Allianz Se-Reg IOHist;
//accountId and portfolioId are hard coded, update if IOHist is lost plus Orders Advices;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Report/position', {'json':{"sid":auth,"pvtags":["SECURITY|ALV GY EQUITY|DEFAULT|5074080"],"Portfolios_keys": ["5074079"],"currency":"EUR"}});

resObj = JSON.parse(res.getBody('utf8'));
console.log('\n Report_position ORDERS ALV GY EQUITY required params',resObj);

//Transactions_preview ORDER 100 aapl
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/preview', {'json':
{"sid":auth,"Trades_AssetsKey":"118613","Trades_quota":100}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_preview ORDER 100 Apple - required params',resObj);

portfolioOrdersPreview.sid = auth;
portfolioOrdersPreview.Trades_PortfoliosKey = newTestID.Portfolios_key;
portfolioOrdersPreview.Trades_AccountsKey = activeAccount;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/preview', {'json': portfolioOrdersPreview});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_preview ORDER 100 Apple - all params', resObj);

//Transactions_save ORDER 100 BOSS
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/save', {'json':
{"sid":auth,"Trades_stage":"order","Trades_group":"SECURITY","Trades_action":"BUY","Trades_priceMode":"market","Trades_AssetsKey":"5066593","Trades_currency":"EUR","Trades_status":"PENDING","Trades_PortfoliosKey":newTestID.Portfolios_key,"Trades_AccountsKey":activeAccount,"Trades_quota":100}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save ORDER 100 BOSS',resObj);
//100 APPLE ORDER (BUY)

Transactions_save_ORDER_aapl.sid = auth;
Transactions_save_ORDER_aapl.Trades_PortfoliosKey = newTestID.Portfolios_key;
Transactions_save_ORDER_aapl.Trades_AccountsKey = activeAccount;
res = request('POST', 'https://paolo.fincluster.com:8081/api/CORE/Transactions/save', {'json': Transactions_save_ORDER_aapl});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_preview ORDER 100 Apple - all params', resObj);


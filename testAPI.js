//Installation;
//npm install sync-request;
//Then in terminal run 
//node testAPI
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
  res, resObj, auth, newTestID, oldTestID = null, oldTestID1 = null, histTestID = null, activeAccount = null;

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';//to prevent Error: UNABLE_TO_VERIFY_LEAF_SIGNATURE;

//function Auth_get;//change username and password!;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Auth/get', {'json': {"username":"b.milner","password":"fcos14!"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nAUTH_get required only;',resObj);
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Auth/get', {'json': Auth_get});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nAUTH_get all params;',resObj);
auth = resObj.sid;

//function Portfolios_save;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Portfolios/save', {'json': {"Portfolios_name":"001testAPI1","sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolio_save required only;',resObj);
Portfolios_save.sid = auth;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Portfolios/save', {'json': Portfolios_save});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolio_save all params;', resObj);
newTestID = JSON.parse(res.getBody('utf8'));

//function Portfolios_list;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Portfolios/list', {'json': {"sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_list required only',resObj);
Portfolios_list.sid = auth;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Portfolios/list', {'json': Portfolios_list});
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
  }
}

//function Portfolios_del;//keep current 001testAPI only;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Portfolios/del', {'json': {"qwhere":" AND \"Portfolios\".\"key\" in ("+ oldTestID + ", "+ oldTestID1 + ")","sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolio_del required only;',resObj);
Portfolios_del.sid = auth;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Portfolios/del', {'json': Portfolios_del});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolio_del all params;',resObj);

//function Report_status;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Report/status', {'json': {"Portfolios_keys":[ newTestID.Portfolios_key],"sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nReport_status required only;',resObj);
Report_status.sid = auth;
Report_status.Portfolios_keys = newTestID.Portfolios_key;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Report/status', {'json': Report_status});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nReport_status all params;',resObj);

//function Users_stats
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Users/stats', {'json': {"sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nUsers_stats required only',resObj);
Users_stats.sid = auth;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Users/stats', {'json': Users_stats});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nUsers_stats all params', resObj);

//function Users_list
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Users/list', {'json': {"sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nUsers_list required only',resObj);
Users_list.sid = auth;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Users/list', {'json': Users_list});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nUsers_list all params', resObj);

//function Resources_list
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Resources/list', {'json': {"sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_list required only',resObj);
Resources_list.sid = auth;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Resources/list', {'json': Resources_list});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_list all params', resObj);

//function Notify_count
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Notify/count', {'json': {"sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nNotify_count required only',resObj);
Notify_count.sid = auth;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Notify/count', {'json': Notify_count});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nNotify_count all params', resObj);

//function Notify_list
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Notify/list', {'json': {"sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nNotify_list required only',resObj);
Notify_list.sid = auth;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Notify/list', {'json': Notify_list});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nNotify_list all params', resObj);

//function Export_file: schema FINCLUSTER-POSITION_SEC_CSV
newTestID.Portfolios_key = [newTestID.Portfolios_key];
//console.log('newTestID.Portfolios_key', newTestID.Portfolios_key);
res = request('POST', 'https://dev.fincluster.com:8080/api/NS-FINCLUSTER/Export/file', {'json': {"sid":auth, "schema":"FINCLUSTER-POSITION_SEC_CSV","Portfolios_keys":newTestID.Portfolios_key}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nExport_file required only',resObj);
Portfolio_export_StandardSecuritiesPositionCSV.sid = auth;
Portfolio_export_StandardSecuritiesPositionCSV.Portfolios_keys = newTestID.Portfolios_key;
res = request('POST', 'https://dev.fincluster.com:8080/api/NS-FINCLUSTER/Export/file', {'json': Portfolio_export_StandardSecuritiesPositionCSV});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nExport_file all params', resObj);

var exportSecPortfolioData = new Buffer(resObj.file.content, 'base64').toString('ascii');
console.log('\nexportSecPortfolioData', exportSecPortfolioData);

//function Export_file: schema FINCLUSTER-POSITION_CASH_CSV
res = request('POST', 'https://dev.fincluster.com:8080/api/NS-FINCLUSTER/Export/file', {'json': {"sid":auth, "schema":"FINCLUSTER-POSITION_CASH_CSV","Portfolios_keys":newTestID.Portfolios_key}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nExport_file required only',resObj);
Portfolio_export_StandardCashPositionCSV.sid = auth;
Portfolio_export_StandardCashPositionCSV.Portfolios_keys = newTestID.Portfolios_key;
res = request('POST', 'https://dev.fincluster.com:8080/api/NS-FINCLUSTER/Export/file', {'json': Portfolio_export_StandardCashPositionCSV});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nExport_file all params', resObj);

var exportCashPortfolioData = new Buffer(resObj.file.content, 'base64').toString('ascii');
console.log('\nexportCashPortfolioData', exportCashPortfolioData);

//function Export_file: schema FINCLUSTER-PORTFOLIO_POSITION_NEW_PDF
res = request('POST', 'https://dev.fincluster.com:8080/api/NS-FINCLUSTER/Export/file', {'json': {"sid":auth, "schema":"FINCLUSTER-PORTFOLIO_POSITION_NEW_PDF","Portfolios_keys":newTestID.Portfolios_key}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nExport_file required only',resObj);
Portfolio_export_ActivityStatementPDF.sid = auth;
Portfolio_export_ActivityStatementPDF.Portfolios_keys = newTestID.Portfolios_key;
res = request('POST', 'https://dev.fincluster.com:8080/api/NS-FINCLUSTER/Export/file', {'json': Portfolio_export_ActivityStatementPDF});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nExport_file all params', resObj);


//function Export_file: schema FINCLUSTER-PORTFOLIO_PDF
//id set to 001testMochaIOHist;//reset after dbase update;
res = request('POST', 'https://dev.fincluster.com:8080/api/NS-FINCLUSTER/Export/file', {'json': {"sid":auth, "schema":"FINCLUSTER-PORTFOLIO_PDF","Portfolios_keys":[histTestID],"startDate":"2015-06-25"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nExport_file required only',resObj);
Portfolio_export_AnalyticReportPDF.sid = auth;
Portfolio_export_AnalyticReportPDF.Portfolios_keys = [histTestID];
res = request('POST', 'https://dev.fincluster.com:8080/api/NS-FINCLUSTER/Export/file', {'json': Portfolio_export_AnalyticReportPDF});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nExport_file all params', resObj);


//function Portfolios_list;For this portfolio (pos ed)
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Portfolios/list', {'json': {"sid":auth,"Portfolios_keys":newTestID.Portfolios_key,"qwhere":" AND (\"Portfolios\".\"key\" in (" + newTestID.Portfolios_key[0] + "))"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_list required for this portfolio only',resObj);
Portfolios_list_pos_ed.sid = auth;
Portfolios_list_pos_ed.Portfolios_keys = newTestID.Portfolios_key;
Portfolios_list_pos_ed.qwhere = " AND (\"Portfolios\".\"key\" in (" +Portfolios_list_pos_ed.Portfolios_keys + "))";
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Portfolios/list', {'json': Portfolios_list_pos_ed});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_list all params', resObj);

//function Portfolios_listAccounts;//pos ed 1
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Portfolios/listAccounts', {'json': {"sid":auth,"Accounts_PortfoliosKey":newTestID.Portfolios_key,"qwhere":" AND (\"Accounts\".\"PortfoliosKey\" = " + newTestID.Portfolios_key[0] + ")"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_listAccounts required for this portfolio only',resObj);
Portfolios_listAccounts_all.sid = auth;
Portfolios_listAccounts_all.Accounts_PortfoliosKey = newTestID.Portfolios_key;
Portfolios_listAccounts_all.qwhere = " AND (\"Accounts\".\"PortfoliosKey\" = " + newTestID.Portfolios_key[0] + ")";
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Portfolios/listAccounts', {'json': Portfolios_listAccounts_all});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_listAccounts all params', resObj);

activeAccount = resObj.rows[0].Accounts_key;
console.log('activeAccount', activeAccount);

//function Resources_listRelations;001testMochaIOHist: 4829283//2*PORTFOLIO-ORGANIZATION, 1*CRM//pos ed 1
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Resources/listRelations', {'json': {"sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_listRelations required for this portfolio only',resObj);
//"Relations_Resources1Key": histTestID,
//Resources_listRelations.Accounts_PortfoliosKey = newTestID.Portfolios_key;
Resources_listRelations.sid = auth;
Resources_listRelations.qwhere = " AND (\"Relations\".\"Resources1Key\" = " + histTestID + ") AND (\"Relations\".\"type\" in ('PORTFOLIO-ORGANIZATION','PORTFOLIO-CRM'))";
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Resources/listRelations', {'json': Resources_listRelations});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nResources_listRelations all params', resObj);

//function Portfolios_listAccounts;//active account - pos ed 2
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Portfolios/listAccounts', {'json': {"sid":auth,"Portfolios_key":newTestID.Portfolios_key,"qwhere":" AND (\"Accounts\".\"key\" = " + activeAccount + ")"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_listAccounts required for this portfolio only',resObj);
Portfolios_listAccounts_active.sid = auth;
Portfolios_listAccounts_active.Portfolios_Key = newTestID.Portfolios_key;
Portfolios_listAccounts_active.Accounts_key  = activeAccount;
Portfolios_listAccounts_active.qwhere = " AND (\"Accounts\".\"key\" = " + activeAccount + ")";
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Portfolios/listAccounts', {'json': Portfolios_listAccounts_active});
//console.log('res', res);
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nPortfolios_listAccounts all params', resObj);

//function assets_list;//search chars;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Assets/list', {'json': {"sid":auth,
  "qwhere":" AND (\"Assets\".\"AssetID\" ilike '%aa%' or \"Assets\".\"AssetName\" ilike '%aa%' or \"Assets\".\"AssetShortName\" ilike '%aa%' or \"Assets\".\"AssetTicker\" ilike '%aa%' or \"Assets\".\"AssetFeederCode\" ilike '%aa%' or \"Assets\".\"AssetIsin\" ilike '%aa%')"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nAssets_list chars required params',resObj);
Assets_list_aa.sid = auth;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Assets/list', {'json': Assets_list_aa});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nAssets_list chars all params', resObj);

//function assets_list;//search Assets key;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Assets/list', {'json': {"sid":auth,"qwhere":" AND (\"Assets\".\"key\" = '118613')"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nAssets_list key required params',resObj);
Assets_list_key.sid = auth;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Assets/list', {'json': Assets_list_key});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nAssets_list key all params', resObj);

//function transactions_preview;//transactions;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Transactions/preview', {'json': {"sid":auth,"Trades_AssetsKey":"118613"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_preview key required params',resObj);
Transactions_preview_aapl.sid = auth;
Transactions_preview_aapl.Trades_PortfoliosKey = newTestID.Portfolios_key;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Transactions/preview', {'json': Transactions_preview_aapl});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_preview_aapl all params', resObj);

//function Transactions_save: equity (aapl);
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Transactions/save', {'json': {"sid":auth,"Trades_PortfoliosKey":newTestID.Portfolios_key,"Trades_AssetsKey":"118613","Trades_AccountsKey": activeAccount,"Trades_quota":"200","Trades_stage":"trade","Trades_group":"SECURITY","Trades_action":"POS","Trades_status":"POSITION","Trades_currency":"USD"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save_aapl_100 required params',resObj);
Transactions_save_aapl_100.sid = auth;
Transactions_save_aapl_100.Trades_PortfoliosKey = newTestID.Portfolios_key;
Transactions_save_aapl_100.Trades_AccountsKey = activeAccount;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Transactions/save', {'json': Transactions_save_aapl_100});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save_aapl_100 all params', resObj);

//function Transactions_save: fx ccy;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Transactions/save', {'json': {"sid":auth,"Trades_PortfoliosKey":newTestID.Portfolios_key,"Trades_AssetsKey":"118686","Trades_AccountsKey": activeAccount,"Trades_amount":"1000","Trades_quota":"1000","Trades_stage":"trade","Trades_group":"CASH","Trades_action":"POS","Trades_status":"POSITION","Trades_currency":"USD","Trades_changeCurrency":"EUR","Trades_netAmount":null,"Trades_price":null,"Trades_change":null}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save USD$1000 required params',resObj);
Transactions_save_ccy_USD7000.sid = auth;
Transactions_save_ccy_USD7000.Trades_PortfoliosKey = newTestID.Portfolios_key;
Transactions_save_ccy_USD7000.Trades_AccountsKey = activeAccount;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Transactions/save', {'json': Transactions_save_ccy_USD7000});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save_ccy_USD7000 all params', resObj);

//function Task_push;//Task_reportStatusHistory template;
res = request('POST', 'https://dev.fincluster.com:8080/api/NS-FINCLUSTER/Task/push', {'json':{"sid":auth,"task":{"action":"Task_reportStatusHistory","data":{"qwhere":" AND \"Portfolios\".key IN (" + newTestID.Portfolios_key + ")","startDate":"2015-11-24"}}}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTask_push Task_reportStatusHistory required params',resObj);
Task_reportStatusHistory.sid = auth;
Task_reportStatusHistory.task.data.qwhere = " AND \"Portfolios\".key IN (" + newTestID.Portfolios_key + ")";
res = request('POST', 'https://dev.fincluster.com:8080/api/NS-FINCLUSTER/Task/push', {'json': Task_reportStatusHistory});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTask_push Task_reportStatusHistory all params', resObj);

//function Transactions_list;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Transactions/list', {'json':{"sid":auth,"qwhere":" AND (\"Portfolios\".\"key\" = '" + newTestID.Portfolios_key + "') AND (\"Trades\".\"stage\" = 'trade') AND (\"Trades\".\"status\" in ('FILLED', 'PART-FILLED', 'CANCELED', 'ARCHIVED', 'POSITION', 'SIMULATED', 'CASH-UPDATE', 'ARCHIVED')) AND (\"Trades\".\"date\" >= '2014-11-26' AND \"Trades\".\"date\" <= '2015-12-04')"}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\n Transactions_list required params',resObj);
Transactions_list.sid = auth;
Transactions_list.qwhere = " AND (\"Portfolios\".\"key\" = '" + newTestID.Portfolios_key + "') AND (\"Trades\".\"stage\" = 'trade') AND (\"Trades\".\"status\" in ('FILLED', 'PART-FILLED', 'CANCELED', 'ARCHIVED', 'POSITION', 'SIMULATED', 'CASH-UPDATE', 'ARCHIVED')) AND (\"Trades\".\"date\" >= '2014-11-26' AND \"Trades\".\"date\" <= '2015-12-04')";
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Transactions/list', {'json': Transactions_list});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_list all params', resObj);

//function Assets_list
//show 25 of Securities all as of left nav panel
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Assets/list', {'json':{"sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\n Assets_list Securities (all) required params',resObj);
Assets_list.sid = auth;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Assets/list', {'json': Assets_list});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nAssets_list Securities (25) all params', resObj);


//function Transactions_save;//Close position equity -aapl
/*res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Transactions/save', {'json': {"Trades_PortfoliosKey":newTestID,"Trades_stage":"trade","Trades_action":"POS","Trades_status":"POSITION","Trades_group":"SECURITY","Trades_currency":"USD","Trades_AssetsKey":"118613","sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save aapl close position',resObj);*/
Close_position_aapl_118613.sid = auth;
Close_position_aapl_118613.Trades_PortfoliosKey = newTestID.Portfolios_key;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Transactions/save', {'json': Close_position_aapl_118613});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save aapl close position req params', resObj);

//Close position USD
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Transactions/save', {'json': {"Trades_PortfoliosKey":newTestID.Portfolios_key,"Trades_stage":"trade","Trades_action":"POS","Trades_status":"POSITION","Trades_group":"CASH","Trades_currency":"USD","Trades_AssetsKey":"118686","sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save USD close position',resObj);

//Close position EUR
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Transactions/save', {'json': {"Trades_PortfoliosKey":newTestID.Portfolios_key,"Trades_stage":"trade","Trades_action":"POS","Trades_status":"POSITION","Trades_group":"CASH","Trades_currency":"EUR","Trades_AssetsKey":"118685","sid":auth}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nTransactions_save EUR close position',resObj);

//function Import_run Standard Security Position CSV;
//console.log('\nImport_standard_sec_pos', Import_standard_sec_pos);
Import_standard_sec_pos = Import_standard_sec_pos.split('453756').join(newTestID.Portfolios_key);
//console.log('\nImport_standard_sec_pos + this portfolio id', Import_standard_sec_pos);
var IMPORT_POSITION_SEC_CSV_headers_Base64 = new Buffer(IMPORT_POSITION_SEC_CSV_headers).toString('base64');
console.log('\nIMPORT_POSITION_SEC_CSV_headers_Base64', IMPORT_POSITION_SEC_CSV_headers_Base64);
var IMPORT_POSITION_CASH_CSV_headers_Base64 = new Buffer(IMPORT_POSITION_CASH_CSV_headers).toString('base64');
console.log('\nIMPORT_POSITION_CASH_CSV_headers_Base64', IMPORT_POSITION_CASH_CSV_headers_Base64);

var importSecPortfolioDataBase64 = new Buffer(Import_standard_sec_pos).toString('base64');
console.log('\nimportSecPortfolioDataBase64', importSecPortfolioDataBase64);

/*res = request('POST', 'https://dev.fincluster.com:8080/api/NS-FINCLUSTER/Import/run', {'json': {"sid":auth,"Portfolios_keys":newTestID.Portfolios_key,"content":importSecPortfolioDataBase64,"delimiter":",","fmtdate":"YYYY-MM-DD","fmtnum":"std","schema":"FINCLUSTER-POSITION_SEC_CSV","fileName":"FINCLUSTER-POSITION_SEC_CSV_sample.csv","delayed":1,"Companies_key":3}});*/
res = request('POST', 'https://dev.fincluster.com:8080/api/NS-FINCLUSTER/Import/run', {'json': {"sid":auth,"Portfolios_keys":newTestID.Portfolios_key,"content":importSecPortfolioDataBase64,"schema":"FINCLUSTER-POSITION_SEC_CSV"}});

resObj = JSON.parse(res.getBody('utf8'));
console.log('\nImport_run sample standard security position  req params',resObj);

Import_run_sec_pos.sid = auth;
Import_run_sec_pos.Trades_PortfoliosKey = newTestID.Portfolios_key;
Import_run_sec_pos.content = importSecPortfolioDataBase64;
res = request('POST', 'https://dev.fincluster.com:8080/api/NS-FINCLUSTER/Import/run', {'json': Import_run_sec_pos});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nImport_run sec position all params', resObj);

//function Import_run Standard Cash Position CSV;
Import_standard_cash_pos = Import_standard_cash_pos.split('453756').join(newTestID.Portfolios_key);
var importCashPortfolioDataBase64 = new Buffer(Import_standard_cash_pos).toString('base64');
//console.log('\nimportCashPortfolioDataBase64', importCashPortfolioDataBase64);

res = request('POST', 'https://dev.fincluster.com:8080/api/NS-FINCLUSTER/Import/run', {'json': {"sid":auth,"Portfolios_keys":newTestID.Portfolios_key,"content":importCashPortfolioDataBase64,"delimiter":",","fmtdate":"YYYY-MM-DD","fmtnum":"std","schema":"FINCLUSTER-POSITION_CASH_CSV","fileName":"FINCLUSTER-POSITION_CASH_CSV_sample.csv","delayed":1,"Companies_key":3}});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nImport_run sample standard cash position req params',resObj);

Import_run_cash_pos.sid = auth;
Import_run_cash_pos.Trades_PortfoliosKey = newTestID.Portfolios_key;
Import_run_cash_pos.content = importCashPortfolioDataBase64;
res = request('POST', 'https://dev.fincluster.com:8080/api/NS-FINCLUSTER/Import/run', {'json': Import_run_cash_pos});
resObj = JSON.parse(res.getBody('utf8'));
console.log('\nImport_run cash position all params', resObj);

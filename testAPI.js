//Installation;
//npm install sync-request;
//Then in terminal run 
//node testAPI 
//from the same directory as this file and the sync-request installation;

//if it fails after AUTH, update sid: ;

var request = require('sync-request');
var fs = require('fs');

var Auth_get = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Auth_get.json'));
var Portfolios_save = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Portfolios_save.json'));

var Portfolios_listAccounts = JSON.parse(fs.readFileSync(__dirname + '/testAPIJSON/Portfolios_listAccounts.json'));

//JSON.parse(fs.readFileSync(__dirname + '/jsonTestFiles/testMocha.json'));
//AUTH;//change username and password;
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';//to prevent Error: UNABLE_TO_VERIFY_LEAF_SIGNATURE;
var res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Auth/get', {'json': {"rememberme":0,"surl":"https://dev.fincluster.com:8080/agent/#","username":"b.milner","password":"fcos14!"}});
console.log('\nAUTH',res.getBody('utf8'));

var res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Auth/get', {'json': Auth_get});
console.log('\nAUTHjson',res.getBody('utf8'));

var res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Portfolios/save', {'json': Portfolios_save});
console.log('\nNew portfolio',res.getBody('utf8'));

//function Portfolios_list;
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Portfolios/list', {'json': {"getPerm":1,"getShares":1,"page":1,"qwhere":" AND (\"Portfolios\".data->>'active')::BOOL = true","qorder":"\"Portfolios\".\"name\" asc","rows":25,"Companies_key":3,"sid":"Sf78b111252c3b01d13f234e40fa1f42dc87d454d"}});
console.log('\nPortfolios_list',res.getBody('utf8'));

//function Portfolios_listAccounts;
/*res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Portfolios/listAccounts', {'json': Portfolios_listAccounts});
console.log('\nPortfolios_listAccounts',res.getBody('utf8'));*/



//function Transactions_save;//uses/needs id: 4596289 for "Trades_PortfoliosKey":"4596289" and buys 100 shares in Berkshire Hathaway. If ERR-TRANSACTIONS_SAVE-PORTFOLIO_NOTFOUND error update to existing portfolio id. If ERR-TRANSACTIONS_SAVE-ACCOUNT_NOTFOUND error update "Trades_AccountsKey":"4596290" to existing Accounts id for that portfolio. ERR-TRANSACTIONS_SAVE-ASSET_NOTFOUND;
/*res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Transactions/save', {'json': {"Trades_date":"2015-09-09T15:20:21+01:00","Trades_data":{"validityDate":"2015-09-09"},"Trades_stage":"trade","Trades_group":"SECURITY","Trades_action":"BUY","Trades_commissionType":"ABSOLUTE","Trades_changeCurrency":"EUR","Trades_AssetsKey":"3982827","Trades_currency":"EUR","Trades_settleDate":"2015-09-09","Trades_PortfoliosKey":"4596289","Trades_AccountsKey":"4596290","Trades_status":"FILLED","Trades_quota":100,"Trades_amount":18119380,"Trades_netAmount":18119380,"Trades_price":181193.8,"Trades_change":1,"customerSaveProcess":1,"Companies_key":3,"sid":"Sf78b111252c3b01d13f234e40fa1f42dc87d454d"}});
console.log('\nTransactions_save',res.getBody('utf8'));*/

//function Report_status;//"ERR-RESOURCES-GET_ACCESS-PERMISSION_FAILED
res = request('POST', 'https://dev.fincluster.com:8080/api/CORE/Report/status', {'json': {"Portfolios_keys":["4596289"],"currency":"EUR","endDate":"2015-09-09T14:35:21+00:00","history":1,"Companies_key":3,"sid":"Sf78b111252c3b01d13f234e40fa1f42dc87d454d"}});
console.log('\nReport_status',res.getBody('utf8'));

//Enjoy!!!;
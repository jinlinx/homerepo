const qa=require('./lib/getSheet');


//const res=qa.authorize1GetUrl(credentials.googleSheet.installed);
//qa.authorize2CodeToToken(credentials.googleSheet.installed,'4/4AHFokhwhKXHAifcHMA2A6JtZ6aRF_I9G9aOnKuGuK9f3cyF-ZESCy8')
const sheet=qa.createSheet();


sheet.readRanges('1lXOIPkIhpMRLtQTg7CXkhE2M3__vJmGkwlHKTNk1rO4',[`'TenantInfo'!A1:E2500`]).then(res => {
    console.log('done2');
    console.log(res.data.valueRanges[0].values);
});




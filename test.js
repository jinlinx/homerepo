//create database PM;
//CREATE USER 'jjuser'@'localhost' IDENTIFIED BY '12345';
//GRANT ALL PRIVILEGES ON PM.*TO 'jjuser'@'%' IDENTIFIED BY '12345';
//create table tenant(email varchar(50), address varchar(50), phone varchar(50));
const mysql=require('mysql');
const conn = mysql.createConnection({
  host:'192.168.1.115',
  user:'jjuser',
  password: '12345',
  database: "PM"
});

function doQuery(sql) {
  return new Promise((resolve, reject)=>{
    conn.connect(function(err) {
      if (err) {
        console.log(err);
        return err;
      }
      console.log("Connected!");
      conn.query(sql,(err,result) =>{
        if(err) return reject(err);
        resolve(result);
      });
    });
  });
}

async function test() {
  const ten= await doQuery('select * from tenant');
  console.log(ten);
  conn.end();
}
return test();
return;


const qa=require('./lib/getSheet');


//const res=qa.authorize1GetUrl(credentials.googleSheet.installed);
//qa.authorize2CodeToToken(credentials.googleSheet.installed,'4/4AHFokhwhKXHAifcHMA2A6JtZ6aRF_I9G9aOnKuGuK9f3cyF-ZESCy8')
const sheet=qa.createSheet();


sheet.readRanges('1lXOIPkIhpMRLtQTg7CXkhE2M3__vJmGkwlHKTNk1rO4',[`'TenantInfo'!A:E`]).then(res => {
    console.log('done2');
    console.log(res.data.valueRanges[0].values);
});




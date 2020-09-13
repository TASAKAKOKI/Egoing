let testFolder = './data/'; //node를 실행하는 위치로부터의 경로(readdir.js파일을 기준으로 하는 것 아님)
let fs = require('fs');

fs.readdir(testFolder, function(error, filelist) {
  console.log(filelist);
});
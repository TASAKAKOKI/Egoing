var http = require('http');
var fs = require('fs');
var url = require('url');
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
 
var app = http.createServer(function(request,response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  if(pathname === '/') {
    if(queryData.id === undefined) {
      fs.readdir('./data/', function(_error, filelist) {
        console.log(filelist);
        var title = 'Welcome';
        let list = '<ul>';
        var i = 0;
        while(i<filelist.length) {
          list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
          i++;
        }
        list += `</ul>`
        var description = 'Hello World';
        var template = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          ${list}
          <h2>${title}</h2>
          <p>${description}
          </p>
        </body>
        </html>
        `;
        response.writeHead(200);
        response.end(template);
      });
    } else {
      fs.readdir('./data/', function(_error, filelist) {
        console.log(filelist);
        let title = queryData.id;
        let list = '<ul>';
        let i = 0;
        while(i<filelist.length) {
          list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
          i++;
        }
        list += `</ul>`
        fs.readFile(`data/${title}`,'utf-8',function(err,description){
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            <h2>${title}</h2>
            <p>${description}
            </p>
          </body>
          </html>
          `;
          response.writeHead(200);
          response.end(template);
        });
      });
    }
  } else {
    response.writeHead(404);
    response.end('Not Found');
  }
  // console.log(url.parse(_url, true).pathname);
});
app.listen(3000);
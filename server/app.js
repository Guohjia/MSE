const Koa = require('koa');
const Cors = require('@koa/cors');
const Range = require('koa-range');
const path = require('path');
const appstatic = require('koa-static');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

/* 静态文件服务 */
app.use(Range)
app.use(Cors())
app.use(bodyParser());
app.use(appstatic(path.resolve(__dirname, '../example')));
app.listen(3000, err => {
    console.log(4156)
    if (err) { console.log(err); }
    console.log('Listening at localhost:3000');
})


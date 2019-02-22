
//加载express模块
import i18n from './core/i18n';

const express = require('express');
//加载ejs模块
const ejs = require('ejs');
//加载path模块，path模块中包含许多处理文件路径的工具
const path = require('path');


//创建一个express实例
let app = express();







//注册模板文件的后缀名为html，默认为ejs
app.engine('html', ejs.__express);
//设置模板文件存放的目录，默认是与app.js同级下views文件夹
//path.join()用于路径拼接，可以根据当前的操作系统的类型正确选用文件路径拼接字符，linux是/,window是\
app.set('views', path.join(__dirname, '/views'));
//设置模板文件的后缀名为html，避免了res.render('home.html',...)的繁琐
app.set('view engine', 'html');

i18n.init({fnName:"tt",app:app})




//路由挂载
app.get('/', function(req, res) {

    console.log('用戶端語系：' + req.language);
    //render函数除了用数据渲染页面之外，还有sendFile('home.html')的作用。

    console.log("abc:" + req.t("translation.abc"))
    res.render('home', {
        title: 'home',
        content: 'This is home page.'
    });
});
app.get('/article', function(req, res) {
    res.render('article', {
        title: 'article',
        content: 'This is acticle page.'
    });
});
//使用8080端口
app.listen(8080);
console.log("The server is running on 8080");
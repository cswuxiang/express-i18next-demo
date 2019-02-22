import hashKey from './haskkey'

var i18next  = require('i18next');  



//This is a i18next backend to be used node.js. It will load resources from filesyste
var i18nFsBackend = require('i18next-node-fs-backend');  

//将wire up i18next to request object
var i18nMiddleware = require('i18next-express-middleware');  


 const i18n = {


    addLocalFun: function(fnName,app){
        app.locals[fnName] = function(key){
            var newKEY = hashKey(key);
            debugger;
            return i18next.t("translation."+newKEY)
        };
          
    },
    init : function(options){

       let app = options.app;
       this.addLocalFun(options.fnName || "tt",app);

       // i18next 初始設定
       debugger;
       i18next.use(i18nMiddleware.LanguageDetector) // 自動偵測用戶端語系
       .use(i18nFsBackend)
       .init({
        fallbackLng: "en", // 備用語系，擷取失敗時會使用到這裡
        backend: {
            loadPath: process.cwd() + "/locales/i18n/translation/{{lng}}.js",
        },
        detection: {
            lookupQuerystring: 'lng',
        }
    });  


    app.use(i18nMiddleware.handle(i18next));
    }

}

export default i18n;
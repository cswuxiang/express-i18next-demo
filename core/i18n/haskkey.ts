import * as hashString from 'hash-string';
const hashKey = (value: string) => 'k_' + ('0000' + hashString(value.replace(/\s+/g, '')).toString(36)).slice(-7);

 //export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
 export default hashKey;
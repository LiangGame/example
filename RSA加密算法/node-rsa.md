# node-rsa

标签（空格分隔）： 未分类

> 第一次使用，不喜勿喷。有什么好的建议请联系博主邮箱 <font color="red">15517072173@163.com</font>
[详细内容请查看node-rsa官方文档][1]
---

 - 纯粹的JavaScript 
 - 不需要OpenSSL 
 - 生成密钥 
 - 支持加密/解密的长消息
 - 签署和验证

### Example
```
var NodeRSA = require('node-rsa');
var key = new NodeRSA({b: 512}); //生成新的512位长度密钥
 
var text = 'Hello RSA!'; // 加密前数据
var encrypted = key.encrypt(text, 'base64');  // 加密后数据
console.log('encrypted: ', encrypted);
var decrypted = key.decrypt(encrypted, 'utf8'); // 解密后数据
console.log('decrypted: ', decrypted);
```
### 安装

```
npm install node-rsa
```
> 要求nodejs> = 0.10.x或io.js> = 1.x

### 用法
#### 创建实例

```
var  NodeRSA  = require （' node-rsa '） ; 
 
var  key  = new NodeRSA（[ keyData ，[ format ] ] ，[ options ] ）;
```

> 
- keyData - {string|buffer|object}用于生成密钥或以支持的格式之一生成密钥的参数。
- format - {string}导入密钥的格式。查看有关导出/导入部分格式的更多详细信息。
- options - {object}- 其他设置。

##### 创建“空”键

`var  key  = new NodeRSA（）;  `
##### 生成新的512位长度密钥
`var  key  = new NodeRSA（{ b ：512 } ）; ` 

#### 导入/导出密钥

```
    /*实例*/
    var publicDer = key.exportKey('public');
    var privateDer = key.exportKey('private');
    console.log('公钥:',publicDer);
    console.log('私钥:',privateDer);

    key.importKey(result[1], 'private');
    
    /*语法*/
    key.importKey(keyData, [format]);
    key.exportKey([format]);
```
- keyData - {string|buffer}- 可能是：
 - 键入PEM字符串
 - 包含PEM字符串的缓冲区
 - 包含DER编码数据的缓冲区
 - 对象包含关键组件
- format - {string}- 用于导出/导入的格式ID。

#### 加密/解密

```
/*加密*/
key.encrypt(buffer, [encoding], [source_encoding]);
key.encryptPrivate(buffer, [encoding], [source_encoding]); // 使用私钥进行加密 
/*解密*/
key.decrypt(buffer, [encoding]);
key.decryptPublic(buffer, [encoding]); // 使用公钥解密 

/*实例*/
var encryData = key.encryptPrivate(req.body.user_pwd, 'base64','utf8');
    console.log('加密后的数据',encryData);
var decryptData = key.decryptPublic(result[0],'utf8');
    console.log('解密后的数据',decryptData);
```


  ![node-rsa][2]


  [1]: https://www.npmjs.com/package/node-rsa
  [2]: http://m.qpic.cn/psb?/V116nKgh3mF1go/K9Mm9yDevLrUcbhfSsnpoqmYLA4xaxbwPi*.cPubB6k!/b/dG4AAAAAAAAA&bo=CANfAgAAAAADB3Q!&rf=viewer_4
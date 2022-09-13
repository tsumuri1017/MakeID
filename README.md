日本語の取扱説明書は下にあります。<br>
The Japanese instruction manual is after.

# Tsumuri Type MakeID Library
ID generation library in vanilla JavaScript.

## About this library
You can generate IDs like 2ch, 3ch, 5ch without loading frameworks, troublesome libraries, JQuery, etc. <br>
Also, since everything works synchronously, there is no need to think about asynchronous processing.

## How to Use
This library generates IDs from arbitrary character strings, and does not automatically obtain IP addresses, etc. <br>
Therefore, the user needs to enter the IP address etc. as an argument by himself.

### Default
```js
let id = makeid("SomeText");
```
The returned value is "SomeText" as an ID. <br>
If no salt is specified, it will be the default salt. <br>
The default ID length is 10 characters.

### specify number of digits
```js
let id = makeid("SomeText",5);
```
The number of digits will be 5 digits. <br>
The return value is the first 5 digits of "SomeText" as an ID.

### specify salt
```js
let id = makeid("SomeText",8,"Hello,World!");
```
In this case, the salt "Hello,World!" generates an 8-digit "SomeText" ID.
Any salt can be given. <br>
As long as you don't change the salt, the same data will return the same return value. <br>
All strings that can be interpreted by JavaScript can be used for the salt except for surrogate pairs.

## License
Please check LICENSE file.





# Tsumuri式ID生成ライブラリ
バニラJavaScriptでのID生成ライブラリ
## このライブラリについて
フレームワークや面倒なライブラリ、JQueryなどを読み込まずとも、2chや3ch,5chのようなIDを生成することができます。<br>
また、すべて同期処理で動くため、非同期処理を考える必要もありません。

## 利用方法
このライブラリは、任意の文字列からIDを生成するものであり、決してIPアドレス等を自動的に取得するものではありません。<br>
よって、利用者が自分で引数にIPアドレスなどを入力する必要があります。

### デフォルト
```js
let id = makeid("SomeText");
```
"SomeText"をIDにしたものが返り値になります。<br>
ソルトを指定しない場合、デフォルトのソルトになります。<br>
デフォルトのIDの長さは10文字になります。

### 桁数を指定
```js
let id = makeid("SomeText",5);
```
桁数が5桁になります。<br>
"SomeText"をIDにしたものの最初の5桁が返り値です。

### ソルトを指定
```js
let id = makeid("SomeText",8,"Hello,World!");
```
この場合、ソルト"Hello,World!"で8桁の"SomeText"のIDを生成します。
任意のソルトを与えることができます。<br>
ソルトを変更しない限り、同一データでの返り値は変わりません。<br>
ソルトにはサロゲートペアを除くJavaScriptで解釈可能なすべての文字列を利用できます。

## ライセンス
LICENSEファイルをご確認ください。<br>

/*****************************************
* ---ENGLISH---
* LIBRARY NAME:Tsumuri Type MakeID Library
* PUBLISHER   :Tsumuri
* LICENSE     :Apache License 2.0
*
* Copyright 2022 Tsumuri
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* If you don't understand Apache License 2.0,
* 1.Don't modify this comment display by including line breaks,etc.
* 2.If you modify the code, clearly state that it has been modified
* Please this keep.
*
*
*---JAPANESE---
* ライブラリ名:Tsumuri式ID生成ライブラリ
* コード作成者:Tsumuri
* 著作権タイプ:Apache License 2.0
*
* 版権所有 2022 Tsumuri
*
* ライセンスの非公式日本語訳はこちら
* https://licenses.opensource.jp/Apache-2.0/Apache-2.0.html
* Apacheライセンス2.0が理解できない場合は、
* 1.このコメント表示を改行等含めて改造しない　2.コードを改変した場合は改変したことを明記する
* を守るようにして下さい。
*****************************************/
function MakeID(r,t,$){if(t||(t=10),$||($="saltdatachar_text"),"daily"==$){let e=new Date;$="today is :"+e.getDate()}r=String(r);let o=0;for(let _=0;_<r.length;_++)o+=String(r[_].charCodeAt()),o+=$,o=n(o);o=String(o),rtrn="";let f=0;for(;rtrn.length<t;)rtrn+=o[f],f+=2;return rtrn;function n(r){function t(r,t){return r>>>t|r<<32-t}for(var $,e,o=Math.pow,_=o(2,32),f="length",a="",i=[],l=8*r[f],c=n.h=n.h||[],h=n.k=n.k||[],u=h[f],d={},g=2;u<64;g++)if(!d[g]){for($=0;$<313;$+=g)d[$]=g;c[u]=o(g,.5)*_|0,h[u++]=o(g,1/3)*_|0}for(r+="\x80";r[f]%64-56;)r+="\0";for($=0;$<r[f];$++){if((e=r.charCodeAt($))>>8)return;i[$>>2]|=e<<(3-$)%4*8}for(e=0,i[i[f]]=l/_|0,i[i[f]]=l;e<i[f];){var s=i.slice(e,e+=16),v=c;for($=0,c=c.slice(0,8);$<64;$++){var k=s[$-15],x=s[$-2],w=c[0],y=c[4],A=c[7]+(t(y,6)^t(y,11)^t(y,25))+(y&c[5]^~y&c[6])+h[$]+(s[$]=$<16?s[$]:s[$-16]+(t(k,7)^t(k,18)^k>>>3)+s[$-7]+(t(x,17)^t(x,19)^x>>>10)|0),C=(t(w,2)^t(w,13)^t(w,22))+(w&c[1]^w&c[2]^c[1]&c[2]);(c=[A+C|0].concat(c))[4]=c[4]+A|0}for($=0;$<8;$++)c[$]=c[$]+v[$]|0}for($=0;$<8;$++)for(e=3;e+1;e--){var D=c[$]>>8*e&255;a+=(D<16?0:"")+D.toString(16)}return a}}

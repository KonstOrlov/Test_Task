(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{298:function(t,r,e){var n=e(5);t.exports=n(1..valueOf)},299:function(t,r,e){"use strict";var n=e(10),o=e(4),f=e(5),l=e(107),c=e(17),x=e(12),C=e(199),v=e(42),m=e(80),N=e(198),d=e(3),h=e(81).f,w=e(34).f,I=e(16).f,E=e(298),_=e(300).trim,y="Number",S=o.Number,k=S.prototype,F=o.TypeError,A=f("".slice),M=f("".charCodeAt),T=function(t){var r=N(t,"number");return"bigint"==typeof r?r:L(r)},L=function(t){var r,e,n,o,f,l,c,code,x=N(t,"number");if(m(x))throw F("Cannot convert a Symbol value to a number");if("string"==typeof x&&x.length>2)if(x=_(x),43===(r=M(x,0))||45===r){if(88===(e=M(x,2))||120===e)return NaN}else if(48===r){switch(M(x,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+x}for(l=(f=A(x,2)).length,c=0;c<l;c++)if((code=M(f,c))<48||code>o)return NaN;return parseInt(f,n)}return+x};if(l(y,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var V,O=function(t){var r=arguments.length<1?0:S(T(t)),e=this;return v(k,e)&&d((function(){E(e)}))?C(Object(r),e,O):r},R=n?h(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),G=0;R.length>G;G++)x(S,V=R[G])&&!x(O,V)&&I(O,V,w(S,V));O.prototype=k,k.constructor=O,c(o,y,O,{constructor:!0})}},300:function(t,r,e){var n=e(5),o=e(24),f=e(13),l=e(301),c=n("".replace),x="["+l+"]",C=RegExp("^"+x+x+"*"),v=RegExp(x+x+"*$"),m=function(t){return function(r){var e=f(o(r));return 1&t&&(e=c(e,C,"")),2&t&&(e=c(e,v,"")),e}};t.exports={start:m(1),end:m(2),trim:m(3)}},301:function(t,r){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},305:function(t,r,e){"use strict";e.r(r);e(299),e(311);var n={name:"TotalBanner",props:{sum:[Number,null]},computed:{totalSum:function(t){var r=t.sum;return null===r?"...":r.toFixed(2)}}},o=e(23),component=Object(o.a)(n,(function(){var t=this,r=t._self._c;return r("section",{staticClass:"flex bg-secondary text-primary items-center py-5 md:py-[34px] xl:py-6 2xl:py-10 px-[36px] md:px-[27px] xl:px-[30px]"},[r("svg",{staticClass:"block flex-shrink-0 w-[42px] md:w-10 xl:w-[45px] 2xl:w-[50px]",attrs:{viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M1.5 2.33984H35C42.4558 2.33984 48.5 8.384 48.5 15.8398V47.8131H15C7.54416 47.8131 1.5 41.769 1.5 34.3131V2.33984Z",stroke:"#E02025","stroke-width":"3"}}),t._v(" "),r("g",{attrs:{"clip-path":"url(#clip0_14_822)"}},[r("path",{attrs:{d:"M30.4017 34.9586L30.0384 36.3983C28.9485 36.8153 28.078 37.1327 27.4297 37.351C26.7807 37.5699 26.0267 37.6788 25.1675 37.6788C23.8481 37.6788 22.8219 37.3654 22.09 36.7431C21.358 36.1182 20.992 35.3264 20.992 34.3658C20.992 33.994 21.0185 33.6115 21.0738 33.2218C21.1295 32.8317 21.218 32.3923 21.3392 31.9012L22.7012 27.2276C22.8224 26.7801 22.9254 26.356 23.0079 25.9551C23.0915 25.5566 23.1318 25.1899 23.1318 24.8599C23.1318 24.263 23.0044 23.8455 22.7506 23.6108C22.4968 23.3768 22.0126 23.2579 21.2937 23.2579C20.9416 23.2579 20.5798 23.3126 20.2109 23.4183C19.8404 23.5245 19.5237 23.6271 19.2578 23.7224L19.622 22.2816C20.5143 21.9294 21.3671 21.6278 22.1829 21.3775C22.9988 21.1265 23.7696 21.0009 24.4987 21.0009C25.809 21.0009 26.8201 21.3079 27.5301 21.9219C28.2401 22.5364 28.595 23.3329 28.595 24.3145C28.595 24.5176 28.5717 24.8754 28.5216 25.3869C28.4727 25.8995 28.3816 26.3691 28.2488 26.7963L26.8926 31.4512C26.7814 31.825 26.6815 32.2525 26.5945 32.7334C26.5048 33.2112 26.4619 33.5763 26.4619 33.8212C26.4619 34.4392 26.6041 34.8612 26.8891 35.0856C27.1762 35.3099 27.6706 35.4215 28.373 35.4215C28.7027 35.4215 29.0779 35.3648 29.4947 35.2534C29.9105 35.142 30.2136 35.0442 30.4017 34.9586ZM30.7456 15.4162C30.7456 16.2272 30.4303 16.9199 29.7967 17.4894C29.1648 18.0609 28.4033 18.3469 27.5124 18.3469C26.6188 18.3469 25.8554 18.0609 25.2162 17.4894C24.5782 16.9197 24.2585 16.2272 24.2585 15.4162C24.2585 14.6068 24.5782 13.913 25.2162 13.3363C25.8542 12.7605 26.619 12.4727 27.5124 12.4727C28.403 12.4727 29.1648 12.7611 29.7967 13.3363C30.4308 13.913 30.7456 14.607 30.7456 15.4162Z",fill:"#E02025"}})])]),t._v(" "),r("span",{staticClass:"block font-bold text-14 md:text-16 xl:text-20 2xl:text-24 w-full ml-5 xl:mr-[38px] 2xl:mr-8"},[t._v("Итого: "+t._s(t.totalSum))])])}),[],!1,null,null,null);r.default=component.exports},311:function(t,r,e){"use strict";var n=e(2),o=e(5),f=e(53),l=e(298),c=e(200),x=e(3),C=RangeError,v=String,m=Math.floor,N=o(c),d=o("".slice),h=o(1..toFixed),w=function(t,r,e){return 0===r?e:r%2==1?w(t,r-1,e*t):w(t*t,r/2,e)},I=function(data,t,r){for(var e=-1,n=r;++e<6;)n+=t*data[e],data[e]=n%1e7,n=m(n/1e7)},E=function(data,t){for(var r=6,e=0;--r>=0;)e+=data[r],data[r]=m(e/t),e=e%t*1e7},_=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var r=v(data[t]);s=""===s?r:s+N("0",7-r.length)+r}return s};n({target:"Number",proto:!0,forced:x((function(){return"0.000"!==h(8e-5,3)||"1"!==h(.9,0)||"1.25"!==h(1.255,2)||"1000000000000000128"!==h(0xde0b6b3a7640080,0)}))||!x((function(){h({})}))},{toFixed:function(t){var r,e,n,o,c=l(this),x=f(t),data=[0,0,0,0,0,0],m="",h="0";if(x<0||x>20)throw C("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return v(c);if(c<0&&(m="-",c=-c),c>1e-21)if(e=(r=function(t){for(var r=0,e=t;e>=4096;)r+=12,e/=4096;for(;e>=2;)r+=1,e/=2;return r}(c*w(2,69,1))-69)<0?c*w(2,-r,1):c/w(2,r,1),e*=4503599627370496,(r=52-r)>0){for(I(data,0,e),n=x;n>=7;)I(data,1e7,0),n-=7;for(I(data,w(10,n,1),0),n=r-1;n>=23;)E(data,1<<23),n-=23;E(data,1<<n),I(data,1,1),E(data,2),h=_(data)}else I(data,0,e),I(data,1<<-r,0),h=_(data)+N("0",x);return h=x>0?m+((o=h.length)<=x?"0."+N("0",x-o)+h:d(h,0,o-x)+"."+d(h,o-x)):m+h}})}}]);
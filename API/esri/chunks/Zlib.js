// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports"],function(x){var w={exports:{}};(function(y){(function(t){t=t();void 0!==t&&(y.exports=t)})(function(){var t=function(){function m(){this.bufferLength=this.pos=0;this.eof=!1;this.buffer=null}m.prototype={ensureBuffer:function(c){var n=this.buffer,r=n?n.byteLength:0;if(c<r)return n;for(var p=512;p<c;)p<<=1;c=new Uint8Array(p);for(p=0;p<r;++p)c[p]=n[p];return this.buffer=c},getByte:function(){for(var c=this.pos;this.bufferLength<=c;){if(this.eof)return null;this.readBlock()}return this.buffer[this.pos++]},
getBytes:function(c){var n=this.pos;if(c){this.ensureBuffer(n+c);for(c=n+c;!this.eof&&this.bufferLength<c;)this.readBlock();var r=this.bufferLength;c>r&&(c=r)}else{for(;!this.eof;)this.readBlock();c=this.bufferLength}this.pos=c;return this.buffer.subarray(n,c)},lookChar:function(){for(var c=this.pos;this.bufferLength<=c;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos])},getChar:function(){for(var c=this.pos;this.bufferLength<=c;){if(this.eof)return null;
this.readBlock()}return String.fromCharCode(this.buffer[this.pos++])},makeSubStream:function(c,n,r){for(var p=c+n;this.bufferLength<=p&&!this.eof;)this.readBlock();return new Stream(this.buffer,c,n,r)},skip:function(c){c||(c=1);this.pos+=c},reset:function(){this.pos=0}};return m}();return function(){function m(f){throw Error(f);}function c(f){var a=0,b=f[a++],d=f[a++];-1!=b&&-1!=d||m("Invalid header in flate stream");8!=(b&15)&&m("Unknown compression method in flate stream");0!=((b<<8)+d)%31&&m("Bad FCHECK in flate stream");
d&32&&m("FDICT bit set in flate stream");this.bytes=f;this.bytesPos=a;this.codeBuf=this.codeSize=0;t.call(this)}if(!self||!self.Uint32Array)return null;var n=new Uint32Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),r=new Uint32Array([3,4,5,6,7,8,9,10,65547,65549,65551,65553,131091,131095,131099,131103,196643,196651,196659,196667,262211,262227,262243,262259,327811,327843,327875,327907,258,258,258]),p=new Uint32Array([1,2,3,4,65541,65543,131081,131085,196625,196633,262177,262193,327745,327777,
393345,393409,459009,459137,524801,525057,590849,591361,657409,658433,724993,727041,794625,798721,868353,876545]),z=[new Uint32Array([459008,524368,524304,524568,459024,524400,524336,590016,459016,524384,524320,589984,524288,524416,524352,590048,459012,524376,524312,589968,459028,524408,524344,590032,459020,524392,524328,59E4,524296,524424,524360,590064,459010,524372,524308,524572,459026,524404,524340,590024,459018,524388,524324,589992,524292,524420,524356,590056,459014,524380,524316,589976,459030,
524412,524348,590040,459022,524396,524332,590008,524300,524428,524364,590072,459009,524370,524306,524570,459025,524402,524338,590020,459017,524386,524322,589988,524290,524418,524354,590052,459013,524378,524314,589972,459029,524410,524346,590036,459021,524394,524330,590004,524298,524426,524362,590068,459011,524374,524310,524574,459027,524406,524342,590028,459019,524390,524326,589996,524294,524422,524358,590060,459015,524382,524318,589980,459031,524414,524350,590044,459023,524398,524334,590012,524302,
524430,524366,590076,459008,524369,524305,524569,459024,524401,524337,590018,459016,524385,524321,589986,524289,524417,524353,590050,459012,524377,524313,589970,459028,524409,524345,590034,459020,524393,524329,590002,524297,524425,524361,590066,459010,524373,524309,524573,459026,524405,524341,590026,459018,524389,524325,589994,524293,524421,524357,590058,459014,524381,524317,589978,459030,524413,524349,590042,459022,524397,524333,590010,524301,524429,524365,590074,459009,524371,524307,524571,459025,
524403,524339,590022,459017,524387,524323,589990,524291,524419,524355,590054,459013,524379,524315,589974,459029,524411,524347,590038,459021,524395,524331,590006,524299,524427,524363,590070,459011,524375,524311,524575,459027,524407,524343,590030,459019,524391,524327,589998,524295,524423,524359,590062,459015,524383,524319,589982,459031,524415,524351,590046,459023,524399,524335,590014,524303,524431,524367,590078,459008,524368,524304,524568,459024,524400,524336,590017,459016,524384,524320,589985,524288,
524416,524352,590049,459012,524376,524312,589969,459028,524408,524344,590033,459020,524392,524328,590001,524296,524424,524360,590065,459010,524372,524308,524572,459026,524404,524340,590025,459018,524388,524324,589993,524292,524420,524356,590057,459014,524380,524316,589977,459030,524412,524348,590041,459022,524396,524332,590009,524300,524428,524364,590073,459009,524370,524306,524570,459025,524402,524338,590021,459017,524386,524322,589989,524290,524418,524354,590053,459013,524378,524314,589973,459029,
524410,524346,590037,459021,524394,524330,590005,524298,524426,524362,590069,459011,524374,524310,524574,459027,524406,524342,590029,459019,524390,524326,589997,524294,524422,524358,590061,459015,524382,524318,589981,459031,524414,524350,590045,459023,524398,524334,590013,524302,524430,524366,590077,459008,524369,524305,524569,459024,524401,524337,590019,459016,524385,524321,589987,524289,524417,524353,590051,459012,524377,524313,589971,459028,524409,524345,590035,459020,524393,524329,590003,524297,
524425,524361,590067,459010,524373,524309,524573,459026,524405,524341,590027,459018,524389,524325,589995,524293,524421,524357,590059,459014,524381,524317,589979,459030,524413,524349,590043,459022,524397,524333,590011,524301,524429,524365,590075,459009,524371,524307,524571,459025,524403,524339,590023,459017,524387,524323,589991,524291,524419,524355,590055,459013,524379,524315,589975,459029,524411,524347,590039,459021,524395,524331,590007,524299,524427,524363,590071,459011,524375,524311,524575,459027,
524407,524343,590031,459019,524391,524327,589999,524295,524423,524359,590063,459015,524383,524319,589983,459031,524415,524351,590047,459023,524399,524335,590015,524303,524431,524367,590079]),9],A=[new Uint32Array([327680,327696,327688,327704,327684,327700,327692,327708,327682,327698,327690,327706,327686,327702,327694,0,327681,327697,327689,327705,327685,327701,327693,327709,327683,327699,327691,327707,327687,327703,327695,0]),5];c.prototype=Object.create(t.prototype);c.prototype.getBits=function(f){for(var a=
this.codeSize,b=this.codeBuf,d=this.bytes,e=this.bytesPos,g;a<f;)"undefined"==typeof(g=d[e++])&&m("Bad encoding in flate stream"),b|=g<<a,a+=8;this.codeBuf=b>>f;this.codeSize=a-=f;this.bytesPos=e;return b&(1<<f)-1};c.prototype.getCode=function(f){var a=f[0],b=f[1];f=this.codeSize;for(var d=this.codeBuf,e=this.bytes,g=this.bytesPos;f<b;){var h;"undefined"==typeof(h=e[g++])&&m("Bad encoding in flate stream");d|=h<<f;f+=8}b=a[d&(1<<b)-1];a=b>>16;b&=65535;(0==f||f<a||0==a)&&m("Bad encoding in flate stream");
this.codeBuf=d>>a;this.codeSize=f-a;this.bytesPos=g;return b};c.prototype.generateHuffmanTable=function(f){for(var a=f.length,b=0,d=0;d<a;++d)f[d]>b&&(b=f[d]);for(var e=1<<b,g=new Uint32Array(e),h=1,q=0,k=2;h<=b;++h,q<<=1,k<<=1)for(var l=0;l<a;++l)if(f[l]==h){var u=0,v=q;for(d=0;d<h;++d)u=u<<1|v&1,v>>=1;for(d=u;d<e;d+=k)g[d]=h<<16|l;++q}return[g,b]};c.prototype.readBlock=function(){function f(u,v,B,C,D){for(u=u.getBits(B)+C;0<u--;)v[q++]=D}var a=this.getBits(3);a&1&&(this.eof=!0);a>>=1;if(0==a){var b=
this.bytes,d=this.bytesPos,e;"undefined"==typeof(e=b[d++])&&m("Bad block header in flate stream");var g=e;"undefined"==typeof(e=b[d++])&&m("Bad block header in flate stream");g|=e<<8;"undefined"==typeof(e=b[d++])&&m("Bad block header in flate stream");a=e;"undefined"==typeof(e=b[d++])&&m("Bad block header in flate stream");(a|e<<8)!=(~g&65535)&&m("Bad uncompressed block length in flate stream");this.codeSize=this.codeBuf=0;e=this.bufferLength;a=this.ensureBuffer(e+g);this.bufferLength=g=e+g;for(var h=
e;h<g;++h){if("undefined"==typeof(e=b[d++])){this.eof=!0;break}a[h]=e}this.bytesPos=d}else{if(1==a)d=z,e=A;else if(2==a){a=this.getBits(5)+257;e=this.getBits(5)+1;b=this.getBits(4)+4;d=Array(n.length);for(var q=0;q<b;)d[n[q++]]=this.getBits(3);d=this.generateHuffmanTable(d);q=b=0;e=a+e;for(g=Array(e);q<e;)h=this.getCode(d),16==h?f(this,g,2,3,b):17==h?f(this,g,3,3,b=0):18==h?f(this,g,7,11,b=0):g[q++]=b=h;d=this.generateHuffmanTable(g.slice(0,a));e=this.generateHuffmanTable(g.slice(a,e))}else m("Unknown block type in flate stream");
g=(a=this.buffer)?a.length:0;for(h=this.bufferLength;;){var k=this.getCode(d);if(256>k)h+1>=g&&(a=this.ensureBuffer(h+1),g=a.length),a[h++]=k;else{if(256==k){this.bufferLength=h;break}k-=257;k=r[k];var l=k>>16;0<l&&(l=this.getBits(l));b=(k&65535)+l;k=this.getCode(e);k=p[k];l=k>>16;0<l&&(l=this.getBits(l));k=(k&65535)+l;h+b>=g&&(a=this.ensureBuffer(h+b),g=a.length);for(l=0;l<b;++l,++h)a[h]=a[h-k]}}}};return c}()})})(w);x.Zlib=w.exports});
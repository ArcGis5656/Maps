// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers"],function(Fb,Ha){var aa={exports:{}};(function(ba,ca){ca=function(){var K="undefined"!==typeof document&&document.currentScript?document.currentScript.src:void 0;"undefined"!==typeof __filename&&(K=K||__filename);return function(z){function P(a){return e.locateFile?e.locateFile(a,A):A+a}function Q(a,b){a||V("Assertion failed: "+b)}function Ia(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&$a)return $a.decode(a.subarray(b,c));for(d="";b<c;){var f=
a[b++];if(f&128){var g=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|g);else{var h=a[b++]&63;f=224==(f&240)?(f&15)<<12|g<<6|h:(f&7)<<18|g<<12|h<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}function Gb(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);if(55296<=h&&57343>=h){var k=a.charCodeAt(++g);h=65536+((h&1023)<<10)|k&1023}if(127>=h){if(c>=
d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-f}function Hb(a,b){var c=a>>1;for(var d=c+b/2;!(c>=d)&&da[c];)++c;c<<=1;if(32<c-a&&ab)return ab.decode(w.subarray(a,c));c=0;for(d="";;){var f=R[a+2*c>>1];if(0==f||c==b/2)return d;++c;d+=String.fromCharCode(f)}}function Ib(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=
2;var d=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f){var g=a.charCodeAt(f);R[b>>1]=g;b+=2}R[b>>1]=0;return b-d}function Jb(a){return 2*a.length}function Kb(a,b){for(var c=0,d="";!(c>=b/4);){var f=x[a+4*c>>2];if(0==f)break;++c;65536<=f?(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023)):d+=String.fromCharCode(f)}return d}function Lb(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var h=a.charCodeAt(++f);
g=65536+((g&1023)<<10)|h&1023}x[b>>2]=g;b+=4;if(b+4>c)break}x[b>>2]=0;return b-d}function Mb(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}function Nb(a,b){0<a%b&&(a+=b-a%b);return a}function bb(a){ea=a;e.HEAP8=sa=new Int8Array(a);e.HEAP16=R=new Int16Array(a);e.HEAP32=x=new Int32Array(a);e.HEAPU8=w=new Uint8Array(a);e.HEAPU16=da=new Uint16Array(a);e.HEAPU32=D=new Uint32Array(a);e.HEAPF32=cb=new Float32Array(a);e.HEAPF64=db=new Float64Array(a)}function ta(a){for(;0<
a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.func;"number"===typeof c?void 0===b.arg?e.dynCall_v(c):e.dynCall_vi(c,b.arg):c(void 0===b.arg?null:b.arg)}}}function V(a){if(e.onAbort)e.onAbort(a);a+="";W(a);eb=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS\x3d1 for more info.");fb(a);throw a;}function ua(a,b){return String.prototype.startsWith?a.startsWith(b):0===a.indexOf(b)}function gb(){try{if(fa)return new Uint8Array(fa);if(va)return va(E);throw"both async and sync fetching of the wasm failed";
}catch(a){V(a)}}function Ob(){return fa||!wa&&!S||"function"!==typeof fetch||ua(E,"file://")?new Promise(function(a,b){a(gb())}):fetch(E,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+E+"'";return a.arrayBuffer()}).catch(function(){return gb()})}function xa(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function ha(a){return this.fromWireType(D[a>>2])}function hb(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);
return 48<=b&&57>=b?"_"+a:a}function Ja(a,b){a=hb(a);return function(){return b.apply(this,arguments)}}function Ka(a,b){var c=Ja(b,function(d){this.name=b;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(a.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}function ya(a){throw new ib(a);}function L(a,b,c){function d(k){k=
c(k);k.length!==a.length&&ya("Mismatched type converter count");for(var n=0;n<a.length;++n)F(a[n],k[n])}a.forEach(function(k){za[k]=b});var f=Array(b.length),g=[],h=0;b.forEach(function(k,n){T.hasOwnProperty(k)?f[n]=T[k]:(g.push(k),X.hasOwnProperty(k)||(X[k]=[]),X[k].push(function(){f[n]=T[k];++h;h===g.length&&d(f)}))});0===g.length&&d(f)}function Aa(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}function u(a){for(var b=
"";w[a];)b+=jb[w[a++]];return b}function t(a){throw new Y(a);}function F(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||t('type "'+d+'" must have a positive integer typeid pointer');if(T.hasOwnProperty(a)){if(c.ignoreDuplicateRegistrations)return;t("Cannot register type '"+d+"' twice")}T[a]=b;delete za[a];X.hasOwnProperty(a)&&(b=X[a],delete X[a],b.forEach(function(f){f()}))}function Pb(a){return{count:a.count,
deleteScheduled:a.deleteScheduled,preservePointerOnDelete:a.preservePointerOnDelete,ptr:a.ptr,ptrType:a.ptrType,smartPtr:a.smartPtr,smartPtrType:a.smartPtrType}}function La(a){t(a.$$.ptrType.registeredClass.name+" instance already deleted")}function kb(a){}function lb(a){--a.count.value;0===a.count.value&&(a.smartPtr?a.smartPtrType.rawDestructor(a.smartPtr):a.ptrType.registeredClass.rawDestructor(a.ptr))}function ia(a){if("undefined"===typeof FinalizationGroup)return ia=function(b){return b},a;Ma=
new FinalizationGroup(function(b){for(var c=b.next();!c.done;c=b.next())c=c.value,c.ptr?lb(c):console.warn("object already deleted: "+c.ptr)});ia=function(b){Ma.register(b,b.$$,b.$$);return b};kb=function(b){Ma.unregister(b.$$)};return ia(a)}function Na(){for(;ja.length;){var a=ja.pop();a.$$.deleteScheduled=!1;a["delete"]()}}function M(){}function mb(a,b,c){if(void 0===a[b].overloadTable){var d=a[b];a[b]=function(){a[b].overloadTable.hasOwnProperty(arguments.length)||t("Function '"+c+"' called with an invalid number of arguments ("+
arguments.length+") - expects one of ("+a[b].overloadTable+")!");return a[b].overloadTable[arguments.length].apply(this,arguments)};a[b].overloadTable=[];a[b].overloadTable[d.argCount]=d}}function Oa(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].overloadTable&&void 0!==e[a].overloadTable[c])&&t("Cannot register public name '"+a+"' twice"),mb(e,a,a),e.hasOwnProperty(c)&&t("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].overloadTable[c]=b):
(e[a]=b,void 0!==c&&(e[a].numArguments=c))}function Qb(a,b,c,d,f,g,h,k){this.name=a;this.constructor=b;this.instancePrototype=c;this.rawDestructor=d;this.baseClass=f;this.getActualType=g;this.upcast=h;this.downcast=k;this.pureVirtualFunctions=[]}function Pa(a,b,c){for(;b!==c;)b.upcast||t("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.upcast(a),b=b.baseClass;return a}function Rb(a,b){if(null===b)return this.isReference&&t("null is not a valid "+this.name),0;b.$$||t('Cannot pass "'+
Z(b)+'" as a '+this.name);b.$$.ptr||t("Cannot pass deleted object as a pointer of type "+this.name);return Pa(b.$$.ptr,b.$$.ptrType.registeredClass,this.registeredClass)}function Sb(a,b){if(null===b){this.isReference&&t("null is not a valid "+this.name);if(this.isSmartPointer){var c=this.rawConstructor();null!==a&&a.push(this.rawDestructor,c);return c}return 0}b.$$||t('Cannot pass "'+Z(b)+'" as a '+this.name);b.$$.ptr||t("Cannot pass deleted object as a pointer of type "+this.name);!this.isConst&&
b.$$.ptrType.isConst&&t("Cannot convert argument of type "+(b.$$.smartPtrType?b.$$.smartPtrType.name:b.$$.ptrType.name)+" to parameter type "+this.name);c=Pa(b.$$.ptr,b.$$.ptrType.registeredClass,this.registeredClass);if(this.isSmartPointer)switch(void 0===b.$$.smartPtr&&t("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:b.$$.smartPtrType===this?c=b.$$.smartPtr:t("Cannot convert argument of type "+(b.$$.smartPtrType?b.$$.smartPtrType.name:b.$$.ptrType.name)+" to parameter type "+
this.name);break;case 1:c=b.$$.smartPtr;break;case 2:if(b.$$.smartPtrType===this)c=b.$$.smartPtr;else{var d=b.clone();c=this.rawShare(c,G(function(){d["delete"]()}));null!==a&&a.push(this.rawDestructor,c)}break;default:t("Unsupporting sharing policy")}return c}function Tb(a,b){if(null===b)return this.isReference&&t("null is not a valid "+this.name),0;b.$$||t('Cannot pass "'+Z(b)+'" as a '+this.name);b.$$.ptr||t("Cannot pass deleted object as a pointer of type "+this.name);b.$$.ptrType.isConst&&t("Cannot convert argument of type "+
b.$$.ptrType.name+" to parameter type "+this.name);return Pa(b.$$.ptr,b.$$.ptrType.registeredClass,this.registeredClass)}function nb(a,b,c){if(b===c)return a;if(void 0===c.baseClass)return null;a=nb(a,b,c.baseClass);return null===a?null:c.downcast(a)}function Ub(a,b){for(void 0===b&&t("ptr should not be undefined");a.baseClass;)b=a.upcast(b),a=a.baseClass;return ka[b]}function Ba(a,b){b.ptrType&&b.ptr||ya("makeClassHandle requires ptr and ptrType");!!b.smartPtrType!==!!b.smartPtr&&ya("Both smartPtrType and smartPtr must be specified");
b.count={value:1};return ia(Object.create(a,{$$:{value:b}}))}function H(a,b,c,d,f,g,h,k,n,l,m){this.name=a;this.registeredClass=b;this.isReference=c;this.isConst=d;this.isSmartPointer=f;this.pointeeType=g;this.sharingPolicy=h;this.rawGetPointee=k;this.rawConstructor=n;this.rawShare=l;this.rawDestructor=m;f||void 0!==b.baseClass?this.toWireType=Sb:(this.toWireType=d?Rb:Tb,this.destructorFunction=null)}function ob(a,b,c){e.hasOwnProperty(a)||ya("Replacing nonexistant public symbol");void 0!==e[a].overloadTable&&
void 0!==c?e[a].overloadTable[c]=b:(e[a]=b,e[a].argCount=c)}function B(a,b){a=u(a);var c=function(d){var f=[b];return function(){f.length=arguments.length+1;for(var g=0;g<arguments.length;g++)f[g+1]=arguments[g];return d.apply(null,f)}}(e["dynCall_"+a]);"function"!==typeof c&&t("unknown function pointer with signature "+a+": "+b);return c}function pb(a){a=qb(a);var b=u(a);I(a);return b}function Ca(a,b){function c(g){f[g]||T[g]||(za[g]?za[g].forEach(c):(d.push(g),f[g]=!0))}var d=[],f={};b.forEach(c);
throw new rb(a+": "+d.map(pb).join([", "]));}function Qa(a,b){for(var c=[],d=0;d<a;d++)c.push(x[(b>>2)+d]);return c}function sb(a,b,c,d,f){var g=b.length;2>g&&t("argTypes array size mismatch! Must at least get return value and 'this' types!");var h=null!==b[1]&&null!==c,k=!1;for(c=1;c<b.length;++c)if(null!==b[c]&&void 0===b[c].destructorFunction){k=!0;break}var n="void"!==b[0].name,l=g-2,m=Array(l),q=[],p=[];return function(){arguments.length!==l&&t("function "+a+" called with "+arguments.length+
" arguments, expected "+l+" args!");p.length=0;q.length=h?2:1;q[0]=f;if(h){var v=b[1].toWireType(p,this);q[1]=v}for(var r=0;r<l;++r)m[r]=b[r+2].toWireType(p,arguments[r]),q.push(m[r]);var N=d.apply(null,q);if(k)xa(p);else for(r=h?1:2;r<b.length;r++){var C=1===r?v:m[r-2];null!==b[r].destructorFunction&&b[r].destructorFunction(C)}if(n)return b[0].fromWireType(N)}}function Ra(a){4<a&&0===--y[a].refcount&&(y[a]=void 0,Sa.push(a))}function G(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;
case !1:return 4;default:var b=Sa.length?Sa.pop():y.length;y[b]={refcount:1,value:a};return b}}function Vb(a,b,c){switch(b){case 0:return function(d){return this.fromWireType((c?sa:w)[d])};case 1:return function(d){return this.fromWireType((c?R:da)[d>>1])};case 2:return function(d){return this.fromWireType((c?x:D)[d>>2])};default:throw new TypeError("Unknown integer type: "+a);}}function Da(a,b){var c=T[a];void 0===c&&t(b+" has unknown type "+pb(a));return c}function Z(a){if(null===a)return"null";
var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Wb(a,b){switch(b){case 2:return function(c){return this.fromWireType(cb[c>>2])};case 3:return function(c){return this.fromWireType(db[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Xb(a,b,c){switch(b){case 0:return c?function(d){return sa[d]}:function(d){return w[d]};case 1:return c?function(d){return R[d>>1]}:function(d){return da[d>>1]};case 2:return c?function(d){return x[d>>2]}:
function(d){return D[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}function la(a){a||t("Cannot use deleted val. handle \x3d "+a);return y[a].value}function Ea(a){var b=Yb[a];return void 0===b?u(a):b}function tb(){function a(b){b.$$$embind_global$$$=b;var c="object"===typeof $$$embind_global$$$&&b.$$$embind_global$$$===b;c||delete b.$$$embind_global$$$;return c}if("object"===typeof globalThis)return globalThis;if("object"===typeof $$$embind_global$$$)return $$$embind_global$$$;"object"===
typeof Ha.commonjsGlobal&&a(Ha.commonjsGlobal)?$$$embind_global$$$=Ha.commonjsGlobal:"object"===typeof self&&a(self)&&($$$embind_global$$$=self);if("object"===typeof $$$embind_global$$$)return $$$embind_global$$$;throw Error("unable to get global object.");}function Zb(a){var b=Ta.length;Ta.push(a);return b}function $b(a,b){for(var c=Array(a),d=0;d<a;++d)c[d]=Da(x[(b>>2)+d],"parameter "+d);return c}function ac(a){var b=Array(a+1);return function(c,d,f){b[0]=c;for(var g=0;g<a;++g){var h=Da(x[(d>>2)+
g],"parameter "+g);b[g+1]=h.readValueFromPointer(f);f+=h.argPackAdvance}c=new (c.bind.apply(c,b));return G(c)}}function Ua(a){function b(){if(!Fa&&(Fa=!0,e.calledRun=!0,!eb)){ta(ub);ta(bc);vb(e);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)wb.unshift(e.postRun.shift());ta(wb)}}if(!(0<U)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)xb.unshift(e.preRun.shift());ta(xb);
0<U||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}z=z||{};var e="undefined"!==typeof z?z:{},vb,fb;e.ready=new Promise(function(a,b){vb=a;fb=b});var ma={},O;for(O in e)e.hasOwnProperty(O)&&(ma[O]=e[O]);var wa=!1,S=!1,Va=!1,yb=!1;wa="object"===typeof window;S="function"===typeof importScripts;Va="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;yb=!wa&&!Va&&!S;var A="",Wa,Xa;
if(Va){A=S?require("path").dirname(A)+"/":__dirname+"/";var Ya=function(a,b){Wa||(Wa=require("fs"));Xa||(Xa=require("path"));a=Xa.normalize(a);return Wa.readFileSync(a,b?null:"utf8")};var va=function(a){a=Ya(a,!0);a.buffer||(a=new Uint8Array(a));Q(a.buffer);return a};1<process.argv.length&&process.argv[1].replace(/\\/g,"/");process.argv.slice(2);process.on("uncaughtException",function(a){throw a;});process.on("unhandledRejection",V);e.inspect=function(){return"[Emscripten Module object]"}}else if(yb)"undefined"!=
typeof read&&(Ya=function(a){return read(a)}),va=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");Q("object"===typeof a);return a},"undefined"!=typeof scriptArgs&&scriptArgs,"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(wa||S)S?A=self.location.href:document.currentScript&&(A=document.currentScript.src),K&&(A=K),A=0!==A.indexOf("blob:")?
A.substr(0,A.lastIndexOf("/")+1):"",Ya=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},S&&(va=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var cc=e.print||console.log.bind(console),W=e.printErr||console.warn.bind(console);for(O in ma)ma.hasOwnProperty(O)&&(e[O]=ma[O]);ma=null;var fa;e.wasmBinary&&(fa=e.wasmBinary);"object"!==typeof WebAssembly&&V("no native wasm support detected");
var na,dc=new WebAssembly.Table({initial:157,maximum:157,element:"anyfunc"}),eb=!1,$a="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0,ab="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0,sa,w,R,da,x,D,cb,db,zb=e.INITIAL_MEMORY||16777216;if(na=e.wasmMemory?e.wasmMemory:new WebAssembly.Memory({initial:zb/65536,maximum:32768}))var ea=na.buffer;zb=ea.byteLength;bb(ea);x[80624]=5565536;var xb=[],ub=[],bc=[],wb=[],ec=Math.ceil,fc=Math.floor,U=0,oa=null;e.preloadedImages=
{};e.preloadedAudios={};var E="basis_transcoder.wasm";ua(E,"data:application/octet-stream;base64,")||(E=P(E));ub.push({func:function(){Ab()}});var Ga={},X={},T={},za={},ib=void 0,jb=void 0,Y=void 0,Ma=!1,pa=void 0,ja=[],Bb={},ka={},rb=void 0,Sa=[],y=[{},{value:void 0},{value:null},{value:!0},{value:!1}],Yb={},Ta=[],Cb={},qa={mappings:{},buffers:[null,[],[]],printChar:function(a,b){var c=qa.buffers[a];0===b||10===b?((1===a?cc:W)(Ia(c,0)),c.length=0):c.push(b)},varargs:void 0,get:function(){qa.varargs+=
4;return x[qa.varargs-4>>2]},getStr:function(a){return a?Ia(w,a,void 0):""},get64:function(a,b){return a}};ib=e.InternalError=Ka(Error,"InternalError");(function(){for(var a=Array(256),b=0;256>b;++b)a[b]=String.fromCharCode(b);jb=a})();Y=e.BindingError=Ka(Error,"BindingError");M.prototype.isAliasOf=function(a){if(!(this instanceof M&&a instanceof M))return!1;var b=this.$$.ptrType.registeredClass,c=this.$$.ptr,d=a.$$.ptrType.registeredClass;for(a=a.$$.ptr;b.baseClass;)c=b.upcast(c),b=b.baseClass;for(;d.baseClass;)a=
d.upcast(a),d=d.baseClass;return b===d&&c===a};M.prototype.clone=function(){this.$$.ptr||La(this);if(this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var a=ia(Object.create(Object.getPrototypeOf(this),{$$:{value:Pb(this.$$)}}));a.$$.count.value+=1;a.$$.deleteScheduled=!1;return a};M.prototype["delete"]=function(){this.$$.ptr||La(this);this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&t("Object already scheduled for deletion");kb(this);lb(this.$$);this.$$.preservePointerOnDelete||
(this.$$.smartPtr=void 0,this.$$.ptr=void 0)};M.prototype.isDeleted=function(){return!this.$$.ptr};M.prototype.deleteLater=function(){this.$$.ptr||La(this);this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&t("Object already scheduled for deletion");ja.push(this);1===ja.length&&pa&&pa(Na);this.$$.deleteScheduled=!0;return this};H.prototype.getPointee=function(a){this.rawGetPointee&&(a=this.rawGetPointee(a));return a};H.prototype.destructor=function(a){this.rawDestructor&&this.rawDestructor(a)};
H.prototype.argPackAdvance=8;H.prototype.readValueFromPointer=ha;H.prototype.deleteObject=function(a){if(null!==a)a["delete"]()};H.prototype.fromWireType=function(a){function b(){return this.isSmartPointer?Ba(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:c,smartPtrType:this,smartPtr:a}):Ba(this.registeredClass.instancePrototype,{ptrType:this,ptr:a})}var c=this.getPointee(a);if(!c)return this.destructor(a),null;var d=Ub(this.registeredClass,c);if(void 0!==d){if(0===d.$$.count.value)return d.$$.ptr=
c,d.$$.smartPtr=a,d.clone();d=d.clone();this.destructor(a);return d}d=this.registeredClass.getActualType(c);d=Bb[d];if(!d)return b.call(this);d=this.isConst?d.constPointerType:d.pointerType;var f=nb(c,this.registeredClass,d.registeredClass);return null===f?b.call(this):this.isSmartPointer?Ba(d.registeredClass.instancePrototype,{ptrType:d,ptr:f,smartPtrType:this,smartPtr:a}):Ba(d.registeredClass.instancePrototype,{ptrType:d,ptr:f})};e.getInheritedInstanceCount=function(){return Object.keys(ka).length};
e.getLiveInheritedInstances=function(){var a=[],b;for(b in ka)ka.hasOwnProperty(b)&&a.push(ka[b]);return a};e.flushPendingDeletes=Na;e.setDelayFunction=function(a){pa=a;ja.length&&pa&&pa(Na)};rb=e.UnboundTypeError=Ka(Error,"UnboundTypeError");e.count_emval_handles=function(){for(var a=0,b=5;b<y.length;++b)void 0!==y[b]&&++a;return a};e.get_first_emval=function(){for(var a=5;a<y.length;++a)if(void 0!==y[a])return y[a];return null};var gc={u:function(a){var b=Ga[a];delete Ga[a];var c=b.rawConstructor,
d=b.rawDestructor,f=b.fields,g=f.map(function(h){return h.getterReturnType}).concat(f.map(function(h){return h.setterArgumentType}));L([a],g,function(h){var k={};f.forEach(function(n,l){var m=h[l],q=n.getter,p=n.getterContext,v=h[l+f.length],r=n.setter,N=n.setterContext;k[n.fieldName]={read:function(C){return m.fromWireType(q(p,C))},write:function(C,ra){var J=[];r(N,C,v.toWireType(J,ra));xa(J)}}});return[{name:b.name,fromWireType:function(n){var l={},m;for(m in k)l[m]=k[m].read(n);d(n);return l},
toWireType:function(n,l){for(var m in k)if(!(m in l))throw new TypeError('Missing field:  "'+m+'"');var q=c();for(m in k)k[m].write(q,l[m]);null!==n&&n.push(d,q);return q},argPackAdvance:8,readValueFromPointer:ha,destructorFunction:d}]})},J:function(a,b,c,d,f){var g=Aa(c);b=u(b);F(a,{name:b,fromWireType:function(h){return!!h},toWireType:function(h,k){return k?d:f},argPackAdvance:8,readValueFromPointer:function(h){if(1===c)var k=sa;else if(2===c)k=R;else if(4===c)k=x;else throw new TypeError("Unknown boolean type size: "+
b);return this.fromWireType(k[h>>g])},destructorFunction:null})},y:function(a,b,c,d,f,g,h,k,n,l,m,q,p){m=u(m);g=B(f,g);k&&(k=B(h,k));l&&(l=B(n,l));p=B(q,p);var v=hb(m);Oa(v,function(){Ca("Cannot construct "+m+" due to unbound types",[d])});L([a,b,c],d?[d]:[],function(r){r=r[0];if(d){var N=r.registeredClass;var C=N.instancePrototype}else C=M.prototype;r=Ja(v,function(){if(Object.getPrototypeOf(this)!==ra)throw new Y("Use 'new' to construct "+m);if(void 0===J.constructor_body)throw new Y(m+" has no accessible constructor");
var Db=J.constructor_body[arguments.length];if(void 0===Db)throw new Y("Tried to invoke ctor of "+m+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(J.constructor_body).toString()+") parameters instead!");return Db.apply(this,arguments)});var ra=Object.create(C,{constructor:{value:r}});r.prototype=ra;var J=new Qb(m,r,ra,p,N,g,k,l);N=new H(m,J,!0,!1,!1);C=new H(m+"*",J,!1,!1,!1);var Eb=new H(m+" const*",J,!1,!0,!1);Bb[a]={pointerType:C,constPointerType:Eb};ob(v,
r);return[N,C,Eb]})},x:function(a,b,c,d,f,g){Q(0<b);var h=Qa(b,c);f=B(d,f);var k=[g],n=[];L([],[a],function(l){l=l[0];var m="constructor "+l.name;void 0===l.registeredClass.constructor_body&&(l.registeredClass.constructor_body=[]);if(void 0!==l.registeredClass.constructor_body[b-1])throw new Y("Cannot register multiple constructors with identical number of parameters ("+(b-1)+") for class '"+l.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");
l.registeredClass.constructor_body[b-1]=function(){Ca("Cannot construct "+l.name+" due to unbound types",h)};L([],h,function(q){l.registeredClass.constructor_body[b-1]=function(){arguments.length!==b-1&&t(m+" called with "+arguments.length+" arguments, expected "+(b-1));n.length=0;k.length=b;for(var p=1;p<b;++p)k[p]=q[p].toWireType(n,arguments[p-1]);p=f.apply(null,k);xa(n);return q[0].fromWireType(p)};return[]});return[]})},d:function(a,b,c,d,f,g,h,k){var n=Qa(c,d);b=u(b);g=B(f,g);L([],[a],function(l){function m(){Ca("Cannot call "+
q+" due to unbound types",n)}l=l[0];var q=l.name+"."+b;k&&l.registeredClass.pureVirtualFunctions.push(b);var p=l.registeredClass.instancePrototype,v=p[b];void 0===v||void 0===v.overloadTable&&v.className!==l.name&&v.argCount===c-2?(m.argCount=c-2,m.className=l.name,p[b]=m):(mb(p,b,q),p[b].overloadTable[c-2]=m);L([],n,function(r){r=sb(q,r,l,g,h);void 0===p[b].overloadTable?(r.argCount=c-2,p[b]=r):p[b].overloadTable[c-2]=r;return[]});return[]})},k:function(a,b,c){a=u(a);L([],[b],function(d){d=d[0];
e[a]=d.fromWireType(c);return[]})},I:function(a,b){b=u(b);F(a,{name:b,fromWireType:function(c){var d=y[c].value;Ra(c);return d},toWireType:function(c,d){return G(d)},argPackAdvance:8,readValueFromPointer:ha,destructorFunction:null})},n:function(a,b,c,d){function f(){}c=Aa(c);b=u(b);f.values={};F(a,{name:b,constructor:f,fromWireType:function(g){return this.constructor.values[g]},toWireType:function(g,h){return h.value},argPackAdvance:8,readValueFromPointer:Vb(b,c,d),destructorFunction:null});Oa(b,
f)},a:function(a,b,c){var d=Da(a,"enum");b=u(b);a=d.constructor;d=Object.create(d.constructor.prototype,{value:{value:c},constructor:{value:Ja(d.name+"_"+b,function(){})}});a.values[c]=d;a[b]=d},B:function(a,b,c){c=Aa(c);b=u(b);F(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError('Cannot convert "'+Z(f)+'" to '+this.name);return f},argPackAdvance:8,readValueFromPointer:Wb(b,c),destructorFunction:null})},i:function(a,
b,c,d,f,g){var h=Qa(b,c);a=u(a);f=B(d,f);Oa(a,function(){Ca("Cannot call "+a+" due to unbound types",h)},b-1);L([],h,function(k){k=[k[0],null].concat(k.slice(1));ob(a,sb(a,k,null,f,g),b-1);return[]})},j:function(a,b,c,d,f){b=u(b);-1===f&&(f=4294967295);var g=Aa(c),h=function(l){return l};if(0===d){var k=32-8*c;h=function(l){return l<<k>>>k}}var n=-1!=b.indexOf("unsigned");F(a,{name:b,fromWireType:h,toWireType:function(l,m){if("number"!==typeof m&&"boolean"!==typeof m)throw new TypeError('Cannot convert "'+
Z(m)+'" to '+this.name);if(m<d||m>f)throw new TypeError('Passing a number "'+Z(m)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+f+"]!");return n?m>>>0:m|0},argPackAdvance:8,readValueFromPointer:Xb(b,g,0!==d),destructorFunction:null})},h:function(a,b,c){function d(g){g>>=2;var h=D;return new f(ea,h[g+1],h[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=u(c);F(a,{name:c,fromWireType:d,
argPackAdvance:8,readValueFromPointer:d},{ignoreDuplicateRegistrations:!0})},C:function(a,b){b=u(b);var c="std::string"===b;F(a,{name:b,fromWireType:function(d){var f=D[d>>2];if(c)for(var g=d+4,h=0;h<=f;++h){var k=d+4+h;if(h==f||0==w[k]){var n=k-g;g=g?Ia(w,g,n):"";if(void 0===l)var l=g;else l+=String.fromCharCode(0),l+=g;g=k+1}}else{l=Array(f);for(h=0;h<f;++h)l[h]=String.fromCharCode(w[d+4+h]);l=l.join("")}I(d);return l},toWireType:function(d,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g=
"string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||t("Cannot pass non-string to std::string");var h=(c&&g?function(){for(var l=f,m=0,q=0;q<l.length;++q){var p=l.charCodeAt(q);55296<=p&&57343>=p&&(p=65536+((p&1023)<<10)|l.charCodeAt(++q)&1023);127>=p?++m:m=2047>=p?m+2:65535>=p?m+3:m+4}return m}:function(){return f.length})(),k=Za(4+h+1);D[k>>2]=h;if(c&&g)Gb(f,w,k+4,h+1);else if(g)for(g=0;g<h;++g){var n=f.charCodeAt(g);255<n&&(I(k),t("String has UTF-16 code units that do not fit in 8 bits"));
w[k+4+g]=n}else for(g=0;g<h;++g)w[k+4+g]=f[g];null!==d&&d.push(I,k);return k},argPackAdvance:8,readValueFromPointer:ha,destructorFunction:function(d){I(d)}})},w:function(a,b,c){c=u(c);if(2===b){var d=Hb;var f=Ib;var g=Jb;var h=function(){return da};var k=1}else 4===b&&(d=Kb,f=Lb,g=Mb,h=function(){return D},k=2);F(a,{name:c,fromWireType:function(n){for(var l=D[n>>2],m=h(),q,p=n+4,v=0;v<=l;++v){var r=n+4+v*b;if(v==l||0==m[r>>k])p=d(p,r-p),void 0===q?q=p:(q+=String.fromCharCode(0),q+=p),p=r+b}I(n);return q},
toWireType:function(n,l){"string"!==typeof l&&t("Cannot pass non-string to C++ string type "+c);var m=g(l),q=Za(4+m+b);D[q>>2]=m>>k;f(l,q+4,m+b);null!==n&&n.push(I,q);return q},argPackAdvance:8,readValueFromPointer:ha,destructorFunction:function(n){I(n)}})},v:function(a,b,c,d,f,g){Ga[a]={name:u(b),rawConstructor:B(c,d),rawDestructor:B(f,g),fields:[]}},c:function(a,b,c,d,f,g,h,k,n,l){Ga[a].fields.push({fieldName:u(b),getterReturnType:c,getter:B(d,f),getterContext:g,setterArgumentType:h,setter:B(k,
n),setterContext:l})},K:function(a,b){b=u(b);F(a,{isVoid:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(c,d){}})},m:function(a,b,c){a=la(a);b=Da(b,"emval::as");var d=[],f=G(d);x[c>>2]=f;return b.toWireType(d,a)},s:function(a,b,c,d){a=Ta[a];b=la(b);c=Ea(c);a(b,c,null,d)},b:Ra,z:function(a){if(0===a)return G(tb());a=Ea(a);return G(tb()[a])},t:function(a,b){var c=$b(a,b),d=c[0],f=Array(a-1);return Zb(function(g,h,k,n){for(var l=0,m=0;m<a-1;++m)f[m]=c[m+1].readValueFromPointer(n+
l),l+=c[m+1].argPackAdvance;g=g[h].apply(g,f);for(m=0;m<a-1;++m)c[m+1].deleteObject&&c[m+1].deleteObject(f[m]);if(!d.isVoid)return d.toWireType(k,g)})},r:function(a){a=Ea(a);return G(e[a])},e:function(a,b){a=la(a);b=la(b);return G(a[b])},g:function(a){4<a&&(y[a].refcount+=1)},q:function(a,b,c,d){a=la(a);var f=Cb[b];f||(f=ac(b),Cb[b]=f);return f(a,c,d)},f:function(a){return G(Ea(a))},l:function(a){xa(y[a].value);Ra(a)},p:function(){V()},F:function(a,b,c){w.copyWithin(a,b,b+c)},G:function(a){a>>>=0;
var b=w.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.min(2147483648,Nb(Math.max(16777216,a,d),65536));a:{try{na.grow(d-ea.byteLength+65535>>>16);bb(na.buffer);var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},H:function(a){return 0},D:function(a,b,c,d,f){},A:function(a,b,c,d){for(var f=0,g=0;g<c;g++){for(var h=x[b+8*g>>2],k=x[b+(8*g+4)>>2],n=0;n<k;n++)qa.printChar(a,w[h+n]);f+=k}x[d>>2]=f;return 0},memory:na,o:function(a){a=+a;return 0<=
a?+fc(a+.5):+ec(a-.5)},E:function(a){},table:dc};(function(){function a(f,g){e.asm=f.exports;U--;e.monitorRunDependencies&&e.monitorRunDependencies(U);0==U&&oa&&(f=oa,oa=null,f())}function b(f){a(f.instance)}function c(f){return Ob().then(function(g){return WebAssembly.instantiate(g,d)}).then(f,function(g){W("failed to asynchronously prepare wasm: "+g);V(g)})}var d={a:gc};U++;e.monitorRunDependencies&&e.monitorRunDependencies(U);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return W("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){if(fa||"function"!==typeof WebAssembly.instantiateStreaming||ua(E,"data:application/octet-stream;base64,")||ua(E,"file://")||"function"!==typeof fetch)return c(b);fetch(E,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(g){W("wasm streaming compile failed: "+g);W("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();var Ab=e.___wasm_call_ctors=function(){return(Ab=e.___wasm_call_ctors=e.asm.L).apply(null,
arguments)},Za=e._malloc=function(){return(Za=e._malloc=e.asm.M).apply(null,arguments)},I=e._free=function(){return(I=e._free=e.asm.N).apply(null,arguments)},qb=e.___getTypeName=function(){return(qb=e.___getTypeName=e.asm.O).apply(null,arguments)};e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.P).apply(null,arguments)};e.dynCall_viii=function(){return(e.dynCall_viii=e.asm.Q).apply(null,arguments)};e.dynCall_vi=function(){return(e.dynCall_vi=
e.asm.R).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.S).apply(null,arguments)};e.dynCall_i=function(){return(e.dynCall_i=e.asm.T).apply(null,arguments)};e.dynCall_iii=function(){return(e.dynCall_iii=e.asm.U).apply(null,arguments)};e.dynCall_ii=function(){return(e.dynCall_ii=e.asm.V).apply(null,arguments)};e.dynCall_vii=function(){return(e.dynCall_vii=e.asm.W).apply(null,arguments)};e.dynCall_iiii=function(){return(e.dynCall_iiii=e.asm.X).apply(null,arguments)};e.dynCall_iiiii=
function(){return(e.dynCall_iiiii=e.asm.Y).apply(null,arguments)};e.dynCall_iiiiii=function(){return(e.dynCall_iiiiii=e.asm.Z).apply(null,arguments)};e.dynCall_iiiiiiii=function(){return(e.dynCall_iiiiiiii=e.asm._).apply(null,arguments)};e.dynCall_iiiiiiiii=function(){return(e.dynCall_iiiiiiiii=e.asm.$).apply(null,arguments)};e.dynCall_viiii=function(){return(e.dynCall_viiii=e.asm.aa).apply(null,arguments)};e.dynCall_iiiiiii=function(){return(e.dynCall_iiiiiii=e.asm.ba).apply(null,arguments)};e.dynCall_iiiiiiiiiiiiiiiiiiii=
function(){return(e.dynCall_iiiiiiiiiiiiiiiiiiii=e.asm.ca).apply(null,arguments)};e.dynCall_iiiiiiiiiiiiiiiiiiiii=function(){return(e.dynCall_iiiiiiiiiiiiiiiiiiiii=e.asm.da).apply(null,arguments)};e.dynCall_iiiiiiiiiiiiiiiiiii=function(){return(e.dynCall_iiiiiiiiiiiiiiiiiii=e.asm.ea).apply(null,arguments)};e.dynCall_viiiii=function(){return(e.dynCall_viiiii=e.asm.fa).apply(null,arguments)};e.dynCall_iiiiiiiiii=function(){return(e.dynCall_iiiiiiiiii=e.asm.ga).apply(null,arguments)};e.dynCall_iiiiiiiiiii=
function(){return(e.dynCall_iiiiiiiiiii=e.asm.ha).apply(null,arguments)};e.dynCall_jiji=function(){return(e.dynCall_jiji=e.asm.ia).apply(null,arguments)};e.dynCall_viiiiii=function(){return(e.dynCall_viiiiii=e.asm.ja).apply(null,arguments)};var Fa;oa=function b(){Fa||Ua();Fa||(oa=b)};e.run=Ua;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();Ua();return z.ready}}();ba.exports=ca})(aa);aa=Object.freeze(function(ba,ca){for(var K=0;K<ca.length;K++){const z=
ca[K];if("string"!==typeof z&&!Array.isArray(z))for(const P in z)if("default"!==P&&!(P in ba)){const Q=Object.getOwnPropertyDescriptor(z,P);Q&&Object.defineProperty(ba,P,Q.get?Q:{enumerable:!0,get:()=>z[P]})}}return Object.freeze(ba)}({__proto__:null,default:aa.exports},[aa.exports]));Fb.basis_transcoder=aa});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["../../chunks/_rollupPluginBabelHelpers","../../request","../../core/Error","../../core/Logger","../../core/urlUtils"],function(l,m,p,q,n){const r=q.getLogger("esri.layers.support.SpriteSource");return function(){function h(d,e,f,g){this.baseURL=d;this.devicePixelRatio=e;this.maxTextureSize=f;this._spriteImageFormat=g;this._isRetina=!1;this._spritesData={};this.height=this.width=this.image=null;this.loadStatus="not-loaded"}var k=h.prototype;k.getSpriteInfo=function(d){return this._spritesData[d]};
k.load=function(){var d=l._asyncToGenerator(function*(e){if(this.baseURL){this.loadStatus="loading";try{yield this._loadSprites(e),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"});return function(e){return d.apply(this,arguments)}}();k._loadSprites=function(d){this._isRetina=1.15<this.devicePixelRatio?!0:!1;const e=n.urlToObject(this.baseURL),f=e.query?"?"+n.objectToQuery(e.query):"",g=this._isRetina?"@2x":"",t=`${e.path}${g}.${this._spriteImageFormat}${f}`;
return Promise.all([m(`${e.path}${g}.json${f}`,d),m(t,{responseType:"image",...d})]).then(([a,c])=>{var b=Object.keys(a.data);if(!b||0===b.length||1===b.length&&"_ssl"===b[0]||!c||!c.data)return this._spritesData=this.image=null,this.width=this.height=0,Promise.resolve(null);this._spritesData=a.data;a=c.data;c=Math.max(this.maxTextureSize,4096);if(a.width>c||a.height>c)throw a=`Sprite resource for style ${e.path} is bigger than the maximum allowed of ${c} pixels}`,r.error(a),new p("SpriteSource",
a);this.width=a.width;this.height=a.height;c=document.createElement("canvas");b=c.getContext("2d");c.width=a.width;c.height=a.height;b.drawImage(a,0,0,a.width,a.height);a=b.getImageData(0,0,a.width,a.height);a=new Uint8Array(a.data);for(b=0;b<a.length;b+=4)c=a[b+3]/255,a[b]*=c,a[b+1]*=c,a[b+2]*=c;this.image=a})};l._createClass(h,[{key:"spriteNames",get:function(){const d=[];for(const e in this._spritesData)d.push(e);d.sort();return d}}]);return h}()});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../assets ../../../../../core/Accessor ../../../../../core/Logger ../../../../../core/accessorSupport/decorators/property ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/subclass ../../../../../support/requestImageUtils ../../../../webgl/Texture".split(" "),function(b,h,e,k,n,p,l,w,x,y,q,r,t){const u=
p.getLogger("esri.views.3d.webgl-engine.materials.internal.waterMaterialUtils");b.WaterTextureRepository=function(m){function d(){var a=m.apply(this,arguments)||this;a._data=[];a.loadingState=0;return a}h._inheritsLoose(d,m);var f=d.prototype;f.dispose=function(){this.loadingState=0;this._data.forEach(a=>a.dispose());this._data.length=0};f.loadTextures=function(a){const v=[k.getAssetUrl("esri/images/materials/water/normals.jpg"),k.getAssetUrl("esri/images/materials/water/perturbation.jpg")];this.loadingState=
1;Promise.all(v.map(c=>r.requestImage(c))).then(c=>{c.forEach(g=>this._data.push(new t(a,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:10497,samplingMode:9987,hasMipmap:!0,maxAnisotropy:8,width:g.width,height:g.height},g)));this.loadingState=2}).catch(c=>{u.error("Failed to load textures for water material.",c);this.loadingState=0})};f.bind=function(a){this.ready&&(a.bindTexture(this._data[0],"texWaveNormal"),a.bindTexture(this._data[1],"texWavePerturbation"))};h._createClass(d,[{key:"updating",
get:function(){return 1===this.loadingState}},{key:"ready",get:function(){return 2===this.loadingState}}]);return d}(n);e.__decorate([l.property()],b.WaterTextureRepository.prototype,"loadingState",void 0);e.__decorate([l.property({type:Boolean,readOnly:!0})],b.WaterTextureRepository.prototype,"updating",null);b.WaterTextureRepository=e.__decorate([q.subclass("esri.views.3d.webgl-engine.materials.internal.WaterTextureRepository")],b.WaterTextureRepository);Object.defineProperty(b,"__esModule",{value:!0})});
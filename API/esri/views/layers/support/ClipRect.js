// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./ClipArea".split(" "),function(g,b,d,a,m,n,k,l){var f;a=f=function(h){function e(){var c=h.apply(this,arguments)||this;c.type="rect";c.left=null;c.right=null;c.top=null;c.bottom=null;return c}g._inheritsLoose(e,h);e.prototype.clone=function(){return new f({left:this.left,
right:this.right,top:this.top,bottom:this.bottom})};g._createClass(e,[{key:"version",get:function(){return(this._get("version")||0)+1}}]);return e}(l);b.__decorate([d.property({type:[Number,String],json:{write:!0}})],a.prototype,"left",void 0);b.__decorate([d.property({type:[Number,String],json:{write:!0}})],a.prototype,"right",void 0);b.__decorate([d.property({type:[Number,String],json:{write:!0}})],a.prototype,"top",void 0);b.__decorate([d.property({type:[Number,String],json:{write:!0}})],a.prototype,
"bottom",void 0);b.__decorate([d.property({readOnly:!0})],a.prototype,"version",null);return a=f=b.__decorate([k.subclass("esri.views.layers.support.ClipRect")],a)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/Accessor ../../core/jsonMap ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/support/jsonUtils".split(" "),function(l,d,g,b,m,e,q,r,t,n,h){const p=new m.JSONMap({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});b=function(k){function f(a){a=
k.call(this,a)||this;a.geometry1=null;a.geometry2=null;a.distanceUnit=null;a.geodesic=null;return a}l._inheritsLoose(f,k);f.prototype.toJSON=function(){const a={};var c=this.geometry1;c&&(a.geometry1=JSON.stringify({geometryType:h.getJsonType(c),geometry:c}),a.sr=JSON.stringify(this.geometry1.spatialReference.toJSON()));if(c=this.geometry2)a.geometry2=JSON.stringify({geometryType:h.getJsonType(c),geometry:c});this.distanceUnit&&(a.distanceUnit=p.toJSON(this.distanceUnit));this.geodesic&&(a.geodesic=
this.geodesic);return a};return f}(b);d.__decorate([e.property({types:g.geometryTypes,json:{write:!0}})],b.prototype,"geometry1",void 0);d.__decorate([e.property({types:g.geometryTypes,json:{write:!0}})],b.prototype,"geometry2",void 0);d.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"distanceUnit",void 0);d.__decorate([e.property({type:Boolean,json:{write:!0}})],b.prototype,"geodesic",void 0);return b=d.__decorate([n.subclass("esri.rest.support.DistanceParameters")],b)});
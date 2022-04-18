// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/reader ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/decorators/writer ./NetworkElement ../../../geometry/Polyline".split(" "),function(n,d,c,p,e,t,u,v,k,q,l,f,r){c=function(m){function h(a){a=
m.call(this,a)||this;a.globalId=null;a.associationType=null;a.fromNetworkElement=null;a.toNetworkElement=null;a.geometry=null;return a}n._inheritsLoose(h,m);var g=h.prototype;g.readFromNetworkElement=function(a,b){a=new f;a.globalId=b.fromGlobalId;a.networkSourceId=b.fromNetworkSourceId;a.terminalId=b.fromTerminalId;return a};g.writeFromNetworkElement=function(a,b){a&&(b.fromGlobalId=a.globalId,b.fromNetworkSourceId=a.networkSourceId,b.fromTerminalId=a.terminalId)};g.readToNetworkElement=function(a,
b){a=new f;a.globalId=b.toGlobalId;a.networkSourceId=b.toNetworkSourceId;a.terminalId=b.toTerminalId;return a};g.writeToNetworkElement=function(a,b){a&&(b.toGlobalId=a.globalId,b.toNetworkSourceId=a.networkSourceId,b.toTerminalId=a.terminalId)};return h}(p.JSONSupport);d.__decorate([e.property({type:String,json:{write:!0}})],c.prototype,"globalId",void 0);d.__decorate([e.property({type:["attachment","connectivity","containment"],json:{write:!0}})],c.prototype,"associationType",void 0);d.__decorate([e.property({type:f,
json:{write:{target:{fromGlobalId:{type:String},fromNetworkSourceId:{type:Number},fromTerminalId:{type:Number}}},read:{source:["fromGlobalId","fromNetworkSourceId","fromTerminalId"]}}})],c.prototype,"fromNetworkElement",void 0);d.__decorate([k.reader("fromNetworkElement")],c.prototype,"readFromNetworkElement",null);d.__decorate([l.writer("fromNetworkElement")],c.prototype,"writeFromNetworkElement",null);d.__decorate([e.property({type:f,json:{write:{target:{toGlobalId:{type:String},toNetworkSourceId:{type:Number},
toTerminalId:{type:Number}}},read:{source:["toGlobalId","toNetworkSourceId","toTerminalId"]}}})],c.prototype,"toNetworkElement",void 0);d.__decorate([k.reader("toNetworkElement")],c.prototype,"readToNetworkElement",null);d.__decorate([l.writer("toNetworkElement")],c.prototype,"writeToNetworkElement",null);d.__decorate([e.property({type:r,json:{write:!0}})],c.prototype,"geometry",void 0);return c=d.__decorate([q.subclass("esri.rest.networks.support.Association")],c)});
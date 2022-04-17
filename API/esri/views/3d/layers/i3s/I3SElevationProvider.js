// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Evented ../../../../core/Logger ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/support/aaBoundingRect ../../webgl-engine/lib/Intersector".split(" "),
function(y,k,e,z,A,v,n,F,G,H,B,C,D,r,t,l,E){const g=l.empty(),m=D.create(),b=t.create(),p=t.create(),q=t.create(),w=A.getLogger("esri.views.3d.layers.i3s.I3SElevationProvider");e=function(x){function u(a){a=x.call(this,a)||this;a.tmpEvent={spatialReference:null,extent:g,context:"scene"};return a}y._inheritsLoose(u,x);var h=u.prototype;h.initialize=function(){this.view=this.layerView.view;this.renderCoordsHelper=this.view.renderCoordsHelper;this.intersector=E.newIntersector(this.view.state.viewingMode);
this.intersector.options.store=0;const a=this.layerView.i3slayer.fullExtent;v.isNone(a)?w.error("I3SElevationProvider expected fullExtent on I3SLayer."):(this.zmin=a.zmin,this.zmax=a.zmax);this.tmpEvent.context=this.intersectionHandler.isGround?"ground":"scene"};h.getElevation=function(a,f,c,d){b[0]=a;b[1]=f;b[2]=c;if(!this.renderCoordsHelper.toRenderCoords(b,d,b))return w.error("could not project point to compute elevation"),null;a=this.layerView.elevationOffset;f=this.zmin+a;this.renderCoordsHelper.setAltitude(p,
this.zmax+a,b);this.renderCoordsHelper.setAltitude(q,f,b);this.intersector.reset(p,q,null);this.intersectionHandler.intersect(this.intersector,null,p,q);return this.intersector.results.min.getIntersectionPoint(b)?this.renderCoordsHelper.getAltitude(b):null};h.layerChanged=function(){this.spatialReference&&(this.tmpEvent.extent=this.computeLayerExtent(),this.tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this.tmpEvent))};h.objectChanged=function(a){this.spatialReference&&
(this.tmpEvent.extent=this.computeObjectExtent(a),this.tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this.tmpEvent))};h.computeObjectExtent=function(a){l.empty(g);this._expandExtent(a,g);return g};h.computeLayerExtent=function(){l.empty(g);for(const a of this.layerView.getVisibleNodes())this._expandExtent(a,g);return g};h._expandExtent=function(a,f){var c=a.visibilityObb||a.serviceObbInRenderSR;if(v.isSome(c))for(C.fromQuat(m,c.quaternion),m[12]=c.center[0],m[13]=c.center[1],
m[14]=c.center[2],a=0;8>a;++a)b[0]=a&1?c.halfSize[0]:-c.halfSize[0],b[1]=a&2?c.halfSize[1]:-c.halfSize[1],b[2]=a&4?c.halfSize[2]:-c.halfSize[2],r.transformMat4(b,b,m),this.renderCoordsHelper.fromRenderCoords(b,b,this.spatialReference),l.expand(f,b,f);else{var d=a.renderMbs[3];c=r.copy(p,a.renderMbs);c[0]-=d;c[1]-=d;c[2]-=d;a=r.copy(q,a.renderMbs);a[0]+=d;a[1]+=d;a[2]+=d;for(d=0;8>d;++d)b[0]=d&1?c[0]:a[0],b[1]=d&2?c[1]:a[1],b[2]=d&4?c[2]:a[2],this.renderCoordsHelper.fromRenderCoords(b,b,this.spatialReference),
l.expand(f,b,f)}};return u}(z.EventedMixin(e));k.__decorate([n.property({constructOnly:!0})],e.prototype,"layerView",void 0);k.__decorate([n.property({constructOnly:!0})],e.prototype,"intersectionHandler",void 0);k.__decorate([n.property()],e.prototype,"view",void 0);k.__decorate([n.property({readOnly:!0,aliasOf:"view.elevationProvider.spatialReference"})],e.prototype,"spatialReference",void 0);return e=k.__decorate([B.subclass("esri.views.3d.layers.i3s.I3SElevationProvider")],e)});
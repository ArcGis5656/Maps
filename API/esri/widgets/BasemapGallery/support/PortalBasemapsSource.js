// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Basemap ../../../core/Collection ../../../core/Error ../../../core/Handles ../../../core/Loadable ../../../core/Logger ../../../core/Promise ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../portal/Portal ./LocalBasemapsSource".split(" "),
function(k,c,b,q,r,t,u,v,w,x,y,d,C,D,E,z,l,A){const m=q.ofType(b),B=v.getLogger("esri.widgets.BasemapGallery.support.PortalBasemapsSource");b=function(n){function g(a){a=n.call(this,a)||this;a._handles=new t;a.basemaps=new m;a.filterFunction=null;a.portal=l.getDefault();a.query=null;a.updateBasemapsCallback=null;return a}k._inheritsLoose(g,n);var e=g.prototype;e.initialize=function(){this._handles.add([y.init(this,"filterFunction loadStatus portal.basemapGalleryGroupQuery portal.user query updateBasemapsCallback".split(" "),
()=>this.refresh())])};e.destroy=function(){this._handles.destroy();this.portal=this.filterFunction=this._handles=null};e.load=function(a){this.addResolvingPromise(this.portal.load(a));this.notifyChange("state");return Promise.resolve(this)};e.refresh=function(){var a=k._asyncToGenerator(function*(){if("ready"===this.state){this._lastPortalBasemapFetchController&&(this._lastPortalBasemapFetchController.abort(),this._lastPortalBasemapFetchController=null);var h=this.portal,p=new AbortController;this._lastPortalBasemapFetchController=
p;this.notifyChange("state");try{const f=yield h.fetchBasemaps(this._toQueryString(this.query),p);this._updateBasemaps(f)}catch(f){if(x.isAbortError(f))throw f;B.warn(new r("basemap-source:fetch-basemaps-error","Could not fetch basemaps from portal.",{error:f}));this._updateBasemaps()}this._lastPortalBasemapFetchController=null;this.notifyChange("state")}});return function(){return a.apply(this,arguments)}}();e._toQueryString=function(a){return a&&"string"!==typeof a?Object.keys(a).map(h=>`${h}:${a[h]}`).join(" AND "):
a};e._updateBasemaps=function(a=[]){a=this.filterFunction?a.filter(this.filterFunction):a;a=this.updateBasemapsCallback?this.updateBasemapsCallback(a):a;this.basemaps.removeAll();this.basemaps.addMany(a)};k._createClass(g,[{key:"state",get:function(){return"not-loaded"===this.loadStatus?"not-loaded":"loading"===this.loadStatus||this._lastPortalBasemapFetchController?"loading":"ready"}}]);return g}(u.LoadableMixin(w.EsriPromiseMixin(A)));c.__decorate([d.property({readOnly:!0,type:m})],b.prototype,
"basemaps",void 0);c.__decorate([d.property()],b.prototype,"filterFunction",void 0);c.__decorate([d.property({type:l})],b.prototype,"portal",void 0);c.__decorate([d.property()],b.prototype,"query",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"state",null);c.__decorate([d.property()],b.prototype,"updateBasemapsCallback",void 0);return b=c.__decorate([z.subclass("esri.widgets.BasemapGallery.support.PortalBasemapsSource")],b)});
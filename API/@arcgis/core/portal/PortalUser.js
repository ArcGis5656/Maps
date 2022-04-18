/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import r from"../core/Error.js";import{a as e}from"../chunks/JSONSupport.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import l from"./PortalFolder.js";import i from"./PortalGroup.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"./PortalQueryParams.js";import"../chunks/jsonMap.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";var n;let p=n=class extends e{constructor(...t){super(...t),this.access=null,this.created=null,this.culture=null,this.description=null,this.email=null,this.fullName=null,this.modified=null,this.orgId=null,this.portal=null,this.preferredView=null,this.privileges=null,this.region=null,this.role=null,this.roleId=null,this.sourceJSON=null,this.units=null,this.username=null,this.userType=null}get thumbnailUrl(){const t=this.url,r=this.thumbnail;return t&&r?this.portal._normalizeUrl(`${t}/info/${r}?f=json`):null}get userContentUrl(){const t=this.get("portal.restUrl");return t?`${t}/content/users/${this.username}`:null}get url(){const t=this.get("portal.restUrl");return t?`${t}/community/users/${this.username}`:null}addItem(t){const r=t&&t.item,e=t&&t.data,o=t&&t.folder,s={method:"post"};r&&(s.query=r.createPostQuery(),null!=e&&("string"==typeof e?s.query.text=e:"object"==typeof e&&(s.query.text=JSON.stringify(e))));let l=this.userContentUrl;return o&&(l+="/"+("string"==typeof o?o:o.id)),this.portal._request(l+"/addItem",s).then((t=>(r.id=t.id,r.portal=this.portal,r.loaded?r.reload():r.load())))}deleteItem(t){let r=this.userContentUrl;return t.ownerFolder&&(r+="/"+t.ownerFolder),this.portal._request(r+`/items/${t.id}/delete`,{method:"post"}).then((()=>{t.id=null,t.portal=null}))}deleteItems(t){const r=this.userContentUrl+"/deleteItems",e=t.map((t=>t.id));if(e.length){const o={method:"post",query:{items:e.join(",")}};return this.portal._request(r,o).then((()=>{t.forEach((t=>{t.id=null,t.portal=null}))}))}return Promise.resolve(void 0)}fetchFolders(){return this.portal._request(this.userContentUrl,{query:{num:1}}).then((t=>{let r;return r=t&&t.folders?t.folders.map((t=>{const r=l.fromJSON(t);return r.portal=this.portal,r})):[],r}))}fetchGroups(){return this.portal._request(this.url).then((t=>{let r;return r=t&&t.groups?t.groups.map((t=>{const r=i.fromJSON(t);return r.portal=this.portal,r})):[],r}))}fetchItems(t){t||(t={});let r,e=this.userContentUrl;return t.folder&&(e+="/"+t.folder.id),import("./PortalItem.js").then((({default:o})=>{r=o;const s={folders:!1,num:t.num||10,start:t.start||1,sortField:t.sortField||"created",sortOrder:t.sortOrder||"asc"};return this.portal._request(e,{query:s})})).then((t=>{let e;return t&&t.items?(e=t.items.map((t=>{const e=r.fromJSON(t);return e.portal=this.portal,e})),Promise.all(e.map((t=>t.load()))).catch((t=>t)).then((()=>({items:e,nextStart:t.nextStart,total:t.total})))):{items:[],nextStart:-1,total:0}}))}fetchTags(){return this.portal._request(this.url+"/tags").then((t=>t.tags))}getThumbnailUrl(t){let r=this.thumbnailUrl;return r&&t&&(r+=`&w=${t}`),r}queryFavorites(t){return this.favGroupId?(this._favGroup||(this._favGroup=new i({id:this.favGroupId,portal:this.portal})),this._favGroup.queryItems(t)):Promise.reject(new r("internal:unknown","Unknown internal error",{internalError:"Unknown favGroupId"}))}toJSON(){throw new r("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")}static fromJSON(t){if(!t)return null;if(t.declaredClass)throw new Error("JSON object is already hydrated");const r=new n;return r.sourceJSON=t,r.read(t),r}};t([o()],p.prototype,"access",void 0),t([o({type:Date})],p.prototype,"created",void 0),t([o()],p.prototype,"culture",void 0),t([o()],p.prototype,"description",void 0),t([o()],p.prototype,"email",void 0),t([o()],p.prototype,"favGroupId",void 0),t([o()],p.prototype,"fullName",void 0),t([o({type:Date})],p.prototype,"modified",void 0),t([o()],p.prototype,"orgId",void 0),t([o()],p.prototype,"portal",void 0),t([o()],p.prototype,"preferredView",void 0),t([o()],p.prototype,"privileges",void 0),t([o()],p.prototype,"region",void 0),t([o()],p.prototype,"role",void 0),t([o()],p.prototype,"roleId",void 0),t([o()],p.prototype,"sourceJSON",void 0),t([o()],p.prototype,"thumbnail",void 0),t([o({readOnly:!0})],p.prototype,"thumbnailUrl",null),t([o()],p.prototype,"units",void 0),t([o({readOnly:!0})],p.prototype,"userContentUrl",null),t([o({readOnly:!0})],p.prototype,"url",null),t([o()],p.prototype,"username",void 0),t([o()],p.prototype,"userType",void 0),p=n=t([s("esri.portal.PortalUser")],p);const u=p;export{u as default};

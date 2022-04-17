/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import e from"../PopupTemplate.js";import{getDisplayFieldName as t}from"../layers/support/fieldUtils.js";import o from"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import i from"../popup/content/FieldsContent.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import r from"../popup/FieldInfo.js";import s from"../popup/support/FieldInfoFormat.js";import"../chunks/tslib.es6.js";import"../core/Collection.js";import"../chunks/ArrayPool.js";import"../chunks/Evented.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../core/lang.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../core/accessorSupport/decorators/subclass.js";import"../core/Error.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../chunks/shared.js";import"../chunks/JSONSupport.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../popup/content.js";import"../popup/ElementExpressionInfo.js";import"../chunks/jsonMap.js";import"../chunks/enumeration.js";import"../chunks/date.js";import"../chunks/number.js";import"../chunks/locale.js";import"../popup/content/BarChartMediaInfo.js";import"../chunks/chartMediaInfoUtils.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"./actions/ActionBase.js";import"../chunks/Identifiable.js";import"./actions/ActionButton.js";import"./actions/ActionToggle.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";const n=["oid","global-id"],p=["oid","global-id","guid"];function a({displayField:r,editFieldsInfo:s,fields:n,objectIdField:p,title:a},m){if(!n)return null;const c=f({editFieldsInfo:s,fields:n,objectIdField:p},m);if(!c.length)return null;const l=function(e){const o=t(e),{titleBase:i}=e;return o?`${i}: {${o.trim()}}`:i}({titleBase:a,fields:n,displayField:r}),u=[new i,new o];return new e({title:l,content:u,fieldInfos:c})}const m=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/shape/i,/perimeter/i,/objectid/i,/_i$/i],c=(e,{editFieldsInfo:t,objectIdField:o,visibleFieldNames:i})=>i?i.has(e.name):!u(e.name,t)&&((!o||e.name!==o)&&(!(n.indexOf(e.type)>-1)&&!m.some((t=>t.test(e.name)))));function l(e,t){return"oid"===e.type?-1:"oid"===t.type?1:g(e)?-1:g(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function u(e,t){if(!e||!t)return!1;const{creationDateField:o,creatorField:i,editDateField:r,editorField:s}=t;return-1!==[o&&o.toLowerCase(),i&&i.toLowerCase(),r&&r.toLowerCase(),s&&s.toLowerCase()].indexOf(e.toLowerCase())}function d(e,t){return e.editable&&-1===p.indexOf(e.type)&&!u(e.name,t)}function j(e,t){return new i({fieldInfos:f(e,t).filter((e=>e.visible))})}function f({editFieldsInfo:e,fields:t,objectIdField:o},i){return function(e,t){const o=e;return t&&(e=e.filter((e=>-1===t.indexOf(e.type)))),e===o&&(e=e.slice()),e.sort(l),e}(t,(null==i?void 0:i.ignoreFieldTypes)||y).map((t=>new r({fieldName:t.name,isEditable:d(t,e),label:t.alias,format:h(t),visible:c(t,{editFieldsInfo:e,objectIdField:o,visibleFieldNames:null==i?void 0:i.visibleFieldNames})})))}function h(e){switch(e.type){case"small-integer":case"integer":case"single":return new s({digitSeparator:!0,places:0});case"double":return new s({digitSeparator:!0,places:2});case"date":return new s({dateFormat:"long-month-day-year"});default:return null}}function g(e){if("name"===(e.name&&e.name.toLowerCase()))return!0;return"name"===(e.alias&&e.alias.toLowerCase())||void 0}const y=["geometry","blob","raster","guid","xml"];export{f as createFieldInfos,j as createFieldsContent,a as createPopupTemplate};

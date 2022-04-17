/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{L as s}from"./Logger.js";import{b as i}from"./enums.js";import{i as r}from"./Utils13.js";const l=s.getLogger("esri.views.2d.engine.webgl");function a(s){return r(s.minDataValue)&&r(s.maxDataValue)&&null!=s.minSize&&null!=s.maxSize?i.SIZE_MINMAX_VALUE:(s.expression&&"view.scale"===s.expression||s.valueExpression&&"$view.scale"===s.valueExpression)&&Array.isArray(s.stops)?i.SIZE_SCALE_STOPS:(null!=s.field||s.expression&&"view.scale"!==s.expression||s.valueExpression&&"$view.scale"!==s.valueExpression)&&(Array.isArray(s.stops)||"levels"in s&&s.levels)?i.SIZE_FIELD_STOPS:(null!=s.field||s.expression&&"view.scale"!==s.expression||s.valueExpression&&"$view.scale"!==s.valueExpression)&&null!=s.valueUnit?i.SIZE_UNIT_VALUE:(l.error(new e("mapview-bad-type","Found invalid size VisualVariable",s)),i.NONE)}export{a as g};

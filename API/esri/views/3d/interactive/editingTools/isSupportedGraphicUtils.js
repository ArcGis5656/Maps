// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/has"],function(b,c){b.SupportedGraphicResult=void 0;(function(a){a[a.SUPPORTED=0]="SUPPORTED";a[a.GRAPHICS_LAYER_MISSING=1]="GRAPHICS_LAYER_MISSING";a[a.GEOMETRY_MISSING=2]="GEOMETRY_MISSING";a[a.GEOMETRY_TYPE_UNSUPPORTED=3]="GEOMETRY_TYPE_UNSUPPORTED";a[a.ELEVATION_MODE_UNSUPPORTED=4]="ELEVATION_MODE_UNSUPPORTED";a[a.SYMBOL_TYPE_UNSUPPORTED=5]="SYMBOL_TYPE_UNSUPPORTED"})(b.SupportedGraphicResult||(b.SupportedGraphicResult={}));b.isSupportedGraphicResultMessage=
function(a){switch(a){case b.SupportedGraphicResult.GRAPHICS_LAYER_MISSING:return"not owned by a graphics layer";case b.SupportedGraphicResult.GEOMETRY_MISSING:return"no geometry";case b.SupportedGraphicResult.GEOMETRY_TYPE_UNSUPPORTED:return"the geometry type is not supported";case b.SupportedGraphicResult.ELEVATION_MODE_UNSUPPORTED:return"the elevation mode is not supported";case b.SupportedGraphicResult.SYMBOL_TYPE_UNSUPPORTED:return"the symbol type is not supported"}return""};Object.defineProperty(b,
"__esModule",{value:!0})});
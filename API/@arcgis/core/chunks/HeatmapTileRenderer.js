/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"./Logger.js";import"./ensureType.js";import"../core/lang.js";import"../core/accessorSupport/decorators/property.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import{d as i,g as r}from"./heatmapUtils.js";import{B as s}from"./BitmapTileContainer.js";import{B as o}from"./BaseTileRenderer.js";import"../config.js";import"./object.js";import"./string.js";import"./metadata.js";import"./handleUtils.js";import"../core/Error.js";import"./mathUtils.js";import"./common.js";import"./aaBoundingRect.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./JSONSupport.js";import"../core/Accessor.js";import"./deprecate.js";import"./ArrayPool.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/promiseUtils.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"./mat3f32.js";import"./Bitmap.js";import"./mat3.js";import"./vec2f32.js";import"./DisplayObject.js";import"./Evented.js";import"./Texture.js";import"./TiledDisplayObject.js";import"./TileKey.js";import"./brushes.js";import"./definitions.js";import"./Program.js";import"./vec4f32.js";import"./Utils13.js";import"./number2.js";import"./enums.js";import"./FramebufferObject.js";import"./ShaderCompiler.js";import"./config.js";import"./GeometryUtils2.js";import"./MaterialKey.js";import"./pixelUtils.js";import"../layers/support/PixelBlock.js";import"./rasterUtils.js";import"./TileContainer.js";import"./WGLContainer.js";import"./Container.js";import"./EffectView.js";import"./parser.js";import"./colorUtils.js";import"./screenUtils.js";import"./mat4.js";import"./_commonjsHelpers.js";import"./earcut.js";import"./vec2.js";import"./vec2f64.js";import"./featureConversionUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"../core/HandleOwner.js";import"../core/Handles.js";import"../core/Collection.js";import"./shared.js";import"./reactiveUtils.js";import"../core/watchUtils.js";class n{constructor(){this.gradient=null,this.height=512,this.width=512}render(t){i(t,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)}}let m=class extends o{constructor(t){super(t),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new s(t.tileInfoView)}createTile(t){const e=this._container.createTile(t);return this.tileInfoView.getTileCoords(e.bitmap,t),e.bitmap.resolution=this.tileInfoView.getTileResolution(t),e}onConfigUpdate(){const t=this.layer.renderer;if("heatmap"===t.type){const{minPixelIntensity:e,maxPixelIntensity:i}=t;this._intensityInfo.minPixelIntensity=e,this._intensityInfo.maxPixelIntensity=i,this._gradient=r(t.toJSON()),this.tiles.forEach((t=>{const r=t.bitmap.source;r&&(r.minPixelIntensity=e,r.maxPixelIntensity=i,r.gradient=this._gradient,t.bitmap.invalidateTexture())}))}}hitTest(){return Promise.resolve([])}install(t){t.addChild(this._container)}uninstall(t){this._container.removeAllChildren(),t.removeChild(this._container)}disposeTile(t){this._container.removeChild(t),t.destroy()}supportsRenderer(t){return t&&"heatmap"===t.type}onTileData(t){const e=this.tiles.get(t.tileKey);if(!e)return;const i=t.intensityInfo,{minPixelIntensity:r,maxPixelIntensity:s}=this._intensityInfo,o=e.bitmap.source||new n;o.intensities=i&&i.matrix||null,o.minPixelIntensity=r,o.maxPixelIntensity=s,o.gradient=this._gradient,e.bitmap.source=o,this._container.addChild(e),this._container.requestRender(),this.requestUpdate()}onTileError(t){console.error(t)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(t,e){return console.error(t),Promise.reject()}};m=t([e("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],m);const p=m;export{p as default};

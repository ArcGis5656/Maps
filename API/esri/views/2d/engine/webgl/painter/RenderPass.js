// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["../../../../../core/arrayUtils","../../../../../core/maybe","../enums"],function(l,m,n){return function(){function h(a,b){var c;this.brushes=a;this.name=b.name;this.drawPhase=b.drawPhase||n.WGLDrawPhase.MAP;this._targetFn=b.target;this.effects=b.effects||[];this.enableDefaultDraw=null!=(c=b.enableDefaultDraw)?c:()=>!0}var k=h.prototype;k.render=function(a){const {context:b,profiler:c}=a,e=this._targetFn();var d=this.drawPhase&a.drawPhase;c.recordPassStart(this.name);if(d){this.enableDefaultDraw()&&
this._doRender(a,e);c.recordPassEnd();for(const f of this.effects){if(!f.enable())continue;d=f.apply;c.recordPassStart(this.name+"."+d.name);c.recordBrushStart(d.name);const g=f.args&&f.args(),{x:p,y:q,width:r,height:t}=b.getViewport(),u=b.getBoundFramebufferObject();d.bind(a,g);this._doRender(a,e,d.defines);d.draw(a,g);d.unbind(a,g);b.bindFramebuffer(u);b.setViewport(p,q,r,t);c.recordBrushEnd();c.recordPassEnd()}}};k._doRender=function(a,b,c){if(!m.isNone(b))if(l.isArrayLike(b))for(const e of b){if(e.visible)for(const d of this.brushes)a.profiler.recordBrushStart(d.name),
d.prepareState(a,e,c),d.draw(a,e,c),a.profiler.recordBrushEnd()}else for(const e of this.brushes)a.profiler.recordBrushStart(e.name),e.prepareState(a,b,c),e.draw(a,b,c),a.profiler.recordBrushEnd()};return h}()});
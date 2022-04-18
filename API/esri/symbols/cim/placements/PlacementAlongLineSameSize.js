// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../CIMCursor","../enums","../GeometryWalker"],function(h,n,p,d,k){let l=function(){function c(){}c.local=function(){null===c.instance&&(c.instance=new c);return c.instance};c.prototype.execute=function(f,g,a,b){return new q(f,g,a)};return c}();l.instance=null;let q=function(c){function f(a,b,e){var m;a=c.call(this,a,!0,!0)||this;a._geometryWalker=new k.GeometryWalker;a._geometryWalker.updateTolerance(e);a._angleToLine=null!=(m=b.angleToLine)?
m:!0;a._offset=(b.offset?b.offset:0)*e;a._originalEndings=b.endings;a._offsetAtEnd=(b.customEndingOffset?b.customEndingOffset:0)*e;a._position=-(b.offsetAlongLine?b.offsetAlongLine:0)*e;a._pattern=new k.DashPattern;a._pattern.init(b.placementTemplate,!1);a._pattern.scale(e);a._endings=a._originalEndings;return a}n._inheritsLoose(f,c);var g=f.prototype;g.processPath=function(a){if(this._pattern.isEmpty())return null;if(this.iteratePath)var b=this._pattern.nextValue();else{this._endings=this._originalEndings===
d.PlacementEndings.WithFullGap&&this.isClosed?d.PlacementEndings.WithMarkers:this._originalEndings;this._pattern.extPtGap=0;let e=!0;switch(this._endings){case d.PlacementEndings.NoConstraint:b=-this._position;b=this._adjustPosition(b);e=!1;break;default:b=-this._pattern.lastValue()/2;break;case d.PlacementEndings.WithFullGap:b=-this._pattern.lastValue();this._pattern.extPtGap=this._pattern.lastValue();break;case d.PlacementEndings.WithMarkers:b=0;break;case d.PlacementEndings.Custom:b=-this._position,
b=this._adjustPosition(b),this._pattern.extPtGap=.5*this._offsetAtEnd}if(!this._geometryWalker.init(a,this._pattern,e))return null;this._pattern.reset();for(a=0;b>a;)b-=a,a=this._pattern.nextValue();b=a-=b;this.iteratePath=!0}a={};if(!this._geometryWalker.nextPointAndAngle(b,a)||this._endings===d.PlacementEndings.WithFullGap&&this._geometryWalker.isPathEnd())return this.iteratePath=!1,null;if(this._endings===d.PlacementEndings.WithMarkers&&this._geometryWalker.isPathEnd()&&(this.iteratePath=!1,this.isClosed))return null;
this.internalPlacement.setTranslate(a.pt[0]-this._offset*a.sa,a.pt[1]+this._offset*a.ca);this._angleToLine&&this.internalPlacement.setRotateCS(a.ca,a.sa);return this.internalPlacement};g._adjustPosition=function(a){a/=this._pattern.length();a-=Math.floor(a);return a*this._pattern.length()};return f}(p.PathTransformationCursor);h.PlacementAlongLineSameSize=l;Object.defineProperty(h,"__esModule",{value:!0})});
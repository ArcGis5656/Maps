// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/mathUtils","../definitions","../../../layers/features/support/StaticBitSet"],function(k,h,p,q){let u=function(){function l(a,b){this.width=a;this.height=b;a=Math.ceil(a/1);b=Math.ceil(b/1);this._cols=a;this._rows=b;this._cells=q.StaticBitSet.create(a*b)}var g=l.prototype;g.insertMetrics=function(a){const b=this._hasCollision(a);0===b&&this._markMetrics(a);return b};g.getCellId=function(a,b){return a+b*this._cols};g.has=function(a){return this._cells.has(a)};
g.hasRange=function(a,b){return this._cells.hasRange(a,b)};g.set=function(a){this._cells.set(a)};g.setRange=function(a,b){this._cells.setRange(a,b)};g._hasCollision=function(a){const b=a.id;let c=0,d=0;a.save();do{const e=a.boundsCount;c+=e;for(let f=0;f<e;f++){const m=a.boundsComputedAnchorX(f),n=a.boundsComputedAnchorY(f),r=a.boundsWidth(f)+2,t=a.boundsHeight(f)+2;switch(this._collide(m,n,r,t)){case 2:return 2;case 1:d++}}}while(a.peekId()===b&&a.next());a.restore();return c===d?1:0};g._collide=
function(a,b,c,d){a-=c/2;b-=d/2;c=a+c;var e=b+d;if(0>c||0>e||a>this.width||b>this.height)return 1;d=h.clamp(Math.floor(a/1),0,this._cols);var f=h.clamp(Math.floor(b/1),0,this._rows);a=h.clamp(Math.ceil(c/1),0,this._cols);b=h.clamp(Math.ceil(e/1),0,this._rows);for(c=f;c<=b;c++)for(e=d;e<=a;e++)if(f=this.getCellId(e,c),this.has(f))return 2;return 0};g._mark=function(a,b,c,d){a-=c/2;b-=d/2;c=a+c;var e=b+d;d=h.clamp(Math.floor(a/1),0,this._cols);var f=h.clamp(Math.floor(b/1),0,this._rows);a=h.clamp(Math.ceil(c/
1),0,this._cols);b=h.clamp(Math.ceil(e/1),0,this._rows);for(c=f;c<=b;c++)for(e=d;e<=a;e++)f=this.getCellId(e,c),this.set(f);return!1};g._markMetrics=function(a){const b=a.id;do{const c=a.boundsCount;for(let d=0;d<c;d++){const e=a.boundsComputedAnchorX(d),f=a.boundsComputedAnchorY(d),m=a.boundsWidth(d)+2,n=a.boundsHeight(d)+2;this._mark(e,f,m,n)}}while(a.peekId()===b&&a.next())};return l}(),v=function(){function l(a,b=2){this._bucketSize=a;this._rowsLength=p.TILE_SIZE/a;this._colsLength=p.TILE_SIZE/
a;this._elementsPerBucket=b;this._grid=this._initGrid()}var g=l.prototype;g.checkOverlap=function(a,b){a=Math.floor(a/this._bucketSize);b=Math.floor(b/this._bucketSize);return 0>a||a>=this._rowsLength||0>b||b>=this._colsLength?!0:this._grid[b*this._colsLength+a]>=this._elementsPerBucket};g.markUsed=function(a,b){this._grid[Math.floor(b/this._bucketSize)*this._colsLength+Math.floor(a/this._bucketSize)]+=1};g.reset=function(){this._grid=this._initGrid()};g._initGrid=function(){return new Uint8Array(this._rowsLength*
this._colsLength)};return l}();k.CollisionBitsetGrid=u;k.CollisionGrid=v;k.HAS_COLLISION=2;k.NONE=0;k.OUTSIDE_EXTENT=1;Object.defineProperty(k,"__esModule",{value:!0})});
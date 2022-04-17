// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../MemoryBuffer"],function(C,G,D,H){let F=function(){function x(b){this._locations=new Map;this._key=b}var l=x.prototype;l.defines=function(){return[]};l.getStride=function(){this._layoutInfo||this._buildAttributesInfo();return this._stride};l.getAttributeLocations=function(){0===this._locations.size&&this._buildAttributesInfo();return this._locations};l.getLayoutInfo=function(){this._layoutInfo||this._buildAttributesInfo();
return this._layoutInfo};l.getEncodingInfos=function(){this._propertyEncodingInfo||this._buildAttributesInfo();return this._propertyEncodingInfo};l.getUniforms=function(){this._uniforms||this._buildAttributesInfo();return this._uniforms};l.getShaderHeader=function(){this._shaderHeader||this._buildAttributesInfo();return this._shaderHeader};l.getShaderMain=function(){this._shaderMain||this._buildAttributesInfo();return this._shaderMain};l.setDataUniforms=function(b,d,f,g,t){var m=this.getUniforms();
for(const a of m){const {name:c,type:n,getValue:p}=a;m=p(f,d,g,t);if(null!==m)switch(n){case "float":b.setUniform1f(c,m);break;case "vec2":b.setUniform2fv(c,m);break;case "vec4":b.setUniform4fv(c,m)}}};l.encodeAttributes=function(b,d,f,g){const t=this.attributesInfo(),m=this.getEncodingInfos(),a=[];let c=0,n=0;for(const v of Object.keys(m)){var p,e=m[v];const {type:z,precisionFactor:q,isLayout:A}=t[v],u=A?f.getLayoutProperty(v):f.getPaintProperty(v),r=null==(p=u.interpolator)?void 0:p.getInterpolationRange(d);
let w=0;for(const h of e){const {offset:k,bufferElementsToAdd:y}=h;if(0<y){for(e=0;e<y;e++)a.push(0);c+=n;n=h.bufferElementsToAdd}e=null!=g?g:u.getValue(r?r[w]:d,b);switch(z){case 0:case 1:a[c]|=this._encodeByte(e*(q||1),8*k);break;case 2:case 3:a[c]|=this._encodeShort(e*(q||1),8*k);break;case 4:case 5:a[c]|=this._encodeByte(e*(q||1),8*k);a[c]|=this._encodeByte(e*(q||1),8*k+8);break;case 6:case 7:a[c]|=this._encodeShort(e*(q||1),8*k);a[c]|=this._encodeShort(e*(q||1),8*k+16);break;case 8:case 9:a[c]|=
this._encodeByte(e*(q||1),8*k);a[c]|=this._encodeByte(e*(q||1),8*k+8);a[c]|=this._encodeByte(e*(q||1),8*k+16);a[c]|=this._encodeByte(e*(q||1),8*k+24);break;case 10:a[c]=this._encodeColor(e);break;case 11:case 12:this._encodePattern(c,a,e);break;default:throw Error("Unsupported encoding type");}w++}}return a};l.getAtributeState=function(b){const d=3+2*b;b=0|this._bit(d);return b|=this._bit(d+1)<<1};l._buildAttributesInfo=function(){const b=[],d={};var f={},g=-1;const t=this.attributesInfo();var m=
this.attributes();let a=-1;for(const e of m){a++;m=this.getAtributeState(a);if(0===m||3===m)continue;var c=t[e];const v=[];d[e]=v;c=c.type;for(let z=0;z<m;z++){const {dataType:q,bytesPerElement:A,count:u,normalized:r}=x._encodingInfo[c],w=A*u;let h=f[q];var n=0;!h||4<h.count+u?(g++,h={dataIndex:g,count:0,offset:0},4!==u&&(f[q]=h),b.push({location:-1,name:"a_data_"+g,count:u,type:q,normalized:r}),n=Math.ceil(Math.max(w/4,1))):(n=b[h.dataIndex],n.count+=u,n=Math.ceil(Math.max(n.count*A/4,1))-Math.ceil(Math.max(h.offset/
4,1)));v.push({dataIndex:h.dataIndex,offset:h.offset,bufferElementsToAdd:n});h.offset+=w;h.count+=u}}for(const e of b)switch(e.type){case 5120:case 5121:e.count=4;case 5122:case 5123:e.count+=e.count%2}this._buildVertexBufferLayout(b);f=0;g=this._layoutInfo.geometry;for(var p of g)this._locations.set(p.name,f++);if(p=this._layoutInfo.opacity)for(const e of p)this._locations.set(e.name,f++);this._buildShaderInfo(b,d);this._propertyEncodingInfo=d};l._buildVertexBufferLayout=function(b){const d={};var f=
this.geometryInfo();let g=f[0].stride;if(0===b.length)d.geometry=f;else{const t=[];let m=g;for(const a of b)g+=E(a.type)*a.count;for(const a of f)f={...a},f.stride=g,t.push(f);for(const a of b)t.push({name:a.name,count:a.count,type:a.type,offset:m,stride:g,normalized:a.normalized||!1,divisor:0}),m+=E(a.type)*a.count;d.geometry=t}this.opacityInfo()&&(d.opacity=this.opacityInfo());this._layoutInfo=d;this._stride=g};l._buildShaderInfo=function(b,d){let f="\n",g="\n";const t=[];for(var m of b)f+=`attribute ${this._getType(m.count)} ${m.name};\n`;
var a=this.attributes();b=this.attributesInfo();m=-1;for(const p of a){m++;const {name:e,type:v,precisionFactor:z,isLayout:q}=b[p];a=z&&1!==z?` * ${1/z}`:"";const {bytesPerElement:A,count:u}=x._encodingInfo[v];var c=r=>`a_data_${r.dataIndex}${I(u,r.offset,A)}`;switch(this.getAtributeState(m)){case 0:a=this._getType(u);var n=`u_${e}`;t.push({name:n,type:a,getValue:(r,w,h,k)=>{h=q?r.getLayoutValue(p,w):r.getPaintValue(p,w);if(11===v){r=r.getDashKey(h,r.getLayoutValue("line-cap",w));k=k.getMosaicItemPosition(r,
!1);if(D.isNone(k))return null;const {tl:y,br:B}=k;return[y[0],B[1],B[0],y[1]]}if(12===v){k=k.getMosaicItemPosition(h,-1===p.indexOf("line-"));if(D.isNone(k))return null;const {tl:y,br:B}=k;return[y[0],B[1],B[0],y[1]]}return 10===v?(k=h[3],[k*h[0],k*h[1],k*h[2],k]):h}});f+=`uniform ${a} ${n};\n`;g+=`${a} ${e} = ${n};\n`;break;case 1:n=c(d[p][0]);g+=`${this._getType(u)} ${e} = ${n}${a};\n`;break;case 2:{n=`u_t_${e}`;t.push({name:n,type:"float",getValue:(w,h,k,y)=>(q?w.getLayoutProperty(p):w.getPaintProperty(p)).interpolator.interpolationUniformValue(k,
h)});f+=`uniform float ${n};\n`;const r=c(d[p][0]);c=c(d[p][1]);g+=`${this._getType(u)} ${e} = mix(${r}${a}, ${c}${a}, ${n});\n`}}}this._shaderHeader=f;this._shaderMain=g;this._uniforms=t};l._bit=function(b){return(this._key&1<<b)>>b};l._getType=function(b){switch(b){case 1:return"float";case 2:return"vec2";case 3:return"vec3";case 4:return"vec4"}throw Error("Invalid count");};l._encodeColor=function(b){const d=255*b[3];return H.i8888to32(b[0]*d,b[1]*d,b[2]*d,d)};l._encodePattern=function(b,d,f){if(f&&
f.rect){var g=f.rect,t=f.width;f=f.height;d[b]=this._encodeShort(g.x+2,0);d[b]|=this._encodeShort(g.y+2+f,16);d[b+1]=this._encodeShort(g.x+2+t,0);d[b+1]|=this._encodeShort(g.y+2,16)}};l._encodeByte=function(b,d){return(b&255)<<d};l._encodeShort=function(b,d){return(b&65535)<<d};G._createClass(x,[{key:"key",get:function(){return this._key}},{key:"type",get:function(){return this._key&7}}]);return x}();F._encodingInfo={[0]:{dataType:5120,bytesPerElement:1,count:1,normalized:!1},[1]:{dataType:5121,bytesPerElement:1,
count:1,normalized:!1},[2]:{dataType:5122,bytesPerElement:2,count:1,normalized:!1},[3]:{dataType:5123,bytesPerElement:2,count:1,normalized:!1},[4]:{dataType:5120,bytesPerElement:1,count:2,normalized:!1},[5]:{dataType:5121,bytesPerElement:1,count:2,normalized:!1},[6]:{dataType:5122,bytesPerElement:2,count:2,normalized:!1},[7]:{dataType:5123,bytesPerElement:2,count:2,normalized:!1},[8]:{dataType:5120,bytesPerElement:1,count:4,normalized:!1},[9]:{dataType:5121,bytesPerElement:1,count:4,normalized:!1},
[10]:{dataType:5121,bytesPerElement:1,count:4,normalized:!0},[11]:{dataType:5123,bytesPerElement:2,count:4,normalized:!1},[12]:{dataType:5123,bytesPerElement:2,count:4,normalized:!1}};const E=x=>{switch(x){case 5126:return 4;case 5124:return 4;case 5125:return 4;case 5122:return 2;case 5123:return 2;case 5120:return 1;case 5121:return 1}},I=(x,l,b)=>{l/=b;if(1===x)switch(l){case 0:return".x";case 1:return".y";case 2:return".z";case 3:return".w"}else if(2===x)switch(l){case 0:return".xy";case 1:return".yz";
case 2:return".zw"}else if(3===x)switch(l){case 0:return".xyz";case 1:return".yzw"}return""};C.VTLMaterial=F;Object.defineProperty(C,"__esModule",{value:!0})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/typedArrayUtil","../../../../../core/workers/WorkerHandle","../../../support/buffer/workerHelper","./EdgeProcessingWorker"],function(f,l,m,g,n){return function(h){function e(a){return h.call(this,"EdgeProcessingWorker","wrappedWork",a)||this}f._inheritsLoose(e,h);var c=e.prototype;c.process=function(){var a=f._asyncToGenerator(function*(b,d,k){if(k)return n.work(b);b=this._packInput(b);d=yield this.invoke(b,d);return this._unpackOutput(d)});
return function(b,d,k){return a.apply(this,arguments)}}();c.getTransferList=function(a){return[a.dataBuffer]};c._packInput=function(a){return{dataBuffer:a.data.buffer,writerSettings:a.writerSettings,skipDeduplicate:a.skipDeduplicate,indicesBuffer:a.indices.buffer,indicesType:l.isUint32Array(a.indices)?"Uint32Array":"Uint16Array",indicesLength:a.indicesLength}};c._unpackOutput=function(a){return{regular:{instancesData:g.unpackInterleavedBuffer(a.regular.instancesData),lodInfo:{lengths:new Float32Array(a.regular.lodInfo.lengths)}},
silhouette:{instancesData:g.unpackInterleavedBuffer(a.silhouette.instancesData),lodInfo:{lengths:new Float32Array(a.silhouette.lodInfo.lengths)}},averageEdgeLength:a.averageEdgeLength}};return e}(m.WorkerHandle)});
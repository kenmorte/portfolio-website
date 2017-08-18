"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","cf6d57b813c333054ca60fadecc970dc"],["/static/css/main.c4abdcde.css","dcd8a19c9ed4a36d75f132bc58fcab4a"],["/static/js/main.6efcc020.js","958c4f00ab015b792c1b2fbef0ceb14e"],["/static/media/Code.a400a3da.jpg","a400a3da30d7aa298406759adb958cd0"],["/static/media/androidios.7ed59c83.png","7ed59c83d5e05bc4f7de1ee6452aa4a9"],["/static/media/angularjs.42418ea2.png","42418ea2d6d88684f367b335027dbbf3"],["/static/media/bootstrap.4be92d77.png","4be92d774a415f7d30212f3da5bd0aa9"],["/static/media/cpp.02d66cb8.png","02d66cb83e1f24d23569da0d879dc76e"],["/static/media/d3.cc0df977.svg","cc0df9774745c19b855e0a7b69165311"],["/static/media/emma.c3969258.png","c39692581848f9348018dbb59c752cc3"],["/static/media/fabflix.41598a84.png","41598a84164ec0b246141676a03274a4"],["/static/media/ide.5708268f.png","5708268f9263d897551c8118958c137a"],["/static/media/java.16aac88e.png","16aac88e1754612f4f5868fc6aee604a"],["/static/media/js.03d471c6.png","03d471c6a43c17a3496228b5b43512e6"],["/static/media/materialui.2fadd2a1.svg","2fadd2a137085081faa798150fee4a62"],["/static/media/me.6f274381.jpg","6f27438187ace8dee1ae82160e7f60d3"],["/static/media/mult.213906de.png","213906de89ab46fdb5236c6d24fcae52"],["/static/media/mysql.0d9ca2be.png","0d9ca2be15fd4299cac68bcac908d913"],["/static/media/night.6d860c19.jpg","6d860c19b31f9dd2e7ee810ebd8bc6c7"],["/static/media/objc.beab65ec.png","beab65ec1b32d61d13fc693fbea3c997"],["/static/media/pet.56dec66c.png","56dec66c620117d1ab4fb71f8810e60f"],["/static/media/python.531a1d71.png","531a1d71ea7926f89e762b3752ab0413"],["/static/media/quickappt.99748b58.png","99748b58889157a0629c8f61dfe7322d"],["/static/media/react.92892148.png","9289214850da10a41168c0d5fea8205b"],["/static/media/swift.fbace2c6.png","fbace2c64a40052158f2095e1c653213"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});
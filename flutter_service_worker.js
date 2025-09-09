'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "696aca48c71cc3b51b80f3930d15ff70",
"version.json": "0bbd1c6d0283a9c50de16a25d0bff6d0",
"splash/img/light-2x.png": "aee63f55861da5032fa79ee83f592684",
"splash/img/dark-4x.png": "d1fc4ef40dfab19ebc5f70cdd801cd54",
"splash/img/light-3x.png": "3497b0c5db964a79363a74e5662fc82c",
"splash/img/dark-3x.png": "3497b0c5db964a79363a74e5662fc82c",
"splash/img/light-4x.png": "d1fc4ef40dfab19ebc5f70cdd801cd54",
"splash/img/dark-2x.png": "aee63f55861da5032fa79ee83f592684",
"splash/img/dark-1x.png": "6a28649b7f93b891725f1e8c3dcca830",
"splash/img/light-1x.png": "6a28649b7f93b891725f1e8c3dcca830",
"index.html": "52bc9042033dbda45f92163e51e262ba",
"/": "52bc9042033dbda45f92163e51e262ba",
"main.dart.js": "bddebf62b5cf4070bef3ac708286a59d",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8fb90f9f8f0d746e7ec89d6135dbf14c",
".git/config": "5cfb1a83acf7b2cf16f5640aed3d3025",
".git/objects/59/f75bae6026d864ce552c54e7faf70d580a1390": "934e974154d163436520df88bfaaac00",
".git/objects/3e/f1d648a387ac6633d7dc46ca29ee6b6fbae512": "66ff9bf20403e031f34fa6144c629432",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9b/e7f2d8d87dc79e8f721a111ab6446d2e0440a3": "498a9d178f558422d487685173d80824",
".git/objects/9e/34bfb35be0125f0891d027ba8b8a0f6317a27c": "30c08d45a006f153ff1011bca26bff7c",
".git/objects/3d/038110324e79a2eafb378e9235625c0508bc4f": "d2381f84ef6693b0036f3623b785caee",
".git/objects/0e/8f81724cd9d89ff6686d45e27c30e12c6cac04": "725042055c234fa9b3ea49391219cfb4",
".git/objects/60/653f977b2a8ac9b777141bde733d758b09883b": "fe557d038319415b7a0ecbceb7b61843",
".git/objects/b2/de684390bbaf042b6a411732202969bccf07d8": "7bde3103f358977fe0e40784a9f42751",
".git/objects/bb/a55f616c811c4ee31535667dd2ed30229e5e71": "87e8270b4443b55645967860cb2b8253",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/b3/100b33be99eeae1683f7609020ca10e8357edb": "43480552d4c9d1153c687e55afdb2b67",
".git/objects/df/78fffab47d056d7dddd511ee3a6385ee2428ee": "f460561f7b73786fc99fb074e64c66c3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/e6526437c27ebaa02176aef19a6a4db2911eea": "df17a4a7691f835acadf2cc698cf9ea1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/616d85a8b76cd2f05ea262543c9558470ad2fe": "b00c60fa12f37f36bb3ba016fa8e0dd9",
".git/objects/c0/190d717c26bc18797b67776ceb5c772c9f5e85": "1316fe1ffd8edd72a0fce5ad591516e8",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/5b148ea91b93a770a1e7a942058f31466d0139": "5dc78066e43ca922d2a8ddd77923d04e",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c1/e8ce53dcd62bba408486c39b4017bff0e7413c": "f67f33289d995aaf72eccdb1c07e8e73",
".git/objects/20/15d69564a4dccba6904fdce852ebd3d16d2963": "84241aa7479b36bb67c75ae68e02e730",
".git/objects/27/fe76b01b3e6912dd4112db645de4c7f763bc25": "0164c6a84089b2325dee05402274d7c6",
".git/objects/16/476651b93737ade1f5ea9d3268bb96a25554e2": "957a48411ae00460b0d45ae9cb81e2d0",
".git/objects/89/3c1ecc53081754db73a2dab81708b5b20064f5": "417c46589ab9c4be369537fe9d7daa56",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/dcbb5086451ae307d632a937b2c006fad15a9c": "dbcca1992741227c168a433146b57d04",
".git/objects/86/582e23fef3c3519d8d2f6ec7eae4a06f2474e6": "6d4f6537c4d86f78d7ea717252a729f1",
".git/objects/44/9b7742e8ff5df46623a8bb0aaf5a9d16dd9eca": "3ca04abc9cfb4540f511d3398e7383e2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/31/d1e000144892e5d4d72ab0de72543d17fb04fe": "d479c83fe5d472cf5a7370499d527991",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/08/f20e3d76167098a57543d560aedde641437c4a": "5cb9f7e416d30cf62deb09ab90034264",
".git/objects/6d/a8847cd826fb4fa898632d867a948c14e98ba1": "ca6e59c4205e0ba5357b224e117d4ea5",
".git/objects/06/55a43f2bed076cac34fec30f2eb6b91fe7acc0": "05391c13db170f77a30ee5cd0135ea9c",
".git/objects/63/5806e5a402271ca901491a2716b1020ba18d57": "f20846e1045bccb9b6264b3d0d613624",
".git/objects/d3/aff5659b269f3f93be4e1309ca30689bf77ab1": "cb0de6b7340d3ae539e73bca5801645f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/a9/4226a409f16b8fe1b27b05a1807f47d89b2834": "2dc129b259894031a76ad0da1fe18cae",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c3/9fc74c6a8ea0c1b2d2e82d3b89849611b49034": "61439422c588a6652a5dfd9c1c5d78cf",
".git/objects/c3/88ece8cc0cad42e590606954610f8fd57066a8": "420e7c72044dc108429993bce4ad18ff",
".git/objects/ea/3ae6dcbb76d065fd047719e362d25524800c82": "2dde7ab21ea321434796f8127ebfff67",
".git/objects/f6/e49ef41bb5096a92466e5358db67c91eac6d41": "a970d1097b936a6d1835f2bd29a15ccb",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/d870aa30100d131b1d0407d84696aca5ce4f16": "09b65a99044c95b5856363ea26022bdd",
".git/objects/f1/2378de86eec4870b56665dc3bbda2b03a934af": "b8516bf9f8b4cfa3d12dbcb71f07394a",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/46/6c6420ad6ade4baffcc0db81189ef2a57f4077": "c136792aed29c8169f0e12d4a4a4bc7b",
".git/objects/46/5c1fefdc849b61d5bc486a2a3b0e838bffb0a5": "8605aa04f6587e281a76bfcb291b7899",
".git/objects/46/488bb888313e97f8a26cb2f6c0e20085c7a857": "dc99080aab1f11a4bf08c0644a6a2718",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/24/04e0a568267c2b9b33da62009b9ed7e20ddf5c": "8475802b0b3fe47db8f2de51ff07de76",
".git/objects/4f/1f32913cf77f1e9ead6cb1ede28e3aa3d853d8": "d48961eec596b93c4b1513f40875fa45",
".git/objects/71/ab3af3cc981c8b0a63e9c5dbe519c05bd67a94": "fb4af872fae5add26f0af888a1c216c1",
".git/objects/71/7a7c095ef294df643ceb163372028c447eb7d1": "02abb8d8c0bde94455c7bf838ea0320b",
".git/objects/76/1ff00583a2cffad64d3ff35f7ccf8708f7c68c": "17ea8e62cc5f63c5667af635577b752f",
".git/objects/82/6cf142455d9c769e4dc2e3afa43b7e91efcdd9": "35d3cce0cb83edd905b653fe9c750f50",
".git/objects/7a/c5cb02e0b54ae1a79e7dcb8a7970ab24a70eea": "21598869e32be5a969c59480e215ca0b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2f8900ab18875c2408302bfccd99bedf",
".git/logs/refs/heads/main": "2940739926504cc4e0622973dd8324ad",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "52e40f3c42b09ecf2b5a9349748e78b8",
".git/index": "12d4558b9ca54f2b3aace834298cdb1f",
".git/COMMIT_EDITMSG": "196078b1ae002ef01cee9a80102e62f7",
"assets/AssetManifest.json": "212c2ce739b000e704a851e105ffb2b4",
"assets/NOTICES": "640d142fb7c6751b19eb2d4e5f803fd4",
"assets/FontManifest.json": "9931b4073c41d8a0dc587991ed84044e",
"assets/AssetManifest.bin.json": "cd076ab9a9b37f0fbae10750a799c385",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7c8cd908c693bfa8d95d3e8259144c29",
"assets/fonts/MaterialIcons-Regular.otf": "d2728e18e8725f82275ae8a7e6f9fdc4",
"assets/assets/images/dart33.png": "1a62633db3a6ac84f538c86d00b7eddb",
"assets/assets/images/dart2.png": "513d6eeea574658cb325ee7df3ad736a",
"assets/assets/images/barcode.jpg": "2dbf108c522205224e5f5c66a596c9f9",
"assets/assets/images/dart.png": "13198a715287b6c164f36fe7149adeda",
"assets/assets/icons/icon.png": "da6f9d2038ab5ea040cc08bee8691218",
"assets/assets/fonts/Roboto-Regular.ttf": "3aa911d4a1e76c8946952fe744ce7434",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

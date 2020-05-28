/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "api/index.html",
    "revision": "8d368f8dda9ab1bdb4d8fbbbe8152b91"
  },
  {
    "url": "assets/css/0.styles.cfd88667.css",
    "revision": "15995bebc1f6dac93b205bff8d495199"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f6ccac47.js",
    "revision": "85ae68b53c2d2fb4e03f4592e731e01e"
  },
  {
    "url": "assets/js/11.d9d7c8f3.js",
    "revision": "4308033f56a0ecc9d91a0d0a9418be1d"
  },
  {
    "url": "assets/js/12.d4f4a2fc.js",
    "revision": "199dc12e9caebbebe84ada2661e5b7d3"
  },
  {
    "url": "assets/js/13.685e9c54.js",
    "revision": "c7956fce7af64ee975f70f1132c85d79"
  },
  {
    "url": "assets/js/14.05d3df1f.js",
    "revision": "5b21d3e2621eaa8cb9b31a4beafda7c8"
  },
  {
    "url": "assets/js/15.32117d99.js",
    "revision": "11c741fd3b2637debc3668c9ff943ad6"
  },
  {
    "url": "assets/js/16.9b0e915b.js",
    "revision": "c2e0fe45759c0dae230f1f89ff2112e8"
  },
  {
    "url": "assets/js/17.d322d33d.js",
    "revision": "7886db489b6bddef3be667079de8cdf6"
  },
  {
    "url": "assets/js/18.3a0ade10.js",
    "revision": "1515bd86392dc83e21131116b4d3f4ca"
  },
  {
    "url": "assets/js/19.2fb47de4.js",
    "revision": "53b0afaaf0d6231db280631f443b9b89"
  },
  {
    "url": "assets/js/20.f14b9c6e.js",
    "revision": "4012c37d3e51c4159855da54f708b956"
  },
  {
    "url": "assets/js/21.18287fa2.js",
    "revision": "2df3771cebfc9ec0e0c6e5e319a78bed"
  },
  {
    "url": "assets/js/22.bad47a0c.js",
    "revision": "a8ed1563e763865ee3de5df98415eed7"
  },
  {
    "url": "assets/js/23.c3e10546.js",
    "revision": "5e486cd01a1417a3c32b6e5482c725a2"
  },
  {
    "url": "assets/js/24.4e7f2ccc.js",
    "revision": "8229deebb7c438e8660991006c0661d1"
  },
  {
    "url": "assets/js/25.19b4a09f.js",
    "revision": "806e471cab9e96e41d066dbe26284b12"
  },
  {
    "url": "assets/js/26.0149d1a0.js",
    "revision": "6af88d80275fa0613127492105a71e2b"
  },
  {
    "url": "assets/js/27.8c9ac60e.js",
    "revision": "796b4e06ab29eb254ceca4a7df9e8a78"
  },
  {
    "url": "assets/js/28.a8dc255f.js",
    "revision": "37087b96e1f1ffed81e1a9c43fb2d14e"
  },
  {
    "url": "assets/js/29.0bcfb57b.js",
    "revision": "18067288cc9788da55b6c7c1ab628bd3"
  },
  {
    "url": "assets/js/3.8ced93c1.js",
    "revision": "1471499be7d1b564c21b5d5c85272d48"
  },
  {
    "url": "assets/js/30.4c9e363f.js",
    "revision": "37b75682268f3ffc080060c6ff36dde9"
  },
  {
    "url": "assets/js/31.ae6c56ce.js",
    "revision": "aa05422bb97ee659c36804dc79bf22b5"
  },
  {
    "url": "assets/js/32.56e92bcd.js",
    "revision": "fd4db2f58971c54b9faf6e92c2ad8fdd"
  },
  {
    "url": "assets/js/33.9de1395b.js",
    "revision": "4b540f75cabbaa819366e08d830b172b"
  },
  {
    "url": "assets/js/34.33551503.js",
    "revision": "37bab61289830ecc80a5faee29a39e69"
  },
  {
    "url": "assets/js/35.eaf85a27.js",
    "revision": "6f91a388dcb1957dc0489cc7384ab060"
  },
  {
    "url": "assets/js/36.9865c247.js",
    "revision": "906a3b4ebe65f4f3dd491f4da3b718a9"
  },
  {
    "url": "assets/js/37.14a0da43.js",
    "revision": "78a3e18d20c40e8323b237cf81d45e57"
  },
  {
    "url": "assets/js/38.879a37b7.js",
    "revision": "333e4312963b44cec870e79987b15e00"
  },
  {
    "url": "assets/js/39.44aee85b.js",
    "revision": "c7ee3894b6e1cd7022c9bd70fecfd9c2"
  },
  {
    "url": "assets/js/4.83463433.js",
    "revision": "0041229fe3ecebb45b04e09af9e50f75"
  },
  {
    "url": "assets/js/40.f5c9b28c.js",
    "revision": "ada169d398250a002f464aa3d7deccc5"
  },
  {
    "url": "assets/js/41.ad17d247.js",
    "revision": "eb9ce762c603e36e47d63d4e1b76fbd1"
  },
  {
    "url": "assets/js/42.73faa023.js",
    "revision": "841a863170f2f85d75be20faae7f2394"
  },
  {
    "url": "assets/js/43.09beb861.js",
    "revision": "9177149b21ca84f59fbeb8b7873125e2"
  },
  {
    "url": "assets/js/44.a69763d0.js",
    "revision": "c98705a4a740f0763085825d7e0dfad7"
  },
  {
    "url": "assets/js/5.73cc2f8f.js",
    "revision": "26659a13c8ea6ee6e380a5aac26b27bc"
  },
  {
    "url": "assets/js/6.2e9e21fe.js",
    "revision": "01a6bc34102bc4b6eae0efc513d938da"
  },
  {
    "url": "assets/js/7.2d222865.js",
    "revision": "aa7b6205e48c9726f9e4fa9e9b9f4de5"
  },
  {
    "url": "assets/js/8.e7d2e34d.js",
    "revision": "31a9814ade3c30fd4ff493f78b34561f"
  },
  {
    "url": "assets/js/9.47e40682.js",
    "revision": "3d18825c540765a01245658b7b95946d"
  },
  {
    "url": "assets/js/app.e93395e1.js",
    "revision": "af60e32cf8c54ad78197b64862219f94"
  },
  {
    "url": "assets/js/vendors~docsearch.6e4b8c51.js",
    "revision": "fa550f3f51fd8b7aff7279368e958fee"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "dbd1424fc5693a030899104b7a4267f5"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "a3d444fba4d1790ddd29c5728a85ae9f"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "3c1cfde152a8ea7867b21a973a23285b"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "c291bb487bd6de1cb708da29ee521a74"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "803725bea1bba27b516635fcd41ea139"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "e4d40282517917625b6bd4845cca9546"
  },
  {
    "url": "guide/changelog.html",
    "revision": "2ba823e9cd6240819b45caf4a4832179"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "e4177dce1e42358e8b030b43de2fdf77"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "ac35ac83cd6f587e2d3bfd222f482709"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "a34278c541b17fd6a0b378b728eda297"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "8a514c667babff4aace51edd10c5074c"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "a41d19d4ed6cf85b43417963c07e432c"
  },
  {
    "url": "guide/index.html",
    "revision": "8b17bbb5827b4dca883b7dac8079c18d"
  },
  {
    "url": "guide/installation.html",
    "revision": "c327b0ebd32798ecde313beff37fc161"
  },
  {
    "url": "guide/solutions.html",
    "revision": "0d16115db11b5b4ecce30f5496e4beff"
  },
  {
    "url": "index.html",
    "revision": "10624603393a2377047244c258093634"
  },
  {
    "url": "zh/api/index.html",
    "revision": "27b31803694d35f7a5c9ad612d17b7b4"
  },
  {
    "url": "zh/guide/advanced/dynamic-tab-info.html",
    "revision": "625de02f8f9d5c91f37da9a9835c051e"
  },
  {
    "url": "zh/guide/advanced/initial-tabs.html",
    "revision": "81083ad97714dec68eadadf354a89795"
  },
  {
    "url": "zh/guide/advanced/page-leave.html",
    "revision": "c3a0b4ff9cf9a1b9c4a0324feb970cdb"
  },
  {
    "url": "zh/guide/advanced/restore.html",
    "revision": "c8606b6283fd25343f71efe40a78c514"
  },
  {
    "url": "zh/guide/advanced/slot.html",
    "revision": "649247652ca79a942990fc51b4b1c548"
  },
  {
    "url": "zh/guide/advanced/transition.html",
    "revision": "adb4252e35756b9750548d1ee060c432"
  },
  {
    "url": "zh/guide/changelog.html",
    "revision": "32f58c58d14e0f828dba8c861870d21d"
  },
  {
    "url": "zh/guide/essentials/i18n.html",
    "revision": "7a65f94caffdcd1594d02f2950551f06"
  },
  {
    "url": "zh/guide/essentials/iframe.html",
    "revision": "019183f28d94c1b45ea1875b3a248c0b"
  },
  {
    "url": "zh/guide/essentials/index.html",
    "revision": "e623880b1dc740fe50c059306e033ccc"
  },
  {
    "url": "zh/guide/essentials/operate.html",
    "revision": "9055c41e6cb02bd18778ff69f1926cce"
  },
  {
    "url": "zh/guide/essentials/rule.html",
    "revision": "9e72a7ad86f840b15bd147409fe19a95"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "fc0fea7223ade7ef563ebfb38b4b2868"
  },
  {
    "url": "zh/guide/installation.html",
    "revision": "d791b05555d7314756d5f4fabf1f6b4f"
  },
  {
    "url": "zh/guide/solutions.html",
    "revision": "16eb20b6b1d296b3647748c02da8185c"
  },
  {
    "url": "zh/index.html",
    "revision": "e0e2fddf74e81d52f42a0a352b14d09b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

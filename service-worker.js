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
    "revision": "2a7e97803152f6ec9349bd71e1dfe74c"
  },
  {
    "url": "assets/css/0.styles.acbb54fe.css",
    "revision": "ef82a54ca2472e3f51d61a033e65c7f2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a0abf67c.js",
    "revision": "ffbd361d57e1b6831b910b54e8ec69a2"
  },
  {
    "url": "assets/js/11.d9d7c8f3.js",
    "revision": "4308033f56a0ecc9d91a0d0a9418be1d"
  },
  {
    "url": "assets/js/12.f6036c16.js",
    "revision": "bab4f487da929005e9403a9afcf0a18e"
  },
  {
    "url": "assets/js/13.dcb19377.js",
    "revision": "04acd7bfd5f6c3abcac8e04a23b225bf"
  },
  {
    "url": "assets/js/14.465fb99e.js",
    "revision": "7ffe4eaef357f6719cc080f4784792b1"
  },
  {
    "url": "assets/js/15.32117d99.js",
    "revision": "11c741fd3b2637debc3668c9ff943ad6"
  },
  {
    "url": "assets/js/16.e36b4949.js",
    "revision": "39c1a033b452a45267bfc4f2c32b5eaa"
  },
  {
    "url": "assets/js/17.8ec7852e.js",
    "revision": "dbb59b4c5998ed4f55d6e9e708ca7f9e"
  },
  {
    "url": "assets/js/18.3a0ade10.js",
    "revision": "1515bd86392dc83e21131116b4d3f4ca"
  },
  {
    "url": "assets/js/19.f20f9c93.js",
    "revision": "232e514b5b5078d4e69904bee7cbb847"
  },
  {
    "url": "assets/js/20.caaf06aa.js",
    "revision": "21bb049cd033e89d36f6dfdea823e9a5"
  },
  {
    "url": "assets/js/21.6f81c4bc.js",
    "revision": "b6a31b8e08d00542ecf6e92fa54b05b6"
  },
  {
    "url": "assets/js/22.f81d443c.js",
    "revision": "3cf6e16a1d253665e015124fb68cfa13"
  },
  {
    "url": "assets/js/23.5c94c713.js",
    "revision": "2cc8b7519faa78da8bbb666a6742cbc6"
  },
  {
    "url": "assets/js/24.c6658fed.js",
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
    "url": "assets/js/27.bf3f7eac.js",
    "revision": "d67dccae1377f847b4b77a62838a2566"
  },
  {
    "url": "assets/js/28.a8dc255f.js",
    "revision": "37087b96e1f1ffed81e1a9c43fb2d14e"
  },
  {
    "url": "assets/js/29.4af34d36.js",
    "revision": "cbbda0959dd1309953b410b704962f6a"
  },
  {
    "url": "assets/js/3.8ced93c1.js",
    "revision": "1471499be7d1b564c21b5d5c85272d48"
  },
  {
    "url": "assets/js/30.3eea19f7.js",
    "revision": "1d214fbc8150ff4cb32aec39ddd14218"
  },
  {
    "url": "assets/js/31.b07d8bf7.js",
    "revision": "ef72fefc9eee34756c822c03db609961"
  },
  {
    "url": "assets/js/32.56e92bcd.js",
    "revision": "fd4db2f58971c54b9faf6e92c2ad8fdd"
  },
  {
    "url": "assets/js/33.3da5f8fa.js",
    "revision": "61b4660dc00cf1efafc25afdea3f54d0"
  },
  {
    "url": "assets/js/34.b725fe25.js",
    "revision": "c1bcc0e377520bdad02166b80cacdab6"
  },
  {
    "url": "assets/js/35.eaf85a27.js",
    "revision": "6f91a388dcb1957dc0489cc7384ab060"
  },
  {
    "url": "assets/js/36.153ce260.js",
    "revision": "8a499f5ee37a7a73df9009ed335ad84e"
  },
  {
    "url": "assets/js/37.089a9413.js",
    "revision": "0debc8279632acc60aa2e7140b46520a"
  },
  {
    "url": "assets/js/38.eada5c59.js",
    "revision": "b56512150a4f56dafebce5c72bd848ef"
  },
  {
    "url": "assets/js/39.44aee85b.js",
    "revision": "c7ee3894b6e1cd7022c9bd70fecfd9c2"
  },
  {
    "url": "assets/js/4.28460b34.js",
    "revision": "97fe55662670fe08643ac0ddfe720b45"
  },
  {
    "url": "assets/js/40.ef536e5b.js",
    "revision": "d0cd4f68d014d378311c1c9c70c25c84"
  },
  {
    "url": "assets/js/41.8b275c07.js",
    "revision": "eb9ce762c603e36e47d63d4e1b76fbd1"
  },
  {
    "url": "assets/js/42.8770f4b9.js",
    "revision": "d8a247d1f7afe46239bae1b5b66f4b64"
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
    "url": "assets/js/7.e858fa56.js",
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
    "url": "assets/js/app.ac238a46.js",
    "revision": "76f98f263a95dffa27107d047f3b06f4"
  },
  {
    "url": "assets/js/vendors~docsearch.6e4b8c51.js",
    "revision": "fa550f3f51fd8b7aff7279368e958fee"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "40bd1089c6615cc71e488e656cde7745"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "2e4ed3849a0d1b247bc66dd2a85094bd"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "3d5796c000e954ad7a038e318f76b924"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "68ed2e69b6ea71afef3c4af28d450e98"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "857ea2f574576102c18aac357bb2e527"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "d527a7b9158311ba1bc7559237bc11c5"
  },
  {
    "url": "guide/changelog.html",
    "revision": "9382cf598fceb1204ad142e01d011936"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "17e380260f029a57d2a8fa599d9be1ac"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "0eca129b92cca252586ded766401e18f"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "7738f7a6fff80f32d689ac3adbe401d1"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "0c23ca58cc993e96eb159f1d160297c5"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "0a97202947af3eff68a49a87dae3b5c2"
  },
  {
    "url": "guide/index.html",
    "revision": "625ea22d5eb39b07ea45996900f96c72"
  },
  {
    "url": "guide/installation.html",
    "revision": "846b3eb77f1c418e07003e2bc38fc6ab"
  },
  {
    "url": "guide/solutions.html",
    "revision": "4d976f3702a6dd9d50461adeb2fb6402"
  },
  {
    "url": "index.html",
    "revision": "eac6296a573d84e8403b9171aeba9486"
  },
  {
    "url": "zh/api/index.html",
    "revision": "300a6172ac69348bb14f286087f73235"
  },
  {
    "url": "zh/guide/advanced/dynamic-tab-info.html",
    "revision": "e54d3aa591671d597050a55f75150f3c"
  },
  {
    "url": "zh/guide/advanced/initial-tabs.html",
    "revision": "69c401ee811c419e88cbb409d5aed0da"
  },
  {
    "url": "zh/guide/advanced/page-leave.html",
    "revision": "3de66621fba83e68cbb8e295c19f18e2"
  },
  {
    "url": "zh/guide/advanced/restore.html",
    "revision": "5dc44b0dd7f7c2d9de98c28a03be699e"
  },
  {
    "url": "zh/guide/advanced/slot.html",
    "revision": "012b0dffe2a2c09c383cfef466dc8a8d"
  },
  {
    "url": "zh/guide/advanced/transition.html",
    "revision": "9a43331146c0a7e9b0b53cc04b946a1c"
  },
  {
    "url": "zh/guide/changelog.html",
    "revision": "16ae7f7d18ad396b3144bde5dec1df1f"
  },
  {
    "url": "zh/guide/essentials/i18n.html",
    "revision": "f2cb53c6da79475355bc05fe37bec0c0"
  },
  {
    "url": "zh/guide/essentials/iframe.html",
    "revision": "70515b99846caf61e7ad30a98a5c7b29"
  },
  {
    "url": "zh/guide/essentials/index.html",
    "revision": "50e09daa8e2a7544fc6d89a2b7a7b400"
  },
  {
    "url": "zh/guide/essentials/operate.html",
    "revision": "5735d1a0e421170b5b710fdba8b19430"
  },
  {
    "url": "zh/guide/essentials/rule.html",
    "revision": "ab18cb06f864a007119fa36eb216e42e"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "713b8865ff63462ec760958562b81e74"
  },
  {
    "url": "zh/guide/installation.html",
    "revision": "aa0242dd19081569689d94d884c6f521"
  },
  {
    "url": "zh/guide/solutions.html",
    "revision": "9afa93ced52d0ef3f36498524f753557"
  },
  {
    "url": "zh/index.html",
    "revision": "65321163e2b25db1c9b531bb268df7e8"
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

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
    "revision": "25bd3049b182835de2ba81dca25fd30c"
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
    "url": "assets/js/16.1ae9f944.js",
    "revision": "f0063a1d8254bfd767158968ca3f98d8"
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
    "url": "assets/js/28.9b13921e.js",
    "revision": "53e695231305a28c3c216955d04bb9d8"
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
    "url": "assets/js/33.be07cd97.js",
    "revision": "75b2ac2249f8963494519423f7726882"
  },
  {
    "url": "assets/js/34.b725fe25.js",
    "revision": "c1bcc0e377520bdad02166b80cacdab6"
  },
  {
    "url": "assets/js/35.fd80c875.js",
    "revision": "4d025e1403c854d5087b70f8aee60b6b"
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
    "url": "assets/js/app.5d2959d0.js",
    "revision": "a26d3a1ec12156b6e0bedeab7ef6bda0"
  },
  {
    "url": "assets/js/vendors~docsearch.6e4b8c51.js",
    "revision": "fa550f3f51fd8b7aff7279368e958fee"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "21ed59cdd84c3c4453f0191b7ac09fc0"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "d97e038bacddd8c45219cbfbba2ec8be"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "6ed570c72486fd566e4cbf49a28d81d8"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "9c807ed292b644f3939a6dab7c7ecc65"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "4dfdfa3c7925daa0949569f545104ea7"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "129abf470ad5f8f7a92ce705580fb79b"
  },
  {
    "url": "guide/changelog.html",
    "revision": "cb33fb76570678ee14534830a05d5b97"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "1b37f6d82afedfaf8df4121476dd9792"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "9f5bcbb4f961b5420a4a4a7eae354b8e"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "4b0a458fd2bd897eb3c555cf4bc1047d"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "5884f94e87c6c5ef3c4b4d13ebaab947"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "3c0597abb65e5bb8bd28e2ef92e798f8"
  },
  {
    "url": "guide/index.html",
    "revision": "015ebd30b15c0c78a55ffc49299ee792"
  },
  {
    "url": "guide/installation.html",
    "revision": "90b9858551538ed23aba50289fecb218"
  },
  {
    "url": "guide/solutions.html",
    "revision": "adfb134e11ab1c13de7aac6616c86be3"
  },
  {
    "url": "index.html",
    "revision": "0c3654a1d76b4717b35b0b782e4e892f"
  },
  {
    "url": "zh/api/index.html",
    "revision": "7aba0088b163d250f54bb58eaec8506d"
  },
  {
    "url": "zh/guide/advanced/dynamic-tab-info.html",
    "revision": "55f64d6bbd0ac521bca20bdf8336b19b"
  },
  {
    "url": "zh/guide/advanced/initial-tabs.html",
    "revision": "f97d48793fe11ba4016c21e48056dcbb"
  },
  {
    "url": "zh/guide/advanced/page-leave.html",
    "revision": "d8c1d80ed2f8e1693a7287fc8eb26ff9"
  },
  {
    "url": "zh/guide/advanced/restore.html",
    "revision": "2733624f3555475614e8b37b6b1277de"
  },
  {
    "url": "zh/guide/advanced/slot.html",
    "revision": "4d3fbf1d1dc3bcdf7eca12ef2b7a5191"
  },
  {
    "url": "zh/guide/advanced/transition.html",
    "revision": "b8d0c55718c2e75e930ac4a5acfc6663"
  },
  {
    "url": "zh/guide/changelog.html",
    "revision": "86b6286adcbe0f2873324c333a16b312"
  },
  {
    "url": "zh/guide/essentials/i18n.html",
    "revision": "5f08fb69ae32b4274f1063d96fc60413"
  },
  {
    "url": "zh/guide/essentials/iframe.html",
    "revision": "0a1dfe420294dcc5caf75b4a53577d62"
  },
  {
    "url": "zh/guide/essentials/index.html",
    "revision": "dbbae63dff1289366859e625ab92de08"
  },
  {
    "url": "zh/guide/essentials/operate.html",
    "revision": "7abdc6095dbe830b42087cccbc556b58"
  },
  {
    "url": "zh/guide/essentials/rule.html",
    "revision": "26b4eb70dfe7c761d1203cb264ecccc9"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "1821720daadb9fcf65a543315b76ee41"
  },
  {
    "url": "zh/guide/installation.html",
    "revision": "291f2c44079ac52838118558c352c169"
  },
  {
    "url": "zh/guide/solutions.html",
    "revision": "d00bf2b1d8648cc30b8cf15fa90403b4"
  },
  {
    "url": "zh/index.html",
    "revision": "8a41d4d03999165a6962e541137bcdcb"
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

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
    "revision": "67237bb13750b0cc41db9fa22ee6fcfd"
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
    "url": "assets/js/app.af5893d1.js",
    "revision": "986a2aca635c5f7ebc39e6b6d50a8bdb"
  },
  {
    "url": "assets/js/vendors~docsearch.6e4b8c51.js",
    "revision": "fa550f3f51fd8b7aff7279368e958fee"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "71d08fcc1dc54923b43213d94f180fc5"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "01fbd1309e9bd73a2706bef550c76181"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "28228e4cffaf208ac13e088e9971cbaa"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "4c11a04ebdd4d588e0651f5542d4e934"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "16b3a3e5faac3565a63fe3183dbf9fa8"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "ed3594f85f50c433a6612b8294cb4bef"
  },
  {
    "url": "guide/changelog.html",
    "revision": "e7513d7b1920e4f68686017a294cee6f"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "7006d0416b8a075f2a6f28e6c936c4de"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "4795b36e06e5e337df8e121cf4492c5a"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "b906d6d7dad24d1067a93b23b7a39a61"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "5c68c827fb73e6d58685363cb63ff098"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "9fb628fe22863d89d8972237b767f67f"
  },
  {
    "url": "guide/index.html",
    "revision": "b4a303e59c8ccfdc4ac2aa56cdac7c6c"
  },
  {
    "url": "guide/installation.html",
    "revision": "268750602b3fd508e23c8dd23f492fcb"
  },
  {
    "url": "guide/solutions.html",
    "revision": "4f5d582a1c45180f98b634fc27c14fd0"
  },
  {
    "url": "index.html",
    "revision": "478e648d8cb4641d6cfc68ff530aa485"
  },
  {
    "url": "zh/api/index.html",
    "revision": "276b129ab0de8b8bc81334bbe91b02e0"
  },
  {
    "url": "zh/guide/advanced/dynamic-tab-info.html",
    "revision": "eb6e2b4f00d0e47296b4a4f4f3b0dfe7"
  },
  {
    "url": "zh/guide/advanced/initial-tabs.html",
    "revision": "49b67408541c7a334b317afb5fbe621e"
  },
  {
    "url": "zh/guide/advanced/page-leave.html",
    "revision": "5713b660fe97911ac621f5ff1bf9dc1f"
  },
  {
    "url": "zh/guide/advanced/restore.html",
    "revision": "035b098c5afed43319e362875cec1d0f"
  },
  {
    "url": "zh/guide/advanced/slot.html",
    "revision": "d36e12d2d3645e44a4b2309ef02d693d"
  },
  {
    "url": "zh/guide/advanced/transition.html",
    "revision": "51688071d6bb4ea67c13e55055a92009"
  },
  {
    "url": "zh/guide/changelog.html",
    "revision": "377375c23f0b8aa135e2d0c34527a37d"
  },
  {
    "url": "zh/guide/essentials/i18n.html",
    "revision": "d5821fa3c1452df54afa0c12797099df"
  },
  {
    "url": "zh/guide/essentials/iframe.html",
    "revision": "376c9f50cb4bd2e809453645fe755193"
  },
  {
    "url": "zh/guide/essentials/index.html",
    "revision": "6174dfdfc407e187dee3800132dc8eb4"
  },
  {
    "url": "zh/guide/essentials/operate.html",
    "revision": "b46a579c5925551b7968db4821616bb1"
  },
  {
    "url": "zh/guide/essentials/rule.html",
    "revision": "4a2bf6a593b90f83fe2451534edffaa7"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "fd37be4bf1649b241896807bbb469785"
  },
  {
    "url": "zh/guide/installation.html",
    "revision": "c3c434e597ccf6a671ff71823bfc79a3"
  },
  {
    "url": "zh/guide/solutions.html",
    "revision": "4c4b21e757bfe48015f1bd7d50e4c72d"
  },
  {
    "url": "zh/index.html",
    "revision": "4845b9d10c7a419ed9a72093ed07ef8e"
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

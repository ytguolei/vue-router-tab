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
    "revision": "d5eee7444771b50fd46325fd89546dda"
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
    "url": "assets/js/app.064cf216.js",
    "revision": "4d72ca775817f7e682d3a09062ecbca4"
  },
  {
    "url": "assets/js/vendors~docsearch.6e4b8c51.js",
    "revision": "fa550f3f51fd8b7aff7279368e958fee"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "3a8376d9e19bb3e45507cdafd53e744e"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "ae7cd7f1c292d3e4791089900371e486"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "6cb95c22f52061204fc99d2ab4a1605e"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "5b9e58f4be4e25b9409608243e87704f"
  },
  {
    "url": "guide/advanced/slot.html",
    "revision": "7188ea5499c0559a1e150bcc963c6ee7"
  },
  {
    "url": "guide/advanced/transition.html",
    "revision": "32455d021bc8ab5d743ff10257621094"
  },
  {
    "url": "guide/changelog.html",
    "revision": "75b52f254519b09e0ff0829ffbefb3ee"
  },
  {
    "url": "guide/essentials/i18n.html",
    "revision": "d3959b31aaeaabcd2bbd3be5b30d041a"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "b22c428c1e5cacefd18278d656fbf8d6"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "3de876d7d373a454de2cd5346344602a"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "a9c18c19cdce00cf589a927f83c51559"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "8c88ab336f8c07277c5738dbe4cb085d"
  },
  {
    "url": "guide/index.html",
    "revision": "a568ce1f68afe8133e1ba557b507675d"
  },
  {
    "url": "guide/installation.html",
    "revision": "b87bfa8af8b5ce74abc50deb168671b5"
  },
  {
    "url": "guide/solutions.html",
    "revision": "c1b4da08f5d95fd4050ae54904a06860"
  },
  {
    "url": "index.html",
    "revision": "93d8ea59b60e4bb3afdfa1b33b5fe59b"
  },
  {
    "url": "zh/api/index.html",
    "revision": "58c839a40199830a73a75b9a1fbf0ada"
  },
  {
    "url": "zh/guide/advanced/dynamic-tab-info.html",
    "revision": "f5313430b0f5c4da2821fb75f0a12f60"
  },
  {
    "url": "zh/guide/advanced/initial-tabs.html",
    "revision": "58d67c6fd54476cca3e93ea8b97a3d6d"
  },
  {
    "url": "zh/guide/advanced/page-leave.html",
    "revision": "1bd3a60aef5cc330cbd651bf671ebf42"
  },
  {
    "url": "zh/guide/advanced/restore.html",
    "revision": "93df26d12d5bcad1da43a550fa9354ac"
  },
  {
    "url": "zh/guide/advanced/slot.html",
    "revision": "177741155f1f374c73662f6307ef3eae"
  },
  {
    "url": "zh/guide/advanced/transition.html",
    "revision": "ab671d831e84d54478fe3a7e93bc5be2"
  },
  {
    "url": "zh/guide/changelog.html",
    "revision": "c9e79a5a16eb5676280c90beefe1ddfb"
  },
  {
    "url": "zh/guide/essentials/i18n.html",
    "revision": "aced880778ac8883eaa42207e1432fb1"
  },
  {
    "url": "zh/guide/essentials/iframe.html",
    "revision": "90bc50d94117e0b01e2b7e7cddba5aad"
  },
  {
    "url": "zh/guide/essentials/index.html",
    "revision": "88d1110f08e9fbcea915a8cf41bf6378"
  },
  {
    "url": "zh/guide/essentials/operate.html",
    "revision": "c9471adf4127455f1312c7b7489270d0"
  },
  {
    "url": "zh/guide/essentials/rule.html",
    "revision": "45c4d8e0de6987bea683a58a77c4a4cd"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "328350375d2e666deb64cfaabe843303"
  },
  {
    "url": "zh/guide/installation.html",
    "revision": "5fd38580fcb43a68b9c8cf3c08126cc5"
  },
  {
    "url": "zh/guide/solutions.html",
    "revision": "8c17603b762b6b0e68ea635c0362178b"
  },
  {
    "url": "zh/index.html",
    "revision": "cd384328ecc1e7cf8b097e932a012f85"
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

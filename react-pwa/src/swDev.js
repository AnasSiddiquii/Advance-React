export default function swDev() {

  // video 12 notification

  //   function notify(msg) {
  //     const padding = "=".repeat((4 - (msg.length % 4)) % 4);
  //     const base = (msg + padding).replace(/\-/g, "+").replace(/_/g, "/");

  //     const rawData = window.atob(base);
  //     const outputArray = new Uint8Array(rawData.length);

  //     for (let i = 0; i < rawData.length; ++i) {
  //       outputArray[i] = rawData.charCodeAt(i);
  //     }
  //     return outputArray;
  //   }

  //   function key() {
  //     var vapKey =
  //       "BL7ELU24fJTAlH5Kyl8N6BDCac8u8li_U5PIwG963MOvdYs9s7LSzj8x_7v7RFdLZ9Eap50PiiyF5K0TDAis7t0";

  //     return notify(vapKey);
  //   }

  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(swUrl).then((resp) => {
    console.log("response", resp.scope);

    // video 12 notification

    // return resp.pushManager.getSubscription().then(function (subscription) {
    //   return resp.pushManager.subscribe({
    //     userAppVisibleOnly: true,
    //     applicationServerKey: key(),
    //   });
    // });
  });
}

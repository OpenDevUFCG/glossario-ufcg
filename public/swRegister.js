/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
      navigator.serviceWorker
          .register('/serviceWorker.js', { scope: '/' })
          .then(
              function(registration) {
                  // Registration was successful
                  console.log(
                      // eslint-disable-next-line max-len
                      `ServiceWorker registration successful with scope: ${registration.scope} ✨`
                  );
              },
              function(err) {
                  // registration failed :(
                  console.log('ServiceWorker registration failed: ', err);
              }
          );
  });
}

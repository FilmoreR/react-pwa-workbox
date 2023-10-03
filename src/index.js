import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './serviceWorkerRegistration';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

registerServiceWorker();

// var enableNotificationsButtons = document.querySelectorAll('.enable-notifications');

// function displayConfirmNotification() {
//   if ('serviceWorker' in navigator) {
//     var options = {
//       body: 'MRM SLT : You successfully subscribed to our Notification service!',
//       icon: '/logo192.png',
//       image: '/images/netflix-logo.png',
//       dir: 'ltr',
//       lang: 'en-US', // BCP 47,
//       vibrate: [100, 50, 200],
//       badge: '/logo192.png'
//     };

//     navigator.serviceWorker.ready
//       .then(function(swreg) {
//         swreg.showNotification('MRM SLT : Successfully subscribed (from SW)!', options);
//     });
//   }
// }

// function askForNotificationPermission() {
//   Notification.requestPermission(function(result) {
//     console.log('User Choice', result);
//     if (result !== 'granted') {
//       console.log('MRM SLT : No notification permission granted!');
//     } else {
//       displayConfirmNotification();
//       console.log('No!');
//     }
//   });
// }

// if ('Notification' in window) {
//   for (var i = 0; i < enableNotificationsButtons.length; i++) {
//     enableNotificationsButtons[i].style.display = 'inline-block';
//     enableNotificationsButtons[i].addEventListener('click', askForNotificationPermission);
//   }
// }

// setInterval(() => {
//   if ('serviceWorker' in navigator) {
//     console.log("Delayed for 5 second.");
//     var options = {
//       body: 'BODY MESSAGE',
//       icon: '/logo192.png',
//       image: '/images/netflix-logo.png',
//       dir: 'ltr',
//       lang: 'en-US', // BCP 47,
//       vibrate: [100, 50, 200],
//       badge: '/logo192.png'
//     };
  
  
//     navigator.serviceWorker.ready
//       .then(function(swreg) {
//         swreg.showNotification('MRM SLT :  SAMPLE PUSH NOTIFICATION', options);
//     });
//   }
// }, "5000");

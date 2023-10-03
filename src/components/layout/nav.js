import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    var enableNotificationsButtons = document.querySelectorAll('.enable-notifications');

    function displayConfirmNotification() {
      if ('serviceWorker' in navigator) {
        var options = {
          body: 'MRM SLT : You successfully subscribed to our Notification service!',
          icon: '/logo192.png',
          image: '/images/netflix-logo.png',
          dir: 'ltr',
          lang: 'en-US', // BCP 47,
          vibrate: [100, 50, 200],
          badge: '/logo192.png'
        };
    
        navigator.serviceWorker.ready
          .then(function(swreg) {
            swreg.showNotification('MRM SLT : Successfully subscribed (from SW)!', options);
        });
      }
    }
    
    function askForNotificationPermission() {
      Notification.requestPermission(function(result) {
        console.log('User Choice', result);
        if (result !== 'granted') {
          console.log('MRM SLT : No notification permission granted!');
        } else {
          displayConfirmNotification();
          console.log('No!');
        }
      });
    }
    
    setInterval(() => {
      if ('serviceWorker' in navigator) {
        console.log("Delayed for 4 second.");
        var options = {
          body: 'BODY MESSAGE',
          icon: '/logo192.png',
          image: '/images/netflix-logo.png',
          dir: 'ltr',
          lang: 'en-US', // BCP 47,
          vibrate: [100, 50, 200],
          badge: '/logo192.png'
        };
      
      
        navigator.serviceWorker.ready
          .then(function(swreg) {
            swreg.showNotification('MRM SLT :  SAMPLE PUSH NOTIFICATION', options);
        });
      }
    }, "4000");

    const shoot = () => {
        if ('Notification' in window) {
            askForNotificationPermission();
        }
    }

    return (
        <div id="navigation" className="navigation">
            <nav>
                <ul >
                    <li>
                        <a href="https://www.netflix.com/browse" target="_blank" rel="noopener noreferrer noopener">Browse</a>
                    </li>
                    <li>
                        <Link to="/top-picks">Top picks</Link>
                    </li>
                    <li>
                        <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer noopener">Recent</a>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li><button className="enable-notifications" onClick={shoot}> Enable Notifications</button></li>
                </ul>  
            </nav>
      </div>
    )
}

export default Nav;
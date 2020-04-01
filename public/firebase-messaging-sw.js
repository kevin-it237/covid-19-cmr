importScripts('https://www.gstatic.com/firebasejs/7.11.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.11.0/firebase-messaging.js');

firebase.initializeApp({
	// Project Settings => Add Firebase to your web app
    apiKey: "AIzaSyD-h6hIp-2Ev8A6CsEm61kUbhjcDH8C2Bs",
    authDomain: "survey-cmr.firebaseapp.com",
    databaseURL: "https://survey-cmr.firebaseio.com",
    projectId: "survey-cmr",
    storageBucket: "survey-cmr.appspot.com",
    messagingSenderId: "532878505102",
    appId: "1:532878505102:web:5f6856c454dfb1b25f05df",
    measurementId: "G-B524B1CTE8"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    var notificationTitle = payload.notification.title; 
    var notificationOptions = {
        body: payload.notification.body,
        icon: payload.data.icon
    };
    return registration.showNotification(notificationTitle,
        notificationOptions);
});

self.addEventListener('notificationclick', function(event) {
    console.log('On notification click: ', event.notification.tag);
    // do what you want
    let url = "https://survey-cmr.cf";
    event.notification.close(); // Android needs explicit close.
    event.waitUntil(
        clients.matchAll({type: 'window'}).then( windowClients => {
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                // If so, just focus it.
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            // If not, then open the target URL in a new window/tab.
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});

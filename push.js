const webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BLVEVNtM6FxPXUXVsmt4H01zFL5Lwpdj7fyFTUdeq8IKikVn6GTv0FkEEk8DqyHDvY74j3Syq4Y-kVbvyjVcQME",
    "privateKey": "umkLL9Kob3fEpYESeki-MOgdDBNSAqoJUaFRD2n3NtA"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
let pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/e_YihHjXN8E:APA91bGf8do4GbIADWMvH44KHhMt1vt4e745lFQl4U8iabRqP2DV1ZfPKCt3X754cer2nkyDumZMgyNxpk8iAApWMb5HAYQbiVUnf3eLu1FNI8LIjc1fCE1r1aL8lPpm35DBTBykE871",
    "keys": {
        "p256dh": "BA6TIhAvScjj+VXR1mQYXcTHINB78OpFhCY5p50AGPa3x+niJvQvym9BVN9/GaaaGCCDT1lMPg6cyfCW82I3Mts=",
        "auth": "lnzYm5vKA5oNSPOS/DHFiA=="
    }
};
let payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

let options = {
    gcmAPIKey: '1083998370004',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);
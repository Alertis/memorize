import moment from "moment";
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
    onRegister: function(token) {
        console.log( 'TOKEN:', token );
    },
    onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
        notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    permissions: {
        alert: true,
        badge: true,
        sound: true
    },
    popInitialNotification: true,
    requestPermissions: true,
});

export default class pushSender{

    SendNotification(word, date){
        PushNotification.localNotificationSchedule({
            message: word+" kelimesininin anlamını hatırlıyor musun?", 
            date: new Date(moment(date)) 
        });
    }

}
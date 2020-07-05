import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-community/async-storage';
import InAppBilling from 'react-native-billing';
import moment from 'moment';

const oneMonthSubscriptionProductId = 'one_month_subscription';
const oneYearSubscriptionProductId = 'one_year_subscription';

export default async function checkIsSubscribed() {
    const networkStatus = await NetInfo.fetch();
    if (networkStatus.isConnected) {
        await InAppBilling.open();
        const isMonthActivePlayStore = await InAppBilling.isSubscribed(oneMonthSubscriptionProductId);
        const isYearActivePlayStore = await InAppBilling.isSubscribed(oneYearSubscriptionProductId);
        console.log(await InAppBilling.getSubscriptionTransactionDetails(oneMonthSubscriptionProductId));
        await InAppBilling.close();
        return isMonthActivePlayStore || isYearActivePlayStore;
    }
    const oneMonthPurchase = await AsyncStorage.getItem(`@storage_${oneMonthSubscriptionProductId}`);
    const isMonthActiveOffline = moment(oneMonthPurchase).isAfter(moment().subtract(1, 'minute'));
    const oneYearPurchase = await AsyncStorage.getItem(`@storage_${oneYearSubscriptionProductId}`);
    const isYearActiveOffline = moment(oneYearPurchase).isAfter(moment().subtract(30, 'minute'));
    return isMonthActiveOffline || isYearActiveOffline;
}
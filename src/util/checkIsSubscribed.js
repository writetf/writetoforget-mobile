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
        InAppBilling.getSubscriptionTransactionDetails(oneMonthSubscriptionProductId).then(details => {
            AsyncStorage.setItem(`@storage_${oneMonthSubscriptionProductId}`, details.purchaseTime);
        });
        InAppBilling.getSubscriptionTransactionDetails(oneYearSubscriptionProductId).then(details => {
            AsyncStorage.setItem(`@storage_${oneYearSubscriptionProductId}`, details.purchaseTime);
        });
        await InAppBilling.close();
        return isMonthActivePlayStore || isYearActivePlayStore;
    }
    const oneMonthPurchase = await AsyncStorage.getItem(`@storage_${oneMonthSubscriptionProductId}`);
    const oneYearPurchase = await AsyncStorage.getItem(`@storage_${oneYearSubscriptionProductId}`);
    return oneMonthPurchase || oneYearPurchase;
}
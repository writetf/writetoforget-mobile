import InAppBilling from 'react-native-billing';

export default async function checkIsSubscribed() {
    await InAppBilling.open();
    const oneMonth = await InAppBilling.isSubscribed('one_month_subscription');
    const oneYear = await InAppBilling.isSubscribed('one_year_subscription');
    await InAppBilling.close();
    return oneMonth || oneYear;
}
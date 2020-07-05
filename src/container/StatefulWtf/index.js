import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';
import InAppBilling from 'react-native-billing';
import { Text, Button } from '~/common/index';
import globalStyles, { deviceHeight } from '~/styles/globalStyle';
import LogoImgSrc from '~/common/img/logo.png';
import AsyncStorage from '@react-native-community/async-storage';

const perks = [
    'Remember what you have forgotten.',
    'Complete unfinished memories.',
    'See memories offline.',
];

function renderBulletinPoint(content) {
    return <View key={content} style={styles.bulletinPointContainer}>
        <View style={styles.dot} />
        <Text>
            {content}
        </Text>
    </View>;
}


const defaultState = {
    productDetails: null,
    transactionDetails: null,
    consumed: false,
    error: null,
  };

const oneMonthSubscriptionProductId = 'one_month_subscription';
const oneYearSubscriptionProductId = 'one_year_subscription';

function StatefulWtf({navigation}) {

    const [billingState, setBillingState] = useState(defaultState);
    const [prices, setPrices] = useState({
        [oneMonthSubscriptionProductId]: '0',
        [oneYearSubscriptionProductId]: '0',
    });

    useEffect(() => {
        async function a() {
            await InAppBilling.open();
            InAppBilling.getSubscriptionDetailsArray([oneMonthSubscriptionProductId, oneYearSubscriptionProductId]).then(rs => {
                console.log(rs[0].priceText);
                setPrices({
                    [oneMonthSubscriptionProductId]: rs[0].priceText,
                    [oneYearSubscriptionProductId]: rs[1].priceText,
                });
            });
            await InAppBilling.close();
        }
        a();
    }, []);


    const buySubscription = async (productId) => {
        try {
            await InAppBilling.open();
            console.log('bang', await InAppBilling.isSubscribed(productId));
            const details = await InAppBilling.subscribe(
                productId
            );
            await InAppBilling.close();
            const {
                purchaseTime,
            } =  details;
            console.log(details);
            AsyncStorage.setItem(`@storage_${productId}`, purchaseTime);
            setBillingState({
                ...billingState,
                productDetails: JSON.stringify(details),
                });
            navigation.navigate('Trash');
        } catch (err) {
            console.log(err);
            setBillingState({
                ...defaultState,
                error: JSON.stringify(err),
            });
            await InAppBilling.close();
        }
      };


    return (
        <View
            flex={1}
        >
            <StatusBar
                barStyle='light-content'
                backgroundColor={globalStyles.color.darkPurple}
            />
            <View
                style={styles.bannerContainer}
            >
                <Text
                    style={styles.bannerText}
                    weight='bold'
                >
                    Stateful WTF
                </Text>
                <Image
                    style={styles.statefulLogo}
                    source={LogoImgSrc}
                />

            </View>
            <View style={styles.detailContainer}>
                <Text>
                    Upgrade to&nbsp;
                    <Text weight='bold'>
                    Stateful Writetf
                    </Text>
                    &nbsp;to retrieve what you have forgotten.
                </Text>
                <Text>
                    {'\n'}
                    With&nbsp;
                    <Text weight='bold'>
                    Stateful Writetf
                    </Text>
                    &nbsp;, you can:
                </Text>
                {
                    perks.map(perk => renderBulletinPoint(perk))
                }
                <Text
                    style={styles.subscriptionText}
                    weight='bold'
                >
                    {'\n'}
                    Subscription
                </Text>
                <View style={styles.pricingContainer}>
                    <Button onPress={() => {
                        buySubscription(oneMonthSubscriptionProductId);
                    }} width={147} height={40}>
                        <Text
                            style={styles.pricingText}
                        >
                            {prices[oneMonthSubscriptionProductId]} / Month
                        </Text>
                    </Button>
                    <Button
                        onPress={() => buySubscription(oneYearSubscriptionProductId)}
                        width={147} 
                        height={40}
                    >
                        <Text
                            style={styles.pricingText}
                        >
                            {prices[oneYearSubscriptionProductId]} / Year
                        </Text>
                    </Button>
                </View>
            </View>

        </View>);
}

const styles = StyleSheet.create({
    bannerContainer: {
        position: 'relative',
        backgroundColor: globalStyles.color.darkPurple,
        height: deviceHeight / 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    statefulLogo: {
        position: 'absolute',
        top: deviceHeight / 3 - 190,
        left: -100,
        height: 275,
        width: 275,
        transform: [{ rotate: '30deg' }],
    },
    bannerText: {
        ...globalStyles.fontSize.lg,
        color: globalStyles.color.white,
    },
    detailContainer: {
        height: deviceHeight * 2 / 3,
        paddingHorizontal: globalStyles.gap.md,
        paddingVertical: globalStyles.gap.sm,
    },
    bulletinPointContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    dot: {
        width: globalStyles.gap.sm,
        height: globalStyles.gap.sm,
        borderRadius: globalStyles.gap.xs,
        backgroundColor: globalStyles.color.yellow,
        marginHorizontal: globalStyles.gap.sm,
    },
    subscriptionText: {
        ...globalStyles.fontSize.md,
    },
    pricingContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: globalStyles.gap.md,
    },
    pricingText: {
        color: globalStyles.color.white,
    },
});

export default StatefulWtf;

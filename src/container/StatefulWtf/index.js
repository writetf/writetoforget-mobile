import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';
import InAppBilling from 'react-native-billing';
import { Text, Button } from '~/common/index';
import globalStyles, { deviceHeight } from '~/styles/globalStyle';
import LogoImgSrc from '~/common/img/logo.png';

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

function StatefulWtf({navigation}) {
    const [billingState, setBillingState] = useState(defaultState);
    const buySubscription = async (productId) => {
        try {
          await InAppBilling.open();
          const details = await InAppBilling.subscribe(
            productId
          );
          await InAppBilling.close();
          console.log(JSON.stringify(details));
          setBillingState({
              ...billingState,
              productDetails: JSON.stringify(details),
            });
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
                        buySubscription('one_month_subscription');
                    }} width={147} height={40}>
                        <Text
                            style={styles.pricingText}
                        >
                            ₫ 19,000 / Month
                        </Text>
                    </Button>
                    <Button 
                        onPress={() => buySubscription('one_year_subscription')} 
                        width={147} 
                        height={40}
                    >
                        <Text
                            style={styles.pricingText}
                        >
                        ₫ 190,000 / Year
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
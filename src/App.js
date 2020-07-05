import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, BackHandler} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Rate, { AndroidMarket } from 'react-native-rate';
import SplashScreen from 'react-native-splash-screen';
import TypePage from '~/container/TypePage/index';
import StatefulWtf from '~/container/StatefulWtf';
import TrashThought from '~/container/TrashThought';
import { Modal } from '~/common/index';


const MainStack = createStackNavigator();
const {
    Navigator,
    Screen,
} = MainStack;

function App() {
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        SplashScreen.hide();
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
                const options = {
                    GooglePackageName:'com.writetf.writetoforget',
                    preferredAndroidMarket: AndroidMarket.Google,
                    preferInApp:false,
                    openAppStoreIfInAppFails:true,
                    fallbackPlatformURL: 'https://play.google.com/store/apps/details?id=com.writetf.writetoforget',
                };
                Rate.rate(options);
            }
          );

        return () => backHandler.remove();
    }, []);

    return (
        <SafeAreaView flex={1}>
          <NavigationContainer>
                <Navigator>
                    <Screen
                        name="Type"
                        options={{ header: () => null }}
                    >
                    {
                        props => (<TypePage {...props} setModalVisible={setModalVisible}/>)
                    }

                    </Screen>
                    <Screen
                        name="Stateful"
                        component={StatefulWtf}
                        options={{ header: () => null }}
                    />
                    <Screen
                        name="Trash"
                        component={TrashThought}
                        options={{ header: () => null }}
                    />
                </Navigator>
            </NavigationContainer>
            <Modal setModalVisible={setModalVisible} isVisible={modalVisible} />
        </SafeAreaView>
    );
}

export default App;

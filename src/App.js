import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TypePage from '~/container/TypePage/index';
import StatefulWtf from '~/container/StatefulWtf';

const MainStack = createStackNavigator();
const {
    Navigator,
    Screen,
} = MainStack;

function App() {
    return (
        <SafeAreaView flex={1}>
            <NavigationContainer>
                <Navigator>
                    <Screen
                        name="Type"
                        component={TypePage}
                        options={{ header: () => null }}
                    />
                    <Screen
                        name="Stateful"
                        component={StatefulWtf}
                        options={{ header: () => null }}
                    />
                </Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default App;

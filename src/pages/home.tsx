import React from 'react';
import styles from './styles';

import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const createAlarme = async () => {
    /*try {
        await createAlarm({
            active: true,
            date: "2023-08-07T02:05:32.000Z",
            message: 'teste alarme',
            snooze: 1,
        });
        console.log("alrme criado")
    } catch (e) {
        console.log(e)
    }*/


    /*try {
        const alarms = await getAlarms();
        console.log(alarms)
    } catch (e) { }*/
}

function Home(): JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.font}>testedssss</Text>
                <TouchableOpacity
                    onPress={() => createAlarme()}>
                    <Text style={styles.font}>criar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Home;
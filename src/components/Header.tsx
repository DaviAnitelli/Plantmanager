import React, { useEffect,useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import userImg from '../assets/83137842.png';
import colors from '../styles/colors';
import fonst from '../styles/fonst';

export function Header(){
    const [userName, setUserName] = useState<string>();

    useEffect(()=>{
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUserName(user || '');
        }

        loadStorageUserName();
    },[]);

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>
                    {userName}
                </Text>
            </View>
            <Image source={userImg} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '10%',
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonst.text
    },
    userName: {
        fontSize: 32,
        fontFamily: fonst. heading,
        color: colors.heading,
        lineHeight: 40
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40,

    }
});
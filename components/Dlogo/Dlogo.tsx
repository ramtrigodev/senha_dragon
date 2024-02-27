import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './Dlogostyles';
import dlogo from '../../assets/logo.png'

export function Dlogo() {
    return (
        <View>
            <Text style={styles.title}>
               DRAGON PASS GENERATOR
            </Text>
            <Image
            source={dlogo}
            style={{
                resizeMode: 'contain',
                height: 250,
                
            }}
            />

        </View>
    );
}
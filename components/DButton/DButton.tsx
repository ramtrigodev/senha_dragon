import React from 'react';
import { Button, View } from 'react-native';

import { styles } from './DButtonstyles';

export function DButton() {
    return (
        <View style={styles.container}>
            <Button
              onPress={()=>{console.log("olá")}}
              title='Click Aqui'
              accessibilityLabel='click em min'
              color="#831584"

            />
        </View>
    );
}
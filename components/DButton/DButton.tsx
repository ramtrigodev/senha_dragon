import React from 'react';
import { Button, View, Text, Pressable } from 'react-native';

import { styles } from './DButtonstyles';

export function DButton() {
    return (
        <>
           
            <Pressable
                onPress={() => console.log("pressionado")}
              style={styles.button}
           >
                <Text style={styles.text}> GERADOR </Text>
            </Pressable>

            <Pressable
                onPress={() => console.log("pressionado")}
                style={styles.button}
            >
                <Text style={styles.text}> COPIAR </Text>
            </Pressable>
        </>
    );
}
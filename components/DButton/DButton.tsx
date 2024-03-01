import React, { useState } from 'react';
import { Button, View, Text, Pressable } from 'react-native';
import generatePass from '../../src/services/passwordServices';
import { styles } from './DButtonstyles';
import { DTextInput } from '../DTextInput/DTextInput';

export function DButton() {
    const [pass, setPass] = useState('')

    function handleGenerateButton() {
        let generateToken = generatePass()
        setPass(generateToken)
    }
    return (
        <>
            <DTextInput pass={pass} />
            <Pressable
                onPress= {handleGenerateButton}
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
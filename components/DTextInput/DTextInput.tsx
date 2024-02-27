import React from "react";
import { TextInput } from "react-native";
import { styles } from './DTextInputStyles';

export function DTextInput() {
    return (

        <TextInput
        style={styles.inputer}
            placeholder='SENHA'
            
        ></TextInput>

    );


}
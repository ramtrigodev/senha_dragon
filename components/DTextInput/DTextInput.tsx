import React from "react";
import { TextInput } from "react-native";
import { styles } from './DTextInputStyles';

interface  DTextInputProps {
    pass:string
}
export function DTextInput(props: DTextInputProps) {
    return (

        <TextInput
        style={styles.inputer}
            placeholder='SENHA'
            value ={ props.pass}
            
        ></TextInput>

    );


}
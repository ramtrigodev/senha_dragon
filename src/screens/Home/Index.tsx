import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './Style';
import { Dlogo } from "../../../components/Dlogo/Dlogo";
import { DTextInput } from "../../../components/DTextInput/DTextInput";
import {DButton} from "../../../components/DButton/DButton";

export default function Home() {
    return (
        <View style={styles.appcontainer}>
            <View style={styles.
                logoContainer}>
                <Dlogo></Dlogo>
            </View>

             <View style={styles.inputContainer}>

       
                <DButton/>
             </View>

            <StatusBar style="light" />
        </View>
    )
}


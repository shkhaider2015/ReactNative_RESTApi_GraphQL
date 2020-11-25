import React from 'react'
import { Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';


export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome Home</Text>
                <StatusBar style="auto" />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
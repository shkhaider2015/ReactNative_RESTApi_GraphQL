import React from 'react'
import { Button, Text, View, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';


export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttons}>
                <Button 
                title="RestAPI"
                color="#FCB3F9"
                onPress={ () => this.props.navigation.navigate("RestAPI") }
                />
                </View>
                <View style={styles.buttons}  >
                <Button
                title="GraphQL"
                color="#FC8D8D"
                onPress={ () => this.props.navigation.navigate("GraphQL") }
                />
                </View>
                <View style={styles.buttons}  >
                <Button
                title="Multiple API Promise"
                color="#C8D149"
                onPress={ () => this.props.navigation.navigate("MultiAPIPromise") }
                />
                </View>
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
    buttons : {
        marginTop : 10
    }
  });
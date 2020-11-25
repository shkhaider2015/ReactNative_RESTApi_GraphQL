import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import IMAGE from "../assets/92c952.png";

class RestItem extends Component {

    

    render() {

        return (
            <View style={styles.root} >
                <Image
                resizeMode='contain' 
                source={{ uri : this.props.item.thumbnailUrl }}
                style={styles.myImage}
                />
                <Text> {this.props.item.title} </Text>
            </View>
        );
    }
}

export default RestItem;

const styles = StyleSheet.create(
    {
        root : {
            // width : 100,
        },
        myImage : {
            width : 300,
            height : 150
        }
    }
)
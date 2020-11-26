import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import IMAGE from "../assets/92c952.png";

class RestItem extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
            imageURL: props.image,
            title : props.title,
            isLoading: true
        }
    }

    componentDidMount() {
        const getImage = async () => {
            try {
                let response = await fetch(this.props.image);
                console.log("Respose", await response.json())
            }
            catch (e) {
                console.error(e)
            }
        }

        // getImage()
    }


    render() {

        return (
            <View style={styles.root} >
                <Image
                    resizeMode="stretch"
                    source={{ uri : "https://source.unsplash.com/random/800x600" }}
                    style={styles.myImage}
                />
                <Text> {this.state.title} </Text>
            </View>
        );
    }
}

export default RestItem;

const styles = StyleSheet.create(
    {
        root: {
            // width : 100,
            backgroundColor : "#FFFFFF"
        },
        myImage: {
            width: 300,
            height: 150
        }
    }
)
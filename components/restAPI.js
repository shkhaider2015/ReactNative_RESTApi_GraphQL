import React from 'react'
import { Text, View, FlatList, SafeAreaView, Image } from "react-native";
import RestItem from "./restItem";


export default class RestAPI extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    albumId: 13,
                    id: 1,
                    title: "reprehenderit est deserunt velit ipsam",
                    url: "https://via.placeholder.com/600/771796",
                    thumbnailUrl: "https://via.placeholder.com/150/771796"
                },
                {
                    albumId: 43,
                    id: 2,
                    title: "reprehenderit est deserunt velit ipsam",
                    url: "https://via.placeholder.com/600/771796",
                    thumbnailUrl: "https://via.placeholder.com/150/771796"
                }
            ],
            isLoading: true
        }
    }

    componentDidMount() {
        const getData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/photos");
            const data = await response.json();
            console.log("Data : ", Array.isArray(data) )
            this.setState({
                list: data.slice(0, 50),
                isLoading: false
            })
        }
        getData()

    }

    render() {


        return (
            // <View>
            //     <Text>Welcome to RestAPI {this.state.list[0].title}
            //     </Text>
            //     {/* {
            //     this.state.list.map(
            //         (obj, ind) => {
            //             return(
            //                 <Text key={ind} > {obj.id} </Text>
            //             )
            //         }
            //     )
            // } */}
            //     {!this.state.isLoading ?
            //         <FlatList
            //             data={this.state.list}
            //             renderItem={({ item }) => {
            //                 <View>
            //                     <Text> {item.id} </Text>
            //                 </View>
            //             }}
            //             key={item => item.id.toString()}
            //         /> :
            //         <Text>Error</Text>}
            // </View>

            <SafeAreaView style={{
                
            }} >
                <FlatList
                data={this.state.list}
                renderItem={({ item }) => (
                        <RestItem item={item} />
                )}
                keyExtractor={item => item.id.toString()}
            />
            </SafeAreaView>

        )
    }

}
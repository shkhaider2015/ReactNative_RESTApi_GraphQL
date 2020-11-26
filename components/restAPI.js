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
            this.setState({
                list: data.slice(0, 10),
                isLoading: false
            })
        }
        getData()

    }

    render() {


        return (

            <SafeAreaView style={{
                
            }} >
                <FlatList
                data={this.state.list}
                renderItem={({ item }) => (
                        <RestItem title={item.title} image={item.thumbnailUrl} />
                )}
                keyExtractor={item => item.id.toString()}
            />
            </SafeAreaView>

        )
    }

}
import React, { Component } from 'react';
import { View, Text, FlatList } from "react-native";

class MultipleAPI extends Component {

    constructor(props) {
        super(props)
        this.state =
        {
            Posts: [
                { 
                    userId: "1", 
                    id: "1", 
                    title: "jj", 
                    body: "kk" 
                }
                ],
            Users: [
                {
                    id: 1,
                    name: "Leanne Graham",
                    username : "Bret",
                    email : "Sincere@april.biz",
                    address : {
                        street : "Kulas Light",
                        suite : "Apt. 556",
                        city : "Gwenborough",
                        zipcode : "92998-3874",
                        geo : {
                            lat : "-37.3159",
                            lng : "81.1496"
                        }
                    }
                }
            ]
        }
    }

    getData = () => {
        console.log("Function call")
        Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts'),
            fetch('https://jsonplaceholder.typicode.com/users')
        ])
            .then( (responses) => {

                return Promise.all(responses.map(function (response) {
                    return response.json();
                }));
            })
            .then( (data) => {

                
                this.setState(
                    {
                        Posts: data[0].slice(0, 3),
                        Users: data[1].slice(0, 3),

                    }
                )
                console.log(data[0].slice(0, 2));
                console.log(data[1].slice(0, 2));
            })
            .catch( (error) => {

                console.log(error);
            });
    }
    

    componentDidMount() {
        this.getData()
    }
    


    render() {
        console.log("Posts", this.state.Posts)
        return (
            <View>
                <Text>Multiple Api using promise.all()</Text>

                <View style={{ marginBottom : 10, marginTop : 10 }} >
                    <Text style={{ fontSize : 12, fontWeight : 'bold', marginBottom : 5 }} >Posts Titles</Text>
                    <FlatList
                        data={this.state.Posts}
                        renderItem={({item}) => (<Text> Title : {item.title} </Text>)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

                <View style={{ marginBottom : 10 }} >
                    <Text style={{ fontSize : 12, fontWeight : 'bold', marginBottom : 5 }} >User names</Text>
                    <FlatList
                        data={this.state.Users}
                        renderItem={({item}) => (<Text> Name : {item.name} </Text>)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        );
    }
}

export default MultipleAPI;
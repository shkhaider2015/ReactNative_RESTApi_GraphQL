import React from 'react'
import { FlatList, Text, View } from "react-native";
import { Picker } from '@react-native-picker/picker'


export default class GraphQL extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedContinent: [],
            continents: [{ code: "AF", name: "Africa", countries : [ { name : "Ghana" } ] }],
            countries : null
        }
    }

    componentDidMount() {
        const getData = async () => {
            await fetch("https://countries.trevorblades.com/", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    query: `
                    query
                    {
                        continents
                            {
                                code
                                name
                                countries
                                    {
                                        name
                                    }
                            }
  
                    }
                    `
                })
            })
                .then(res => res.json())
                .then(data => this.setState({ continents: data.data.continents }))
                .catch(err => console.log(err))
        }

        getData()
    }





    render() {

        return (
            <View style={{ marginTop : 15, marginBottom : 20, alignItems : 'center' }} >
                <Text style={{ fontWeight : 'bold', fontSize : 16 }}>
                    Welcome to GraphQL
            </Text>

                <Picker
                    selectedValue={this.state.selectedContinent}
                    style={{ width: 190, height: 50 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ selectedContinent: itemValue })}
                >
                    <Picker.Item label="Select Continents" value="select" />
                    {this.state.continents.map(
                        (obj, ind) => {
                            return <Picker.Item key={ind} label={obj.name} value={obj} />
                        }
                    )}

                </Picker>

                <Text style={{ fontSize : 12, fontWeight : 'bold' }} > Countries List</Text>
                <FlatList 
                data={this.state.selectedContinent.countries}
                renderItem={({ item }) => ( <Text > {item.name} </Text> ) }
                keyExtractor={(item, index) => index.toString()}
                />


            </View>
        )
    }

}
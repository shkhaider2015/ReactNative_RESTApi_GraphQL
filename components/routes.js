import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator } from "@react-navigation/stack"
import Home from "./main";
import GraphQL from "./graphQL";
import RestAPI from "./restAPI";
import MultipleAPI from "./multipleAPI";


const Stack = createStackNavigator()

export default class Routes extends React.Component {

    render() {
        return (
            <NavigationContainer>

                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="RestAPI" component={RestAPI} />
                    <Stack.Screen name="GraphQL" component={GraphQL} />
                    <Stack.Screen name="MultiAPIPromise" component={MultipleAPI} />


                </Stack.Navigator>
            
            </NavigationContainer>
        )
    }

}

// export default function Routes() {

//     const Stack = createStackNavigator()

//     return(
//         <NavigationContainer>

//                 <Stack.Navigator>
//                     <Stack.Screen name="Home" component={Home} />
//                     <Stack.Screen name="RestAPI" component={RestAPI} />
//                     <Stack.Screen name="GraphQL" component={GraphQL} />

//                 </Stack.Navigator>
            
//             </NavigationContainer>
//     )
// }
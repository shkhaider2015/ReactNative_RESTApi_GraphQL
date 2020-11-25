import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator } from "@react-navigation/stack"
import Home from "./main";
import GraphQL from "./graphQL";
import RestAPI from "./restAPI";


const Stack = createStackNavigator()

console.log(Stack)
export default class Routes extends React.Component {

    // constructor() {
    //     Stack = createStackNavigator();
    // }

    render() {
        return (
            <NavigationContainer>

                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="RestAPI" component={RestAPI} />
                    <Stack.Screen name="GraphQL" component={GraphQL} />

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
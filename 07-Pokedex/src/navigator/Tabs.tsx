import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1 from './Tab1';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { Tab2Screen } from './Tab2';

const Tab = createBottomTabNavigator();

export type RootStackParams = {
    HomeScreen: undefined,
    PokemonScreen: { simplePokemon: SimplePokemon, color: string }
};

const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: 'white' }}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'purple',
                tabBarLabelStyle: {
                    marginBottom: Platform.OS === 'ios' ? 0 : 10,
                    fontSize: 14,
                },
                tabBarStyle: {
                    height: Platform.OS === 'ios' ? 80 : 70,
                    position: 'absolute',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    borderWidth: 2,
                    borderColor: 'white',
                    elevation: 10,
                },
                tabBarActiveBackgroundColor: 'rgba(191, 22, 247,0.06)'
            }}
        >
            <Tab.Screen
                name="StackNavigator"
                component={Tab1}
                options={{
                    tabBarLabel: 'Poke List',
                    tabBarIcon: ({ color }) => (
                        <Icon color={color} size={30} name="list-outline" />
                    ),
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={Tab2Screen}
                options={{
                    tabBarLabel: 'Poke Finder',
                    tabBarIcon: ({ color }) => (
                        <Icon color={color} size={23} name="search-outline" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
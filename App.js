import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import {Icon} from 'native-base';
import Cart from './src/screens/Cart';
import WishList from './src/screens/Wishlist';
import Profile from './src/screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 25,
                top: 10,
              }}>
              {focused ? (
                <Icon
                  name="home"
                  style={{color:  '#482E55'}}
                />
              ) : (
                <Icon
                  name="home-outline"
                  style={{color:  '#848484'}}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 25,
                top: 10,
              }}>
             {focused ? (
                <Icon
                  name="cart"
                  style={{color:  '#482E55'}}
                />
              ) : (
                <Icon
                  name="cart-outline"
                  style={{color:  '#848484'}}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="WishList"
        component={WishList}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 25,
                top: 10,
              }}>
            {focused ? (
                <Icon
                  name="heart"
                  style={{color:  '#482E55'}}
                />
              ) : (
                <Icon
                  name="heart-outline"
                  style={{color:  '#848484'}}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 25,
                top: 10,
              }}>
             {focused ? (
                <Icon
                  name="person"
                  style={{color:  '#482E55'}}
                />
              ) : (
                <Icon
                  name="person-outline"
                  style={{color:  '#848484'}}
                />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false} initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

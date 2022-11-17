import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login.js';
import SignUp from './screens/SignUp.js';
import Forgot from './screens/Forgot.js';
import Withdraw from './screens/Withdraw.js';
import Deposit from './screens/Deposit.js';
import Transfer from './screens/Transfer.js';
import Home from './screens/Home.js';
import AllAccount from './screens/AllAccount.js';
import Transaction from './screens/Transaction.js';
import OneAccount from './screens/OneAccount.js';
import AddAccount from './screens/AddAccount.js';
export default function App() {
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='Forgot' component={Forgot}/>
        <Stack.Screen name='Withdraw' component={Withdraw}/>
        <Stack.Screen name='Deposit' component={Deposit}/>
        <Stack.Screen name='Transfer' component={Transfer}/>
        <Stack.Screen name='AllAccount' component={AllAccount}/>
        <Stack.Screen name='Transaction' component={Transaction}/>
        <Stack.Screen name='OneAccount' component={OneAccount}/>
        <Stack.Screen name='AddAccount' component={AddAccount}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



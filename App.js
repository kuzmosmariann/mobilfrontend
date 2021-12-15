import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Menu from './Menu';
import Helyek from './Helyek';
function Menulap({ navigation }) {
  return (
    <Menu/>
  );
}

function Helyeklap({ navigation }) {
  return (
   <Helyek/>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Helyek">
        <Drawer.Screen name="Menü" component={Menulap} />
        <Drawer.Screen name="Helyek" component={Helyeklap} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
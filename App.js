import Contacts  from "./src/screens/Contacts";
import { createStackNavigator } from 'react-navigation';


export default createStackNavigator({
  Contacts: {
    screen: Contacts
  },
});

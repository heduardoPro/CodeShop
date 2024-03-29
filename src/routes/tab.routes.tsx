import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,FontAwesome5, AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

import Home from '@/screens/HomeScreen/Home';
import Favorites from '@/screens/FavoritesScreen/Favorites';
import ShoppingCart from '@/screens/ShoppingCartScreen/ShoppingCart';
import Profile from '@/screens/ProfileScreen/Profile';

import { theme } from '@/theme';

type NavigationType = {
    Home: undefined;
    Favorites: undefined;
    Profile: undefined;
    ShoppingCart: undefined;  
};
interface BackButtonProps {
    onPress: () => void;
}
const Tab = createBottomTabNavigator<NavigationType>();

const BackButton = ({ onPress }: BackButtonProps)=> {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{marginLeft: 20}} onPress={onPress}>
            <Ionicons name='arrow-back' size={24} color='white' />
        </TouchableOpacity>
    );
};
export default function BottomTabNavigator() {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: theme.colors.BLACK,
                    height: 100,
                    borderBottomEndRadius: 15,
                    borderBottomStartRadius: 15,
                },
                headerTintColor: theme.colors.WHITE,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarInactiveTintColor: theme.colors.BLACK,
                tabBarActiveTintColor: theme.colors.BLACK,
                tabBarActiveBackgroundColor: theme.colors.GRAY,
                tabBarStyle: {
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
               },
        }}>
        <Tab.Screen 
            name='Home'
            component={Home}
            options={{
                tabBarIcon: ({color, size}) => <Ionicons name='home' color={color} size={size}/>,
            }}
        />
        <Tab.Screen 
            name='Favorites'
            component={Favorites}
            options={({ }) => ({
                headerShown: true,
                title: 'Favoritos',
                headerTitleAlign: 'center',
                tabBarIcon: ({color, size}) => <AntDesign name='heart' color={color} size={size}/>
            })}
        />
        <Tab.Screen 
            name='ShoppingCart'
            component={ShoppingCart}
            options={({ }) => ({
                headerShown: true,
                title: 'Carrinho de compras',
                headerTitleAlign: 'center',
                tabBarBadge: 4,
                tabBarIcon: ({color, size}) => <FontAwesome5 name='shopping-bag' color={color} size={size}/>
            })}
        />
        <Tab.Screen 
            name='Profile'
            component={Profile}
            options={({ }) => ({
                headerShown: true,
                title: 'Minha conta',
                headerTitleAlign: 'center',
                tabBarIcon: ({color, size}) => <Ionicons name='person-sharp' color={color} size={size}/>
            })}
        />
    </Tab.Navigator>
    )
}

# Cześć 4 - Basic Navigation

Trzeba zainstalować react navigation :
```
expo install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens react-navigation-stack @react-native-community/masked-view
```

createAppContainer

const Navigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Item: ItemScreen, // Shorthand configuration
    },
    {
        initialRouteName: 'Home',
    }
);

# TASKS
1. Add view for displaying note details
2.* Add separate view for creating new note/editing existing one
3.* Add possibility to set planned date for note
4.* Make date selecting working properly on both iOS and Android
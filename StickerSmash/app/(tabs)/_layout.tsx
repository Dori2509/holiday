import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
  <Tabs
   screenOptions={{
    tabBarActiveTintColor: "#604da0",
    headerTitleAlign: "center",
    headerStyle: {
        backgroundColor: "#bcb9ec",
        
    },
    headerTitleStyle: {
      fontSize: 24,
      
    },
    headerShadowVisible: false,
    headerTintColor: "#000",
    tabBarStyle: {
        backgroundColor: "#fff",
    }
   }}
  >
  <Tabs.Screen name="index" options={
      {headerTitle: "Home",
        tabBarLabel: "Home",
       tabBarIcon: ({focused, color}) => <Ionicons name={focused ? "home-sharp" : "home-outline"} 
       size={20} 
       color={color}/>,
      }
    }/>
    
    <Tabs.Screen name="countdown" options={
      {headerTitle: "Countdown",
        tabBarLabel: "Countdown",
        tabBarIcon: ({focused, color}) => <Ionicons name={focused ? "time-sharp" : "time-outline"} 
        size={20} 
        color={color}/>,
      }
    }/>
        <Tabs.Screen name="packliste" options={
      {headerTitle: "Packliste",
        tabBarLabel: "Packliste",
        tabBarIcon: ({focused, color}) => <Ionicons name={focused ? "briefcase-sharp" : "briefcase-outline"} 
        size={20} 
        color={color}/>,
      }
    }/>
        <Tabs.Screen name="calendar" options={
      {headerTitle: "Kalender",
        tabBarLabel: "Kalender",
        tabBarIcon: ({focused, color}) => <Ionicons name={focused ? "calendar-sharp" : "calendar-outline"} 
        size={20} 
        color={color}/>,
      }
    }/>
    <Tabs.Screen name="picturequiz" options={
      {headerTitle: "PictureQuiz",
        tabBarLabel: "Bilderrätsel",
        tabBarIcon: ({focused, color}) => <Ionicons name={focused ? "ice-cream-sharp" : "ice-cream-outline"} 
        size={20} 
        color={color}/>,
      }
    }/>
        
    <Tabs.Screen name="not-found" options={
      {headerShown: false,}
    }/>  
  </Tabs>

)
}

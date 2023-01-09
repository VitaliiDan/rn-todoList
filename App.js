import {useState} from "react";
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {StatusBar} from "expo-status-bar";
import {Header} from "./components/shared/Header";
import {Footer} from "./components/shared/Footer";
import {MainPage} from "./components/pages/mainPage/MainPage";

export default function App() {
    const [goalList, setGoalList] = useState([]);
    const addGoalHandler = goal => setGoalList(prev => ([...prev, {text: goal, id: Math.random().toString()}]));
    const delGoalHandler = (id) => setGoalList(prev => prev.filter(singleGoal => singleGoal.id !== id))

    return (
        <>
            <StatusBar style='light'/>
            <View style={styles.container}>
                <Header/>
                <View style={styles.content}>
                    <MainPage goalList={goalList} addGoalHandler={addGoalHandler} delGoalHandler={delGoalHandler}/>
                </View>
                <Footer/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    content: {
        flex: 1,
    },
});

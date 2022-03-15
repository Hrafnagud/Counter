import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { Text, SafeAreaView, StyleSheet, Image, View, Button, TouchableOpacity} from "react-native";

function MyCustomButton(props){
    props.title
    return(
    <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
    );
}

function App(){
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+1);
    };
    const handleDecrement = () => {
        setCount(count-1);
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>{`\n`}</Text>
                <Image source = {require('./assets/counterIcon.png')} style={styles.image}></Image>
                <Text style={styles.text}>Counter: {count}</Text>
                <Text style={styles.contentText}>Click buttons change counter.</Text>
                
                {/* <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Increment</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Decrement</Text>
                    </TouchableOpacity>
                </View> */}

                <View style={styles.buttonContainer}>
                    <MyCustomButton title="Increment +" onPress={handleIncrement}/>
                    <MyCustomButton title="Decrement -" onPress={handleDecrement} style={{backgroundColor: "red", marginStart: 16}}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 16,
    },
    text: {
        fontSize: 30,
        marginTop: 16
    },
    contentText: {
        fontSize: 20,
        color: "blue",
        marginTop: 4,
    },
    image: {
        width: 300,
        height: 300,
        margin:  30,
        borderRadius: 12,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
    },
    button: {
        flex: 1,
        backgroundColor: "blue",
        padding: 12,
        borderRadius: 12,
        marginRight: 15,
    },
    buttonText: {
        fontSize: 20,
        marginStart: 20,
        color: "black",
    },
});

export default App;
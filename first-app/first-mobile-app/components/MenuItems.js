import React from 'react';
import { ScrollView, View, Text, StyleSheet } from "react-native";


const items = ["Hummus", "Moutabal", "Falafel", "Marinated Olives", "Kofta", "Eggplant", "Salad", "Lentil Burger"];

const MenuItems = () => {
    return (
        <View style={menuStyle.container}>
            <Text style={menuStyle.title}>Our Menu</Text>
            <ScrollView style={menuStyle.scroll}>
                <View style={menuStyle.scrollContainer}>
                    {items.map(item => {
                        return (
                            <View style={menuStyle.itemContainer}>
                        <Text style={menuStyle.textStyle}>
                            {item}
                        </Text>
                    </View>
                    )})}
                </View>
            </ScrollView>
        </View>
    )
};

const menuStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: "white", 
        fontSize: 20, 
        marginLeft: 10, 
        marginBottom: 10,
    },
    scroll: {
        backgroundColor: "#4C6960", 
        borderRadius: 20
    },
    scrollContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    itemContainer: {
        marginVertical: 5, 
        backgroundColor: "#63877D", 
        paddingVertical: 7, 
        paddingLeft: 10, 
        borderRadius: 10
    },
    textStyle: {
        fontSize: 20, 
        color: "white"
    }
});

export default MenuItems;
import React from 'react';
import { ScrollView, View, Text } from "react-native";


const items = ["Hummus", "Moutabal", "Falafel", "Marinated Olives", "Kofta", "Eggplant", "Salad", "lentil Burger"];

const MenuItems = () => {
    return (
        <View style={{flex: 0.7}}>
            <Text style={{color: "white", fontSize: 20, marginLeft: 10, marginBottom: 10}}>Our Menu</Text>
            <ScrollView  style={{backgroundColor: "#4C6960", borderRadius: 20}}>
                <View style={{paddingVertical: 10, paddingHorizontal: 20}}>
                    {items.map(item => {
                        return (
                            <View style={{ marginVertical: 5, backgroundColor: "#63877D", paddingVertical: 7, paddingLeft: 10, borderRadius: 10}}>
                        <Text style={{fontSize: 20, color: "white"}}>
                            {item}
                        </Text>
                    </View>
                    )})}
                </View>
            </ScrollView>
        </View>
    )
};

export default MenuItems;
import { FlatList, Text, View, StyleSheet } from "react-native";

const list = [
    { name: 'Hummus', id: '1A' },
    { name: 'Moutabal', id: '2B' },
    { name: 'Falafel', id: '3C' },
    { name: 'Marinated Olives', id: '4D' },
    { name: 'Kofta', id: '5E' },
    { name: 'Eggplant Salad', id: '6F' },
    { name: 'Lentil Burger', id: '7G' },
    { name: 'Smoked Salmon', id: '8H' },
    { name: 'Kofta Burger', id: '9I' },
    { name: 'Turkish Kebab', id: '10J' },
    { name: 'Fries', id: '11K' },	
    { name: 'Buttered Rice', id: '12L' },
    { name: 'Bread Sticks', id: '13M' },
    { name: 'Pita Pocket', id: '14N' },
    { name: 'Lentil Soup', id: '15O' },
    { name: 'Greek Salad', id: '16Q' },
    { name: 'Rice Pilaf', id: '17R' },
    { name: 'Baklava', id: '18S' },
    { name: 'Tartufo', id: '19T' },
    { name: 'Tartufo', id: '20U' },
    { name: 'Tiramisu', id: '21V' },
    { name: 'Panna Cotta', id: '22W' },
];

const Item = ({name}) => {
    return (
    <View style={style.textContainer}>
        <Text style={style.text}>{name}</Text>
    </View>
    )
}

const MenuItems = () => {
    const renderItem = ({item}) => <Item name={item.name} />

    return (
        <View style={style.listContainer}>
            <FlatList style={style.list} data={list} keyExtractor={item => item.id} renderItem={renderItem} />
        </View>
    );
};

const style = StyleSheet.create({
    listContainer: {
        width: "90%",
        backgroundColor: "#F4CE14",
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    textContainer: {
        backgroundColor: "#5f8a7b",
        marginVertical: 5,
        padding: 5,
        borderRadius: 5
    },
    text: {
        color: "white",
        fontSize: 19
    }
});

export default MenuItems;
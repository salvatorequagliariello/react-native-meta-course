import { FlatList, Text, View, StyleSheet, SectionList } from "react-native";

const list = [
    {
        title: 'Appetizers',
        data: [
          { name: 'Hummus', price: '$5.00' },
          { name: 'Moutabal', price: '$5.00' },
          { name: 'Falafel', price: '$7.50' },
          { name: 'Marinated Olives', price: '$5.00' },
          { name: 'Kofta', price: '$5.00' },
          { name: 'Eggplant Salad', price: '$8.50' },
        ],
      },
      {
        title: 'Main Dishes',
        data: [
          { name: 'Lentil Burger', price: '$10.00' },
          { name: 'Smoked Salmon', price: '$14.00' },
          { name: 'Kofta Burger', price: '$11.00' },
          { name: 'Turkish Kebab', price: '$15.50' },
        ],
      },
      {
        title: 'Sides',
        data: [
          { name: 'Fries', price: '$3.00', id: '11K' },
          { name: 'Buttered Rice', price: '$3.00' },
          { name: 'Bread Sticks', price: '$3.00' },
          { name: 'Pita Pocket', price: '$3.00' },
          { name: 'Lentil Soup', price: '$3.75' },
          { name: 'Greek Salad', price: '$6.00' },
          { name: 'Rice Pilaf', price: '$4.00' },
        ],
      },
      {
        title: 'Desserts',
        data: [
          { name: 'Baklava', price: '$3.00' },
          { name: 'Tartufo', price: '$3.00' },
          { name: 'Tiramisu', price: '$5.00' },
          { name: 'Panna Cotta', price: '$5.00' },
        ],
      },
    ];

const Item = ({name, price, index, data}) => {
    return (
    <View style={style.textContainer}>
        <Text style={style.text}>{name}</Text>
        <Text style={style.text}>{price}</Text>
    </View>
    )
}

const MenuItems = () => {
    const renderItem = ({item, index, section}) => <Item name={item.name} price={item.price} index={index}/>;
    const renderSectionHeader = ({section: {title}}) => <Text style={style.sectionTitle}>{title}</Text>;


    return (
        <View style={style.listContainer}>
            <SectionList style={style.list} sections={list} renderItem={renderItem} renderSectionHeader={renderSectionHeader} keyExtractor={(item, index) => item.name + index}/>
        </View>
    );
};

const style = StyleSheet.create({
    listContainer: {
        width: "95%",
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    textContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomColor: "#4a5c56",
        borderBottomWidth: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#637d74"
    },
    text: {
        color: "white",
        fontSize: 19,
    },
    sectionTitle: {
        textAlign: "left",
        fontSize: 24,
        marginTop: 30,
        color: "#F4CE14",
    }
});

export default MenuItems;
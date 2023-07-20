import { FlatList, Text, View, StyleSheet, SectionList } from "react-native";

const list = [
    {
        title: 'Appetizers',
        data: [
          'Hummus',
          'Moutabal',
          'Falafel',
          'Marinated Olives',
          'Kofta',
          'Eggplant Salad',
        ],
      },
      {
        title: 'Main Dishes',
        data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
      },
      {
        title: 'Sides',
        data: [
          'Fries',
          'Buttered Rice',
          'Bread Sticks',
          'Pita Pocket',
          'Lentil Soup',
          'Greek Salad',
          'Rice Pilaf',
        ],
      },
      {
        title: 'Desserts',
        data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
      },
];

const Item = ({name, price}) => {
    return (
    <View style={style.textContainer}>
        <Text style={style.text}>{name}</Text>
        <Text style={style.text}>{price}</Text>
    </View>
    )
}

const MenuItems = () => {
    const renderItem = ({item}) => <Item name={item} />;
    const renderSectionHeader = ({section: {title}}) => <Text>{title}</Text>;


    return (
        <View style={style.listContainer}>
            <SectionList style={style.list} sections={list} renderItem={renderItem} renderSectionHeader={renderSectionHeader} keyExtractor={(item, index) => item + index}/>
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
        backgroundColor: "#5f8a7b",
        marginVertical: 5,
        padding: 6,
        paddingHorizontal: 20,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text: {
        color: "white",
        fontSize: 19
    }
});

export default MenuItems;
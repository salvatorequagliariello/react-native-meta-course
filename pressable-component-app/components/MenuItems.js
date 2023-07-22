import { View, Text, SectionList, StyleSheet } from "react-native";

const menuItems = [
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
    }
];

const MenuList = () => {
    const renderItem = ({item}) => {
        return (
                <Text style={styles.item}>{item}</Text>
        );
    };

    const renderSection = ({section: {title}}) => {
        return (
                <Text style={styles.header}>{title}</Text>
        )
    };

    return (
        <SectionList
        sections={menuItems}
        renderItem={renderItem}
        renderSectionHeader={renderSection}
        keyExtractor={(item, index) => item + index}
        style={styles.list}>
        </SectionList>
    )
}

const styles = StyleSheet.create({
    list: {
        width: "90%",
    },  
    header: {
        fontSize: 19,
        textAlign: "left",
        color: "#F4CE14",
        marginBottom: 10
    },
    item: {
        color: "white",
        fontSize: 24,
        backgroundColor: "#333333",
        paddingHorizontal: 15,
        paddingVertical: 5,
    }
})

export default MenuList;
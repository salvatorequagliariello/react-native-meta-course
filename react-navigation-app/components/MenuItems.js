import { View, Text, SectionList, StyleSheet, Pressable } from "react-native";

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
        <View style={styles.container}>
            <Pressable></Pressable>
            <SectionList
            sections={menuItems}
            renderItem={renderItem}
            renderSectionHeader={renderSection}
            keyExtractor={(item, index) => item + index}
            style={styles.list}>
            </SectionList>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
      width: "100%",
    },  
    header: {
      fontSize: 19,
      textAlign: "left",
      color: "#F4CE14",
      marginTop: 20,
    },
    item: {
      color: "white",
      fontSize: 24,
      backgroundColor: "#333333",
      paddingHorizontal: 15,
      paddingVertical: 5,
    },
    container: {
      backgroundColor: "#333333",
        width: "100%",
        paddingHorizontal: 20,
        flex: 1
    }
})

export default MenuList;
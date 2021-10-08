import React from 'react'
import { FlatList, View } from 'react-native';

import { styles } from '../theme/appTheme';
import { FlaListMenuItem } from '../components/FlaListMenuItem';
import menuItems from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';

const HomeScreen = () => {
    const itemSeparatorComponent = () => {
        return (
            <View style={{ borderColor: '#5856D6', borderBottomWidth: 2, opacity: 0.4, marginVertical: 8 }} />
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white', ...styles.globalMArgin }}>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlaListMenuItem menuItem={item} />}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() => <HeaderTitle title={'Menu options'} />}
                ItemSeparatorComponent={itemSeparatorComponent}
            />
        </View>
    );
};
export default HomeScreen;

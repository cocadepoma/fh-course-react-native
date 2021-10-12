import React from 'react'
import { FlatList, View } from 'react-native';

import { styles } from '../theme/appTheme';
import { FlaListMenuItem } from '../components/FlaListMenuItem';
import menuItems from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', ...styles.globalMArgin }}>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlaListMenuItem menuItem={item} />}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() => <HeaderTitle title={'Menu options'} />}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
    );
};
export default HomeScreen;

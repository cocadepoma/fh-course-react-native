import React, { useContext } from 'react'
import { SectionList, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ItemSeparator } from '../components/ItemSeparator';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

interface Houses {
    house: string;
    data: string[];
};

const houses: Houses[] = [
    {
        house: "DC Comics",
        data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin",]
    },
    {
        house: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman", "Antman", "Thor", "Spiderman", "Antman", "Thor", "Spiderman", "Antman", "Thor", "Spiderman", "Antman", "Thor", "Spiderman", "Antman", "Thor", "Spiderman", "Antman", "Thor", "Spiderman", "Antman", "Thor", "Spiderman",]
    },
    {
        house: "Anime",
        data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama",]
    }
];

export const CustomSectionListScreen = () => {
    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={{ flex: 1 }}>
            <SectionList
                sections={houses}
                keyExtractor={(item, index) => item + index}
                ListHeaderComponent={() => <HeaderTitle title="Custom Section List" />}
                ListFooterComponent={() => (
                    <View style={{ paddingHorizontal: 20 }}>
                        <HeaderTitle title={`Total houses ${houses.length}`} marginBottom={40} />
                    </View>
                )}
                renderItem={({ item }) => (
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={{ color: colors.text }}>{item}</Text>
                    </View>
                )}
                stickySectionHeadersEnabled
                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: colors.primary, paddingHorizontal: 20 }}>
                        <HeaderTitle marginBottom={5} marginTop={5} title={section.house} />
                    </View>
                )}
                renderSectionFooter={({ section }) => (
                    <View style={{ paddingHorizontal: 20 }}>
                        <HeaderTitle title={`Total: ${section.data.length}`} fontSize={16} />
                    </View>
                )}
                SectionSeparatorComponent={() => <ItemSeparator />}
                ItemSeparatorComponent={() => <ItemSeparator />}
                showsVerticalScrollIndicator={false}
            />
            {/* <HeaderTitle title="Custom Section List" /> */}
        </View>
    );
};

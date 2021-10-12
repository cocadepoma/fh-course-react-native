import React, { useContext, useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { FadeInImage } from '../components/FadeInImage';
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext';


export const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
    const { theme: { colors } } = useContext(ThemeContext);

    const renderItem = (item: number) => {
        const uri = `https://picsum.photos/id/${item}/1024/1024`;
        return (
            <FadeInImage
                style={{ width: '100%', height: 300 }}
                uri={uri}
            />
        );

        return (
            <Image
                onLoad={() => { }}
                source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
                style={{ width: '100%', height: 400 }}
            />
        );
    };

    const loadMore = () => {
        const newArray: number[] = [];
        for (let index = 0; index < 5; index++) {
            newArray[index] = numbers.length + index;
        }
        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 1500);
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={numbers}
                // keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => renderItem(item)}
                ListHeaderComponent={() => (
                    <View style={{ marginHorizontal: 20, backgroundColor: colors.background }}>
                        <HeaderTitle title="Infinite Scroll" />
                    </View>
                )}
                onEndReached={() => { loadMore() }}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() => (
                    <View style={{
                        height: 100,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <ActivityIndicator size={30} color={colors.primary} />
                    </View>
                )}
            />
        </View>
    );
};
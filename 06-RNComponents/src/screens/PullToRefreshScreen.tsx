import React, { useState } from 'react'
import { ScrollView, View, RefreshControl } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [data, setData] = useState<string>('');

    const { top } = useSafeAreaInsets();

    const onRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            console.log('end refreshing')
            setIsRefreshing(false);
            setData('Hola Mundo!');
        }, 1500)
    };

    return (
        <ScrollView
            style={{ marginBottom: isRefreshing ? top : 0 }}
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor="#5856D6"
                    colors={['white', 'orange']}
                // ios
                // style={{ backgroundColor: 'red' }}
                // tintColor="white"
                // title="refreshinf"
                // titleColor="white"
                />
            }
        >
            <View style={styles.globalMArgin}>
                <HeaderTitle title="Pull to refresh" />

                {
                    data ? <HeaderTitle title={data} /> : null
                }

            </View>
        </ScrollView>
    );
};

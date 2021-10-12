import React, { useContext, useState } from 'react'
import { ImageSourcePropType, SafeAreaView, Text, View, Dimensions, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { EnterButton } from '../components/EnterButton';
import { useNavigation } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const { width: sceenWidth } = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> { };
interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

export const SlidesScreen = ({ navigation }: Props) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isActiveEnterButton, setIsActiveEnterButton] = useState(false);
    // const navigator = useNavigation();
    const { theme: { colors } } = useContext(ThemeContext);

    const renderItem = (item: Slide) => {
        return (
            <View style={{
                flex: 1,
                borderRadius: 5,
                padding: 40,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    source={item.img}
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center',
                    }}
                />
                <Text style={{ ...styles.title, color: colors.primary }}>{item.title}</Text>
                <Text style={{ ...styles.subTitle, color: colors.text }}>{item.desc}</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            paddingTop: 50,
        }}>
            <Carousel
                // ref={(c) => { this._carousel = c; }}
                data={items}
                renderItem={({ item }) => renderItem(item)}
                sliderWidth={sceenWidth}
                itemWidth={sceenWidth}
                layout="default"
                onSnapToItem={(slideNumber) => {
                    setActiveSlide(slideNumber);
                    if (slideNumber === items.length - 1) {
                        setIsActiveEnterButton(true);
                    }
                }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'center' }}>
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeSlide}
                    dotStyle={{ width: 10, height: 10, borderRadius: 10, backgroundColor: colors.primary }}
                />

                {isActiveEnterButton &&
                    <EnterButton onPress={() => navigation.navigate('HomeScreen')} />
                }
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856D6',
    },
    subTitle: {
        color: 'black',
        fontSize: 16,
    },
});

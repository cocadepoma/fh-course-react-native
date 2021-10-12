import React, { useContext, useState } from 'react'
import { ActivityIndicator, Animated, Image, ImageStyle, StyleProp, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
};

export const FadeInImage = ({ uri, style }: Props) => {
    const { opacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);
    const { theme: { colors } } = useContext(ThemeContext);

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn(500);
    };
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {
                isLoading && <ActivityIndicator
                    color={colors.primary}
                    size={30}
                    style={{ position: 'absolute' }}
                />
            }
            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    ...style as any,
                    opacity
                }}
            />
        </View>
    );
};

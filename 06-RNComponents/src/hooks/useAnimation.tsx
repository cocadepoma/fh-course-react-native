import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;

    const fadeIn = (duration: number) => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration,
                useNativeDriver: true,
            }

        ).start(() => console.log('animation ended'));
    };

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }

        ).start();

        // Animated.timing(
        //     height,
        //     {
        //         toValue: -200,
        //         duration: 300,
        //         useNativeDriver: true,
        //     }

        // ).start(() => console.log('animation ended'));
    };

    const startMovingPosition = (initialPosition: number, duration: number = 300) => {
        position.setValue(initialPosition);
        Animated.timing(
            position,
            {
                toValue: 0,
                duration: 700,
                useNativeDriver: true,
                // easing: Easing.bounce
            }

        ).start(() => console.log('animation ended'));
    };

    return {
        fadeIn,
        fadeOut,
        opacity,
        position,
        startMovingPosition
    }
};

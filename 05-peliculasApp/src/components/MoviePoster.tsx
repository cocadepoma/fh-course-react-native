import React from 'react'
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/core';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
};

export const MoviePoster = ({ movie, width = 280, height = 380 }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const navigaton = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigaton.navigate('DetailScreen', movie)}
            activeOpacity={0.75}
            style={{ width, height, marginHorizontal: 1, }}
        >
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri }} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 10,
    },
    imageContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginRight: 10,
        flex: 1,
        shadowColor: 'black',
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 10,
    }
});

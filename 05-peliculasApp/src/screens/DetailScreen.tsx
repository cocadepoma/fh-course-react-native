import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {
    movie: Movie;
};

const screenHeight = Dimensions.get('screen').height;

const DetailScreen = ({ route, navigation }: Props) => {
    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, cast, movieFull } = useMovieDetails(movie.id);

    return (
        <ScrollView>
            <View style={styles.topContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri }}
                        style={styles.posterImage}
                    />
                </View>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>
            {
                isLoading
                    ? <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
                    : <MovieDetails movieFull={movieFull!} cast={cast} />
            }
            <View style={styles.backButton}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Icon
                        name="arrow-back-outline"
                        size={50}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default DetailScreen;

const styles = StyleSheet.create({
    topContainer: {

    },
    posterImage: {
        flex: 1,
    },
    imageContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: screenHeight * 0.7,
        elevation: 10,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        overflow: 'hidden',
    },
    contentContainer: {
        marginHorizontal: 20,
        marginTop: 30,
    },
    subTitle: {
        color: 'grey',
        fontSize: 16,
        opacity: 0.6,
    },
    title: {
        color: 'grey',
        fontSize: 20,
        fontWeight: 'bold',
    },
    backButton: {
        borderRadius: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        top: 20,
        left: 5,
        zIndex: 999,
        elevation: 10,
    }
})

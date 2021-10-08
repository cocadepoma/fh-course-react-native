import React from 'react'
import { Movie } from '../interfaces/movieInterface';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MoviePoster } from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
};

export const HorizontalSlider = ({ title, movies }: Props) => (
    <View style={{ height: title ? 200 : 160 }}>
        {title && (<Text style={styles.title}>{title}</Text>)}
        <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={movies}
            renderItem={({ item }) => (
                <MoviePoster
                    height={140}
                    width={110}
                    movie={item}
                />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ paddingLeft: 5 }}
        />
    </View>
);

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '300',
        color: 'black',
        marginLeft: 17,
        marginBottom: 6,
    },
})

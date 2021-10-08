import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
};

const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Details */}
            <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star-outline" color="grey" size={18} />
                    <Text style={styles.contentTitle}> {movieFull.vote_average} </Text>

                    <Text style={styles.contentTitle}>
                        - {movieFull.genres.map(genre => genre.name).join(', ')}
                    </Text>
                </View>

                {/* Date */}
                <Text style={styles.boldTitle}>
                    Release Date
                </Text>
                <Text style={styles.contentTitle}>
                    {movieFull.release_date}
                </Text>

                {/* History */}
                <Text style={styles.boldTitle}>
                    History
                </Text>
                <Text style={styles.contentTitle}>
                    {movieFull.overview}
                </Text>

                {/* Budget */}
                <Text style={styles.boldTitle}>
                    Budget
                </Text>
                <Text style={styles.contentTitle}>
                    {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
                </Text>
            </View>

            {/* Casting */}
            <View style={{ marginTop: 10, marginBottom: 20 }}>
                <Text style={{ ...styles.boldTitle, marginHorizontal: 20 }}>
                    Casting
                </Text>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={cast}
                    renderItem={({ item }) => <CastItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.actorsList}
                />

            </View>
        </>
    );
};

export default MovieDetails;

const styles = StyleSheet.create({
    boldTitle: {
        color: 'grey',
        fontSize: 23,
        marginTop: 10,
        fontWeight: 'bold'
    },
    contentTitle: {
        color: 'grey',
        fontSize: 16
    },
    actorsList: {
        marginTop: 10,
        height: 70,
    }
});

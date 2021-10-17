import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull;
};

const PokemonDetails = ({ pokemon }: Props) => {
    const getStatColor = (stat: number) => {
        if (stat >= 90) return 'purple';
        else if (stat < 90 && stat >= 65) return 'blue';
        else if (stat < 65 && stat >= 50) return 'green';
        else if (stat < 50 && stat >= 40) return 'orange';
        else return 'red';
    };
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ ...StyleSheet.absoluteFillObject }}
        >
            {/* Types */}
            <View style={{ ...styles.container, marginTop: 300 }}>
                <Text style={styles.title}>Types</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map(({ type }) => (
                            <Text
                                style={styles.regularText}
                                key={type.name}
                            >
                                {type.name}
                            </Text>
                        ))
                    }
                </View>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.separator} />
            </View>

            {/* Weight */}
            <View style={styles.container}>
                <Text style={styles.title}>Weight</Text>
                <Text style={styles.regularText}>{pokemon.weight} Kg.</Text>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.separator} />
            </View>

            {/* Sprites */}
            <>
                <View
                    style={{
                        ...styles.container,
                        marginBottom: -15,
                    }}>
                    <Text style={styles.title}>Sprites</Text>
                </View>

                <ScrollView
                    horizontal={true}
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'center',
                    }}
                >
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.back_default}
                        style={styles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.front_shiny}
                        style={styles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.back_shiny}
                        style={styles.basicSprite}
                    />
                </ScrollView>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.separator} />
                </View>
            </>

            {/* Skills */}
            <View style={{ ...styles.container }}>
                <Text style={styles.title}>Skills</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text
                                style={styles.regularText}
                                key={move.name}
                            >
                                {move.name}
                            </Text>
                        ))
                    }
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.separator} />
            </View>

            {/* Stats */}
            <View style={{ ...styles.container }}>
                <Text style={styles.title}>Stats</Text>
                <View style={{}}>
                    {
                        pokemon.stats.map((stat) => (
                            <View
                                key={stat.stat.name}
                                style={{ justifyContent: 'space-between', flexDirection: 'row', }}
                            >
                                <Text
                                    style={styles.regularText}
                                >
                                    {stat.stat.name}
                                </Text>
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        fontWeight: 'bold',
                                        color: getStatColor(stat.base_stat),
                                    }}
                                >
                                    {stat.base_stat}
                                </Text>
                            </View>
                        ))
                    }
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.separator} />
            </View>

            <View style={{ marginBottom: 65, alignItems: 'center' }}>
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}
                />
            </View>
        </ScrollView>
    )
};

export default PokemonDetails;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        paddingBottom: 5,
    },
    title: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 5,
    },
    regularText: {
        fontSize: 19,
        color: 'black',
        marginLeft: 15,
    },
    basicSprite: {
        width: 100,
        height: 100,
    },
    separator: {
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        height: 1,
    }
});

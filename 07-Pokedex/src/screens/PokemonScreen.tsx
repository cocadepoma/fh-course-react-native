import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import { RootStackParams } from '../navigator/Tab1';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { };

const PokemonScreen = ({ navigation, route }: Props) => {
    const { simplePokemon, color } = route.params;
    const { id, name, picture } = simplePokemon;
    const { top } = useSafeAreaInsets();

    const { isLoading, pokemon } = usePokemon(id);
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                ...styles.headerContainer,
                backgroundColor: color,
                opacity: 0.95,
            }}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={{
                        ...styles.backButton,
                        top: top + 12,
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        name="arrow-back-outline"
                        color="white"
                        size={38}
                    />
                </TouchableOpacity>

                <Text
                    style={{
                        ...styles.pokemonName,
                        top: top + 50
                    }}>
                    {name + '\n'}#{id}
                </Text>

                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokeball}
                />
                <FadeInImage
                    uri={picture}
                    style={styles.pokemonImage}
                />
            </View>

            {isLoading
                ? (
                    <View style={styles.activityIndicator}>
                        <ActivityIndicator
                            color={color}
                            size={50}
                        />
                    </View>
                )
                : <PokemonDetails pokemon={pokemon} />
            }
        </View>
    );
};

export default PokemonScreen;

const styles = StyleSheet.create({
    headerContainer: {
        height: 300,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
        elevation: 20,
        borderBottomWidth: 24,
        borderBottomColor: 'rgba(0,0,0,0.02)'
    },
    backButton: {
        position: 'absolute',
        left: 20,
    },
    pokemonName: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        left: 20,
    },
    pokeball: {
        width: 180,
        height: 180,
        bottom: -40,
        right: -30,
        opacity: 0.5,
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15,
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

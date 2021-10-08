import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Cast } from '../interfaces/creditsInterface'

interface Props {
    actor: Cast;
};

export const CastItem = ({ actor }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <View style={styles.container}>
            {
                actor.profile_path && (
                    <Image
                        source={{ uri }}
                        style={styles.image}
                    />
                )
            }
            <View style={styles.actorInfo}>
                <Text style={styles.actorName}>
                    {actor.name}
                </Text>
                <Text style={styles.actorCharacterName}>
                    {actor.character}
                </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
        marginLeft: 20,
        height: 50,
        borderRadius: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    actorInfo: {
        marginLeft: 5,
        paddingHorizontal: 5,
    },
    actorName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'grey'
    },
    actorCharacterName: {
        fontSize: 16,
        opacity: 0.7,
        color: 'grey'
    }
})

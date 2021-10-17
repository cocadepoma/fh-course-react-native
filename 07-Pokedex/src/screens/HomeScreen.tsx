import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';

import appStyles from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';

import { PokemonCard } from '../components/PokemonCard';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, simplePokemonList, loadPokemons } = usePokemonPaginated();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={appStyles.pokeBallBG}
      />
      <View style={appStyles.pokelist}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={(pokemon) => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={(
            <Text style={{
              ...appStyles.title,
              ...appStyles.globalMArgin,
              color: 'black',
              top: top + 20,
              marginBottom: top + 20,
              paddingBottom: 10,
            }}>
              Pokedex
            </Text>
          )}
          renderItem={({ item }) =>
            <PokemonCard pokemon={item} />
          }

          // infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}

          ListFooterComponent={(
            <ActivityIndicator style={{ height: 100 }} size={20} color="grey" />
          )}
        />
      </View>
      {
        isLoading && <Text>Loading</Text>
      }
    </>
  );
};
export default HomeScreen;

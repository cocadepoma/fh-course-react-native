import React, { useEffect, useState } from 'react'
import { View, Platform, ActivityIndicator, StyleSheet, Text, FlatList, Dimensions, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import appStyles from '../theme/appTheme';
import Loading from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isFetching, simplePokemonList } = usePokemonSearch();

  const [term, setTerm] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    if (term.length === 0) {
      return setFilteredPokemon([]);
    };
    if (isNaN(Number(term))) {
      setFilteredPokemon(
        simplePokemonList.filter((pokemon) =>
          pokemon.name.toLowerCase()
            .includes(term.toLowerCase())
        ),
      );
    } else {
      const pokemonById = simplePokemonList.find((pokemon) => pokemon.id === term);
      setFilteredPokemon(pokemonById ? [pokemonById] : []);
    }
  }, [term]);

  return (
    <>
      {isFetching
        ? (
          <Loading />
        )
        : (
          <View style={{ flex: 1 }}>
            <SearchInput
              onDebounce={(value) => setTerm(value)}
              style={{
                position: 'absolute',
                zIndex: 999,
                width: screenWidth - 40,
                top: Platform.OS === 'ios' ? top : top + 30
              }}
            />
            <View style={{ marginHorizontal: 10 }}>
              {
                term.length > 0 && filteredPokemon.length === 0
                  ? (
                    <View style={{
                      alignItems: 'center',
                      marginTop: 150,
                    }}>
                      <Image
                        source={require('../assets/poke-warning.png')}
                        style={{
                          opacity: 0.7,
                          width: 240,
                          height: 210,
                        }}
                      />
                      <Text style={{ color: 'grey', fontSize: 20, marginTop: 3 }}>Pokemon not found!</Text>
                    </View>

                  )
                  : (
                    <FlatList
                      data={filteredPokemon}
                      keyExtractor={(pokemon) => pokemon.id}
                      showsVerticalScrollIndicator={false}
                      numColumns={2}
                      ListHeaderComponent={(
                        <Text style={{
                          ...appStyles.title,
                          ...appStyles.globalMArgin,
                          color: 'black',
                          paddingBottom: 10,
                          marginTop: Platform.OS === 'ios' ? top + 60 : top + 80,
                        }}>
                          {term}
                        </Text>
                      )}
                      renderItem={({ item }) =>
                        <PokemonCard pokemon={item} />
                      }
                    />
                  )
              }
            </View>
          </View>
        )
      }
    </>
  );
};

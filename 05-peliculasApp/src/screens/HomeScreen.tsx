import React, { useContext, useEffect } from 'react'
import { View, ActivityIndicator, useWindowDimensions, Text, ScrollView, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ImageColors from 'react-native-image-colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../../helpers/getColors';
import { GradientContext } from '../context/GradientContext';

const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const { setMainColors } = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary = 'green', secondary = 'lightgreen'] = await getImageColors(uri);
    setMainColors({ primary, secondary });
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  return (
    <GradientBackground>
      {
        isLoading
          ? (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <ActivityIndicator color="red" size={100} />
            </View>
          )
          : (
            <ScrollView>
              <View style={{ paddingTop: top + 20, ...styles.carrousel }}>
                {/* <Text style={styles.carrouselTitle}>Now Playing</Text> */}
                <Carousel
                  data={nowPlaying}
                  renderItem={({ item }) => <MoviePoster movie={item} />}
                  sliderWidth={width}
                  itemWidth={272}
                  inactiveSlideOpacity={0.8}
                  inactiveSlideScale={0.85}
                  onSnapToItem={(index) => getPosterColors(index)}
                />
              </View>

              <HorizontalSlider title="Popular Films" movies={popular} />
              <HorizontalSlider title="Top Rated Films" movies={topRated} />
              <HorizontalSlider title="Upcoming Films" movies={upcoming} />

            </ScrollView>
          )
      }
    </GradientBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  carrousel: {
    marginTop: 10,
    height: 450,
  },
  carrouselTitle: {
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '800',
  }
})
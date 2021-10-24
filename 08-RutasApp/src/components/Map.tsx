import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import LoadingScreen from '../screens/LoadingScreen';
import { Fab } from './Fab';

interface Props {
    markers?: Marker[];
}

export const Map = ({ markers }: Props) => {
    const [showPolyline, setShowPolyline] = useState(true);
    const {
        hasLocation,
        initialPosition,
        getCurrentLocation,
        followUserLocation,
        userLocation,
        stopFollowUserLocation,
        routeLines,
    } = useLocation();

    const mapViewRef = useRef<MapView>();
    const followingRef = useRef<boolean>(true);

    useEffect(() => {
        followUserLocation();
        return () => {
            stopFollowUserLocation();
        };
    }, []);

    useEffect(() => {
        if (!followingRef.current) return;

        const { latitude, longitude } = userLocation;
        mapViewRef.current?.animateCamera({
            center: { latitude, longitude }
        });
    }, [userLocation]);

    const centerPosition = async () => {
        followingRef.current = true;
        const { latitude, longitude } = await getCurrentLocation();
        mapViewRef.current?.animateCamera({
            center: { latitude, longitude }
        });
    };

    if (!hasLocation) {
        return <LoadingScreen />;
    };

    return (
        <>
            <MapView
                ref={(el) => mapViewRef.current = el!}
                style={{ flex: 1 }}
                showsUserLocation
                initialRegion={{
                    latitude: initialPosition!.latitude,
                    longitude: initialPosition!.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onTouchStart={() => followingRef.current = false}
            >
                {
                    showPolyline && (
                        <Polyline
                            coordinates={routeLines}
                            strokeColor="black"
                            strokeWidth={3}
                        />
                    )
                }

                {/* {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                    />
                ))} */}
                {/* <Marker
                    image={require('../assets/custom-marker.png')}
                    coordinate={{
                        latitude: 39.9863563,
                        longitude: -0.0513246,
                    }}
                    title={"Title"}
                    description={"Description"}
                /> */}
            </MapView>
            <Fab
                iconName="compass-outline"
                onPress={centerPosition}
                style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                }}
            />
            <Fab
                iconName="brush-outline"
                onPress={() => setShowPolyline(!showPolyline)}
                style={{
                    position: 'absolute',
                    bottom: 80,
                    right: 20,
                }}
            />
        </>
    )
}

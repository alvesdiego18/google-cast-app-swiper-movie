import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, StatusBar, SafeAreaView } from 'react-native'

import Icon from 'react-native-feather1s'
import AsyncStorage from '@react-native-community/async-storage';
import * as Animatable from 'react-native-animatable';
import GoogleCast, { CastButton } from 'react-native-google-cast'
import moment from 'moment'

import ListaMovies from './src/ListaMovies.js'
import Deck from './src/Deck'

console.disableYellowBox = true

export default function App() {

    const [castDevice, setCastDevice] = useState(null)
    const [castStatus, setCastStatus] = useState(null)
    const [movieRun, setMovieRun] = useState(null)

    useEffect(() => {                

        GoogleCast.EventEmitter.addListener(GoogleCast.SESSION_STARTED, () => {
            GoogleCast.getCastDevice().then(({ id, model, name, version }) => { setCastDevice(name) })
            GoogleCast.getCastState().then((state) => { setCastStatus(state) })
        })

        GoogleCast.EventEmitter.addListener(GoogleCast.SESSION_STARTING, () => {
            GoogleCast.getCastDevice().then(({ id, model, name, version }) => { setCastDevice(name) })
            GoogleCast.getCastState().then((state) => { setCastStatus(state) })
        })

        GoogleCast.EventEmitter.addListener(GoogleCast.SESSION_ENDING, () => {
            setCastStatus(null)
            setMovieRun(null)
            setCastDevice(null)
        })

        GoogleCast.EventEmitter.addListener(GoogleCast.SESSION_ENDED, error => {
            setCastStatus(null)
            setMovieRun(null)
            setCastDevice(null)
        })
    }, [])

    useEffect(() => {

        GoogleCast.getCastDevice().then((device) => { setCastDevice(device?.name) })
        GoogleCast.getCastState().then((state) => { setCastStatus(state) })

    }, []);

    async function onCast({ item: { id, url, image, name, subtitle } }) {

        setMovieRun({
            id, url, image, name, subtitle
        })

        GoogleCast.stop()

        GoogleCast.castMedia({
            mediaUrl: url,
            imageUrl: image,
            title: name,
            subtitle: subtitle,
            studio: 'Alguém qualquer',
        })
    }

    function onShowLaunch() {
        GoogleCast.launchExpandedControls()
    }

    function MoviePlaying({ movie }) {

        return (
            <TouchableOpacity onPress={onShowLaunch} activeOpacity={0.9} style={{ backgroundColor: '#000', height: 55, borderWidth: 0, flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ height: 100, width: 55, marginLeft: 10, marginBottom: 60, flexDirection: 'row' }}>
                        <Image source={{ uri: movie.image }} style={{ height: 100, width: 65, resizeMode: 'cover' }} />
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: '#FFF', marginLeft: 26, fontSize: 16 }}>{movie.name}</Text>
                        <Text style={{ color: '#FFF', marginLeft: 26, fontSize: 11 }}>{movie?.subtitle.substring(0, 35)}...</Text>
                    </View>
                </View>

                <View style={{ width: 55, height: 55, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name='arrow-up' style={{ padding: 10, color: '#FFF', fontSize: 24 }} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
            <StatusBar barStyle='light-content' backgroundColor='#121212' />

            <Deck
                data={ListaMovies}
                cast={onCast}
                showPlay={castStatus === 'Connected'}
                marginBottom={movieRun ? 55 : 0}
            />

            <Animatable.View useNativeDriver animation='fadeInDown' style={{ position: 'absolute', backgroundColor: '#121212', height: 50, width: '100%', alignItems: 'center', flexDirection: "row", justifyContent: 'space-between', padding: 16 }}>
                <Text style={{ color: '#FFF' }}>{castDevice ? castDevice : 'Nenhum dispositivo conectado'}</Text>
                {castStatus === 'NoDevicesAvailable' ? <Icon name='bell-off' size={24} color='#FFF' /> : <CastButton style={{ width: 24, height: 24, tintColor: 'white' }} />}
            </Animatable.View>

            {
                movieRun &&
                <Animatable.View useNativeDriver animation={movieRun ? 'slideInUp' : 'slideOutDown'}>
                    <MoviePlaying movie={movieRun} />
                </Animatable.View>
            }
        </SafeAreaView>
    )
}

import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, StatusBar, SafeAreaView, StyleSheet } from 'react-native'

import Icon from 'react-native-feather1s'
import * as Animatable from 'react-native-animatable';
import GoogleCast, { CastButton } from 'react-native-google-cast'

import ListaMovies from './ListaMovies.js'
import Deck from './Deck'

export default function Movie() {

    const [castDevice, setCastDevice] = useState(null)
    const [castStatus, setCastStatus] = useState(null)
    const [movieRun, setMovieRun] = useState(null)
    const [idPlay, setIdPlay] = useState(null);

    const limite = 9

    useEffect(() => {

        let event = [
            'SESSION_STARTING',
            'SESSION_STARTED',
            'SESSION_RESUMING',
            'SESSION_ENDING',
            'SESSION_ENDING',
            'SESSION_RESUMED',
        ]

        event.map(e => {
            return GoogleCast.EventEmitter.addListener(GoogleCast[e], () => {
                GoogleCast.getCastDevice().then((device) => { setCastDevice(device?.name) })
                GoogleCast.getCastState().then((state) => { setCastStatus(state) })
            })
        })

        GoogleCast.EventEmitter.addListener(GoogleCast.SESSION_ENDING, () => {
            setCastStatus(null)
            setMovieRun(null)
            setCastDevice(null)
            setIdPlay(null)
        })

        GoogleCast.EventEmitter.addListener(GoogleCast.SESSION_ENDED, error => {
            setCastStatus(null)
            setMovieRun(null)
            setCastDevice(null)
            setIdPlay(null)
        })
    }, [])

    useEffect(() => {

        GoogleCast.getCastDevice().then((device) => { setCastDevice(device?.name) })
        GoogleCast.getCastState().then((state) => { setCastStatus(state) })

    }, []);

    async function onCast({ item: { id, url, image, name, subtitle, backgroundImage } }) {

        setMovieRun({
            id, url, image, name, subtitle
        })

        GoogleCast.stop()

        GoogleCast.castMedia({
            mediaUrl: url,            
            posterUrl: image,
            title: name,
            subtitle: subtitle,
            studio: 'Alguém qualquer',
            contentType: 'video/mp4',
        })
    }

    async function onCastImage({ id, url, image, backgroundImage }) {

        if (movieRun) return;

        GoogleCast.stop()

        GoogleCast.castMedia({
            mediaUrl: backgroundImage,
            posterUrl: backgroundImage,
            imageUrl: image,
            contentType: 'image/jpg',
        })
    }

    function onShowLaunch() {
        GoogleCast.launchExpandedControls()
    }

    function onChangeImageBackground(item) {

        if (item && castStatus === 'Connected') {
            let novoid = +item.id + 1;

            if (novoid > limite)
                novoid = 1;

            setIdPlay(novoid)

            ListaMovies.map(m => {

                if (+m.id === novoid) {                    
                    onCastImage(m)
                    return
                }
            })
        }
    }

    function stop() {
        GoogleCast.stop();

        onCastImage(movieRun)
        setMovieRun(null)        
        setIdPlay(null)
    }

    return (
        <SafeAreaView style={styles.av}>
            <StatusBar barStyle='light-content' backgroundColor='#121212' />

            <Deck
                data={ListaMovies}
                cast={onCast}
                showPlay={castStatus === 'Connected'}
                changeImage={onChangeImageBackground}
                idPlay={idPlay}
                movie={movieRun}
                stop={stop}
            />

            <Animatable.View useNativeDriver animation='fadeInDown' style={styles.vButtons}>
                <Text style={{ color: '#FFF' }}>{castDevice ? castDevice : 'Nenhum dispositivo conectado'}</Text>
                {castStatus === 'NoDevicesAvailable' ? <Icon name='bell-off' size={24} color='#FFF' /> : <CastButton style={styles.castButton} />}
            </Animatable.View>

            {
                movieRun &&
                <Animatable.View useNativeDriver animation={movieRun ? 'slideInUp' : 'slideOutDown'}>
                    <TouchableOpacity onPress={onShowLaunch} activeOpacity={0.9} style={styles.button}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.vImage}>
                                <Animatable.Image animation='fadeInLeft' source={{ uri: movieRun.image }} style={styles.image} />
                            </View>

                            <View style={{ flexDirection: 'column' }}>
                                <Animatable.Text animation='fadeInUp' delay={100} style={styles.textName}>{movieRun.name.length > 26 ? movieRun.name.substring(0, 26) + '...' : movieRun.name}</Animatable.Text>
                                <Animatable.Text animation='fadeInUp' style={styles.textSub}>{movieRun?.subtitle.substring(0, 35)}...</Animatable.Text>
                            </View>
                        </View>

                        <Animatable.View animation='fadeInRight' style={styles.vIcon}>
                            <Icon name='arrow-up' style={styles.icon} />
                        </Animatable.View>
                    </TouchableOpacity>
                </Animatable.View>
            }
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    av: {
        flex: 1,
        backgroundColor: '#121212'
    },
    vButtons: {
        position: 'absolute',
        backgroundColor: '#121212',
        height: 50, width: '100%',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 16
    },
    castButton: {
        width: 24,
        height: 24,
        tintColor: 'white'
    },
    button: {
        backgroundColor: '#000',
        height: 55,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between'
    },
    vImage: {
        height: 100,
        width: 55,
        marginLeft: 10,
        marginBottom: 60,
        flexDirection: 'row'
    },
    image: {
        height: 100,
        width: 65,
        resizeMode: 'cover'
    },
    textName: {
        color: '#FFF',
        marginLeft: 26,
        fontSize: 16,
    },
    textSub: {
        color: '#FFF',
        marginLeft: 26,
        fontSize: 11
    },
    vIcon: {
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        padding: 10, color: '#FFF', fontSize: 24
    }
})
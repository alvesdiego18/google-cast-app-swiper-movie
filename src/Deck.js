import React, { useState, useEffect } from 'react'
import { Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'

import * as Animatable from 'react-native-animatable';
import { Container, View, DeckSwiper, Card, CardItem, Text, } from 'native-base';

import Icon from "react-native-feather1s";

export default function Deck({ data, cast, marginBottom, showPlay }) {

    const { height, width } = Dimensions.get('window')

    function BotaoPlay(item) {

        return (
            <View style={{ flexDirection: 'row' }}>
                <Animatable.View useNativeDriver animation={showPlay ? 'zoomIn' : 'zoomOut'}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => cast(item)} style={styles.vPlayButton}>
                        <Icon
                            name="play"
                            size={26}
                            color="#FFF"
                            thin={false}
                        />
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        )
    }

    function FolderMovie({ item: { image } }) {
        return (
            <>
                <Image animation='fadeInLeft' style={[styles.imagebg, { height: height - 130, width: width - 55 }]} source={{ uri: image }} />
                <View style={[styles.imagebgbk, { height: height - 130, width: width - 55 }]} />
            </>
        )
    }

    function Item(item) {

        return (
            <Card style={[styles.card, { height: height }]}>

                <CardItem style={[styles.carditem, { marginBottom: marginBottom }]}>
                    <Animatable.View animation='fadeInLeft'>
                        <FolderMovie item={item} />
                    </Animatable.View>

                    <View style={styles.vInfoMovie}>
                        <Animatable.Text animation='fadeInUp' delay={120} style={styles.vInfoMovieText}>{item.name}</Animatable.Text>
                        <Animatable.Text animation='fadeInUp' delay={20} style={styles.vInfoMovieSub}>{item.subtitle}</Animatable.Text>
                    </View>

                </CardItem>

                {
                    showPlay &&
                    <View style={styles.vPlay}>
                        <BotaoPlay item={item} />
                    </View>
                }

            </Card >
        )
    }

    return (
        <Container style={{ backgroundColor: '#121212' }}>
            <DeckSwiper
                dataSource={data}
                renderItem={item => Item(item)}
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    card: {
        elevation: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        borderColor: '#121212'
    },
    carditem: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#121212",
    },
    imagebg: {
        borderRadius: 16,
        resizeMode: 'cover'
    },
    imagebgbk: {
        backgroundColor: '#121212',
        position: 'absolute',
        borderRadius: 16,
        opacity: 0.5,
        marginBottom: 55
    },
    vInfoMovie: {
        position: 'absolute',
        width: '100%',
        bottom: 10,
        padding: 20
    },
    vInfoMovieText: {
        fontSize: 24,
        color: '#FFFF'
    },
    vInfoMovieSub: {
        fontSize: 12,
        color: '#FFFF'
    },
    vPlay: {
        position: 'absolute',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    vPlayButton: {
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 30,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    vPlayButtonPause: {
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 30,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginLeft: 10
    }
})
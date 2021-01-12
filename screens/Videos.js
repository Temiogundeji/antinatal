import React, { useState } from 'react';
import { TouchableWithoutFeedback, Dimensions, Alert, StyleSheet } from 'react-native';
import { View, Text, Image, ScrollView } from 'react-native';
import { Layout, Input, Button, Icon, Spinner } from '@ui-kitten/components';
import { WebView } from 'react-native-webview';
import YouTube from 'react-native-youtube';

const Videos = ({ navigation }) => {
    return (
            <WebView
                allowsFullscreenVideo
                allowsInlineMediaPlayback
                mediaPlaybackRequiresUserAction
                source={{ uri: 'https://www.youtube.com/watch?v=qJ3L-YztHog' }} 
                />
    );
}

export default Videos;

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column'
    },
    fieldContainer: {
        padding: 20
    },
});
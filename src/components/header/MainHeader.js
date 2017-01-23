import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export  default class MainHeader extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon name="menu" style={styles.icon}/>
                <Text style={styles.title}>{this.props.title}</Text>
                <Icon name="plus" style={styles.icon}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        height: 48
    },
    icon: {
        fontSize: 26,
        color: '#01caa6'
    },
    title: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        color: '#01caa6'
    }
});
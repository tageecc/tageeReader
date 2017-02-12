
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableHighlight
} from 'react-native';

export default class  Menu extends React.Component {
    render() {
        return (
            <ScrollView style={ styles.scrollView }>
                <TouchableHighlight underlayColor="#eee" onPress={() => {}}>
                    <Text style={styles.item}>书架</Text>
                </TouchableHighlight>

                <TouchableHighlight underlayColor="#eee" onPress={() => {}}>
                    <Text style={styles.item}>关于</Text>
                </TouchableHighlight>

                <TouchableHighlight underlayColor="#eee" onPress={() => {}}>
                    <Text style={styles.item}>反馈</Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="#eee" onPress={() => {}}>
                    <Text style={styles.item}>退出</Text>
                </TouchableHighlight>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        // backgroundColor: '#ccccFF',
        flex: 1,
        marginTop: 200,
    },
    item:{
        fontSize: 16,
        padding: 10,
        paddingLeft:20,
        borderTopWidth:1,
        borderColor:'#ccc',
        color: '#01caa6',
        // backgroundColor:'#82dae5'
    }
});
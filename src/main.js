import React from 'react';
import {
    View
} from 'react-native';

import MainHeader from './components/header/MainHeader';
import MainList from './components/list/MainList';

export default class tageeReader extends React.Component {
    render() {
        return (
            <View style={{backgroundColor: '#f5f5f5'}}>
                <MainHeader title="首页"/>
                <MainList />
            </View>
        );
    }
}
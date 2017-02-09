import React from 'react';
import {
    View,
    TouchableHighlight,
    Text,
    NavigationExperimental,
    ScrollView,
    StyleSheet,
} from 'react-native';

import MainHeader from '../../components/header/MainHeader';
import MainList from '../../components/MainList/index';
import SideMenu from 'react-native-side-menu';
import Menu from '../../components/Menu/index';

export default class tageeReader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            key: 'HOME'
        };
    }

    onMenuItemSelected(key) {
        this.setState({
            isOpen: false,
            key: key
        })
    }

    toggleMenu() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    setOpen(isOpen) {
        this.setState({
            isOpen: isOpen
        })
    }

    render() {

        return (
            <SideMenu
                isOpen={this.state.isOpen}
                disableGestures={false}
                menu={<Menu onMenuItemSelected={this.onMenuItemSelected.bind(this)} />}
            >
                <View>
                    <MainHeader
                        title="首页"
                        toggleMenu={this.toggleMenu.bind(this)}/>
                    <MainList onMenuItemSelected={this.onMenuItemSelected.bind(this)}/>
                </View>
            </SideMenu>
        );
    }
}
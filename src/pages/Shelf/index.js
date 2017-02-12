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

export default class ShelfPage extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            isOpen: false,
        };
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
                menu={<Menu/>}
            >
                <View>
                    <MainHeader
                        title="首页"
                        toggleMenu={this.toggleMenu.bind(this)}/>
                    <MainList router={this.props.router}/>
                </View>
            </SideMenu>
        );
    }
}

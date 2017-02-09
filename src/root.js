import React from 'react';
import {
    View,
    TouchableHighlight,
    Text,
    NavigationExperimental,
    ScrollView,
    StyleSheet,
    LayoutAnimation,
} from 'react-native';

import MainHeader from './components/header/MainHeader';
import MainList from './components/MainList/index';
import SideMenu from 'react-native-side-menu';
import Menu from './components/Menu/index';
import Reader from './pages/Reader/index';

const {
    Header: NavigationHeader,
    CardStack: NavigationCardStack
} = NavigationExperimental;

export default class tageeReader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            key: 'HOME'
        };

        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

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
                <NavigationCardStack
                    onNavigate={ () => {} }
                    navigationState={{ key: this.state.key, index: 0, routes: [{ key: this.state.key, title: 'My Initial Scene' }] }}
                    renderScene={this._renderScene.bind(this)}
                />
            </SideMenu>
        );
    }
    _renderScene(props) {
        const ComponentToRender = this._renderRoute(props.scene.route.key);
        return (
            <ScrollView>
                {ComponentToRender}
            </ScrollView>
        );
    }
    _renderRoute(key) {
        if (key === 'HOME') {
            return <View>
                <MainHeader
                    title="首页"
                    toggleMenu={this.toggleMenu.bind(this)}/>
                <MainList  onMenuItemSelected={this.onMenuItemSelected.bind(this)}/>
            </View>
        }
        if (key === 'ABOUT') {
            return <View>
                <MainHeader
                    title="首页"
                    toggleMenu={this.toggleMenu.bind(this)}/>
                <MainList  onMenuItemSelected={this.onMenuItemSelected.bind(this)}/>
            </View>
        }
        if (key === 'FEEDBACK') {
            return <View>
                <MainHeader
                    title="首页"
                    toggleMenu={this.toggleMenu.bind(this)}/>
                <MainList  onMenuItemSelected={this.onMenuItemSelected.bind(this)}/>
            </View>
        }
        if (key === 'READER') {

            return <Reader />
        }
    }
}
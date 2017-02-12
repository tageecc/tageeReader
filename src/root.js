import React from 'react';
import {Navigator} from 'react-native';
import {connect} from 'react-redux';
import Router from './configs/router';
import ShelfPage from './pages/Shelf';

export default class Root extends React.Component {
    constructor(props) {
        super(props);
        this.initialRoute = {
            name: 'shelf-page',
            page: ShelfPage,
        };
    }

    renderScene({page, name, id, index, props}, navigator) {
        this.router = this.router || new Router(navigator);
        if (page) {
            return React.createElement(page, {
                ...props,
                ref: view => this[index] = view,
                router: this.router,
                name,
                route: {
                    name, id, index
                }
            })
        }
    }

    configureScene(route) {
        if (route.sceneConfig) {
            return route.sceneConfig;
        }
        return Navigator.SceneConfigs.FloatFromRight;
    }

    render() {
        return (<Navigator
            ref={view => this.navigator=view}
            initialRoute={this.initialRoute}
            configureScene={this.configureScene.bind(this)}
            renderScene={this.renderScene.bind(this)}
        />);
    }
}


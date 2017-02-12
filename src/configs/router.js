'use strict';
import React  from 'react';
import {Navigator, Platform, BackAndroid} from 'react-native';

// Pages
import ShelfPage from '../pages/Shelf';
import ReaderPage from '../pages/Reader';


// Config
const sceneConfig = require('./sceneConfig');

const customFloatFromRight = sceneConfig.customFloatFromRight;


class Router {
    constructor(navigator) {
        this.navigator = navigator;
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', ()=> {
                const routesList = this.navigator.getCurrentRoutes();
                const currentRoute = routesList[routesList.length - 1];
                if (currentRoute.name !== 'shelf-page') {
                    navigator.pop();
                    return true;
                }
                return false;
            });
        }
    }

    push(props, route) {
        let routesList = this.navigator.getCurrentRoutes();
        let nextIndex = routesList[routesList.length - 1].index + 1;
        route.props = props;
        route.index = nextIndex;
        this.navigator.push(route)
    }

    pop() {
        console.log('pop');
        this.navigator.pop()
    }

    // 书架
    toShelf(props) {
        this.push(props, {
            page: ShelfPage,
            name: 'shelf-page',
            sceneConfig: customFloatFromRight
        })
    }

    // 阅读器
    toReader(props) {
        this.push(props, {
            page: ReaderPage,
            name: 'reader-page',
            sceneConfig: customFloatFromRight
        })
    }
}

module.exports = Router;


'use strict';
import React, {Navigator} from 'react-native';


// Pages
import ShelfPage from '../pages/Shelf';
import ReaderPage from '../pages/Reader';


// Config
const sceneConfig = require('./sceneConfig');

const customFloatFromRight = sceneConfig.customFloatFromRight;


class Router {
    constructor(navigator) {
        this.navigator = navigator
    }

    push(props, route) {
        let routesList = this.navigator.getCurrentRoutes();
        let nextIndex = routesList[routesList.length - 1].index + 1;
        route.props = props;
        route.index = nextIndex;
        this.navigator.push(route)
    }

    pop() {
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

    replaceWithHome() {
        this.navigator.popToTop()
    }

    resetToLogin() {
        this.navigator.resetTo({
            name: 'login-page',
            page: LoginPage,
            //sceneConfig: customFloatFromRight,
        })
    }


}

module.exports = Router;


import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';

import * as Parse from './parse';

export default class ReaderPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: parseInt(this.props.index),
            prev: 0,
            next: true,
            fontSize: 20,
            lineHeight: 1.8,
            lines: [],
            page: 1,
            showSetting: false
        };
    }

    fetchContent = (index) => {
        const article = '　　这天中午，偌大的办公室内，只剩下了杜远舟一个人。******绪飘到了大学时代。他猛地坐了起来，突然想起来，这几天一直在忙提留款的事，竟然一直没有给林佳怡打电话。<p>　　也许，他这几天根本潜意识不知如何面对林佳怡，所以选择性将遗忘当成了理由。<p>　　站在电话机前，杜远舟熟练地拨了几个号码，听见那边电话嘟嘟地响，杜远舟的心情开始复杂起来，有些不安，却无比期待。<p>　　“您好，你哪位？找谁呀？”在盛京的一座别墅内，一位灵秀可爱的女孩接过电话，漫不经心地问道。<p>　　听见那自己熟悉的清脆之声，杜远舟不由得激动起来。<p>　　前世每当夜深人静时，他曾无数次想起这个自己魂牵梦绕的初恋女友，而偏偏她已成人妇，每当想打一个电话，抑或联系对方，又由于种种不方便的理由或碍于面子放弃了。<p>　　直至林佳怡跳楼身亡，杜远舟再也没有听见过她清脆悦耳的声音，也没有见过她那宛若精灵般可爱的身影。<p>　　后来，当听见这一噩耗，杜远舟悲伤欲绝，整整喝了一夜的酒，导致大病一场，住了半个多月医院，也没彻底恢复过来。<p>　　';

        let pageWidth = Parse.pageWidth({
            fontSize: this.state.fontSize,
            lineHeight: this.state.fontSize * this.state.lineHeight
        });
        let pageStr = Parse.pageContent(article, pageWidth);
        console.log(pageWidth, width / this.state.fontSize, height / this.state.fontSize);
        console.log(lines);
        /*this.setState({
         next: false,
         page: 1,
         lines,
         index
         });*/
        return <View><Text
            style={{fontSize:this.state.fontSize,lineHeight:this.state.fontSize*1.5,padding:this.state.fontSize/2}}>{lines}</Text></View>;
    };

    render() {
        return <ScrollView>
            {this.fetchContent()}
        </ScrollView>;
    }

}

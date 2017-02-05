import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
} from 'react-native';

export default class MainList extends React.Component {


    _dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    constructor(props) {
        super(props);
        this.state = {
            tab: 1,
            dataSource: this.genRows()
        };

    }

    genRows() {
        let dataList = !(this.state && this.state.tab == 1) ? [
            {
                "title": "圣墟",
                "author": "辰东 著",
                "cover": "http://qidian.qpic.cn/qdbimg/349573/1004608738/180",
                "introduction": "在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭……在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭……"
            },
            {
                "title": "圣墟",
                "author": "辰东 著",
                "cover": "http://qidian.qpic.cn/qdbimg/349573/1004608738/180",
                "introduction": "在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭……在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭……"
            },
            {
                "title": "圣墟",
                "author": "辰东 著",
                "cover": "http://qidian.qpic.cn/qdbimg/349573/1004608738/180",
                "introduction": "在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭……在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭……"
            },
            {
                "title": "圣墟",
                "author": "辰东 著",
                "cover": "http://qidian.qpic.cn/qdbimg/349573/1004608738/180",
                "introduction": "在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭……在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭……"
            },
            {
                "title": "圣墟",
                "author": "辰东 著",
                "cover": "http://qidian.qpic.cn/qdbimg/349573/1004608738/180",
                "introduction": "在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭……在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭……"
            },
            {
                "title": "圣墟",
                "author": "辰东 著",
                "cover": "http://qidian.qpic.cn/qdbimg/349573/1004608738/180",
                "introduction": "在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭……在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭……"
            },
        ] : [
            {
                "title": "龙珠之最强神话",
                "author": "枫叶缀 著",
                "cover": "http://qidian.qpic.cn/qdbimg/349573/1004607972/180",
                "introduction": "夏亚，重生到龙珠世界成为了一名赛亚人。这一世，他的父母战死，他被赛亚人夫妇收养，还有个不知道是不是拖油瓶的妹妹，而这时距离贝吉塔星毁灭只剩下12年。"
            },
            {
                "title": "龙珠之最强神话",
                "author": "枫叶缀 著",
                "cover": "http://qidian.qpic.cn/qdbimg/349573/1004607972/180",
                "introduction": "夏亚，重生到龙珠世界成为了一名赛亚人。这一世，他的父母战死，他被赛亚人夫妇收养，还有个不知道是不是拖油瓶的妹妹，而这时距离贝吉塔星毁灭只剩下12年。"
            },
            {
                "title": "龙珠之最强神话",
                "author": "枫叶缀 著",
                "cover": "http://qidian.qpic.cn/qdbimg/349573/1004607972/180",
                "introduction": "夏亚，重生到龙珠世界成为了一名赛亚人。这一世，他的父母战死，他被赛亚人夫妇收养，还有个不知道是不是拖油瓶的妹妹，而这时距离贝吉塔星毁灭只剩下12年。"
            },
            {
                "title": "龙珠之最强神话",
                "author": "枫叶缀 著",
                "cover": "http://qidian.qpic.cn/qdbimg/349573/1004607972/180",
                "introduction": "夏亚，重生到龙珠世界成为了一名赛亚人。这一世，他的父母战死，他被赛亚人夫妇收养，还有个不知道是不是拖油瓶的妹妹，而这时距离贝吉塔星毁灭只剩下12年。"
            },
        ];
        return this._dataSource.cloneWithRows(dataList);

    }

    renderRow(rowData, sectionID, rowID) {
        return (
            <View elevation={1} style={[styles.list_item,styles.row]}>
                <Image style={styles.cover} source={{uri:rowData.cover}}/>
                <View>
                    <View style={[styles.info,styles.row]}>
                        <Text style={styles.title}>{rowData.title}</Text>
                        <Text style={styles.author}>{rowData.author} 著</Text>
                    </View>
                    <Text style={styles.introduction}>{rowData.introduction}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.tab,styles.row]}>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({tab:1,dataSource: this.genRows()});
                        }}
                    >
                        <Text
                            style={[styles.tab_tit,styles.tab_tit1,this.state.tab==1 && styles.tab_tit_cur]}>正在读</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({tab:2,dataSource: this.genRows()});
                        }}
                    >
                        <Text
                            style={[styles.tab_tit,styles.tab_tit2,this.state.tab==2 && styles.tab_tit_cur]}>已读完</Text>
                    </TouchableOpacity>
                </View>
                <ListView style={styles.list}
                          dataSource={this.state.dataSource}
                          renderRow={this.renderRow}
                />
                <ListView style={styles.list}
                          dataSource={this.state.dataSource}
                          renderRow={this.renderRow}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
    },
    flex: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#01caa6',
        borderRadius: 10,
    },
    tab_tit1: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    tab_tit2: {
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    tab_tit: {
        width: 100,
        paddingVertical: 5,
        fontSize: 12,
        color: '#01caa6',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tab_tit_cur: {
        color: '#fff',
        backgroundColor: '#01caa6'
    },
    list: {
        marginTop: 10
    },
    list_item: {
        backgroundColor: '#fff',
        borderRadius: 3,
        padding: 5,
        marginBottom: 10,
    },
    cover: {
        width: 72,
        height: 96,
        resizeMode: 'cover',
        marginRight: 10
    },
    title: {
        color: '#333',
        fontSize: 18,
        marginRight: 10
    },
    author: {
        color: '#01b293',
        fontSize: 12,
    },
    info: {
        alignItems: 'flex-end',
    },
    introduction: {
        color: '#01b293',
        fontSize: 12,
        paddingRight: 90
    }
});
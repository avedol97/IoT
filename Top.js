import React, {Component} from 'react';
import {View,
    Text,
    StyleSheet,
} from 'react-native';

class Top extends Component{

    render() {
        const {title} = this.props
        return(
            <View style={styles.box}><Text>{title}</Text></View>
        )
    }
}

const styles=StyleSheet.create({
    box:{
        width: "100%",
        height: "20%",
        display: "flex",

        borderBottomWidth: 2,
        justifyContent: "center",
        alignItems: "center",
    }
})
export default Top;

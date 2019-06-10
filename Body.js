import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Tarea from './Tarea';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.tareas}
                    renderItem={({item})=><Tarea item={item} eliminar={this.props.eliminar}/>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 9,
        backgroundColor: '#98FB98'
    },
});

import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class Body extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.texto}
                    placeholder="Aqui va tu texto"
                    onChangeText={this.props.cambiarTexto}
                    onSubmitEditing={this.props.agregar}
                    value={this.props.texto}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#00FF00',
        justifyContent: 'center',
    },
    texto:{
        paddingHorizontal: 16,
        fontSize:24
    }
});

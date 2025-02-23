import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Photo: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/checklist.png')}
                style={styles.image}
            />
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
});

export default Photo;
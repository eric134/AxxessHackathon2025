import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const GoogleForm: React.FC = () => {
  return (
    <View style={styles.container}>
      <WebView
            source={{ uri: 'https://forms.gle/Ms3Q6X2N76Lb4Xky8' }}
            style={styles.webView}
            />
    </View>
    );
    };
            
    const styles = StyleSheet.create({
        container: {
        flex: 1,
    },
        webView: {
        flex: 1,
    },
    });
            
    export default GoogleForm;
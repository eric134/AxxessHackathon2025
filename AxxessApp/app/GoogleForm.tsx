import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

const GoogleForm: React.FC = () => {
  return (
    <View style={styles.container}>
        {Platform.OS === 'web' ? (
        <iframe
          src="https://forms.gle/Ms3Q6X2N76Lb4Xky8"
          style={styles.webView}
          width="150%"
          height="100%"
          frameBorder="0"
          justify-content="center"
          align-items="center"
        />
      ) : (
      <WebView
            source={{ uri: 'https://forms.gle/Ms3Q6X2N76Lb4Xky8' }}
            style={styles.webView}
            />
      )}
    </View>
    );
    };
            
    const styles = StyleSheet.create({
        container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
        webView: {
        flex: 1,
    },
    });
            
    export default GoogleForm;
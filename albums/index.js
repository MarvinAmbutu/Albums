// Import Library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Album'} />
      < AlbumList />
  </View>
);


// Render it to device
AppRegistry.registerComponent('albums', () => App);

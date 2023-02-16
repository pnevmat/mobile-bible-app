import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import ToolsPanel from './components/ToolsPanel/ToolsPanel';
import BibleTextScreen from './components/BibleTextScreen/BibleTextScreen';
import ParalellPlaces from './components/ParalellPlaces/ParalellPlaces';
import BooksNavigationPannel from './components/BooksNavigationPannel/BooksNavigationPannel';
import ParalellPlacesTextPanel from './components/ParalellPlacesTextPanel/ParalellPlacesTextPanel';

export default function BibleApp() {
	return (
		<View style={styles.container}>
			<View>
				<ToolsPanel />
			</View>
			<BibleTextScreen />
			<ParalellPlaces />
			<BooksNavigationPannel />
			<ParalellPlacesTextPanel />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

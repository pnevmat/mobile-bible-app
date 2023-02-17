import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import ToolsPanel from './components/ToolsPanel/ToolsPanel';
import BibleTextScreen from './components/BibleTextScreen/BibleTextScreen';
import ParalellPlaces from './components/ParalellPlaces/ParalellPlaces';
import BooksNavigationPannel from './components/BooksNavigationPannel/BooksNavigationPannel';
import ParalellPlacesTextPanel from './components/ParalellPlacesTextPanel/ParalellPlacesTextPanel';

export default function BibleApp() {
	const [paralellPlacesShow, setParalellPlacesShow] = useState(false);
	return (
		<View style={styles.container}>
			<View style={styles.toolbar}>
				<ToolsPanel
					paralellPlacesShow={paralellPlacesShow}
					setParalellPlacesShow={setParalellPlacesShow}
				/>
			</View>
			<View style={styles.screenContainer}>
				<BibleTextScreen />
				{paralellPlacesShow && <ParalellPlaces />}
			</View>
			<BooksNavigationPannel />
			<ParalellPlacesTextPanel />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// display: 'block',
		overflow: 'hidden',
		backgroundColor: '#fff',
	},
	toolbar: {
		paddingTop: 20,
		paddingRight: 20,
		paddingBottom: 20,
		paddingLeft: 20,
		borderWidth: 1,
		backgroundColor: '#b9b9b9',
	},
	screenContainer: {
		paddingRight: 10,
		paddingLeft: 10,
		paddingBottom: 30,
	},
});

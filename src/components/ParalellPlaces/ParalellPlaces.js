import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ParalellPlaces() {
	return (
		<View style={styles.container}>
			<Text>Паралельние места</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// marginTop: 30,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		borderWidth: 1,
		borderColor: '#000',
	},
});

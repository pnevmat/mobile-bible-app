import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ParalellPlacesTextPanel() {
	return (
		<View style={styles.backdrop}>
			<View style={styles.modal}>
				<Text>Панель с текстом парралельних мест писаний</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	backdrop: {
		position: 'relative',
		top: 0,
		left: 0,
	},
	modal: {
		position: 'absolute',
		top: '-85.5vh',
		left: '100vw',
		zIndex: 1,
		width: '80vw',
		height: '100vh',
		borderWidth: 1,
		borderColor: '#000',
		backgroundColor: '#fff',
	},
});

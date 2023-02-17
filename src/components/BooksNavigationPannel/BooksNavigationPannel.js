import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function BooksNavigationPannel() {
	return (
		<View style={styles.backdrop}>
			<View style={styles.modal}>
				<Text>Панель навигации по книгам библии</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	backdrop: {
		position: 'relative',
		top: 0,
		left: 0,
		display: 'block',
	},
	modal: {
		position: 'absolute',
		top: '-95vh',
		left: '-80vw',
		zIndex: 1,
		display: 'block',
		width: '80vw',
		height: '100vh',
		borderWidth: 1,
		borderColor: '#000',
		backgroundColor: '#fff',
	},
});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function BibleTextScreen() {
	return (
		<View style={styles.container}>
			<Text>Текст библии</Text>
			<Text>
				lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
				sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
				ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
				amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
				dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
				lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
				sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
				ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
				amet lorem ipsum dolor sit amet amet lorem ipsum dolor sit amet amet
				lorem ipsum dolor sit amet amet lorem ipsum dolor sit amet amet lorem
				ipsum dolor sit amet amet lorem ipsum dolor sit amet amet lorem ipsum
				dolor sit amet amet lorem ipsum dolor sit amet amet lorem ipsum dolor
				sit amet amet lorem ipsum dolor sit amet amet lorem ipsum dolor sit amet
				amet lorem ipsum dolor sit amet amet lorem ipsum dolor sit amet amet
				lorem ipsum dolor sit amet amet lorem ipsum dolor sit amet amet lorem
				ipsum dolor sit amet
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		maxHeight: '67vh',
		paddingTop: 20,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		borderRightWidth: 1,
		borderLeftWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#000',
		overflow: 'scroll',
	},
});

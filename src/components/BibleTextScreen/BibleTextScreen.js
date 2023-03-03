import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import tempBible from '../../constants/tempBible';
import textNormalizer from '../../utils/tempBibleTextNormalizer';

export default function BibleTextScreen() {
	//ToDo: Fix paralell places in textNormalizer func, change textNormalizer to predefined js object from the result of normalizer func
	const bible = textNormalizer(tempBible);
	console.log('Bible text: ', bible);
	return (
		<View style={styles.container}>
			{bible.map((statement) => (
				<View key={statement.id}>
					{statement.books.map((book) => (
						<View key={book.id}>
							<Text>{book.name.ru}</Text>
							{book.chapters.map((chapter) => (
								<View key={chapter.id}>
									<Text>{chapter.name.ru}</Text>
									{chapter.verses.map((verse) => (
										<Text key={verse.id}>{verse.text.ru}</Text>
									))}
								</View>
							))}
						</View>
					))}
				</View>
			))}
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

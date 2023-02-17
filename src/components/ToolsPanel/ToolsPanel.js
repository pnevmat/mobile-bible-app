import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as icons from '@expo/vector-icons';
import {
	Entypo,
	MaterialIcons,
	MaterialCommunityIcons,
	Foundation,
	Ionicons,
} from '@expo/vector-icons';

export default function ToolsPanel({
	paralellPlacesShow,
	setParalellPlacesShow,
}) {
	// <Entypo name="magnifying-glass" size={24} color="black" />;
	// console.log('Icons: ', icons);
	// console.log('Ionicons: ', Ionicons);
	// console.log('Ionicons as component: ', <Ionicons />);
	return (
		<View style={styles.container}>
			<Entypo name="magnifying-glass" size={24} color="black" />
			{/* <Text>Найти текст (иконка с текстовой вспливашкой)</Text> */}
			<Entypo name="bookmarks" size={24} color="black" />
			{/* <Text>Закладки (иконка с текстовой вспливашкой)</Text> */}
			<MaterialIcons name="find-in-page" size={24} color="black" />
			{/* <Text>Перейти к стиху (иконка с текстовой вспливашкой)</Text> */}
			<MaterialCommunityIcons name="format-font" size={24} color="black" />
			{/* <Text>Семейство шрифтов (иконка с текстовой вспливашкой)</Text> */}
			<MaterialCommunityIcons
				name="format-font-size-decrease"
				size={24}
				color="black"
			/>
			{/* <Text>Размер шрифта (иконка с текстовой вспливашкой)</Text> */}
			<View style={styles.backdrop}>
				<Ionicons name="settings" size={24} color="black" />
				<View style={styles.modal}>
					{/* <Foundation name="background-color" size={24} color="black" /> */}
					<Text>Цвет фона (иконка с текстовой вспливашкой)</Text>
					{/* <MaterialCommunityIcons
						name="format-color-text"
						size={24}
						color="black"
					/> */}
					<Text>Цвет шрифта (иконка с текстовой вспливашкой)</Text>
				</View>
			</View>
			<MaterialCommunityIcons
				onClick={() => setParalellPlacesShow(!paralellPlacesShow)}
				name="view-parallel"
				size={24}
				color="black"
			/>
			{/* <Text>Паралельние места (иконка с текстовой вспливашкой)</Text> */}
			<MaterialCommunityIcons name="close-circle" size={24} color="black" />
			{/* <Text>Закрить приложение (иконка с текстовой вспливашкой)</Text> */}
		</View>
	);
}

const openTop = '8.3vh';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#b9b9b9',
	},
	backdrop: {
		position: 'relative',
		top: 0,
		left: 0,
		display: 'block',
	},
	modal: {
		position: 'absolute',
		top: '-19vh',
		left: '-63.2vw',
		zIndex: 1,
		display: 'block',
		width: '100vw',
		padding: 10,
		borderWidth: 1,
		borderColor: '#000',
		backgroundColor: '#fff',
	},
});

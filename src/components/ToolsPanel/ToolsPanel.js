import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ToolsPanel() {
	return (
		<View>
			<Text>Найти текст (иконка с текстовой вспливашкой)</Text>
			<Text>Перейти к стиху (иконка с текстовой вспливашкой)</Text>
			<Text>Семейство шрифтов (иконка с текстовой вспливашкой)</Text>
			<Text>Размер шрифта (иконка с текстовой вспливашкой)</Text>
			<Text>Цвет фона (иконка с текстовой вспливашкой)</Text>
			<Text>Цвет шрифта (иконка с текстовой вспливашкой)</Text>
			<Text>Паралельние места (иконка с текстовой вспливашкой)</Text>
			<Text>Закрить приложение (иконка с текстовой вспливашкой)</Text>
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

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
	Entypo,
	MaterialIcons,
	MaterialCommunityIcons,
	Ionicons,
} from '@expo/vector-icons';
import FindTextModal from './FindTextModal/FindTextModal';
import GoToVerseModal from './GoToVerseModal/GoToVerseModal';
import FontFamilyModal from './FontFamilyModal/FontFamilyModal';
import FontSizeModal from './FontSizeModal/FontSizeModal';
import SettingsModal from './SettingsModal/SettingsModal';
import BackgroundColorModal from './BackgroundColorModal/BackgroundColorModal';
import TextColorModal from './TextColorModal/TextColorModal';

export default function ToolsPanel({
	setFontSize,
	paralellPlacesShow,
	setParalellPlacesShow,
}) {
	const [showModal, setShowModal] = useState({
		findText: false,
		toVerse: false,
		fontFamily: false,
		fontSize: false,
		settings: false,
		textColorSettings: false,
		backgroundColorSettings: false,
	});

	return (
		<View style={styles.container}>
			{/* Модалка "Найти текст" */}
			<View style={styles.backdrop}>
				<Entypo
					name="magnifying-glass"
					size={24}
					color="black"
					onClick={() => {
						setShowModal({...showModal, findText: !showModal.findText});
					}}
				/>
				<FindTextModal
					isVisible={showModal.findText}
					showModal={showModal}
					setShowModal={setShowModal}
				/>
			</View>
			{/* <Text>Закладки (иконка с текстовой вспливашкой)</Text> */}
			<Entypo name="bookmarks" size={24} color="black" />
			{/* Модалка "Перейти к стиху" */}
			<View style={styles.backdrop}>
				<MaterialIcons
					name="find-in-page"
					size={24}
					color="black"
					onClick={() => {
						setShowModal({...showModal, toVerse: !showModal.toVerse});
					}}
				/>
				<GoToVerseModal
					isVisible={showModal.toVerse}
					showModal={showModal}
					setShowModal={setShowModal}
				/>
			</View>
			{/* Модалка "Семейство шрифтов" */}
			<View style={styles.backdrop}>
				<MaterialCommunityIcons
					name="format-font"
					size={24}
					color="black"
					onClick={() => {
						setShowModal({...showModal, fontFamily: !showModal.fontFamily});
					}}
				/>
				<FontFamilyModal
					isVisible={showModal.fontFamily}
					showModal={showModal}
					setShowModal={setShowModal}
				/>
			</View>
			{/* Модалка "Размер шрифта" */}
			<View style={styles.backdrop}>
				<MaterialCommunityIcons
					name="format-font-size-decrease"
					size={24}
					color="black"
					onClick={() => {
						setShowModal({...showModal, fontSize: !showModal.fontSize});
					}}
				/>
				<FontSizeModal
					isVisible={showModal.fontSize}
					showModal={showModal}
					setShowModal={setShowModal}
					setFontSize={setFontSize}
				/>
			</View>
			{/* Модалка "Настройки" */}
			<View style={styles.backdrop}>
				<Ionicons
					name="settings"
					size={24}
					color="black"
					onClick={() =>
						setShowModal({...showModal, settings: !showModal.settings})
					}
				/>
				<SettingsModal
					isVisible={showModal.settings}
					showModal={showModal}
					setShowModal={setShowModal}
				/>
				<BackgroundColorModal
					isVisible={showModal.backgroundColorSettings}
					showModal={showModal}
					setShowModal={setShowModal}
				/>
				<TextColorModal
					isVisible={showModal.textColorSettings}
					showModal={showModal}
					setShowModal={setShowModal}
				/>
			</View>
			{/* Екран "Паралельние места" */}
			<MaterialCommunityIcons
				onClick={() => {
					setParalellPlacesShow(!paralellPlacesShow);
				}}
				name="view-parallel"
				size={24}
				color="black"
			/>
			{/* Кнопка "Закрить приложение" */}
			<MaterialCommunityIcons name="close-circle" size={24} color="black" />
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
	popup: {
		position: 'absolute',
		top: '6vh',
		left: 0,
		display: 'inline-block',
		width: '30vw',
		padding: 2,
		borderRadius: 5,
		borderRadius: 5,
		backgroundColor: '#f7e354',
		textAlign: 'center',
	},
});

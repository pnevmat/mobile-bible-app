import React from 'react';
import {Text, View} from 'react-native';
import ModalCustomizable from '../../Modal/Modal';

import styles from './styles';

export default function BackgroundColorModal({
	isVisible,
	showModal,
	setShowModal,
}) {
	return (
		<ModalCustomizable
			isVisible={isVisible}
			propStyles={styles.propStyles}
			animationType="fade">
			<Text>Цвет фона</Text>
			<View style={styles.backgroundColorsContainer}>
				<Text>Мап с цветами бекграунда</Text>
			</View>
			<View style={styles.modalButtonContainer}>
				<Text
					style={styles.modalButton}
					onClick={() =>
						setShowModal({
							...showModal,
							backgroundColorSettings: !showModal.backgroundColorSettings,
						})
					}>
					Сохранить
				</Text>
				<Text
					style={styles.modalButton}
					onClick={() =>
						setShowModal({
							...showModal,
							backgroundColorSettings: !showModal.backgroundColorSettings,
						})
					}>
					Отмена
				</Text>
			</View>
		</ModalCustomizable>
	);
}

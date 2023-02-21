import React from 'react';
import {Text, View} from 'react-native';
import ModalCustomizable from '../../Modal/Modal';

import styles from './styles';

export default function TextColorModal({isVisible, showModal, setShowModal}) {
	return (
		<ModalCustomizable
			isVisible={isVisible}
			propStyles={styles.propStyles}
			animationType="fade">
			<Text>Цвет шрифта</Text>
			<View style={styles.textColorsContainer}>
				<Text>Мап с цветами шрифтов</Text>
			</View>
			<View style={styles.modalButtonContainer}>
				<Text
					style={styles.modalButton}
					onClick={() =>
						setShowModal({
							...showModal,
							textColorSettings: !showModal.textColorSettings,
						})
					}>
					Сохранить
				</Text>
				<Text
					style={styles.modalButton}
					onClick={() =>
						setShowModal({
							...showModal,
							textColorSettings: !showModal.textColorSettings,
						})
					}>
					Отмена
				</Text>
			</View>
		</ModalCustomizable>
	);
}

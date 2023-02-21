import React from 'react';
import ModalCustomizable from '../../Modal/Modal';
import {Text, View} from 'react-native';

import styles from './styles';

export default function GoToVerseModal({
	isVisible,
	showModal,
	setShowModal,
	bible,
}) {
	return (
		<ModalCustomizable
			isVisible={isVisible}
			propStyles={styles.propStyles}
			animationType="fade">
			<Text style={styles.label}>Перейти к стиху</Text>
			<View style={styles.selectContainer}>
				<View>
					<Text>Книга</Text>
					<Text>Мап библии с названиями книг</Text>
				</View>
				<View>
					<Text>Глава</Text>
					<Text>Мап библии с номерами глав</Text>
				</View>
				<View>
					<Text>Стих</Text>
					<Text>Мап библии с номерами стихов</Text>
				</View>
			</View>
			<View style={styles.modalButtonContainer}>
				<Text
					style={styles.modulButton}
					onClick={() =>
						setShowModal({...showModal, toVerse: !showModal.toVerse})
					}>
					Перейти
				</Text>
				<Text
					style={styles.modulButton}
					onClick={() =>
						setShowModal({...showModal, toVerse: !showModal.toVerse})
					}>
					Отмена
				</Text>
			</View>
		</ModalCustomizable>
	);
}

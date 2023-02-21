import React from 'react';
import {Text, View} from 'react-native';
import ModalCustomizable from '../../Modal/Modal';

import styles from './styles';

export default function SettingsModal({isVisible, showModal, setShowModal}) {
	return (
		<ModalCustomizable
			isVisible={isVisible}
			propStyles={styles.propStyles}
			animationType="fade">
			<Text>Настройки</Text>
			<View style={styles.settingsContainer}>
				<View
					style={styles.settingContainer}
					onClick={() =>
						setShowModal({...showModal, settings: !showModal.settings})
					}>
					<Text>Цвет фона</Text>
				</View>
				<View
					style={styles.settingContainer}
					onClick={() =>
						setShowModal({...showModal, settings: !showModal.settings})
					}>
					<Text>Цвет шрифта</Text>
				</View>
			</View>
		</ModalCustomizable>
	);
}

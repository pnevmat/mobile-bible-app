import React from 'react';
import {Text, View, TextInput} from 'react-native';
import ModalCustomizable from '../../Modal/Modal';

import styles from './styles';

export default function FontFamilyModal({isVisible, showModal, setShowModal}) {
	return (
		<ModalCustomizable
			isVisible={isVisible}
			propStyles={styles.propStyles}
			animationType="fade">
			<View style={styles.container}>
				<Text>Семейство шрифтов</Text>
				<View>
					<Text>Мап с названиями семейств шрифтов</Text>
				</View>
			</View>
		</ModalCustomizable>
	);
}

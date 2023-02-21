import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import ModalCustomizable from '../../Modal/Modal';

import styles from './styles';

export default function FindTextModal({isVisible, showModal, setShowModal}) {
	const [textChange, setTextChange] = useState('');

	return (
		<ModalCustomizable
			isVisible={isVisible}
			propStyles={styles.propStyles}
			animationType="fade">
			<View style={styles.inputContainer}>
				<Text style={styles.label}>Найти текст</Text>
				<View style={styles.inputWrapper}>
					<TextInput
						style={styles.input}
						onChangeText={setTextChange}
						value={textChange}
					/>
				</View>
			</View>
			<View style={styles.modalButtonContainer}>
				<Text
					style={styles.modalButton}
					onClick={() => {
						setTextChange('');
						setShowModal({...showModal, findText: !showModal.findText});
					}}>
					Найти
				</Text>
				<Text
					style={styles.modalButton}
					onClick={() => {
						setTextChange('');
						setShowModal({...showModal, findText: !showModal.findText});
					}}>
					Отмена
				</Text>
			</View>
		</ModalCustomizable>
	);
}

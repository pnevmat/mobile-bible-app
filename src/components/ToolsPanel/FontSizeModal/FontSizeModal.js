import React from 'react';
import {Text, View} from 'react-native';
import ModalCustomizable from '../../Modal/Modal';

import styles from './styles';

export default function FontSizeModal({
	isVisible,
	showModal,
	setShowModal,
	setFontSize,
}) {
	const fontSizes = [8, 12, 14, 16, 18, 24, 36];
	return (
		<ModalCustomizable
			isVisible={isVisible}
			propStyles={styles.propStyles}
			animationType="fade">
			<Text style={styles.label}>Размер шрифта</Text>
			<View style={styles.container}>
				{fontSizes.map((fontSize) => (
					<Text
						style={styles.fontSizeText}
						key={fontSize.toString()}
						onClick={() => {
							setFontSize(fontSize);
							setShowModal({...showModal, fontSize: !showModal.fontSize});
						}}>
						{fontSize}
					</Text>
				))}
			</View>
		</ModalCustomizable>
	);
}

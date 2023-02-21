import React from 'react';
import {Modal, View} from 'react-native';

import dafaultStyles from './styles';

export default function ModalCustomizable({
	children,
	propStyles,
	isVisible,
	animationType,
}) {
	const styles = {...dafaultStyles, ...propStyles};

	return (
		<Modal
			animationType={animationType ? animationType : 'slide'}
			transparent={true}
			visible={isVisible}>
			<View style={styles}>{children}</View>
		</Modal>
	);
}

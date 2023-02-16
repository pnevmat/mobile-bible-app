import {StyleSheet} from 'react-native';
import BibleApp from './src/BibleApp';

export default function App() {
	return <BibleApp />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

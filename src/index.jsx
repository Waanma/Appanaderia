import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';

import AppNavigator from './navigation';
import { styles } from './styles';

export default function App() {
  const [loaded] = useFonts({
    'LibreBaskerville-Bold': require('./assets/fonts/LibreBaskerville-Bold.ttf'),
    'LibreBaskerville-Italic': require('./assets/fonts/LibreBaskerville-Italic.ttf'),
    'LibreBaskerville-Regular': require('./assets/fonts/LibreBaskerville-Regular.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
  return <AppNavigator />;
}

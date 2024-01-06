import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/main';
import { colors } from './src/styles/themes';
import { fontsSize, margin } from './src/styles/helpers';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RN Dictionary App</Text>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main.primary,
    alignItems: "left"
  },
  title: {
    fontSize: fontsSize.L,
    margin: margin.M,
    color: colors.fonts.secondary
  }
})


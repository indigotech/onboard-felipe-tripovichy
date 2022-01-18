/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { tSTypeLiteral } from '@babel/types';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
  };

const InputWithLabel = (props : any) => (

  <View>
    <Text style={styles.inputText}>{props.title}</Text>
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      secureTextEntry={props.secureTextEntry}
    />
  </View>

);

const LoginScreen = () => (
  
  <View>
    <Text style={styles.sectionTitle}>Bem vindo(a) à Taqtile!</Text>
    <InputWithLabel title='Email' placeholder='Escreva aqui o seu email' />
    <InputWithLabel title='Senha' placeholder='Escreva aqui sua senha' secureTextEntry/>
    <View style={{marginTop: 20}}>
      <Button title='Entrar'/>
    </View>
  </View>

);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={{backgroundColor: isDarkMode ? Colors.black : Colors.white,}}>
          <LoginScreen/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
  },
  inputText: {
    paddingBottom: 5,
    paddingTop: 16,
  }
});

export default App;

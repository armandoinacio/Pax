import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../Home';
import styles from '../../screens/Authentication/style/VerificationScreenEstilo';

const VerificationScreen = () => {
  const [otp, setOTP] = useState('');
  const inputRefs = useRef([]);

  const handleVerifyOTP = () => {
    // Aqui você pode implementar a lógica para verificar o OTP
    if (otp === '1234') {
      // OTP válido, redirecione para a próxima tela
      console.log('OTP verificado com sucesso!');
    } else {
      // OTP inválido
      console.log('OTP inválido!');
    }
  };

  const handleChangeOTP = (text, index) => {
    // Atualiza o valor do dígito do OTP correspondente ao índice
    const updatedOTP = [...otp];
    updatedOTP[index] = text;
    setOTP(updatedOTP.join(''));
    const nextIndex = index + 1;
    
    if (!text && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (nextIndex < inputRefs.current.length && text) {
      inputRefs.current[nextIndex].focus();
    }
  };

  return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#f6f6f6" />
        <ScrollView 
        contentInsetAdjustmentBehavior="automatic" 
        contentContainerStyle={styles.scrollContainer} 
        showsVerticalScrollIndicator={false}
        >
            <View style={styles.content}>
                <Image
                    style={[styles.fig, styles.fig1]}
                    source={require('../../../assets/images/Caminho_1.png')}
                />
                <Image
                    style={[styles.logo1]}
                    source={require('../../../assets/images/Logo/log_1.png')}
                />
                <View style={styles.apelo}> 
                    <Text style={styles.apeloText}>Por favor verifique</Text>
                    <Text style={styles.apeloText}>seu número de celular</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.formText}>Insira a verificação de 4 dígitos</Text>
                    <Text style={styles.formText}>Código enviado para o seu número de celular</Text>
                    <Text style={styles.formText}>
                        <Text style={{fontWeight: 'bold',}}>+244 931 968 409</Text> via mensagem SMS
                    </Text>
                    <TextInput style={styles.formText}>
                        ou <Text style={{fontWeight: 'bold', color: '#008800', textDecorationLine: 'underline',}}>MUDE</Text> o seu número.
                    </TextInput>
                </View>
                <View style={styles.otpContainer}>
                    {Array.from({ length: 4 }, (_, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => (inputRefs.current[index] = ref)}
                        style={styles.otpDigit}
                        keyboardType="numeric"
                        maxLength={1}
                        value={otp[index] || ''}
                        onChangeText={(text) => handleChangeOTP(text, index)}
                    />
                    ))}
                </View>
                <TouchableOpacity style={styles.link} onPress={() => console.log('Reenviar código')}>
                    <Text style={styles.linkText}>Re-enviar o código</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={handleVerifyOTP}>
                    <Icon name="arrow-right" size={22} color="white" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
  );
};

export default VerificationScreen;
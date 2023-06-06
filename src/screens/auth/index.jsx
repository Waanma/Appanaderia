import { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { COLORS } from '../../constants/themes/colors';
import { signIn, signUp } from '../../store/actions';

const Auth = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const title = isLogin ? 'Login' : 'Register';
    const buttonTitle = isLogin ? 'Login' : 'Register';
    const messageText = isLogin ? "Don't have an account?" : 'Already have an account?';

    const onHandleChangeAuth = () => {
        setIsLogin(!isLogin);
    };

    const onHandleAuth = () => {
        dispatch(isLogin ? signIn({ email, password }) : signUp({ email, password }));
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email address"
                    placeHolderColor={COLORS.primary}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <Text style={styles.password}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    placeHolderColor={COLORS.primary}
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <View style={styles.linkContainer}>
                    <TouchableOpacity style={styles.link} onPress={onHandleChangeAuth}>
                        <Text style={styles.linkText}>{messageText}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.submitContainer}>
                    <Button title={buttonTitle} color={COLORS.transparent} onPress={onHandleAuth} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Auth;

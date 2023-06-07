import { View, Text, TextInput } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../constants/themes/colors';
import Label from '../label';

const Input = ({
    editable,
    children,
    value,
    style,
    onChangeText,
    onFocus,
    onBlur,
    maxLength,
    placeholder,
    placeholderTextColor = COLORS.inactive,
    keyboardType = 'default',
    hasError,
    error,
    touched,
    ...props
}) => {
    return (
        <View style={styles.container}>
            <Label {...props}>
                <TextInput
                    {...props}
                    editable={editable}
                    value={value}
                    style={{ ...styles.input, style }}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    keyboardType={keyboardType}
                />
            </Label>
            {hasError && touched ? (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorMessage}>{error}</Text>
                </View>
            ) : null}
        </View>
    );
};

export default Input;

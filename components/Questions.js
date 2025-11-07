import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome6 } from '@expo/vector-icons';

function Question({ question, image, options, selected, onSelect, isCorrect }) {
    return (
        <View
            style={[
                styles.questionBox,
                isCorrect === true && { borderColor: 'green', borderWidth: 2 },
                isCorrect === false && { borderColor: 'red', borderWidth: 2 },
            ]}
        >
            <Text style={styles.questionText}>{question}</Text>
            <Image source={image} style={styles.image} />

            <Picker
                selectedValue={selected}
                style={styles.picker}
                onValueChange={(value) => onSelect(value)}
            >
                <Picker.Item label="Select your answer..." value="" />
                {options.map((opt, i) => (
                    <Picker.Item key={i} label={opt} value={opt} />
                ))}
            </Picker>

            {isCorrect !== null && (
                <FontAwesome6
                    name={isCorrect ? "check" : "close"}
                    size={24}
                    color={isCorrect ? "green" : "red"}
                    style={{ marginTop: 5 }}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    questionBox: {
        width: '90%',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#ccc', // default border color
    },
    questionText: {
        fontSize: 18,
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: '600',
    },
    image: {
        width: 180,
        height: 180,
        resizeMode: 'cover',
        marginBottom: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    picker: {
        width: '80%',
        height: 50,
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
    },
});

export default Question;




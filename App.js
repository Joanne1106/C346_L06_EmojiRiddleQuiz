import React, { useState } from 'react';
import { Text, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import Question from "./components/Questions";

function MyApp() {
    const questionPool = [
        {
            id: 'q1',
            question: 'Guess the movie!',
            image: require('./img/chocolate_factory.jpg'),
            options: ['Willy Wonka', 'Charlie and the Chocolate Factory', 'Matilda'],
            correct: 'Charlie and the Chocolate Factory',
        },
        {
            id: 'q2',
            question: 'What dish could this be?',
            image: require('./img/garlic_mashpotato.jpg'),
            options: ['French Fries', 'Garlic Mashed Potatoes', 'Potato Gratin'],
            correct: 'Garlic Mashed Potatoes',
        },
        {
            id: 'q3',
            question: 'Identify the historic event!',
            image: require('./img/statue_of_liberty.jpg'),
            options: ['Statue of Liberty', 'Eiffel Tower', 'Leaning Tower of Pisa'],
            correct: 'Statue of Liberty',
        },
        {
            id: 'q4',
            question: 'Where is this place?',
            image: require('./img/japan.jpg'),
            options: ['Mount Fuji', 'Mount Everest', 'Japan'],
            correct: 'Japan',
        },
        {
            id: 'q5',
            question: 'Which vacation destination is this?',
            image: require('./img/Hawaii.jpg'),
            options: ['Hawaii', 'Maldives', 'Bali'],
            correct: 'Hawaii',
        },
        {
            id: 'q6',
            question: 'Which chilled drink is this?',
            image: require('./img/lemonade.jpg'),
            options: ['Iced Tea', 'Lemonade', 'Smoothie'],
            correct: 'Lemonade',
        },
        {
            id: 'q7',
            question: 'What movie is this?',
            image: require('./img/lion_king.jpg'),
            options: ['The Lion King', 'Madagascar', 'Jungle Book'],
            correct: 'The Lion King',
        },
        {
            id: 'q8',
            question: 'What drink is this?',
            image: require('./img/smoothie.jpg'),
            options: ['Milkshake', 'Smoothie', 'Juice'],
            correct: 'Smoothie',
        },
    ];

    const getRandomQuestions = () => {
        const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 6);
    };

    const [questions, setQuestions] = useState(getRandomQuestions());
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        let score = 0;

        questions.forEach((q) => {
            if (answers[q.id] === q.correct) score++;
        });

        let message = '';
        if (score === questions.length) message = 'Perfect! You’re an Emoji Riddle Master!';
        else if (score >= 4) message = 'Great job! Almost perfect.';
        else message = 'Keep practicing! You’ll get it next time.';

        Alert.alert(`You scored ${score}/${questions.length}`, message);
        setSubmitted(true);
    };

    const handleRestart = () => {
        setAnswers({});
        setSubmitted(false);
        setQuestions(getRandomQuestions());
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Emoji Riddle Quiz</Text>

            {questions.map((q) => (
                <Question
                    key={q.id}
                    question={q.question}
                    image={q.image}
                    options={q.options}
                    selected={answers[q.id]}
                    onSelect={(value) => setAnswers({ ...answers, [q.id]: value })}
                    isCorrect={submitted ? answers[q.id] === q.correct : null}
                />
            ))}

            {!submitted ? (
                <Button title="Submit Answers" onPress={handleSubmit} />
            ) : (
                <Button title="Restart Quiz" color="#4CAF50" onPress={handleRestart} />
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 40,
        backgroundColor: '#f0f8ff',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 40,
        textAlign: 'center',
        color: '#333',
    },
});

export default MyApp;











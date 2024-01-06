import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../../styles/themes';
import { fontsSize, margin, padding } from '../../../styles/helpers';

export default function Card({ title, description }) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.card.background,
        borderRadius: 8,
        padding: padding.M,
        margin: margin.S,
        shadowColor: colors.card.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: fontsSize.L,
        fontWeight: 'bold',
        marginBottom: margin.XS,
    },
    description: {
        fontSize: fontsSize.M,
        color: colors.fonts.primary,
    },
});


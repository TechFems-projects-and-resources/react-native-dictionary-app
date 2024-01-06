import { View, StyleSheet } from 'react-native'
import React from 'react'
//Context
import { ContextProvider } from './context'
//Components
import Results from '../results'
import SearchBar from '../search/SearchBar'
//Style
import { colors } from '../../styles/themes'
export default function Main() {
    return (
        <ContextProvider>
            <View style={styles.container}>
                <SearchBar />
            </View >
            <Results />
        </ContextProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.main.primary
    }


})
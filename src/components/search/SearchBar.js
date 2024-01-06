import { View, TextInput, StyleSheet } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
//Style
import { margin, padding } from '../../styles/helpers'
import { colors } from '../../styles/themes'
//Context
import { ResultsContext } from '../main/context'
//Api
import { searchWord } from '../../api'

export default function SearchBar() {
    const [word, setWord] = useState("cat")
    const { setResults, setSearchedWord } = useContext(ResultsContext)

    const handleSearch = async () => {
        const results = await searchWord(word);
        setResults(results.meanings);
    }

    useEffect(() => {
        handleSearch()
    }, [word])



    return (

        <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            value={word}
            onChangeText={(value) => { setSearchedWord(value); setWord(value) }}
            onEndEditing={(value) => handleSearch(value)}
        />


    )
}

const styles = StyleSheet.create({
    searchBar: {
        height: 50,
        borderColor: colors.main.secondary,
        backgroundColor: colors.main.primary,
        borderWidth: 1,
        margin: margin.M,
        padding: padding.S
    }
})
import { FlatList } from 'react-native'
import React, { useContext } from 'react'
//Context
import { ResultsContext } from '../main/context'
//core
import Card from '../core/card'
export default function Results() {

    const { searchedWord, results } = useContext(ResultsContext)
    return (
        <>
            {/* Decide how you want display the results using the card*/}
            <FlatList
                data={results.definitions}
                renderItem={({ item }) => <Card title={searchedWord} description={item.definition} />}
                keyExtractor={(item) => `item-${item.definition}}`}
                horizontal
            />
        </>
    )
}
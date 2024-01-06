import React, { useState, createContext } from 'react'

export const ResultsContext = createContext({
    searchedWord: "",
    results: [],
})
export const ContextProvider = ({ children }) => {
    const [results, setResults] = useState([])
    const [searchedWord, setSearchedWord] = useState("")

    return (
        <ResultsContext.Provider
            value={{ results, setResults, searchedWord, setSearchedWord }}>
            {children}
        </ResultsContext.Provider>
    )

}
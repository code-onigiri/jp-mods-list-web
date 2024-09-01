"use client"
import { useState } from "react"

const testdb = {
    "test1":{
        "github":"https://github.com",
        "overview":"none1"
    },
    "test2":{
        "github":"https://github.com",
        "overview":"none2"
    },
    "test3":{
        "github":"https://github.com",
        "overview":"none3"
    },
    "test4":{
        "github":"https://github.com",
        "overview":"none4"
    },
    "test5":{
        "github":"https://github.com",
        "overview":"none5"
    },
    "Foo!":{
        "github":"https://github.com",
        "overview":"none6"
    },
    "なにこれ？":{
        "github":"https://github.com",
        "overview":"none7"
    }
}


function Search() {
    const [state, setState] = useState(Object.entries(testdb))

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        const value = target.value
        const filteredEntries = Object.entries(testdb).filter(([key]) => key.includes(value))
        setState(filteredEntries.length === 0 ? [] : filteredEntries)
    }

    return (
        <>
            <div className="flex items-center bg-gray-200 rounded-md p-4">
                <h1 className="mr-4">Search</h1>
                <input type="text" className="w-full px-4 py-2 border rounded-md" onChange={handleChange} />
            </div>
            <div className="flex flex-wrap justify-center mt-4">
                {
                    state.map(([key, value]) => (
                        <Contents key={key} name={key} overview={value.overview} />
                    ))
                }
            </div>
        </>
    )
}

function Contents({name, overview}: {name: string, overview: string}){
    return (
        <div className="rounded-lg p-4 m-4 bg-white w-full ">
            <h2 className="text-2xl">{name}</h2>
            <p>{overview}</p>
        </div>
    )
}

export default Search
function Search() {
    return (
        <>
            <div className="flex items-center bg-gray-200 rounded-md p-4">
                <h1 className="mr-4">Search</h1>
                <input type="text" className="w-full px-4 py-2 border rounded-md" />
            </div>
            <div className="flex flex-wrap justify-center mt-4">
                <Contents name="test1" overview="none1" />
                <Contents name="test2" overview="none2" />
            </div>
        </>
    )
}

function Contents({name, overview}: {name: string, overview: string}){
    return (
        <div className="rounded-lg p-4 m-4 bg-white w-full p-2">
            <h2 className="text-2xl">{name}</h2>
            <p>{overview}</p>
        </div>
    )
}

export default Search
import { useEffect, useState } from "react";


// Import this function to use the HOOK:
// const {data, loading} = useFetch()


export function useFetch(url){

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect( () => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
            .finally(()=> setLoading(false))

        console.log(data)
    }, [])

    return {data, loading}
}
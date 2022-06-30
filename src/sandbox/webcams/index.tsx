import { useState, useEffect } from "react"

export default () => {
    interface IWebcam {
        id: string,
        status: string,
        title: string,
    }
    type Response = {
        limit: number,
        offset: number,
        total: number,
        webcams: Array<IWebcam>
    }
    const [state, setState] = useState<Response>()
    const [isLoaded, setLoaded] = useState(false)
    const privateKey: string = "QHhTPtikUEst3NwX6BP89BdC1BXlHqqU"
    const url: string = `https://api.windy.com/api/webcams/v2/list?key=${privateKey}`

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setState(data.result)
                setLoaded(true)
            });
    }, [])
    return (
        <>
            {isLoaded ? state?.webcams.map(webcam => (
                <p>{webcam.id} {webcam.title}</p>
            )) : <p>loading...</p>}
        </>
    )
}
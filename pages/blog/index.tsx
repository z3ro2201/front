import { useEffect } from "react"

const Index = () => {
    const redirect = useEffect(() => {
        window.location.href = "/blog/latest";
    })

    return(redirect);
}

export default Index
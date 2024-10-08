export const fetchData = async(url: string, method: string, data?: Object)=>{
    try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URI}${url}`,{
            method: method,
            headers:{
                "Content-Type": "application/json"
            },
            body: method === "GET"? undefined : JSON.stringify(data)
        })
    
        const output = await res.json();
    
        return output;
    } catch (error) {
        console.error(error);
        alert(error)
    }
}
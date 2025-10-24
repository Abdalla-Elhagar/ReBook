const API = import.meta.env.VITE_API

export const booksData = async ()=> {
    const res = await fetch(`${API}/books`)

    if(!res.ok) {
        console.log("Get books has been error")
        return
    }
    return res.json()
}

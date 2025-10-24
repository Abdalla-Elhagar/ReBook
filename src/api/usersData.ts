const API = import.meta.env.VITE_API

export const usersData = async ()=> {
    const res = await fetch(`${API}/users`)

    if(! res.ok) {
        console.log("Get users has been error")
        return
    }

    return res.json()
}
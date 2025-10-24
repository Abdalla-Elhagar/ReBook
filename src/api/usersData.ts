
export const usersData = async ()=> {
    const res = await fetch(`https://rebook-backend-0.vercel.app/users`)

    if(! res.ok) {
        console.log("Get users has been error")
        return
    }

    return res.json()
}
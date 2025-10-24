
export const booksData = async ()=> {
    const res = await fetch(`https://rebook-backend-0.vercel.app/books`)

    if(!res.ok) {
        console.log("Get books has been error")
        return
    }
    return res.json()
}

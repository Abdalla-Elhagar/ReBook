export interface UserTypes {
    _id?:string,
    name: string,
    email: string,
    phone: string,
    password: string,
    confirmPassword?: string,
}
export interface BooksTypes {
    _id?:string,
   bookName: string,
  author: string,
  description: string,
  imageUrl?: string,
  imageFile?: File | null,
  category: string,
  status: string,
  owner: string,
  addingDate: number,
  ownerData?:UserTypes;
}

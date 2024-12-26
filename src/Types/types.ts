import { User, UserCredential } from "firebase/auth"

export type ChildrenType = {
    children:JSX.Element
}
export type ContextType = {
    user: User 
    loading: boolean
    darkMode: boolean
    disable:boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    setDisable: React.Dispatch<React.SetStateAction<boolean>>
    setUser: React.Dispatch<React.SetStateAction<User>>
    signUpAuth: (email: string, password: string) => Promise<UserCredential>
    signInAuth: (email: string, password: string) => Promise<UserCredential>
    signOutAuth: () => Promise<void>
    googleAuth: () => Promise<UserCredential>
    updateAuth: (profile: object) => Promise<void>
}

export type BlogType = {
    author: string
    authorEmail:string
    categories: [string]
    commentsCount: number
    content: string
    excerpt: string
    imageUrl: string
    likes: number
    publishDate: string
    readingTime: string
    tags: [string]
    title: string
    _id: string
  
}
export type WishType = {
    _id: string
    author: string
    blog_id:string
    title: string
    excerpt:string
    imageUrl: string
    categories: [string]
    publishDate: string
    tags: [string]
   
}
export type CommentType = {
    _id: string
    blog_id: string
    comment: string
    userEmail: string
    userPhoto: string
    userName: string

}
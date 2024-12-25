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
    related_blogs: [{
        author: string
        commentsCount: number
        content: string
        excerpt: string
        imageUrl: string
        likes: number
        publishDate: string
        readingTime: string
        tags: [string]
        title: string
        sub_blog_id: string
    }]
}
export type WishType = {
    _id: string
    author: string
    title: string
    imageUrl: string
    categories: [string]
    publishDate: string
    tags: [string]
   
}

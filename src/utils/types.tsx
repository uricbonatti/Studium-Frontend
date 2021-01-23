export  type Posts = {
    id:string
    author?: string
    title:string
    image_url:string
    body: string
    category: Category[]
    created_at:string
    updated_at:string
    comments: Comments[]
    tags: Tags[]
}

export  type Category = {
    id: string
    name: string
}

export type Comments = {
    id: string
    body:string
    post_id:string
    created_at:string
    updated_at:string
}

export  type Tags = {
    id:string
    name:string
    category: Category[] 
}
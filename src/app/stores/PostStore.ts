import { create } from 'zustand'

type PostStore = {
    post: {
        caption: string,
        created_at: string,
        description: string,
        thumbnail_url: string,
        image_urls: string[],
        link_urls: string[],
    }
}

export const usePostStore = create<PostStore>()((set) => ({
    post: {
        caption: '',
        created_at: '',
        description: '',
        thumbnail_url: '',
        image_urls: [],
        link_urls: [],
    },
}))

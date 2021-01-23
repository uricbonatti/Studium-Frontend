import  gql   from 'graphql-tag'

export const GET_POSTS = gql`
query listPosts ($filter: PostFilter) {
    listPosts (filter: $filter) {
        id
        title
        image_url
        body
        category {
            id
            name
        }
        created_at
        updated_at
        comments {
            id
           
            created_at
            updated_at
            body
            post_id
        }
        tags {
            id
            name
            category {
                id
                name
            }
        }
    }
}
`


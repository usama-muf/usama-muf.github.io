import { CREATE_POST, DELETE_POST, RETRIEVE_POST, UPDATE_POST } from '../action-creators/types';

const initalState = [];

function postReducer(posts = initalState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_POST:
            return [...posts, payload];

        case RETRIEVE_POST:
            return payload;

        case UPDATE_POST:
            return payload;
        // return posts.map((post) => {
        //     if (post.id === payload.id) {
        //         return [...post, ...payload];
        //     }
        //     else {
        //         return posts;
        //     }
        // });

        case DELETE_POST:
            return posts.filter(({ id }) => id !== payload.id);

        default:
            return posts;
    }
}

export default postReducer;
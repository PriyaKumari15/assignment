export const initialState = {
    sentence: 'To lock to a specific version of the API, you prefix the URL with the version of the API to use',
    lastWord: null,
    isShow: false,
};

const data = (state = initialState, action) => {

    switch (action.type) {
        case "UPDATE_STATE":
            const sentence = action.payload;
            const data = sentence && state.sentence.trim().split(' ');
            const isShow = sentence && state.sentence !== '' ? true : false;
            return { ...state, sentence, lastWord: data && data.pop(), isShow };
        default:
            return state;
    }
};

export default data;

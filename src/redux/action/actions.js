export const NEW_LIST = "NEW_LIST"
export const UPDATE_LIST ="UPDATE_LIST"

export const newListAction = (element) => {
    return { type: NEW_LIST,
             payload: {
                 title: element.title,
                 state: element.state,
                 url: element.url,
             }
    }
}

export const updateListAction = (updated) => {
    return { type: UPDATE_LIST,
        payload: {
            title: updated.title,
            state: updated.state,
            url: updated.url,
        }
}
}
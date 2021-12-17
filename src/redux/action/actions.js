export const NEW_LIST = "NEW_LIST"
export const UPDATE_LIST ="UPDATE_LIST"

export const newListAction = (title) => {
    return { type: NEW_LIST, payload: title}
}

export const updateListAction = (id) => {
    return { type: UPDATE_LIST, payload: id}
}
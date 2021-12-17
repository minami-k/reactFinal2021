export const NEW_LIST = "NEW_LIST"
export const UPDATE_LIST ="UPDATE_LIST"

export const newListAction = (element) => {
    return { type: "NEW_LIST",
             payload: {
                 title: element.title,
                 content: element.content,
                 id: element.id,
             }
    }
}

export const updateListAction = (id) => {
    return { type: UPDATE_LIST, payload: id}
}
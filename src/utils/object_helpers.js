export const updateObjectInArray = (items, itemID, objPropName, newObjPros) => {
    return items.map(user => {
        if (user[objPropName] === itemID) {
            return {...user, ...newObjPros}
        }
        return user
    })
}

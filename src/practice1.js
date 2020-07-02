const parseData = (response) => {
    return response.data.map(user => {
        return user.reduce((acc, cur, index) => {
            return Object.assign(acc, {[response.column[index].name]: cur});
        }, {})
    })
}
export { parseData };

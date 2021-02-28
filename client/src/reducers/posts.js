export default (posts = [], action) => { // eslint-disable-line
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;            
        case 'CREATE':
            return [...posts, action.payload];                    
        default:
            return posts;
    }
}
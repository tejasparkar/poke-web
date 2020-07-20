
const initialstate = {
    posts: [
        {id:1 , title:'Pikachu evolved', body:'lorem suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'},
        {id:2 , title:'Squitle laid the eggs', body:'lorem suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'},
        {id:3 , title:'Charizard Started Listening', body:'lorem suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'},

    ] 
}


const rootReducer = (state = initialstate , action) =>{
    
    if(action.type ==="DELETE_POST"){
        let newPosts = state.posts.filter(post=>{
            return action.id !== post.id;
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state
}

export default rootReducer;
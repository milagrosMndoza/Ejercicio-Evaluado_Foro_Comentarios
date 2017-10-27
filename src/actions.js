import  store from './store'

  export const addComment = (name, comment) =>{
   const comments = [...store.getState().comments];
   const newComment= comments.concat( {
         name: name,
         comment: comment
  });
  store.setState({
        comments: newComment
})
}

 export const deleteComment = (index) =>{
	const comments =  store.getState().comments.filter( (item, id) => id != index );
	store.setState({
		comments: comments
	})
  }
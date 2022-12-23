import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { bindActionCreators } from '@reduxjs/toolkit'
// import { actionCreators } from '../../state'
import { connect } from 'react-redux'
import { retrievePostById, updatepost } from '../../state/action-creators/posts'

function EditPost({ postData, updatepost, retrievePostById }) {

    const [title, setTitle] = useState(postData.title)
    const [category, setCategory] = useState(postData.category)
    const [description, setDescription] = useState(postData.description)

    const { id } = useParams();
    const data = {
        title: title,
        category: category,
        description: description,
    };

    useEffect(() => {
        console.log('useEffect', id)
        retrievePostById(id);
    }, [])




    // const dispatch = useDispatch();
    // const action = bindActionCreators(actionCreators, dispatch);
    // const samplerResp = useSelector(state => state.sampleResponseReducer)
    // const setSampleResponseReducer = useSelector(state => state.setSampleResponseReducer)



    const updatePostBtn = (e) => {
        e.preventDefault();
        console.log('updatePostBtn Clicked');
        updatepost(id, data);
    }
    return (
        <div className='container col-6'>
            <form className='my-5'   >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" defaultValue={postData.title} placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="categorie" className="form-label">Categorie</label>
                    <input type="text" className="form-control" id="categorie" defaultValue={postData.category} placeholder="Enter Category" onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows="3" defaultValue={postData.description} placeholder='Enter Content' onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className='m-2 p-2'>

                    <button type="submit" className="btn btn-primary m-2" onClick={updatePostBtn}>Submit</button>
                    <Link to='/'>
                        <button type="button" className="btn btn-primary" formAction='/postList'>Cancel</button>
                    </Link>
                </div>
            </form >
        </div >
    )
}

// Todo.js

// TodoList.js

function mapStateToProps(state) {
    const { postReducer } = state
    console.log(state)
    const data = {
        title: "updated data updated",
        category: "cat updated",
        description: "my desc 3 ",
        likes: 1
    };
    return { postData: postReducer, data: data }
}

const mapDispatchToProps = (dispatch) => {
    return {
        retrievePostById: (id) => dispatch(retrievePostById(id)),
        updatepost: (id, data) => dispatch(updatepost(id, data)),
        // reset: () => dispatch({ type: 'RESET' }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
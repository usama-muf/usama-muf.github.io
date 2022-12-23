import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';
import { createPost } from '../../state/action-creators/posts';


function CreatePost({ createPost }) {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    // const [message, setMessage] = useState("")

    let handleSubmit = async (e) => {
        e.preventDefault();

        console.log("handling submit");
        console.log(title, category, description);

        const data = {
            title: title,
            category: category,
            description: description
        }
        console.log(data);
        createPost(data);

        // props.setSampleResponse({ posts: props.sampleResponse.posts.concat({ id: 200, title: title, category: category, content: content, }) });
        navigate('/');


    }
    return (
        <div className='container col-6'>
            <form className='my-5' onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" value={title} placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Categorie</label>
                    <input type="text" className="form-control" id="categorie" value={category} placeholder="Enter Category" onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows="3" value={description} placeholder='Enter Description' onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className='m-2 p-2'>

                    <button type="submit" className="btn btn-primary m-2">Submit</button>
                    <Link to='/'>
                        {/* <button type="button" className="btn btn-primary" formAction='/postList'>Cancel</button> */}
                    </Link>
                </div>
                {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
            </form>
        </div>
    )
}


const mapStateToProps = (state) => {
    // console.log(state);
    return {
        postData: state,
    }

}
const mapDispatchToProps = (dispatch) => {

    return ({
        createPost: (data) => { dispatch(createPost(data)) },
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
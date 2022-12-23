import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux';
import { deletePost, retrievePostById } from '../../state/action-creators/posts';

function Post({ postData, retrievePostById, deletePost }) {

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        retrievePostById(id);
    }, [id, retrievePostById])

    console.log(postData);

    const likeBtnClicked = () => {
        // setLikes(likes + 1);
    }

    const deletePostBtn = (id) => {
        console.log('delete post btn clicked', id);
        deletePost(id);
        navigate('/');
    }

    const editPostBtn = (id) => {
        console.log('edit post btn clicked', id);
        navigate('/post/edit/' + id);

    }


    return (
        <div className='container col-8 mt-5 mb-5' >
            <div className="card" style={{ border: '1px solid red' }}>
                <div className="card-header d-flex gap-2 d-md-flex justify-content-md-end">

                    <Link to="/" className="btn btn-outline-warning btn-sm">back ⬅️</Link>


                    <button onClick={likeBtnClicked} disabled={postData.length === 0} className="btn btn-outline-primary btn-sm position-relative"
                    >
                        Like 👍🏼
                        <span
                            className="badge bg-danger"
                            style={{
                                position: 'absolute',
                                top: '0',
                                right: '0',
                                transform: 'translateY(-11px)'
                            }}>
                            {postData.likes}
                        </span>
                    </button>
                    <button disabled={postData.length === 0} className="btn btn-outline-secondary btn-sm" onClick={() => editPostBtn(postData.postId)}>
                        Edit 📝
                    </button>
                    <button type="button" disabled={postData.length === 0} className="btn btn-outline-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal">
                        Delete 🗑️
                    </button>

                    <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body text-center">
                                    Are you sure you want to permanantely Delete?
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" onClick={() => deletePostBtn(postData.postId)} className="btn btn-outline-danger btn-sm" data-bs-dismiss="modal">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {<div className="card-body">
                    <h5 className="card-title">{postData.title}</h5>
                    <p className="card-text">{postData.description}</p>
                </div>}
            </div>

        </div >
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    const { postReducer } = state;
    return {
        postData: postReducer,
    }

}
const mapDispatchToProps = (dispatch) => {
    return ({
        retrievePostById: (id) => { dispatch(retrievePostById(id)) },
        deletePost: (id) => { dispatch(deletePost(id)) },
    })

}
export default connect(mapStateToProps, mapDispatchToProps)(Post)
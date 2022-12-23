import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { retrievePost } from '../../state/action-creators/posts'
import { connect } from 'react-redux';
// import postDataService from '../../services/post.service'
// import retrievePost from '../../state/action-creators/posts';

function PostList({ postData, retrievePost }) {
    const navigate = useNavigate();
    // const responseData = useSelector(async state => state.sampleResponseReducer);
    // console.log('use selector at post list', responseData);

    // const [post, setPost] = useState([]);


    // const postData = useSelector(async (state) => await state.postReducer.allpost);
    // console.log("post data", postData);

    // let finalData = useSelector(state => state.retrievePost);
    useEffect(() => {
        retrievePost();
    }, [retrievePost]);

    // const data = retrievePost();
    // const servi = postDataService.getAll
    // console.log(retrievePost());
    // console.log(useParams());
    const selectedPost = async (id) => {
        // e.preventDefault();

        console.log('clicked post id =', id)

        // const result = await props.sampleResponse.posts.filter(response => response.id === id);
        // setPost(result);
        // console.log(result);
        // console.log(post)

        navigate('/post/' + id);
        // return <Link to='post/id' />

        // return <Post post={post} setPost={setPost} />

        // calling Post.js with result and sending id as a prop

    }

    return (
        <>
            <div className="container">
                {postData.length === 0 && <h2 className='text-center mt-5'>Oops No Data Found !! Create a New Post</h2>}

                <table className="table table-hover p-1 mt-5" style={{ cursor: 'pointer' }}>
                    {postData.length > 0 && postData.map((post, index) => {
                        return <tbody key={index} onClick={() => selectedPost(post.postId)} >
                            <tr >
                                <th scope="row">{++index}</th>
                                <td >{post.title}</td>
                                <td >{post.postId}</td>
                            </tr>
                        </tbody>
                    })}
                </table>
            </div>
        </>
    )
}

function mapStateToProps(state) {
    const { postReducer } = state
    console.log(postReducer)

    return { postData: postReducer }
}

const mapDispatchToProps = (dispatch) => {
    return {
        retrievePost: () => dispatch(retrievePost()),
        // reset: () => dispatch({ type: 'RESET' }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList)
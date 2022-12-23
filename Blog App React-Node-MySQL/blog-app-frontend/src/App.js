import './App.css';
import PostList from './containers/postContainer/PostList';
import Navbar from './containers/navbar/Navbar';
import CreatePost from './containers/postContainer/CreatePost';
import Post from './containers/postContainer/Post'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { useState } from 'react';
import EditPost from './containers/postContainer/EditPost';


function App() {


  const [sampleResponse, setSampleResponse] = useState({
    "status": "ok",
    "totalResults": 2,
    "posts": [
      {
        "id": 1,
        "title": "Brittney Griner released from Russian detention: Live updates - CNN",
        "category": "Politics",
        "content": "The US Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ullam quos voluptatem amet consequuntur eos autem quae. Nobis sequi ullam atque, labore repellendus doloribus, reiciendis quasi ut fugit ab quod.lorem will soon be able to call Sweden and Finland NATO allies, Secretary of State Antony Blinken said Thursday following a meeting with his Swedish and Finnish counterparts, when asked about their … [+1703 chars]"
      },
      {
        "id": 2,
        "title": "Mohammad Ali died:",
        "category": "General",
        "content": "The US  asked about their lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ullam quos voluptatem amet consequuntur eos autem quae. Nobis sequi ullam atque, labore repellendus doloribus, reiciendis quasi ut fugit ab quodLorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ullam quos voluptatem amet consequuntur eos autem quae. Nobis sequi ullam atque, labore repellendus doloribus, reiciendis quasi ut fugit ab quod.lorem"
      },
      {
        "id": 3,
        "title": null,
        "category": null,
        "content": null
      }
    ]
  })

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<PostList />} />
          <Route path='/post/new' element={<CreatePost sampleResponse={sampleResponse} setSampleResponse={setSampleResponse} />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='/post/edit/:id' element={<EditPost sampleResponse={sampleResponse} />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;



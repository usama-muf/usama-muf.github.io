import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:5000/post",
    headers: {
        "Content-type": "application/json"
    }
});
import http from '../http-common';

class PostDataService {
    getAll() {
        return http.get('/allpost');
    }

    get(id) {
        return http.get(`/${id}`);
    }

    create(data) {
        console.log("inside post.service.data", data);
        return http.post('/addpost', data);
    }

    update(id, data) {
        return http.put(`/updatepost/${id}`, data);
    }
    delete(id) {
        return http.delete(`/deletepost/${id}`);
    }
    findbyTitle(title) {
        return http.get(`/post?title=${title}`);
    }
}

export default new PostDataService();
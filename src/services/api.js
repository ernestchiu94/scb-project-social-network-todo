import { API_URL } from 'react-native-dotenv';

export default class ApiService {
  static async getUser(email) {
    const path = `${API_URL}/users?email=${email}`;
    const result = await fetch(path);
    return result.json();
  }

  static async getTodos(id) {
    const path = `${API_URL}/todos?userId=${id}`;
    const result = await fetch(path);
    return result.json();
  }

  static async getAlbums() {
    const path = `${API_URL}/albums`;
    const result = await fetch(path);
    return result.json();
  }

  static async getUserById(id) {
    const path = `${API_URL}/users?id=${id}`;
    const result = await fetch(path);
    return result.json();
  }

  static async getPhotosByAlbumId(id) {
    const path = `${API_URL}/photos?albumId=${id}`;
    const result = await fetch(path);
    return result.json();
  }

  static async getPosts() {
    const path = `${API_URL}/posts`;
    const result = await fetch(path);
    return result.json();
  }

  static async getCommentsByPostId(id) {
    const path = `${API_URL}/comments?postId=${id}`;
    const result = await fetch(path);
    return result.json();
  }
}

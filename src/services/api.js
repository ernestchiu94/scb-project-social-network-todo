import { API_URL } from 'react-native-dotenv';

export default class ApiService {
  static async getUser(email) {
    const path = `${API_URL}/users?email=${email}`;
    const result = await fetch(path);
    return result.json();
  }
}

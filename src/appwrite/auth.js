import { Client, Account, ID } from 'appwrite';
import config from '../config/config';
class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(config.appwrite_url)
      .setProject(config.appwrite_project_id);
    this.account = new Account(this.client);
  }

  async handleUserRegistration({ firstname, lastname, email, password }) {
    try {
      const fullName = `${firstname} ${lastname}`;
      const newUser = await this.account.create(
        ID.unique(),
        email,
        password,
        fullName
      );
      if (newUser) {
        return this.handleUserLogin({ email, password });
      } else return newUser;
    } catch (error) {
      throw error;
    }
  }
  async handleUserLogin({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async handleUserLogout() {
    return await this.account.deleteSessions();
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;

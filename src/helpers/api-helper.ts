import axios from "axios";
import { Repository } from "../domain/repository";

const apiLink = "https://api.github.com/users/";

export const apiHelper = {
  async getAllRepositories(username: string): Promise<Repository[]> {
    const url = apiLink + username + "/repos?per_page=10000";
    const repositories = await axios.get<Repository[]>(url);
    return repositories.data;
  },
};

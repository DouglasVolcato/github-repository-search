import { useEffect, useState } from "react";
import { Repository } from "../domain/repository";
import { apiHelper } from "../helpers/api-helper";
import { RepositoryCard } from "./repositoryCard";
import { RepositorySearchForm } from "./repositorySearchForm";

export function Body() {
  const [repositories, setRepostiories] = useState<Repository[]>([]);

  async function getAllRepositories(username: string) {
    const response = await apiHelper.getAllRepositories(username);
    setRepostiories(response);
  }

  function renderCards() {
    return repositories.length > 0 ? (
      repositories.map((repository) => (
        <RepositoryCard repository={repository} />
      ))
    ) : (
      <></>
    );
  }

  //   useEffect(() => {
  //     getAllRepositories();
  //   }, []);

  return (
    <div className="Body">
      <RepositorySearchForm callbackFunction={getAllRepositories} />
      {renderCards()}
    </div>
  );
}

import { useEffect, useState } from "react";
import { Repository } from "../domain/repository";
import { apiHelper } from "../helpers/api-helper";
import { RepositoryCard } from "./repositoryCard";
import { RepositorySearchForm } from "./repositorySearchForm";

export function Body() {
  const [repositories, setRepostiories] = useState<Repository[]>([]);
  const [searchParam, setSearchParam] = useState<string>("");

  async function getAllRepositories(username: string) {
    const response = await apiHelper.getAllRepositories(username);
    setRepostiories(response);
  }

  function changeSearchParam(id: string): void {
    setSearchParam(id);
  }

  function renderCards() {
    return repositories.length > 0 ? (
      repositories.map((repository) => {
        if (
          searchParam === "" ||
          searchParam.toString() === repository.id.toString()
        ) {
          return <RepositoryCard repository={repository} />;
        }
        return <></>;
      })
    ) : (
      <></>
    );
  }

  //   useEffect(() => {
  //     getAllRepositories();
  //   }, []);

  return (
    <div className="Body">
      <RepositorySearchForm
        searchUserFunction={getAllRepositories}
        searchIdFunction={changeSearchParam}
      />
      {renderCards()}
    </div>
  );
}

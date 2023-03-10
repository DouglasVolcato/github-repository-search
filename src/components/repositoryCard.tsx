import { Repository } from "../domain/repository";

type Params = {
  repository: Repository;
};

export function RepositoryCard({ repository }: Params) {
  return (
    <div className="RepositoryCard">
      <p>ID: {repository.id}</p>
      <p>{repository.name}</p>
      <a href={repository.html_url}>Link</a>
    </div>
  );
}

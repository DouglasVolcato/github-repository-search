import { useState } from "react";

type Params = {
  searchUserFunction: (username: string) => Promise<void>;
  searchIdFunction: (id: string) => void;
};

export function RepositorySearchForm({
  searchUserFunction,
  searchIdFunction,
}: Params) {
  const [username, setUsername] = useState<string>("");
  const [id, setId] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    searchIdFunction(id);
    searchUserFunction(username);
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <label htmlFor="Id">ID (optional)</label>
      <input
        type="text"
        name="Id"
        onChange={(event) => setId(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

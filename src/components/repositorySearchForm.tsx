import { useState } from "react";

type Params = {
  callbackFunction: (username: string) => Promise<void>;
};

export function RepositorySearchForm({ callbackFunction }: Params) {
  const [username, setUsername] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    callbackFunction(username);
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

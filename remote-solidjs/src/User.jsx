import { createResource } from "solid-js";

const fetchUsers = async () =>
  (
    await fetch("https://jsonplaceholder.typicode.com/users?_page=1&_limit=10")
  ).json();

export default () => {
  const [users] = createResource(fetchUsers);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        <For each={users()}>
          {(user) => (
            <li>
              {user.id}: {user.name}
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

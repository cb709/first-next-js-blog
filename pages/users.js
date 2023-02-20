function UserList({ name }) {
  console.log(name);
  return (
    <>
      <h1>List of Users</h1>
    </>
  );
}

export default UserList;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      name: "Chinmoy",
    },
  };
}

export default function User({ user }) {
  console.log(user);
  const { name, id } = user;
  return (
    <div className="box">
      <h3>Name: {name}</h3>
      <p>Email: {id}</p>
    </div>
  );
}

function UserCard({ name, email }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px auto',
        width: '300px',
      }}
    >
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default UserCard;
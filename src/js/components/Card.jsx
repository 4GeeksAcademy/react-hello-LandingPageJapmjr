export const Card = (props) => {
  const imageUrl =
    "https://images.unsplash.com/photo-1759936802371-e3c6eaf657a1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=770";
  return (
        <div className="card" style={{ width: "18rem" }}>
      <img src={props.imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{props.description}</p>
      </div>
      <div className="card-footer text-body-secondary text-center">
        Find Out More!
      </div>
    </div>
  );
};

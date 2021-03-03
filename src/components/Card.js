import "./styles/Card.css";

const Card = ({ data, error }) => {
  console.log(data);
  return (
    <div className="container">
      <div className="row">
        {data.map((c) => (
          <div key={c.id} className="col-lg-4 col-md-12 card-container">
            <div className="my-card">
              <img className="img-fluid" src={c.image} alt="img" />
              <div className="card-info">
                <h3>Nombre: {c.name}</h3>
                <p>Estado actual: {c.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {error && <p>Seguimos buscando tu contenido</p>}
    </div>
  );
};

export default Card;

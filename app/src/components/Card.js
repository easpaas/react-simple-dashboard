const Card = ({ title, value }) => (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
  export default Card;
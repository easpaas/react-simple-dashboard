const Card = ({ title, info, value }) => (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '10px', textAlign: 'center' }}>
      <h3>{title}</h3>
      <p style={{fontWeight: '400', fontSize: '10px'}}>{info ?? ''}</p>
      <hr/>
      <p style={{ fontWeight: '900', fontSize: '32px', color: 'rgb(25, 118, 210)' }}>{value}</p>
    </div>
);

export default Card;
function Botao({ onClick, children }) {
  return (
    <button onClick={onClick} style={{ marginLeft: "10px" }}>
      {children}
    </button>
  );
}

export default Botao;

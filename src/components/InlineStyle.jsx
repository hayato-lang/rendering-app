export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };
  const titleStyle = {}
  const buttonStyle = {}
  return (
    <div style={containerStyle}>
      <p>-- InlineStyle --</p>
      <button>ハゲタコ</button>
    </div>
  );
}
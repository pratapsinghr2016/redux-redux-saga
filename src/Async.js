const Async = ({ res }) => {
  return (
    <div style={{ marginTop: 20 }}>{res ? JSON.stringify(res) : "___"}</div>
  );
};

export default Async;

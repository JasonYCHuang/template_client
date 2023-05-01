const styleRoot = {
  border: '1px solid red',
  borderRadius: '3px',
};

const styleContainer1 = {
  border: '2px solid #00ff00',
  borderRadius: '10px',
  margin: '5px 10px 20px 30px',
};

const styleContainer2 = {
  backgroundColor: '#ddd',
  border: '2px solid blue',
  borderRadius: '3px',
};

const Container1Comp = () => {
  const text = 'Hello World... Basic 01';

  return (
    <p>
      { text }
    </p>
  );
};

const PageStyleBasic = () => (
  <div style={styleRoot}>
    <div style={styleContainer1}>
      { Container1Comp() }
    </div>
    <div style={styleContainer2}>
      <p>Hello World... Basic 02</p>
    </div>
  </div>
);

export default PageStyleBasic;

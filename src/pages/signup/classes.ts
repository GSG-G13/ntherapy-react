interface Type {
  [key: string]: string;
}

const boxStyle: Type = {
  marginTop: '150px',
  marginRight: '45px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
};

const textFieldStyle: Type = {
  maxWidth: '120%',
  display: 'flex',
};

const buttonStyle: Type = {
  maxWidth: '120%',
  marginTop: '12px',
  marginBottom: '10px',
};

const gridStyle: Type = {
  height: '100vh',
  overflow: 'hidden',
};

const imageStyle: Type = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',

};

const fileUploadStyle:Type = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '120%',
  color: '#000',
  backgroundColor: '#DDD',
  margin: '20px 0',
  padding: '10px 0',
};

export {
  boxStyle, textFieldStyle, buttonStyle, gridStyle, imageStyle, fileUploadStyle,
};

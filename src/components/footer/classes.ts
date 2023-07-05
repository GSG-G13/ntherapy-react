interface Type {
    [key: string]: string;
}

const BoxContainer: Type = {
  backgroundColor: '#5885ff',
  boxShadow: '10px 10px 8px 6px #888888',
  mt: '45px',
};

const BoxContainerFooter: Type = {
  maxWidth: 'container',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};
const TypographyBody1: Type = {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '18.52px',
  lineHeight: '28px',
  width: '500px',
  textAlign: 'center',
  mx: 'auto',
  mt: '-20px',
};

const TypographyH3: Type = {
  color: '#fff',
  fontWeight: '600',
  fontSize: '22.52px',
  lineHeight: '28px',
  textAlign: 'center',
};
const TypographyBody2: Type = {
  color: '#fff',
  fontWeight: '500',
  fontSize: '18.52px',
  lineHeight: '28px',
  textAlign: 'center',
  marginTop: '20px',
};

const BoxCopy: Type = {
  maxWidth: 'container',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
};

export {
  BoxContainer, BoxContainerFooter, TypographyBody1, TypographyH3, BoxCopy, TypographyBody2,
};

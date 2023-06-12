interface Card {
  [key: string]: string;
}

const card: Card = {
  maxWidth: '230px',
  maxHeight: '350px',
  padding: '0',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
};
const button: Card = {
  width: '100%',
  margin: '0',
  borderRadius: '0',
  marginTop: '5px' 
};
const Named: Card = {
  textAlign:'center',
  paddingTop:'1px',
  margin:'0'
};

export   {card,button,Named};
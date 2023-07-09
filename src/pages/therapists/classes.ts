interface Type {
  [key: string]: string | number ;
}

const SearchBoxStyle: Type = {
  width: '70%',
  maxWidth: 400,
  borderRadius: '999px',
  backgroundColor: '#eee',
  paddingLeft: 2,
  paddingRight: 2,
};

const SelectInputStyle: Type = {
  with: '30%',
  marginRight: '50px',
  backgroundColor: '#eee',
  borderRadius: '999px',
};

export { SearchBoxStyle, SelectInputStyle };

interface Type {
  [key: string]: string | number ;
}

const SearchBoxStyle: Type = {
  width: '100%',
  maxWidth: 400,
  borderRadius: '999px',
  backgroundColor: '#eee',
  paddingLeft: 2,
  paddingRight: 2,
};

// eslint-disable-next-line import/prefer-default-export
export { SearchBoxStyle };

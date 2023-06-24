interface Type {
  [key: string]: string | number ;
}

const SkeletonBoxStyle: Type = {
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};
const SearchBoxStyle: Type = {
  width: '100%',
  maxWidth: 400,
  borderRadius: '999px',
  backgroundColor: '#f5f5f5',
  paddingLeft: 2,
  paddingRight: 2,
};

export { SkeletonBoxStyle, SearchBoxStyle };

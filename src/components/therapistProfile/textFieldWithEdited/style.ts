const getStyle = (dataType:string) => ({
  width: dataType === 'bio' ? '900px' : '400px',
  '& .MuiInputBase-input.Mui-disabled': {
    WebkitTextFillColor: dataType === 'fullName' ? '#2B127B' : 'black',
  },
  '& input': {
    color: 'red',
    fontSize: dataType === 'fullName' ? '28px' : '18px',
    fontWeight: dataType === 'fullName' ? 'bolder' : 'bold',
  },
  '& .css-66dh3a-MuiInputBase-input-MuiInput-input ': {
    color: 'red',
    fontSize: '17px',
  },
});

export default getStyle;

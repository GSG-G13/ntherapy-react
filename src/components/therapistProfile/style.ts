const getStyle = (dataType:string) => ({
  width: dataType === 'textArea' ? '900px' : '400px',
  '& .MuiInputBase-input.Mui-disabled': {
    WebkitTextFillColor: dataType === 'h1' ? '#2B127B' : 'black',
  },
  '& input': {
    color: 'red',
    fontSize: dataType === 'h1' ? '28px' : '17px',
    fontWeight: dataType === 'h1' ? 'bolder' : 'bold',
  },
  '& .css-66dh3a-MuiInputBase-input-MuiInput-input ': {
    color: 'red',
    fontSize: '17px',
  },
});

export default getStyle;

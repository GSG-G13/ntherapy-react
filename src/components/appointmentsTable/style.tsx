interface Cell {
    [key: string]: string;
}

const headerCell: Cell = {
  textAlign: 'center', color: 'white', fontSize: '16px', textTransform: 'uppercase', fontStyle: 'bolder',
};
const bodyCell: Cell = { margin: '10px', textAlign: 'center' };
const spinner : Cell = {
  height: '100px',
  width: '100px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50px, -50px)',
};
const container = {
  margin: '50px auto', border: '#516EFF solid 1px', borderRadius: '5px', boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.077)',
};
export {
  headerCell, bodyCell, spinner, container,
};

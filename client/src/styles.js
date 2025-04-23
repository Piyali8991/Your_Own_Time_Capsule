import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  appBar: {
    background: 'linear-gradient(to right, #00B0FF, #FF4081)', // Gradient AppBar
    padding: '1rem 2rem',
    color: 'white',
    borderRadius: '15px',
    marginBottom: '2rem',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerText: {
    fontFamily: 'Poppins, sans-serif', // Font style for header
    fontSize: '2rem',
    fontWeight: 'bold',
    marginRight: 'auto',
    textAlign: 'left',
  },
  subHeaderText: {
    marginTop: '0.5rem',
    color: '#eeeeee',
  },
  image: {
    marginLeft: 'auto',
  },
  postCard: {
    backgroundColor: 'white',
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    margin: '1rem 0',
  },
  formCard: {
    backgroundColor: 'white',
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    margin: '1rem 0',
  },
}));

export default useStyles;

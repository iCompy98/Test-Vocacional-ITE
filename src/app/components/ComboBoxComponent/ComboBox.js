import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const ComboBox = () => {

    const classes = useStyles();
    const [Carrera, setCarrera] = React.useState('');
    const [open, setOpen] = React.useState(false);
  
    const handleChange = (event) => {
      setCarrera(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    return (
    <div>
        <Button className={classes.button} onClick={handleOpen}>
          Elige tu primera Opcion de Carrera
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Carrera</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={Carrera}
            onChange={handleChange}
          >
            
      
            <MenuItem value={10}> Ingeniería Electromecánica</MenuItem>
            <MenuItem value={20}>Ingeniería en Gestión Empresarial</MenuItem>
            <MenuItem value={30}>Ingeniería Industrial</MenuItem>

            <MenuItem value={30}>Ingeniería Mecatrónica</MenuItem>
            <MenuItem value={30}>Ingeniería en Sistemas Computacionales</MenuItem>
            <MenuItem value={30}>Licenciatura en Administración</MenuItem>
            
          </Select>



        


        </FormControl>
      </div>  );
}
 
export default ComboBox;

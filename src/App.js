import React from 'react';
import { Modal, FormControl, Box, Link, Button, Container, Typography, InputLabel, Input, FormHelperText} from '@material-ui/core';
import { CardHeader } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './index.css'


function getModalStyle() {
    return {
      margin: `auto`,
    };
}

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      alignItems: 'center', 
      justifySelf: 'center',
      alignSelf: 'center'
    },
    modal: {
        marginLeft: '40%',
        marginTop: '10%'
    }
}));


const SimpleModal = () => {
    const [open, setOpen] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleSubmit = (e) => {

        e.preventDefault();
    }

    const formBody = (
        <div style={modalStyle} className={classes.paper}>
            <CardHeader title="Add new task"></CardHeader>
            <FormControl>
                <InputLabel htmlFor="description-input">Task Description</InputLabel>
                <Input id="description-input" aria-describedby="description-helper-text" />
                <FormHelperText id="description-helper-text"> Give a brief description of the task to be completed :)</FormHelperText>
                <Button type="submit" variant="containedSecondary" onClick={handleSubmit} value="Submit">Create</Button>
            </FormControl>
        </div>
    )

    return (
        <div className="modalDiv">
            <Button variant="contained" onClick={handleOpen} color="secondary">
                New
            </Button>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {formBody}
            </Modal>
        </div>
    );

}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <SimpleModal>
            Modal :D
        </SimpleModal>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography>
      </Box>
    </Container>
  );
}
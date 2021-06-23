import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3),
      minWidth: 400
    },
}));

export const ModalComponent = (props) => {
    const { isOpen, handleClose, children } = props;
    const classes = useStyles();

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={isOpen}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={isOpen}>
                <div className={classes.paper}>
                    {children}
                </div>
            </Fade>
        </Modal>
    )
}

ModalComponent.propTypes = {
    isOpen: PropTypes.bool,
    handleClose: PropTypes.func,
    children: PropTypes.node
}


export default ModalComponent;
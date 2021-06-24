import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button/Button';
import ModalComponent from '../Modal/Modal';
import FileUploader from '../FileUploader/FileUploader';
import styles from './TableUploads.module.scss';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

const TableUploads = () => {
    const classes = useStyles();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openUploadModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const files = [
        {
            id: '1',
            filename: 'Business Requirement Document v1',
            dateUploaded: '2021-06-26',
            uploadedBy: 'Shen Sabado'
        },
        {
            id: '2',
            filename: 'Business Requirement Document v2',
            dateUploaded: '2021-06-28',
            uploadedBy: 'Shen Sabado'
        },
        {
            id: '3',
            filename: 'Business Requirement Document v3',
            dateUploaded: '2021-06-29',
            uploadedBy: 'Shen Sabado'
        }
    ];

    return (
        <>
            <TableContainer elevation={0} component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Files</TableCell>
                            <TableCell align="right">Date Uploaded</TableCell>
                            <TableCell align="right">Uploaded By</TableCell>
                            <TableCell align="right">
                                <Button
                                    type="button" 
                                    classes={['Primary', 'Small']}
                                    clicked={openUploadModal}
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {files.map((file) => (
                            <TableRow key={file.id}>
                                <TableCell component="th" scope="row">
                                    {file.filename}
                                </TableCell>
                                <TableCell align="right">
                                    {file.dateUploaded}
                                </TableCell>
                                <TableCell align="right">
                                    {file.uploadedBy}
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.ActionButton}>
                                        <Button type="button" classes={['Secondary', 'Small']}>
                                            <FontAwesomeIcon icon={faEye} />
                                        </Button>
                                    </div>
                                    <div className={styles.ActionButton}>
                                        <Button type="button" classes={['Secondary', 'Small']}>
                                            <FontAwesomeIcon icon={faDownload} />
                                        </Button>
                                    </div>
                                    <div className={styles.ActionButton}>
                                        <Button type="button" classes={['Secondary', 'Small']}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <ModalComponent isOpen={isModalOpen} handleClose={closeModal}>
                <FileUploader />
            </ModalComponent>
        </>
    )
}

export default TableUploads;
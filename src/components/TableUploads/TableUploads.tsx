import { useState } from 'react';
import uuid from 'react-uuid'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';
import { findIndex } from 'lodash';

import Button from '../Button/Button';
import ModalComponent from '../Modal/Modal';
import FileUploader from '../FileUploader/FileUploader';
import styles from './TableUploads.module.scss';
import { FileUpload } from '../../models/file-upload.model';
import storage from '../../firebase/firebase';
import { ProjectFile } from '../../models/projects.model';
import { useDispatch } from 'react-redux';
import { updateProject } from '../../store/Project/project-actions';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

const TableUploads = (props) => {
    const { project, propertyName } = props;
    const classes = useStyles();
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openUploadModal = (): void => {
        setIsModalOpen(true);
    }

    const closeModal = (): void => {
        setIsModalOpen(false);
    }

    const createProjectFile = (
        filename: string, 
        url: string
    ): ProjectFile => {
        return {
            id: uuid(),
            filename: filename,
            fileUrl: url,
            dateUploaded: format(new Date(), 'MMMM d, yyyy'),
            uploadedBy: 'Shen Sabado'
        }
    }

    const updateProjectFiles = async (
        file: ProjectFile
    ): Promise<any> => {
        if (!project[propertyName]) {
            project[propertyName] = [file];
        } else {
            project[propertyName].push(file);
        }

        await dispatch(updateProject(project));
        closeModal();
    }

    const handleFileUpload = (values: FileUpload): void => {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(values.filename);
        fileRef.put(values.file).on('state_changed', () => {}, 
        () => {
            alert('error uploading');
        }, () => {
            storage.ref().child(values.filename)
                .getDownloadURL()
                .then((url) => {
                    const file = createProjectFile(values.filename, url);
                    updateProjectFiles(file);
                })
        });
    }

    const viewFile = (file: ProjectFile): void => {
        window.open(file.fileUrl);
    }

    const deleteFile = (file: ProjectFile): void => {
        const fileRef = storage.refFromURL(file.fileUrl);
        fileRef.delete().then(() => {
            const index = findIndex(project[propertyName], { id: file.id });
            project[propertyName].splice(index, 1);
            dispatch(updateProject(project));
        }).catch(() => {
            alert('error deleting file');
        });
    }


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
                        {project[propertyName]?.map((file: ProjectFile) => (
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
                                        <Button
                                            type="button"
                                            classes={['Secondary', 'Small']}
                                            clicked={() => viewFile(file)}
                                        >
                                            <FontAwesomeIcon icon={faEye} />
                                        </Button>
                                    </div>
                                    <div className={styles.ActionButton}>
                                        <Button
                                            type="button"
                                            classes={['Secondary', 'Small']}
                                            clicked={() => deleteFile(file)}
                                        >
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
                <FileUploader upload={handleFileUpload} />
            </ModalComponent>
        </>
    )
}

TableUploads.propTypes = {
    project: PropTypes.object.isRequired,
    propertyName: PropTypes.string.isRequired
}

export default TableUploads;
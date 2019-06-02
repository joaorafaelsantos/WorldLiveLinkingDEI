import React from 'react';
import './ProfileValidation.css';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';


const ProfileValidation = (props) => {

    const rows = props.alumni.map(alumni => {
        return {
            id: alumni.id,
            name: alumni.name,
            email: alumni.email,
            company: alumni.company.name,
            course: alumni.course.name
        }
    });


    return (
        <div style={{background: 'transparent', margin: '3rem'}}>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell align="right">E-mail</TableCell>
                            <TableCell align="right">Company</TableCell>
                            <TableCell align="right">Course</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.company}</TableCell>
                                <TableCell align="right">{row.course}</TableCell>
                                <TableCell align="right">
                                    <FormControl>
                                        <Button
                                            variant='contained'
                                            onClick={(e) => props.handleClick(row, e)}
                                        >
                                            Validate
                                        </Button>
                                    </FormControl>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>


    );
};

export default ProfileValidation;

import React from 'react';
import './ProfileValidation.css';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const ProfileValidation = (props) => {


    // props will contain the list of alumni to be validated
    console.log(props);

    let rows = [{
        name: "Jose Antonio",
        email: "2010879125@fe.up.pt",
        username: "joseant",
        company: "NOS",
        course: "MIEC"

    }, {
        name: "Andre Gouveia",
        email: "201059125@fe.up.pt",
        username: "andregouveia",
        company: "EDP",
        course: "MESW"

    }];

    return (
        <div style={{background: 'transparent'}}>
            {JSON.stringify(props)}
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell align="right">E-mail</TableCell>
                            <TableCell align="right">Username</TableCell>
                            <TableCell align="right">Company</TableCell>
                            <TableCell align="right">Course</TableCell>
                            <TableCell align="right">State</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.username}</TableCell>
                                <TableCell align="right">{row.company}</TableCell>
                                <TableCell align="right">{row.course}</TableCell>
                                <TableCell align="right">
                                    <FormControl>

                                        <Select native >
                                            <option value="0" >Deactivated</option>
                                            <option value="1">Active</option>

                                        </Select>
                                    </FormControl>
                              
                                </TableCell> 
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                
            </Paper>
            <Button variant="contained">Save</Button>
        </div>
    
           
     
    );
};

export default ProfileValidation;

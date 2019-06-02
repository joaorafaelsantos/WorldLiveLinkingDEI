import React from 'react';
import './ProfileValidation.css';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";


const ProfileValidation = (props) => {


    // props will contain the list of alumni to be validated
    console.log(props);

    let rows = [{
        name: "Chocolate",
        calories: "5",
        fat: "10",
        carbs: "40",
        protein: "98"
    }, {
        name: "Pudim",
        calories: "5",
        fat: "10",
        carbs: "40",
        protein: "98"
    }, {
        name: "Ice Cream",
        calories: "5",
        fat: "10",
        carbs: "40",
        protein: "98"
    }];

    return (
        <div style={{background: 'transparent'}}>
            {JSON.stringify(props)}
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
};

export default ProfileValidation;

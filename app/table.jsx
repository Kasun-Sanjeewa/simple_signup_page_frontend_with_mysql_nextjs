import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function BasicTable({ users }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ backgroundColor: '#1976d2' }}>
                    <TableRow>
                        <TableCell align="right" sx={{ color: '#fff', borderLeft: '1px silid' }}>Id</TableCell>
                        <TableCell align="right" sx={{ color: '#fff' }}>Name</TableCell>
                        <TableCell align="right" sx={{ color: '#fff' }}>Gender</TableCell>
                        <TableCell align="right" sx={{ color: '#fff' }}>Email</TableCell>
                        <TableCell align="right" sx={{ color: '#fff' }}>Contact</TableCell>
                        <TableCell align="right" sx={{ color: '#fff' }}>Address</TableCell>
                        <TableCell align="right" sx={{ color: '#fff' }}>State</TableCell>
                        <TableCell align="right" sx={{ color: '#fff' }}>Country</TableCell>
                        <TableCell align="right" sx={{ color: '#fff' }}>Uniqueregid</TableCell>
                        <TableCell align="right" sx={{ color: '#fff' }}>Imagename</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.length > 0 ? users.map((user) => {
                            return (
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="right">{user.id}</TableCell>
                                    <TableCell align="right">{user.name}</TableCell>
                                    <TableCell align="right">{user.gender}</TableCell>
                                    <TableCell align="right">{user.email}</TableCell>
                                    <TableCell align="right">{user.contact}</TableCell>
                                    <TableCell align="right">{user.address}</TableCell>
                                    <TableCell align="right">{user.state}</TableCell>
                                    <TableCell align="right">{user.country}</TableCell>
                                    <TableCell align="right">{user.uniqueregid}</TableCell>
                                    <TableCell align="right">{user.imagename}</TableCell>

                                </TableRow>
                            )
                        }) : (
                            <TableRow>

                                <TableCell component='th' scope="row">No Data</TableCell>

                            </TableRow>
                        )

                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

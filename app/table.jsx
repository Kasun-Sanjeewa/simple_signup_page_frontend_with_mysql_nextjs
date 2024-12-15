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
                {/* Table Head */}
                <TableHead sx={{ backgroundColor: '#1976d2' }}>
                    <TableRow>
                        <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold', border: '1px solid #fff' }}>Id</TableCell>
                        <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold', border: '1px solid #fff' }}>Name</TableCell>
                        <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold', border: '1px solid #fff' }}>Gender</TableCell>
                        <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold', border: '1px solid #fff' }}>Email</TableCell>
                        <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold', border: '1px solid #fff' }}>Contact</TableCell>
                        <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold', border: '1px solid #fff' }}>Address</TableCell>
                        <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold', border: '1px solid #fff' }}>State</TableCell>
                        <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold', border: '1px solid #fff' }}>Country</TableCell>
                        <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold', border: '1px solid #fff' }}>Uniqueregid</TableCell>
                        <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold', border: '1px solid #fff' }}>Imagename</TableCell>
                    </TableRow>
                </TableHead>

                {/* Table Body */}
                <TableBody>
                    {
                        users.length > 0 ? users.map((user) => {
                            return (
                                <TableRow key={user.id}>
                                    <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{user.id}</TableCell>
                                    <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{user.name}</TableCell>
                                    <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{user.gender}</TableCell>
                                    <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{user.email}</TableCell>
                                    <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{user.contact}</TableCell>
                                    <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{user.address}</TableCell>
                                    <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{user.state}</TableCell>
                                    <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{user.country}</TableCell>
                                    <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{user.uniqueregid}</TableCell>
                                    <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{user.imagename}</TableCell>
                                </TableRow>
                            )
                        }) : (
                            <TableRow>
                                <TableCell colSpan={10} align="center" sx={{ border: '1px solid #ccc' }}>No Data</TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

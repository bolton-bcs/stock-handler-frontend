import React, { Component } from 'react';
import { Grid, Typography } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import GDSEButton from '../../components/common/Button';
import GDSESnackBar from "../../components/common/SnackBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SupplierService from "../../services/SupplierService";

class Supplier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                supplier_id: '',
                supplier_name: '',
                supplier_address: '',
                supplier_number: '',
                supplier_email: ''
            },
            alert: false,
            message: '',
            severity: '',

            data: [
                {
                    id: "S001",
                    name: "Danuja",
                    address: "Galle",
                    tel: '0756122196',
                    email: 'danu@gamail.com'
                },
                {
                    id: "S002",
                    name: "Induwara",
                    address: "Colombo",
                    tel: '0775842157',
                    email: 'info.induwara.com'
                },
                {
                    id: "S003",
                    name: "Saman",
                    address: "Panadura",
                    tel: '0765412100',
                    email: 'saman.com'
                },
            ],
            btnLabel: 'save',
            btnClearLabel: 'Clear',
            btnColor: 'primary',
            btnClearColor: 'warning',
            supplierCount: 0
        }
    }

    loadData = async () => {

    };

    deleteCustomer = async (id) => {
        console.log('delete customer');
    };

    updateCustomer = (data) => {
        console.log(data)

        this.setState({
            btnLabel: 'update',
            btnColor: 'secondary',
            formData: {
                id: data.id,
                name: data.name,
                address: data.address,
                tel: data.tel,
                email: data.email
            }
        });
    };

    clearFields = () => {
        this.setState({
            btnLabel: 'save',
            btnColor: 'primary',
            formData: {
                supplier_id: '',
                supplier_name: '',
                supplier_address: '',
                supplier_number: '',
                supplier_email: ''
            },
        });
    };


    submitCustomer = async () => {
        let formData = this.state.formData;

        if (this.state.btnLabel === "save") {
            let res = await SupplierService.postSupplier(formData);

            if(res.status === 200) {
                console.log('sucess')
                this.setState({
                    alert: true,
                    message: 'added successfully!',
                    severity: 'success'
                });
                // this.loadData();
            } else {
                console.log('err')
                this.setState({
                    alert: true,
                    message: 'added not successfully!',
                    severity: 'error'
                });
            }

            console.log(formData);
        } else {
            console.log('update');
        }
    };

    setSupplierCount = () => {
        this.setState({
            supplierCount: this.state.data.length
        })
    }

    componentDidMount() {
        this.loadData();
        this.setSupplierCount();
    }

    render() {
        return (
            <>
                <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitCustomer} >
                    <Grid container className="pt-2" spacing={3}>
                        <Grid item lg={6} xs={12} sm={12} md={6}>
                            <Typography variant="h3">Supplier Manage</Typography>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={12} md={6}>
                            <Card variant="outlined">
                                <CardContent style={{ marginLeft: '35%', color: 'red' }}>
                                    <Typography variant="h6" component="div" >
                                        Supplier Count
                                    </Typography>
                                    <Typography style={{ marginLeft: '15%' }} variant="h4" color="text.secondary">
                                        {this.state.supplierCount}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Typography variant="subtitle1">Supplier Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Supplier Id"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.supplier_id}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.supplier_id = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Typography variant="subtitle1">Supplier Name</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Supplier Name"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.supplier_name}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.supplier_name = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Typography variant="subtitle1">Supplier Address</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Supplier Address"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.supplier_address}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.supplier_address = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Typography variant="subtitle1">Contact Number</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Contact Number"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.supplier_number}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.supplier_number = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Typography variant="subtitle1">Supplier Email</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Supplier Email"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.supplier_email}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.supplier_email = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        {/*<Grid item xs={12} sm={12} md={4} lg={4}>*/}
                        {/*    <Typography variant="subtitle1">Products</Typography>*/}
                        {/*    <TextValidator*/}
                        {/*        id="outlinedbasic"*/}
                        {/*        placeholder="Products"*/}
                        {/*        variant="outlined"*/}
                        {/*        size="small"*/}
                        {/*        style={{ width: '100%' }}*/}
                        {/*        value={this.state.formData.product}*/}
                        {/*        onChange={(e) => {*/}
                        {/*            let formData = this.state.formData*/}
                        {/*            formData.product = e.target.value*/}
                        {/*            this.setState({ formData })*/}
                        {/*        }}*/}
                        {/*        validators={['required']}*/}
                        {/*    />*/}
                        {/*</Grid>*/}
                        <Grid container style={{ marginTop: '10px' }} direction="row" justifyContent="flex-end" alignItems="center">
                            <GDSEButton style={{ marginRight: '10px' }} onClick={this.clearFields} label={this.state.btnClearLabel} size="small" color={this.state.btnClearColor} variant="contained" />
                            <GDSEButton label={this.state.btnLabel} type="submit" size="small" color={this.state.btnColor} variant="contained" />
                        </Grid>
                    </Grid>
                </ValidatorForm>
                <Grid contaner style={{ marginTop: '15px' }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="customer table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{fontWeight: 1000}} align="left">ID</TableCell>
                                    <TableCell style={{fontWeight: 1000}} align="left">Name</TableCell>
                                    <TableCell style={{fontWeight: 1000}} align="left">Address</TableCell>
                                    <TableCell style={{fontWeight: 1000}} align="left">Contact Number</TableCell>
                                    <TableCell style={{fontWeight: 1000}} align="left">Email</TableCell>
                                    <TableCell style={{fontWeight: 1000}} align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.id}</TableCell>
                                            <TableCell align="left">{row.name}</TableCell>
                                            <TableCell align="left">{row.address}</TableCell>
                                            <TableCell align="left">{row.tel}</TableCell>
                                            <TableCell align="left">{row.email}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            this.updateCustomer(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.deleteCustomer(row.id)
                                                        }}
                                                    >
                                                        <DeleteIcon color="error" />
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({ alert: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </>
        );
    }
}

export default Supplier;
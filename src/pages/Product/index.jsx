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
import ProductService from "../../services/ProductService";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                product_id: '',
                item_name: '',
                supplier_id: '',
                quantity: '',
                unit_price: '',
                status: ''
            },
            alert: false,
            message: '',
            severity: '',

            data: [
                {
                    product_id: "P001",
                    item_name: "Box",
                    supplier_id: "S001",
                    quantity: '12',
                    unit_price: '25000',
                    status: 'Shipped'
                },
                {
                    product_id: "P002",
                    item_name: "Bike",
                    supplier_id: "S002",
                    quantity: '14',
                    unit_price: '10000',
                    status: 'Shipped'
                }
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
                product_id: data.product_id,
                item_name: data.item_name,
                supplier_id: data.supplier_id,
                quantity: data.quantity,
                unit_price: data.unit_price,
                status: data.status
            }
        });
    };

    clearFields = () => {
        this.setState({
            btnLabel: 'save',
            btnColor: 'primary',
            formData: {
                product_id: '',
                item_name: '',
                supplier_id: '',
                quantity: '',
                unit_price: '',
                status: ''
            },
        });
    };


    submitCustomer = async () => {
        let formData = this.state.formData;

        if (this.state.btnLabel === "save") {
            if (this.state.btnLabel === "save") {
                let res = await ProductService.postProduct(formData);

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
            }
            console.log('save');

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
                        <Grid item lg={12} xs={12} sm={12} md={12}>
                            <Typography variant="h3">Product Manage</Typography>
                        </Grid>
                        <Grid item lg={1.5} xs={12} sm={12} md={1.5}>
                            <Card variant="outlined">
                                <CardContent style={{ marginLeft: '13%', color: 'red' }}>
                                    <Typography variant="h5" component="div">
                                        Stock
                                    </Typography>
                                    <Typography style={{ marginLeft: '18%' }} variant="h5" color="text.secondary">
                                        {/* {this.state.supplierCount} */}
                                        10
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={1.5} xs={12} sm={12} md={1.5}>
                            <Card variant="outlined">
                                <CardContent style={{ marginLeft: '5%', color: 'red' }}>
                                    <Typography variant="h5" component="div">
                                        Ordered
                                    </Typography>
                                    <Typography style={{ marginLeft: '30%' }} variant="h5" color="text.secondary">
                                        {/* {this.state.supplierCount} */}
                                        12
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={2} xs={12} sm={12} md={2}>
                            <Card variant="outlined">
                                <CardContent style={{ marginLeft: '11%', color: 'red' }}>
                                    <Typography variant="h5" component="div">
                                        Low Stock
                                    </Typography>
                                    <Typography style={{ marginLeft: '25%' }} variant="h5" color="text.secondary">
                                        {/* {this.state.supplierCount} */}
                                        41
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={2} xs={12} sm={12} md={2}>
                            <Card variant="outlined">
                                <CardContent style={{ marginLeft: '10%', color: 'red' }}>
                                    <Typography variant="h5" component="div">
                                        Out Stock
                                    </Typography>
                                    <Typography style={{ marginLeft: '30%' }} variant="h5" color="text.secondary">
                                        {/* {this.state.supplierCount} */}
                                        24
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={1.5} xs={12} sm={12} md={1.5}>
                            <Card variant="outlined">
                                <CardContent style={{ marginLeft: '18%', color: 'red' }}>
                                    <Typography variant="h5" component="div">
                                        Sold
                                    </Typography>
                                    <Typography style={{ marginLeft: '15%' }} variant="h5" color="text.secondary">
                                        {/* {this.state.supplierCount} */}
                                        65
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={1.75} xs={12} sm={12} md={1.75}>
                            <Card variant="outlined">
                                <CardContent style={{ marginLeft: '18%', color: 'red' }}>
                                    <Typography variant="h5" component="div">
                                        To Ship
                                    </Typography>
                                    <Typography style={{ marginLeft: '20%' }} variant="h5" color="text.secondary">
                                        {/* {this.state.supplierCount} */}
                                        87
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={1.5} xs={12} sm={2} md={1.5}>
                            <Card variant="outlined" style={{ marginTop: '5px' }}>
                                <CardContent style={{ marginLeft: '5%', color: 'red' }}>
                                    <Typography variant="h5" component="div">
                                        Shipped
                                    </Typography>
                                    <Typography style={{ marginLeft: '30%' }} variant="h5" color="text.secondary">
                                        {/* {this.state.supplierCount} */}
                                        42
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Typography variant="subtitle1">Item Code</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Item Code"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.product_id}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.product_id = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Typography variant="subtitle1">Item Name</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Item Name"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.item_name}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.item_name = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
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
                            <Typography variant="subtitle1">Quantity</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Quantity"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.quantity}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.quantity = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Typography variant="subtitle1">Unit Price</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Unit Price"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.unit_price}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.unit_price = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Typography variant="subtitle1">Status</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="status"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.status}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.status = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>
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
                                    <TableCell style={{fontWeight: 1000}} align="left">Item Code</TableCell>
                                    <TableCell style={{fontWeight: 1000}} align="left">Item Name</TableCell>
                                    <TableCell style={{fontWeight: 1000}} align="left">Supplier Id</TableCell>
                                    <TableCell style={{fontWeight: 1000}} align="left">Quantity</TableCell>
                                    <TableCell style={{fontWeight: 1000}} align="left">Unit Price</TableCell>
                                    <TableCell style={{fontWeight: 1000}} align="left">Status</TableCell>
                                    <TableCell style={{fontWeight: 1000}} align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.id}</TableCell>
                                            <TableCell align="left">{row.name}</TableCell>
                                            <TableCell align="left">{row.sup_id}</TableCell>
                                            <TableCell align="left">{row.qty}</TableCell>
                                            <TableCell align="left">{row.unitPrice}</TableCell>
                                            <TableCell align="left">{row.status}</TableCell>
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

export default Products;
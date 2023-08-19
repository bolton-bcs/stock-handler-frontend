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
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                invoiceId: '',
                date: '',
                type: '',
                productCode: '',
                unitPrice: '',
                qty: '',
                customerOrSupplier: '',
                paidStatus: '',
                shippingStatus: '',
                address: ''

            },
            alert: false,
            message: '',
            severity: '',
            types: [
                {
                    label: 'Pick'
                },
                {
                    label: 'Ship'
                }
            ],
            paidStatus: [
                {
                    label: 'Paid'
                },
                {
                    label: 'Unpaid'
                }
            ],
            shipStatus: [
                {
                    label: 'To ship'
                },
                {
                    label: 'Shipped'
                },
                {
                    label: 'Normal'
                }
            ],
            data: [
                {
                    invoiceId: 'IN-001',
                    date: '2022-09-23',
                    type: 'ship',
                    productCode: 'P-001',
                    unitPrice: '150000.00',
                    qty: '10',
                    customerOrSupplier: 'customer',
                    paidStatus: 'paid',
                    shippingStatus: 'on the way',
                    address: 'Colombo'
                },
                {
                    invoiceId: 'IN-002',
                    date: '2022-07-21',
                    type: 'pick',
                    productCode: 'P-002',
                    unitPrice: '32000.00',
                    qty: '34',
                    customerOrSupplier: 'supplier',
                    paidStatus: 'half',
                    shippingStatus: 'not yet',
                    address: 'Galle'
                }
            ],
            btnLabel: 'Place Order',
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
            btnLabel: 'Update Order',
            btnColor: 'secondary',
            formData: {
                invoiceId: data.invoiceId,
                date: data.date,
                type: data.type,
                productCode: data.productCode,
                unitPrice: data.unitPrice,
                qty: data.qty,
                customerOrSupplier: data.customerOrSupplier,
                paidStatus: data.paidStatus,
                shippingStatus: data.shippingStatus,
                address: data.address
            }
        });
    };

    clearFields = () => {
        this.setState({
            btnLabel: 'save',
            btnColor: 'primary',
            formData: {
                invoiceId: '',
                date: '09-25-2022',
                type: '',
                productCode: '',
                unitPrice: '',
                qty: '',
                customerOrSupplier: '',
                paidStatus: '',
                shippingStatus: '',
                address: ''
            },
        });
    };


    submitCustomer = async () => {
        let formData = this.state.formData;

        if (this.state.btnLabel === "save") {
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
                            <Typography variant="h3">Place Order</Typography>
                        </Grid>
                        <Grid item lg={1.5} xs={12} sm={12} md={1.5}>
                            <Card variant="outlined" style={{ backgroundColor: "#636e72" }}>
                                <CardContent style={{ marginLeft: '15%', color: 'white' }}>
                                    <Typography variant="h6" component="div">
                                        To Pic
                                    </Typography>
                                    <Typography style={{ marginLeft: '10%' }} variant="h4" color="white">
                                        {/* {this.state.supplierCount} */}
                                        25
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={1.5} xs={12} sm={12} md={1.5}>
                            <Card variant="outlined" style={{ backgroundColor: "#636e72" }}>
                                <CardContent style={{ marginLeft: '10%', color: 'white' }}>
                                    <Typography variant="h6" component="div">
                                        To Ship
                                    </Typography>
                                    <Typography style={{ marginLeft: '15%' }} variant="h4" color="white">
                                        {/* {this.state.supplierCount} */}
                                        65
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={2} xs={12} sm={12} md={2}>
                            <Card variant="outlined" style={{ backgroundColor: "#636e72" }}>
                                <CardContent style={{ marginLeft: '25%', color: 'white' }}>
                                    <Typography variant="h6" component="div">
                                        Paid
                                    </Typography>
                                    <Typography style={{ marginLeft: '5%' }} variant="h4" color="white">
                                        {/* {this.state.supplierCount} */}
                                        32
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={2} xs={12} sm={12} md={2}>
                            <Card variant="outlined" style={{ backgroundColor: "#636e72" }}>
                                <CardContent style={{ marginLeft: '20%', color: 'white' }}>
                                    <Typography variant="h6" component="div">
                                        UnPaid
                                    </Typography>
                                    <Typography style={{ marginLeft: '15%' }} variant="h4" color="white">
                                        {/* {this.state.supplierCount} */}
                                        69
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={2} xs={12} sm={12} md={2}>
                            <Card variant="outlined" style={{ backgroundColor: "#636e72" }}>
                                <CardContent style={{ marginLeft: '13%', color: 'white' }}>
                                    <Typography variant="h6" component="div">
                                        Completed
                                    </Typography>
                                    <Typography style={{ marginLeft: '20%' }} variant="h4" color="white">
                                        {/* {this.state.supplierCount} */}
                                        12
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={1.75} xs={12} sm={12} md={1.75}>
                            <Card variant="outlined" style={{ backgroundColor: "#636e72" }}>
                                <CardContent style={{ marginLeft: '22%', color: 'white' }}>
                                    <Typography variant="h6" component="div">
                                        Total
                                    </Typography>
                                    <Typography style={{ marginLeft: '5%' }} variant="h4" color="white">
                                        {/* {this.state.supplierCount} */}
                                        58
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Typography variant="subtitle1">Invoice Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Invoice Id"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.invoiceId}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.invoiceId = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Typography variant="subtitle1">Date</Typography>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    value={this.state.formData.date}
                                    onChange={(newValue) => {
                                        console.log(newValue)
                                        let formData = this.state.formData
                                        formData.date = newValue
                                        this.setState({ formData })
                                    }}
                                    renderInput={(params) => <TextField style={{ width: '100%' }} size="small" {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Typography variant="subtitle1">Type</Typography>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={this.state.types}
                                onChange={(e, value) => {
                                    if (null != value) {
                                        let formData = this.state.formData
                                        formData.type = value.label
                                        this.setState({ formData })
                                    }
                                }}
                                sx={{ width: '300' }}
                                renderInput={(params) => <TextField {...params} size="small" style={{ width: '100%' }} />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Typography variant="subtitle1">Product Code</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Product Code"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.productCode}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.productCode = e.target.value
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
                                value={this.state.formData.unitPrice}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.unitPrice = e.target.value
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
                                value={this.state.formData.qty}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.qty = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Typography variant="subtitle1">Customer/Supplier</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Customer/Supplier"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.customerOrSupplier}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.customerOrSupplier = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Typography variant="subtitle1">Paid Status</Typography>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={this.state.paidStatus}
                                onChange={(e, value) => {
                                    if (null != value) {
                                        let formData = this.state.formData
                                        formData.paidStatus = value.label
                                        this.setState({ formData })
                                    }
                                }}
                                sx={{ width: '300' }}
                                renderInput={(params) => <TextField {...params} size="small" style={{ width: '100%' }} />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Typography variant="subtitle1">Shipping Status</Typography>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={this.state.shipStatus}
                                onChange={(e, value) => {
                                    if (null != value) {
                                        let formData = this.state.formData
                                        formData.shippingStatus = value.label
                                        this.setState({ formData })
                                    }
                                }}
                                sx={{ width: '300' }}
                                renderInput={(params) => <TextField {...params} size="small" style={{ width: '100%' }} />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Typography variant="subtitle1">Address</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Address"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.address}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.address = e.target.value
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
                                    <TableCell style={{fontWeight: 1000}} align="left">Invoice Id</TableCell>
                                    <TableCell style={{fontWeight: 1000}} align="left">Date</TableCell>
                                    <TableCell style={{fontWeight: 1000}} align="left">Type</TableCell>
                                    <TableCell style={{fontWeight: 1000}} align="left">Product Code</TableCell>
                                    <TableCell style={{fontWeight: 1000}} align="left">Unit Price</TableCell>
                                    <TableCell style={{fontWeight: 1000}} align="left">Quantity</TableCell>
                                    <TableCell style={{fontWeight: 1000}} align="left">Customer/Supplier</TableCell>
                                    <TableCell style={{fontWeight: 1000}} align="left">Paid Status</TableCell>
                                    <TableCell style={{fontWeight: 1000}} align="left">Shipping Status</TableCell>
                                    <TableCell style={{fontWeight: 1000}} align="left">Address</TableCell>
                                    <TableCell style={{fontWeight: 1000}} align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.invoiceId}</TableCell>
                                            <TableCell align="left">{row.date}</TableCell>
                                            <TableCell align="left">{row.type}</TableCell>
                                            <TableCell align="left">{row.productCode}</TableCell>
                                            <TableCell align="left">{row.unitPrice}</TableCell>
                                            <TableCell align="left">{row.qty}</TableCell>
                                            <TableCell align="left">{row.customerOrSupplier}</TableCell>
                                            <TableCell align="left">{row.paidStatus}</TableCell>
                                            <TableCell align="left">{row.shippingStatus}</TableCell>
                                            <TableCell align="left">{row.address}</TableCell>
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

export default Order;
import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, Grid } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

class Home extends Component {
    render() {
        return (
            <Grid container className="pt-2" spacing={3}>
                <Grid item lg={12} xs={12} sm={12} md={12}>
                    <Typography variant="h3">Dashboard</Typography>
                </Grid>
                <Grid item lg={4} xs={12} sm={12} md={6}>
                    <Card sx={{ minWidth: 150, minHeight: 200 }} style={{ backgroundColor: "#f6e58d" }}>
                        <CardContent >
                            <Typography style={{ marginLeft: '40%', marginTop: '5%' }} variant="h5" component="div" color="#FFFF">
                                In Stock
                            </Typography>
                            <Typography style={{ marginLeft: '45%', marginTop: '10%' }} variant="h5" color="text.secondary" color="#FFFF">
                                {/* {this.state.supplierCount} */}
                                10
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={4} xs={12} sm={12} md={6}>
                    <Card sx={{ minWidth: 200, minHeight: 200 }} style={{ backgroundColor: "#B33771" }} >
                        <CardContent>
                            <Typography style={{ marginLeft: '38%', marginTop: '5%' }} variant="h5" component="div" color="#FFFF">
                                Sold Items
                            </Typography>
                            <Typography style={{ marginLeft: '45%', marginTop: '10%' }} variant="h5" color="text.secondary" color="#FFFF">
                                {/* {this.state.supplierCount} */}
                                54
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={4} xs={12} sm={12} md={6}>
                    <Card sx={{ minWidth: 200, minHeight: 200 }} style={{ backgroundColor: "#6ab04c" }}>
                        <CardContent>
                            <Typography style={{ marginLeft: '38%', marginTop: '5%' }} variant="h5" component="div" color="#FFFF">
                                Law Stock
                            </Typography>
                            <Typography style={{ marginLeft: '45%', marginTop: '10%' }} variant="h5" color="text.secondary" color="#FFFF">
                                {/* {this.state.supplierCount} */}
                                24
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={4} xs={12} sm={12} md={6}>
                    <Card sx={{ minWidth: 200, minHeight: 200 }} style={{ backgroundColor: "#be2edd" }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Cost
                            </Typography>
                            <Typography style={{ marginLeft: '18%' }} variant="h5" color="text.secondary">
                                {/* {this.state.supplierCount} */}
                                10000.00
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={4} xs={12} sm={12} md={6}>
                    <Card sx={{ minWidth: 200, minHeight: 200 }} style={{ backgroundColor: "#dcdde1" }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Income
                            </Typography>
                            <Typography style={{ marginLeft: '18%' }} variant="h5" color="text.secondary">
                                {/* {this.state.supplierCount} */}
                                150000.00
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={12} xs={12} sm={12} md={12}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item lg={6} xs={12} sm={12} md={6}>
                                    <Card sx={{ minWidth: 250, minHeight:150 }} style={{ backgroundColor: "#badc58" }}>
                                        <CardContent>
                                            <Typography variant="h5" component="div" style={{ marginLeft: '40%', marginTop: '5%' }}>
                                                To Be Picked
                                            </Typography>
                                            <Typography style={{ marginLeft: '45%', marginTop: '5%' }} variant="h5" color="text.secondary">
                                                {/* {this.state.supplierCount} */}
                                                15
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item lg={6} xs={12} sm={12} md={6}>
                                        <Card sx={{ minWidth: 250, minHeight:150 }} style={{ backgroundColor: "#eb4d4b" }}>
                                            <CardContent>
                                                <Typography variant="h5" component="div" style={{ marginLeft: '40%', marginTop: '5%' }}>
                                                    To Be Packed
                                                </Typography>
                                                <Typography style={{ marginLeft: '45%', marginTop: '5%' }} variant="h5" color="text.secondary">
                                                    {/* {this.state.supplierCount} */}
                                                    30
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default Home;
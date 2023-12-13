import React, {Component} from 'react';
import {Typography, Grid} from '@mui/material';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {blue, green, pink, purple, red, yellow} from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import {PieChart} from '@mui/x-charts/PieChart';
import LinearProgress, {linearProgressClasses} from '@mui/material/LinearProgress';


const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

const StyledPaper = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 400,
    color: theme.palette.text.primary,
}));


const data2 = [
    {label: 'Group A', value: 9800},
    {label: 'Group D', value: 9800},
    {label: 'Group E', value: 3908},
    {label: 'Group F', value: 4800},
];


class Home extends Component {
    render() {
        return (
            <Grid container className="pt-2" spacing={3}>
                <Grid item lg={12} xs={12} sm={12} md={12}>
                    <Typography variant="h5" style={{
                        color: '#7f8c8d',
                        fontFamily: 'bold',
                        marginBottom: '-1%'
                    }}>Dashboard</Typography>
                </Grid>
                <Grid item lg={12} xs={12} sm={12} md={12}>
                    <Typography variant="h6" style={{color: '#2980b9', fontStyle: 'bold', marginBottom: '1%'}}>Inventory
                        Summary</Typography>
                </Grid>

                <Grid container spacing={0} columns={{xs: 4, sm: 8, md: 12}}>

                    <Paper
                        sx={{
                            p: 2,
                            margin: 'auto',
                            maxWidth: 350,
                            flexGrow: 1,
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                    >

                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Avatar sx={{bgcolor: blue[500]}} variant="rounded">
                                    <AssignmentIcon/>
                                </Avatar>
                            </Grid>

                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h5" component="div" style={{
                                            fontFamily: 'bold',
                                            fontStyle: 'NunitoSans-Bold',
                                            fontWeight: '2000'
                                        }}>
                                            1,345
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Quantity On Hand
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            ID: 1030114
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{cursor: 'pointer'}} variant="body2">
                                            Remove
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Paper>

                    <Paper
                        sx={{
                            p: 2,
                            margin: 'auto',
                            maxWidth: 350,
                            flexGrow: 1,
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Avatar sx={{bgcolor: green[500]}} variant="rounded">
                                    <AssignmentIcon/>
                                </Avatar>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h5" component="div"
                                                    style={{fontFamily: 'bold', fontStyle: 'NunitoSans-Bold'}}>
                                            230
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Products Missing
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            ID: 1030114
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{cursor: 'pointer'}} variant="body2">
                                            Remove
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>

                    <Paper
                        sx={{
                            p: 2,
                            margin: 'auto',
                            maxWidth: 350,
                            flexGrow: 1,
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Avatar sx={{bgcolor: purple[500]}} variant="rounded">
                                    <AssignmentIcon/>
                                </Avatar>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h5" component="div"
                                                    style={{fontFamily: 'bold', fontStyle: 'NunitoSans-Bold'}}>
                                            05
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Product Damage
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            ID: 1030114
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{cursor: 'pointer'}} variant="body2">
                                            Remove
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>

                    <Paper
                        sx={{
                            p: 2,
                            margin: 'auto',
                            maxWidth: 350,
                            flexGrow: 1,
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Avatar sx={{bgcolor: green[500]}} variant="rounded">
                                    <AssignmentIcon/>
                                </Avatar>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h5" component="div"
                                                    style={{fontFamily: 'bold', fontStyle: 'NunitoSans-Bold'}}>
                                            457
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Active Products
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            ID: 1030114
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{cursor: 'pointer'}} variant="body2">
                                            Remove
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item lg={12} xs={12} sm={12} md={12}>
                    <Typography variant="h6" style={{color: '#2980b9', fontStyle: 'bold',}}>Order Summary</Typography>
                </Grid>

                <Grid container spacing={0} style={{marginTop: '1%'}}>
                    <Paper
                        sx={{
                            p: 0,
                            margin: 'auto',
                            maxWidth: 450,
                            flexGrow: 1,
                            backgroundColor: '#ffff',
                        }}
                    >
                        <Grid container spacing={2} style={{marginTop: '1%', marginLeft: '15%'}}>
                            <Box sx={{m: 1, position: 'relative'}}>
                                <Fab
                                    aria-label="save"
                                    color="primary"
                                >
                                    <CheckIcon/>
                                </Fab>
                            </Box>

                            <Box sx={{m: 1, position: 'relative'}} style={{marginTop: '4%'}}>
                                <Button
                                    variant="contained"
                                >
                                    Accept Order 1002566845
                                </Button>
                            </Box>
                        </Grid>

                        <Grid container spacing={2} style={{marginTop: '2%', marginLeft: '15%'}}>
                            <Box sx={{m: 1, position: 'relative'}}>
                                <Fab
                                    aria-label="save"
                                    color="warning"
                                >
                                    <CheckIcon/>
                                </Fab>
                            </Box>

                            <Box sx={{m: 1, position: 'relative'}} style={{marginTop: '4%'}}>
                                <Button
                                    variant="contained"
                                    color="warning"
                                >
                                    Accept Order 1002566486
                                </Button>
                            </Box>
                        </Grid>
                    </Paper>

                    <Paper
                        sx={{
                            p: 2,
                            margin: 'auto',
                            maxWidth: 350,
                            flexGrow: 1,
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Avatar sx={{bgcolor: blue[500]}} variant="rounded">
                                    <AssignmentIcon/>
                                </Avatar>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            Standard Order #1248569 Cancelled
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            ID: 1030114
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{cursor: 'pointer'}} variant="body2">
                                            Remove
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>

                    <Paper
                        sx={{
                            p: 2,
                            margin: 'auto',
                            maxWidth: 350,
                            flexGrow: 1,
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Avatar sx={{bgcolor: yellow[500]}} variant="rounded">
                                    <AssignmentIcon/>
                                </Avatar>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h5" component="div" style={{
                                            fontFamily: 'bold',
                                            fontStyle: 'NunitoSans-Bold',
                                            fontWeight: '2000'
                                        }}>
                                            1542
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Customized Orders Dispatched Today
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            ID: 1030114
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{cursor: 'pointer'}} variant="body2">
                                            Remove
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Paper>

                    <Paper
                        sx={{
                            p: 2,
                            margin: 'auto',
                            maxWidth: 350,
                            flexGrow: 1,
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Avatar sx={{bgcolor: red[500]}} variant="rounded">
                                    <AssignmentIcon/>
                                </Avatar>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            Standard license Expired
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{cursor: 'pointer'}} variant="body2">
                                            Remove
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid container spacing={2} style={{marginLeft: '-13.5%'}}>
                    <Grid container spacing={2} style={{marginTop: '2%', marginLeft: '15%'}}>
                        <Grid container spacing={2} style={{marginTop: '2%', marginLeft: '-35%'}}>
                            <Paper
                                sx={{
                                    p: 0,
                                    margin: 'auto',
                                    maxWidth: 450,
                                    flexGrow: 1,
                                    backgroundColor: '#ffff',
                                }}
                            >
                                <Box>
                                    <StyledPaper
                                        sx={{
                                            my: 1,
                                            mx: 'auto',
                                            p: 2,
                                        }}
                                    >
                                        <Grid container spacing={2}>
                                            <Grid item xs={3}>
                                                <Avatar sx={{bgcolor: green[500]}} variant="rounded">
                                                    <AssignmentIcon/>
                                                </Avatar>
                                            </Grid>

                                            <Grid item xs={12} sm container>
                                                <Grid item xs container direction="column" spacing={2}>
                                                    <Grid item xs>
                                                        <Typography gutterBottom variant="subtitle1" component="div">
                                                            ITEM #1256 LOW STOCK </Typography>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </StyledPaper>
                                </Box>
                                <Box>
                                    <StyledPaper
                                        sx={{
                                            my: 1,
                                            mx: 'auto',
                                            p: 2,
                                        }}
                                    >
                                        <Grid container spacing={2}>
                                            <Grid item xs={3}>
                                                <Avatar sx={{bgcolor: green[500]}} variant="rounded">
                                                    <AssignmentIcon/>
                                                </Avatar>
                                            </Grid>

                                            <Grid item xs={12} sm container>
                                                <Grid item xs container direction="column" spacing={2}>
                                                    <Grid item xs>
                                                        <Typography gutterBottom variant="subtitle1" component="div">
                                                            ITEM #1256 LOW STOCK </Typography>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </StyledPaper>
                                </Box>
                                <Box>
                                    <StyledPaper
                                        sx={{
                                            my: 1,
                                            mx: 'auto',
                                            p: 2,
                                        }}
                                    >
                                        <Grid container spacing={2}>
                                            <Grid item xs={3}>
                                                <Avatar sx={{bgcolor: green[500]}} variant="rounded">
                                                    <AssignmentIcon/>
                                                </Avatar>
                                            </Grid>

                                            <Grid item xs={12} sm container>
                                                <Grid item xs container direction="column" spacing={2}>
                                                    <Grid item xs>
                                                        <Typography gutterBottom variant="subtitle1" component="div">
                                                            ITEM #1256 LOW STOCK </Typography>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </StyledPaper>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid style={{marginTop: '-8%', marginLeft: '38%'}}>
                        <Grid container wrap="nowrap" spacing={2} style={{marginTop: '-12%', marginLeft: '50%'}}>
                            <Box sx={{flexGrow: 2}}>
                                <Grid item>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        A. Delivered
                                    </Typography>
                                </Grid>
                                <Grid item style={{marginTop: '-10%', marginLeft: '30%'}}>
                                    <Avatar sx={{bgcolor: pink[500]}}>N</Avatar>
                                </Grid>
                                <Grid item style={{marginTop: '-10%', marginLeft: '55%'}}>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        50%
                                    </Typography>
                                </Grid>
                                <br/>
                                <BorderLinearProgress variant="determinate" value={50} style={{width: '350px'}}/>
                            </Box>
                        </Grid>

                        <Grid container wrap="nowrap" spacing={2} style={{marginTop: '10%', marginLeft: '50%'}}>
                            <Box sx={{flexGrow: 1}}>
                                <Grid item>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        B. Cancelled
                                    </Typography>
                                </Grid>
                                <Grid item style={{marginTop: '-12%', marginLeft: '30%'}}>
                                    <Avatar sx={{bgcolor: pink[500]}}>N</Avatar>
                                </Grid>
                                <Grid item style={{marginTop: '-8%', marginLeft: '55%'}}>
                                    <Typography gutterBottom variant="subtitle1" component="div"
                                                style={{color: 'blue', fontsize: '200'}}>
                                        5%
                                    </Typography>
                                </Grid>
                                <br/>
                                <BorderLinearProgress variant="determinate" value={5} style={{width: '350px'}}/>
                            </Box>
                        </Grid>

                    </Grid>

                    <Grid style={{marginTop: '-12%', marginLeft: '60%'}}>
                        <Grid container wrap="nowrap" spacing={2} style={{marginTop: '8%', marginLeft: '50%'}}>
                            <Box sx={{flexGrow: 1}}>
                                <Grid item>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        C. Picked
                                    </Typography>
                                </Grid>
                                <Grid item style={{marginTop: '-10%', marginLeft: '30%'}}>
                                    <Avatar sx={{bgcolor: pink[500]}}>N</Avatar>
                                </Grid>
                                <Grid item style={{marginTop: '-10%', marginLeft: '55%'}}>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        90%
                                    </Typography>
                                </Grid>
                                <br/>
                                <BorderLinearProgress variant="determinate" value={90} style={{width: '350px'}}/>
                            </Box>
                        </Grid>

                        <Grid container wrap="nowrap" spacing={2} style={{marginTop: '10%', marginLeft: '50%'}}>
                            <Box sx={{flexGrow: 1}}>
                                <Grid item>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        D. Picked
                                    </Typography>
                                </Grid>
                                <Grid item style={{marginTop: '-12%', marginLeft: '30%'}}>
                                    <Avatar sx={{bgcolor: pink[500]}}>N</Avatar>
                                </Grid>
                                <Grid item style={{marginTop: '-8%', marginLeft: '55%'}}>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        90%
                                    </Typography>
                                </Grid>
                                <br/>
                                <BorderLinearProgress variant="determinate" value={90} style={{width: '350px'}}/>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container style={{marginTop: '-18%', marginLeft: '60%'}}>
                    <PieChart
                        series={[
                            {
                                data: data2,
                                cx: 500,
                                cy: 200,
                                innerRadius: 85,
                                outerRadius: 145,
                                paddingAngle: 5,
                                cornerRadius: 5,
                                startAngle: -90,
                                endAngle: 180,
                            },
                        ]}
                        height={400}
                        slotProps={{
                            legend: {hidden: true},
                        }}
                    />
                </Grid>

            </Grid>
        );
    }
}

export default Home;
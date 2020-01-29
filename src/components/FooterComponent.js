import React from 'react';
import  Grid  from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

const FooterComponent = () =>{
    return(
        <Grid container>
            <Grid item
                  xs={12}
            >
                <div style={{
                    margin: '30px 0'
                }}
                
                >
                    <Typography variant="h5"
                                align="center"
                    >
                        ToDo Aplication
                    </Typography>
                    <Typography variant="subtitle2"
                                align="center"
                    >
                        Currently v4.9.0. Released under the MIT License. Copyright © 2020 Material-UI.
                    </Typography>
                </div>
            </Grid>
        </Grid>
    )
};

export default FooterComponent;
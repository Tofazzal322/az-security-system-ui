import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hook/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) { return <CircularProgress sx={{fontSize:"200px" , color:"red",  marginLeft:"500px", marginTop:"200px"}}  /> }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location ||"/dashboard" }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({
    component: Component,
    auth: { isAuthenticated, loading },
    ...rest
}) => (
    // ...rest takes the rest of the props other than destructured props.
    //  In this case, the privateroute component had 3 props exact,path,component.
    //  component prop is destructured, so ...rest has exact and path props
    <Route
    {...rest} render={ props =>
        !isAuthenticated && !loading ? (
            <Redirect to='/login' />
            ) : (
                <Component {...props} />
            )
        }
    />
)

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute)

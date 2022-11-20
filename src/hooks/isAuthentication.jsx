import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

export const isAuthentication = (Component) =>{

    const RedirectComponent=({isAuthentication, isAuthChecked,...rest})=>{
        if (isAuthChecked && !isAuthentication)  {
            return <Navigate to={'/login'}/>
        }
        return (<Component {...rest}/>)
    }

    return connect(mapStateToProps)(RedirectComponent);
}

const mapStateToProps = ({authentication}) => {
    return {
        isAuthentication:authentication.isAuthentication,
        isAuthChecked:authentication.isAuthChecked
    }
}




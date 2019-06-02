import React, {Component} from "react";
import {connect} from "react-redux";
import { alumniPendingFetchData } from "../actions/backoffice";
import ProfileValidation from "../components/ProfileValidation/ProfileValidation";


const mapDispatchToProps = dispatch => ({
    getPendingAlumni: () => dispatch(alumniPendingFetchData())
});

const mapStateToProps = ({auth, backoffice}) => {
    return {
        auth,
        backoffice
    };
};


class ProfileContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        /*
        if (!this.props.auth.data.isAuth) {
            this.props.history.push("/signin");
        } else {
            this.props.getPendingAlumni();
        }*/
    }

    render() {
        return (
            <div>
                <ProfileValidation props={this.props.backoffice.data}/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContainer);

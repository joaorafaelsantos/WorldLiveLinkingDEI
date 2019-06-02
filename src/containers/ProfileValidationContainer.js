import React, {Component} from "react";
import {connect} from "react-redux";
import { alumniPendingFetchData, alumniPendingUpdate } from "../actions/backoffice";
import ProfileValidation from "../components/ProfileValidation/ProfileValidation";
import Grid from "@material-ui/core/Grid";

const mapDispatchToProps = dispatch => ({
    getPendingAlumni: () => dispatch(alumniPendingFetchData()),
    validatePendingAlumni: (id) => dispatch(alumniPendingUpdate(id))
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

        this.validateAlumni = this.validateAlumni.bind(this)
    }

    componentWillMount() {
        if (!this.props.auth.data.isAuth) {
            this.props.history.push("/signin");
        } else {
            this.props.getPendingAlumni();
        }
    }

    validateAlumni(alumni) {
        this.props.validatePendingAlumni(alumni.id)
    }

    render() {
        return (
            <div>
                <Grid container justify="center">
                    <Grid item xs={10}>
                        <ProfileValidation
                            alumni={this.props.backoffice.data}
                            handleClick={this.validateAlumni}
                        />
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContainer);

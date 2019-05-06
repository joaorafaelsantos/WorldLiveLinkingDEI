import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ onClick }) => (
    <div className="profile-form">
        <div className="form">
            <div className="menu">
            <ul>
                <li><h3> Personal information</h3></li>
                <li><h5 className="login_text">Name</h5></li>
                <li><input type="text"></input></li>
                <li><h5 className="login_text">Location</h5></li>
                <li><input type="text"></input></li>
                <li><h5 className="login_text">Job Description</h5></li>
                <li><input type="text"></input></li>
                <li><h5 className="login_text">Company</h5></li>
                <li><input type="text"></input></li>
                <li><h5 className="login_text">Degree</h5></li>
                <li><input type="text"></input></li>
            </ul>    
            </div>
            <div id= "button" className="button">
            <ul className="button_list">
                <li><a className="save-button" onClick={onClick}>Save</a></li>
                <li><a className="sigarra-button" onClick={onClick}>Import from Sigarra</a></li>
                <li><a className="linkedin-button" onClick={onClick}>Import from LinkedIn</a></li>
                <p className="info-text">This will simulate an import of data event.</p>
            </ul>
            </div>
        </div>   
    </div>
);

Profile.propTypes = {
    onClick: PropTypes.func.isRequired,
}

Profile.defaultProps = {
    onClick: () => alert('Save data clicked!')
}

export default Profile;
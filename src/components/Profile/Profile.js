import React from 'react';
import './Profile.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {GoogleComponent} from 'react-google-location'
import {config} from '../../config.js';


const Profile = (props) => {
    const {
        values: {name, jobDescription, company, degree},
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched,
        setFieldValue
    } = props;

    const change = (name, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
    };

    // const changeLocation = (name) => {
    //     handleChange(e);
    //     setFieldTouched(name, true, false);
    // };

    return (
        <div style={{background: 'transparent'}}>
            <form onSubmit={handleSubmit} style={{
                width: 400, display: 'flex', flexDirection: 'column',
                justifyContent: 'center', margin: '0 auto'
            }} noValidate autoComplete="off">

                <TextField
                    id="name"
                    name="name"
                    helperText={touched.name ? errors.name : ""}
                    error={touched.name && Boolean(errors.name)}
                    value={name}
                    style={{margin: 8}}
                    placeholder="Name"
                    onChange={change.bind(null, "name")}
                    margin="normal"
                />

                <GoogleComponent
                    value={"teste"}
                    apiKey={config.API_KEY}
                    language={'pt'}
                    coordinates={true}
                    onChange={(e) => {
                        setFieldValue('location', e.place);
                        setFieldValue('latitude', e.coordinates.latitude);
                        setFieldValue('longitude', e.coordinates.longitude);
                    }}
                />

                <TextField
                    id="jobDescription"
                    name="jobDescription"
                    helperText={touched.jobDescription ? errors.jobDescription : ""}
                    error={touched.jobDescription && Boolean(errors.jobDescription)}
                    value={jobDescription}
                    style={{margin: 8}}
                    placeholder="Job description"
                    onChange={change.bind(null, "jobDescription")}
                    margin="normal"
                />
                <TextField
                    id="company"
                    name="company"
                    helperText={touched.company ? errors.company : ""}
                    error={touched.company && Boolean(errors.company)}
                    value={company}
                    style={{margin: 8}}
                    placeholder="Company"
                    onChange={change.bind(null, "company")}
                    margin="normal"
                />
                <TextField
                    id="degree"
                    name="degree"
                    helperText={touched.degree ? errors.degree : ""}
                    error={touched.degree && Boolean(errors.degree)}
                    value={degree}
                    style={{margin: 8}}
                    placeholder="Degree"
                    onChange={change.bind(null, "degree")}
                    margin="normal"
                />
                <Button type="Submit" style={{marginTop: 40}} variant="contained"
                        color="secondary" disabled={!isValid}>
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default Profile;

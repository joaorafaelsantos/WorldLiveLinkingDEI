import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Profile = ({ onClick }) => (
    <div style={{background:'transparent'}}>
    <div style={{width:262,display:'flex',margin:'40px auto'}}>
      <Button style={{ marginRight:20,width:113,fontSize:10,padding:0 }} variant="contained" color="secondary">
        Import from Sigarra
      </Button>
      <Button style={{ width:113,fontSize:9 }} variant="contained" color="primary">
        Import from LinkedIn
      </Button>
    </div>
    <form style={{width:262,display:'flex',flexDirection:'column',
        justifyContent: 'center',margin:'0 auto'}} noValidate autoComplete="off">
        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Name"
          margin="normal"
        />
        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Location"
          margin="normal"
        />
         <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Job description"
          margin="normal"
        />
         <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Company"
          margin="normal"
        />
         <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Degree"
          margin="normal"
        />
        <Button type="Submit" style={{ marginTop: 40 }} variant="contained" color="secondary">
        Submit
      </Button>
    </form>
</div>
);

Profile.propTypes = {
    onClick: PropTypes.func.isRequired,
}

Profile.defaultProps = {
    onClick: () => alert('Save data clicked!')
}

export default Profile;
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import TextField from '@material-ui/core/TextField';
// import PropTypes from 'prop-types';
import "./Filters.css";

const Filters = ({ cityValue, graduationYearValue, courseValue, onChange, onClickApply, onClickClear }) => {
    return (
        <div className="filter-container">
            <div className="filters">
                {/* Filter by city */}
                <div className="filter-city">
                    <TextField
                        id="city"
                        label="City"
                        margin="normal"
                    />
                </div>
                {/* Filter by graduation year */}
                <div className="filter-graduation-year">
                    <TextField
                        id="year"
                        label="Year"
                        margin="normal"
                    />
                </div>
                {/* Filter by course */}
                <div className="filter-course">
                    <TextField
                        id="course"
                        label="Course"
                        margin="normal"
                    />
                </div>
                <div className="button-container">
                    <a className="button-filters" onClick={onClickApply}>Apply filters</a>
                    <a className="button-filters" onClick={onClickClear}>Clear filters</a>
                </div>
            </div>
        </div>
    )
};

// Map.propTypes = {
//     apiKey: PropTypes.string.isRequired,
//     center: PropTypes.arrayOf(PropTypes.number),
//     zoom: PropTypes.number.isRequired,
//     infoboxesWithPushPins: PropTypes.arrayOf(PropTypes.object).isRequired
// }

// Map.defaultProps = {
//     apiKey: null,
//     center: [],
//     zoom: 5,
//     infoboxesWithPushPins: []
// }

export default Filters;

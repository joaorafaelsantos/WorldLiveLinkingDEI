import React from "react";
// import PropTypes from 'prop-types';
import "./Filters.css";

const Filters = ({ cityValue, graduationYearValue, courseValue, onChange, onClickApply, onClickClear }) => {
    return (
        <div className="filter-container">
            <h2 className="filter-title">Filters</h2>
            <div className="filters">
                {/* Filter by city */}
                <div className="filter-city">
                    <label className="filter-label">City</label>
                    <br />
                    <input
                        className="input"
                        type="text"
                        name="cityValue"
                        value={cityValue}
                        onChange={onChange}
                        placeholder="Try Porto"
                    />
                </div>
                {/* Filter by graduation year */}
                <div className="filter-graduation-year">
                    <label className="filter-label">Year</label>
                    <br />
                    <input
                        className="input"
                        type="text"
                        name="graduationYearValue"
                        value={graduationYearValue}
                        onChange={onChange}
                        placeholder="Try 2018"
                    />
                </div>
                {/* Filter by course */}
                <div className="filter-course">
                    <label className="filter-label">Course</label>
                    <br />
                    <input
                        className="input"
                        type="text"
                        name="courseValue"
                        value={courseValue}
                        onChange={onChange}
                        placeholder="Try MESW"
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

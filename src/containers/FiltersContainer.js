import React, { Component } from "react";
import { connect } from "react-redux";
import Filters from "../components/Filters/Filters";
import { updateAlumni, updateAlumniFilter } from "../actions/alumni";
import { resetAlumni } from "../actions/alumni";

const mapStateToProps = ({ alumni }) => {
  return {
    alumni
  };
};

const mapDispatchToProps = dispatch => ({
  updateAlumniFilter: filteredData => dispatch(updateAlumniFilter(filteredData)),
  updateAlumni: alumniData => dispatch(updateAlumni(alumniData)),
  resetAlumni: () => dispatch(resetAlumni())
});

class FiltersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityValue: "",
      graduationYearValue: "",
      courseValue: "",
      defaultAlumni: this.props.alumni.data
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClickApply = this.handleClickApply.bind(this);
    this.handleClickClear = this.handleClickClear.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  getFilteredAlumni(city, graduationYear, course) {
    let filteredAlumni = [...this.state.defaultAlumni];

    if (city) {
      filteredAlumni = filteredAlumni.filter(alumni => alumni.location.city === city);
    }
    if (graduationYear) {
      filteredAlumni = filteredAlumni.filter(alumni => alumni.course.startDate === parseInt(graduationYear));
    }
    if (course) {
      filteredAlumni = filteredAlumni.filter(alumni => alumni.course.name === course);
    }

    return filteredAlumni
  }


  handleClickApply() {
    // Apply all filters
    const {
      cityValue: city,
      graduationYearValue: graduationYear,
      courseValue: course
    } = this.state;

    let filteredAlumni = this.getFilteredAlumni(city, graduationYear, course);
    this.props.updateAlumniFilter(filteredAlumni.map(alumni => alumni.id));
  }

  handleClickClear() {
    const city = "";
    const graduationYear = "";
    const course = "";

    this.setState({
      ...this.state,
      cityValue: city,
      graduationYearValue: graduationYear,
      courseValue: course
    });

    let filteredAlumni = this.getFilteredAlumni(city, graduationYear, course);
    this.props.updateAlumniFilter(filteredAlumni.map(alumni => alumni.id));
  }

  render() {
    return (
      <Filters
        cityValue={this.state.cityValue}
        graduationYearValue={this.state.graduationYearValue}
        courseValue={this.state.courseValue}
        onChange={this.handleChange}
        onClickApply={this.handleClickApply}
        onClickClear={this.handleClickClear}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersContainer);

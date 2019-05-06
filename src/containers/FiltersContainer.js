import React, { Component } from "react";
import { connect } from "react-redux";
import Filters from "../components/Filters/Filters";
import { updateAlumni } from "../actions/alumni";
import { resetAlumni } from "../actions/alumni";

const mapStateToProps = ({ alumni }) => {
  return {
    alumni
  };
};

const mapDispatchToProps = dispatch => ({
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

  handleClickApply() {
    // Apply all filters
    const {
      cityValue: city,
      graduationYearValue: graduationYear,
      courseValue: course
    } = this.state;
    let alumniData = [...this.state.defaultAlumni];
    if (city) {
      alumniData = alumniData.filter(alumni => {
        return alumni.location.city === city;
      });
    }
    if (graduationYear) {
      alumniData = alumniData.filter(alumni => {
        return alumni.graduation_year === parseInt(graduationYear);
      });
    }
    if (course) {
      alumniData = alumniData.filter(alumni => {
        return alumni.degree === course;
      });
    }

    if (!city && !graduationYear && !course) {
      this.props.resetAlumni();
    }
    this.props.updateAlumni(alumniData);
  }

  handleClickClear() {
    this.props.resetAlumni();
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

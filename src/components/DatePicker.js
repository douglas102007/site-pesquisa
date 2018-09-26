import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


export default class DateMenu extends React.Component {

    state = {
      startDate: moment()
    };

    handleChange = (date) =>{
        this.setState({
        startDate: date
        });
    }

  render() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
    />;
  }
}
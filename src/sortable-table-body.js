import React from 'react';
import PropTypes from 'prop-types';

class SortableTableRow extends React.Component {
  render() {
    var tds = this.props.columns.map(function (item, index) {
      var value = this.props.data[item.key];
      if ( item.render ) {
        value = item.render(value)
      }
      return (
        <td
          key={index}
          style={item.dataStyle}
          {...(item.dataProps || {})} >
          {value}
        </td>
      );
    }.bind(this));

    return (
      <tr>
        {tds}
      </tr>
    );
  }
}

export default class SortableTableBody extends React.Component {
  render() {
    var bodies = this.props.data.map(((item, index) => {
      return (
        <SortableTableRow
          key={index}
          data={item}
          columns={this.props.columns} />
      );
    }).bind(this));

    return (
      <tbody>
        {bodies}
      </tbody>
    );
  }
}

SortableTableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  sortings: PropTypes.array.isRequired
};

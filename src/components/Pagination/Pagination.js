import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import './Pagination.css';

class Pagination extends Component {
  getPageHref(page) {
    var pathname = this.props.location.pathname;
    var qs = this.props.location.search;
    if (qs) {
      if (/page=\d*/.test(qs)) {
        return pathname + qs.replace(/page=\d*/, 'page=' + page);
      } else {
        return pathname + qs + '&page=' + page;
      }
    } else {
      return pathname + "?page=" + page;
    }
  }
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.pagination === nextProps.pagination) return;
  //   this.updatePagination(nextProps.pagination)
  // }
  // componentWillMount() {
  //   this.updatePagination(this.props.pagination)
  // }
  formatPagination(pagination) {
    var select = {
      value: this.getPageHref(pagination.page),
      options: []
    }

    for (var i = 1; i <= pagination.total_page; i++) {
      select.options.push({
        href: this.getPageHref(i),
        name: i + ' of ' + pagination.total_page
      });
    }

    return {
      prev: pagination.page > 1 ?
        { href: this.getPageHref(pagination.page - 1) } : null,
      next: pagination.page < pagination.total_page ?
        { href: this.getPageHref(pagination.page + 1) } : null,
      select: select
    };
  }
  renderItem(item, i) {
    return (
      <li key={i}>
        <Link to="{item.href}">{item.name}</Link>
      </li>
    );
  }
  handelPageChange = (e) => {
    browserHistory.push(e.target.value);
  }
  renderSelect(select) {
    var options = select.options.map((item, i) => {
      return <option key={i} value={item.href}>{item.name}</option>;
    });

    return (
      <select value={select.value} onChange={this.handelPageChange}>
        {options}
      </select>
    );
  }
  render() {
    var pagination = this.formatPagination(this.props.pagination);
    var prevButton = pagination.prev && <Link to={pagination.prev.href}><span>Prev</span></Link>;
    var nextButton = pagination.next && <Link to={pagination.next.href}><span>Next</span></Link>;
    var selectElement = pagination.select.options.length && this.renderSelect(pagination.select);

    return (
      <div className="Pagination">
        <div className="prev-container">{prevButton}</div>
        <div className="select-container">{selectElement}</div>
        <div className="next-container">{nextButton}</div>
      </div>
    );
  }
}

export default Pagination;

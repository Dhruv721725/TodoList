import React from 'react'
import PropTypes from 'prop-types';
function header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
      </nav>
    </div>
  )
}
header.propTypes={
    title: PropTypes.string
}

export default header;

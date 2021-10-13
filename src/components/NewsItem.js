import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, imageUrl, description, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style= {{display: 'flex' , justifyContent: 'flex-end' , position: 'absolute' , right: '0'}}>
          <span
            className="badge rounded-pill bg-danger"
          >
            {source}
          </span>
          </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://i1.wp.com/www.eastmojo.com/wp-content/uploads/2021/10/earth-is-losing-its-shine-and-scientists-believe-climate-change-is-the-cause-of-the-warming-problem.jpeg?fit=724%2C407&ssl=1"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              By {author ? author : "unknown"} on {new Date(date).toGMTString()}
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

import React, { Component } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import Moment from "moment";
import "react-loading-skeleton/dist/skeleton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

class Uutiset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      news: [],
    };
  }

  async componentDidMount() {
    try {
      let resp = await axios.get(
        "https://www.asteriski.fi/wp-json/wp/v2/posts?tags=673&_embed"
      );
      let news = resp.data.slice(0, 4);
      this.setState({
        ...this.state,
        ...{
          isLoading: false,
          news: news,
        },
      });
    } catch (e) {
      this.setState({
        ...this.state,
        ...{
          isLoading: false,
        },
      });
    }
  }
  render() {
    return (
      <section id="uutiset">
        <div className="row">
          <div
            className="twelve columns"
            style={{ textAlign: "center", marginBottom: "2rem" }}
          >
            <h2>{this.props.data.lang === "en" ? "News" : "Uutiset"}</h2>
          </div>
        </div>
        {this.state.isLoading ? (
          <div className="row">
            <div className="columns twelve">
              <Skeleton count={5} />
            </div>
          </div>
        ) : (
          <div className="wp-news">
            {this.state.news.map((post, index) => (
              <div className="row uutinen" key={index}>
                <div className="wp-img columns two">
                  {post["_embedded"]["wp:featuredmedia"] ? (
                    <img
                      alt="Post"
                      src={post["_embedded"]["wp:featuredmedia"][0].source_url}
                    ></img>
                  ) : null}
                </div>
                <div className="main-col columns ten">
                  <div className="row item">
                    <div className="twelve columns">
                      <h3
                        dangerouslySetInnerHTML={{
                          __html: post.title.rendered,
                        }}
                      />
                      <div className="info">
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noreferrer"
                          style={{ marginRight: "10px" }}
                        >
                          {this.props.data.lang === "en" ? "Read more" : "Lue lisää"}
                        </a>
                        <em className="date" style={{ marginLeft: "14px" }}>
                          <FontAwesomeIcon
                            icon={faCalendar}
                            style={{ color: "var(--gold)" }}
                          />{" "}
                          {Moment(post.date).format("D.M.YYYY HH:mm")}
                        </em>
                      </div>
                      <p
                        className="wp-excerpt"
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Uutiset;

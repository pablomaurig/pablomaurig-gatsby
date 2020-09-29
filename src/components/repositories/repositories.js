import React from "react"
import jsonFetch from "simple-json-fetch"
import styled from "styled-components"
import siteConfig from "../../../data/siteConfig"

import Loader from "../loader"

const endpoint = `https://api.github.com/users/${siteConfig.githubUsername}/repos?type=owner&sort=updated&per_page=5&page=1`

class Repositories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      status: "loading",
    }
  }
  async componentDidMount() {
    const repos = await jsonFetch(endpoint)
    if (repos.json && repos.json.length) {
      this.setState({ repos: repos.json, status: "ready" })
    }
  }
  render() {
    const { status } = this.state

    const timeSince = date => {
      var seconds = Math.floor((new Date() - date) / 1000)
      var interval = seconds / 31536000
      if (interval > 1) {
        return Math.floor(interval) + " años"
      }
      interval = seconds / 2592000
      if (interval > 1) {
        return Math.floor(interval) + " meses"
      }
      interval = seconds / 86400
      if (interval > 1) {
        return Math.floor(interval) + " días"
      }
      interval = seconds / 3600
      if (interval > 1) {
        return Math.floor(interval) + " horas"
      }
      interval = seconds / 60
      if (interval > 1) {
        return Math.floor(interval) + " minutos"
      }
      return Math.floor(seconds) + " segundos"
    }
    var aDay = 24 * 60 * 60 * 1000
    return (
      <div className={this.props.className}>
        <h2>Repositorios de Github actualizados ultimamente</h2>
        {status === "loading" && (
          <div className="repositories__loader">
            <Loader />
          </div>
        )}
        {status === "ready" && this.state.repos && (
          <React.Fragment>
            <div className="repositories__content">
              {this.state.repos.map(repo => (
                <React.Fragment key={repo.name}>
                  <div className="repositories__repo">
                    <a className="repositories__repo-link" href={repo.html_url}>
                      <strong>{repo.name}</strong>
                    </a>
                    <p>{repo.description}</p>
                    <div className="repositories__repo-date">
                      Actualizado hace: {timeSince(new Date(repo.updated_at))}
                    </div>
                    <div className="repositories__repo-star">
                      ★ {repo.stargazers_count}
                    </div>
                  </div>
                  <hr />
                </React.Fragment>
              ))}
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default styled(Repositories)`
  position: relative;
  .repositories__content {
    margin-bottom: 40px;
  }

  .repositories__repo {
    position: relative;
    & > a > strong {
      font-size: 1.2rem;
    }
    p {
      margin-bottom: 0;
    }
  }

  .repositories__repo-link {
    text-decoration: none;
    color: #25303b;
  }

  .repositories__repo-date {
    color: #999;
    font-size: 12px;
  }

  .repositories__repo-star {
    position: absolute;
    top: 0;
    right: 0;
  }

  .repositories__loader {
    display: flex;
  }

  hr {
    margin-top: 16px;
  }
`

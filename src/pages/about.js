import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCheckCircle } from "react-icons/fa"
import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"

const AboutPage = props => {
  const labels = props.data.site.siteMetadata.labels
  const aboutTags = ["react", "nodejs", "html", "css"]
  const tags = {}
  labels.forEach(label => {
    aboutTags.forEach(tag => {
      if (tag === label.tag) {
        tags[tag] = label.name
      }
    })
  })

  return (
    <Layout>
      <SEO title="About" />
      <div className="post-page-main">
        <div className="sidebar px-4 py-2">
          <Sidebar />
        </div>

        <div className="post-main">
          <SEO title="About" />
          <div className="mt-3">
            <h2 className="heading">About</h2>
            <p>
              <i>
                Enthusiastic QA from India. I have experience in automating
                API's, mobile and Web applications. Worked on different
                frameworks like Detox, WebdriverIO. I also do spend time,
                learning, reading blogs etc. Learning new technologies and
                build/automate is what i like to do
              </i>
            </p>
            <br />
            <h4>Skills</h4>
            <div>
              <span className="text-success d-inline-block" title="blazing">
                <FaCheckCircle size={26} style={{ color: "success" }} />
              </span>
              <p className="d-inline-block ml-3 w-75 align-top">
                MobileAutomation tools: Detox React Native
              </p>
            </div>
            <div>
              <span className="text-success d-inline-block" title="blazing">
                <FaCheckCircle size={26} style={{ color: "success" }} />
              </span>
              <p className="d-inline-block ml-3 w-75 align-top">
                API Testing tools: Newman, RestAssured
              </p>
            </div>
            <div>
              <span className="text-success d-inline-block" title="tags">
                <FaCheckCircle size={26} style={{ color: "success" }} />
              </span>
              <p className="d-inline-block ml-3 w-75 align-top">
                WebAutomation Tools: WebdriverIO, Selenium, Jest, Mocha,
                Pupeeter, Katalon Studio, Nunit Framework, Protractor
              </p>
              <div className="ml-5">
                <TechTag
                  tag="react"
                  tech="React"
                  name={tags["react"]}
                  size={20}
                  color="deepskyblue"
                />
                <TechTag
                  tag="nodejs"
                  tech="Node.js"
                  name={tags["nodejs"]}
                  size={20}
                  color="lightgreen"
                />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-success d-inline-block" title="prism">
                <FaCheckCircle size={26} style={{ color: "success" }} />
              </span>
              <p className="d-inline-block ml-3 w-75 align-top">
                Grafana with InfluxDB
              </p>
            </div>
            <div>
              <span className="text-success d-inline-block" title="icons">
                <FaCheckCircle size={26} style={{ color: "success" }} />
              </span>
              <p className="d-inline-block ml-3 w-75 align-top">
                Performance testing tools: Jmeter, Lighthouse, Detox Instruments
                (For mobile profiling)
              </p>
            </div>
            <div>
              <span className="text-success d-inline-block" title="icons">
                <FaCheckCircle size={26} style={{ color: "success" }} />
              </span>
              <p className="d-inline-block ml-3 w-75 align-top">
                Git, Jenkins, Appcenter
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query aboutQuery {
    site {
      siteMetadata {
        labels {
          tag
          tech
          name
          size
          color
        }
      }
    }
  }
`

export default AboutPage

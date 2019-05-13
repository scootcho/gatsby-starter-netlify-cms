import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <section className="hero is-light is-large">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            We exist to help you build your idea. 
          </h1>
          <h2 className="subtitle">
            by turning it into to usable product.
          </h2>
          <button className="button is-info is-medium">Submit</button>
        </div>
      </div>
    </section>

    <section className="hero is-light is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <h1 className="title">
                We feel you. 
              </h1>
              <h2 className="subtitle">
                That’s why we build.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="hero is-light is-large">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Our Works.
          </h1>
          <h2 className="subtitle">
            This is based from our combined experience.
          </h2>
        </div>
      </div>
    </section>

  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`

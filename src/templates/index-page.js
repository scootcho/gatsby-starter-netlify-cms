import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import HeroBrandingElement from '../img/branding/brand-element.svg'
import ZerotoOne from '../img/branding/0-to-1.svg'
import TheProcess from '../img/branding/the-process.svg'
import AqwireLogo from '../img/aqwire.svg'
import AqwireThumbnail from '../img/aqwire-thumbnail.png'
import CoinDashbLogo from '../img/coindash.svg'
import CoindashThumbnail from '../img/coindash-thumbnail.png'
import LeafListLogo from '../img/leaflist.png'
import LeafListThumbnail from '../img/leaflist-thumbnail.png'


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
    <section className="hero is-medium" id="hero">
      <div className="hero-brand-element is-hidden-mobile	is-hidden-tablet-only"> 
        <img src={HeroBrandingElement} /> 
      </div>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <h1 className="title">
                We exist to help you build your idea. 
              </h1>
              <h2 className="subtitle is-size-4">
                by turning it into to usable product.
              </h2>
              <Link to="#lets-chat" className="button is-primary cofound-btn is-large" to="#lets-chat">
                Let's have a chat <span>⟶</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="hero is-large" id="why-we-build">
      <div className="zero-to-one-element is-hidden-mobile is-hidden-tablet-only"> 
        <img src={ZerotoOne} /> 
      </div>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-6">
              <h1 className="title is-size-1">
                We feel you. 
              </h1>
              <h2 className="subtitle is-size-4">
                That’s why we build.
              </h2>
              <p className="is-size-6">
                Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="hero" id="our-works">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-size-1">
            Our Works.
          </h1>
          <h2 className="subtitle is-size-4">
            This is based from our combined experience.
          </h2>
        </div>
        <div className="container">
          <BlogRoll />
        </div>
      </div>
    </section>

    <section className="hero is-medium" id="what-we-offer">
      <div className="hero-brand-element is-hidden-mobile	is-hidden-tablet-only"> 
        <img src={TheProcess} /> 
      </div>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <h1 className="title is-size-1">
                What we offer.
              </h1>
              <h2 className="subtitle is-size-4">
                Let us know what you need.
              </h2>
              <ul className="is-size-4">
                <li>User Interface Design</li>
                <li>Interactive Design</li>
                <li>UX Prototyping</li>
                <li>Software Architecture & Development</li>
                <li>Product Design & Development</li>
                <li>Website Design & Development</li>
                <li>Discovery Research</li>
                <li>Customer Journey Mapping</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="hero is-primary is-medium" id="lets-chat">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-size-1">
            Let's Chat
          </h1>
          <h2 className="subtitle is-size-4">
            Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
          </h2>
          <a href="mailto:hello@cofoundlab.com" className="button is-light cofound-btn is-large">
            Email us at hello@cofoundlab.com
          </a>
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

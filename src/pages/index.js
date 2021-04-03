import React from "react"
import { Row, Col, Container, Image } from "react-bootstrap"
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { Tabs, Progress, Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import Layout from "../components/layout"
import SEO from "../components/seo"

import profile from "../images/profile.png"

const profileInfo = {
  "Name": "Ting Kai Boon",
  "Birthday": "22-12-1998",
  "Education": "Bachelor's",
  "Email": "ok.kai.mail@gmail.com"
}

const eduInfo = {
  "Dip": {
    "Period": "Aug 2017 - Jun 2020",
    "Education Level": "Diploma",
    "Course": "Diploma in Information and  Computing Technology",
    "University": "University Malaysia of Computer Science & Engineering (UNIMY)"
  },
  "Deg": {
    "Period": "Since Sep 2020",
    "Education Level": "Bachelor's Degree",
    "Course": "Bachelor of Software Engineering",
    "University": "University Malaysia of Computer Science & Engineering (UNIMY)"
  }
}

const workInfo = {
  "0": {
    "Period": "Jan 2016 – Feb 2016",
    "Unit": "Fragrance Retail Sdn. Bhd.",
    "Job Title": "Sales assistant",
    "Description": "Arranging and Selling Bak Kwa related products."
  },
  "1": {
    "Period": "Mar 2016 – Apr 2016",
    "Unit": "Sunshine Hampers & Florist (J) Sdn. Bhd.",
    "Job Title": "Packing worker",
    "Description": "Packing and arrange gift baskets."
  },
  "2": {
    "Period": "Apr 2016 – Aug 2016",
    "Unit": "Restoran Daiman Pekin Sdn. Bhd.",
    "Job Title": "Waiter",
    "Description": "Serving customers and ordering."
  },
  "3": {
    "Period": "Apr 2020– Jul 2020",
    "Unit": "IT Wonders Software Sdn. Bhd.",
    "Job Title": "Intern",
    "Description": "Website and mobile application UI design and translation."
  },
  "4": {
    "Period": "Jul 2020 – Aug 2020",
    "Unit": "Rohato Sdn Bhd",
    "Job Title": "Factory worker",
    "Description": "Making and packing moon cake."
  },
  "5": {
    "Period": "2021 Mar- 2021 Apr",
    "Unit": "München Bistro & Cafe",
    "Job Title": "Waiter",
    "Description": "Serving customers and ordering."
  }
}

const certInfo = {
  "0": {
    "title": "CCNA Routing and Switching",
    "unit": "Cisco",
    "url": "https://drive.google.com/file/d/11JMZxmcRqH_QwnMRvgVGAv_h14GsouhU/view?usp=sharing",
  },
  "1": {
    "title": "Introduction To Cybersecurity",
    "unit": "Cisco",
    "url": "https://drive.google.com/file/d/1Au-oWi4giyAMt6sQJ7xHiQcJRhSDOyg3/view?usp=sharing",
  },
  "2": {
    "title": "Dean’s List of Apr 2018, Sept 2018 and May 2019",
    "unit": "UNIMY",
    "url": "https://drive.google.com/file/d/1MgKzgGCx4tnrY3w4k4w5jDTLBfzwCrhW/view?usp=sharing",
  },
  "3": {
    "title": "Research & Innovation Poster Competition (Ripc Series 1/2021) – Gold Award",
    "unit": "MNNF Network",
    "url": "https://drive.google.com/file/d/1vGI2l4QG_YY5f3lxJRnCpknbH-_aNr77/view?usp=sharing",
  },
}

const skillInfo = {
  "Front-end": {
    "HTML+CSS+Javascript": "75",
    "React": "75",
    "Vuejs": "75"
  },
  "Back-end": {
    "PHP": "50"
  },
  "Programming": {
    "Java": "25",
    "C++": "25"
  },
  "Mobile": {
    "Flutter": "25"
  },
  "Others": {
    "Git": "25",
    "SQL": "25",
    "Photoshop": "25",
    "Illustrator": "25",
  }
}




const { TabPane } = Tabs;

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`resume`]} />
    <Container className="bg-white" fluild>
      <Row>
        <Col lg="3">
          <h3>Profile</h3>

          <Image src={profile} fluid />

          <div class="my-2">
            <a href="https://github.com/TPosition" target="_blank"  >
              <FaGithub size="32" /></a>
            <a href="https://www.facebook.com/midmodmail" target="_blank" class="ml-1">
              <FaFacebook size="32" /></a>
          </div>

          <Row>
            <table class="table font-14">
              {
                Object.keys(profileInfo).map(function (key) { return <tr><td class="font-weight-bold text-right">{key}</td><td>{profileInfo[key]}</td></tr> })
              }

              <tr><td class="font-weight-bold text-right">Resume</td><td><a href="https://drive.google.com/file/d/1isdKdONuToCn8POO8TkYJ0jDxZ0wb3vl/view?usp=sharing" target="_blank">PDF</a></td></tr>
            </table>
          </Row>
        </Col>
        <Col lg="9">
          <Row>
            <Col lg="6">
              <h3>Education</h3>
              <Timeline>
                {Object.keys(eduInfo).map(function (key0) {
                  return <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="blue">
                    <span class="text-secondary font-12">{eduInfo[key0]["Period"]}</span><br />
                    <span>{eduInfo[key0]["Course"]}</span><br />
                    <span>{eduInfo[key0]["University"]}</span>
                  </Timeline.Item>
                })}
              </Timeline>
              <h3>Certification / Awards</h3>
              {Object.keys(certInfo).map(function (key0, index) {
                return <><a key={index} href={certInfo[key0]["url"]} target="_blank">{certInfo[key0]["title"]} @ {certInfo[key0]["unit"]}</a><br /></>
              })}
            </Col>
            <Col lg="6">
              <h3>Working Experience</h3>
              <Timeline>
                {Object.keys(workInfo).map(function (key0, index) {
                  return <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="blue">
                    <span class="text-secondary font-12">{workInfo[key0]["Period"]}</span><br />
                    <span className={workInfo[key0]["Job Title"] === "Intern" ? 'txt-highlight' : ''}>{workInfo[key0]["Job Title"]}</span> @ <span>{workInfo[key0]["Unit"]}</span><br />
                    <span>{workInfo[key0]["Description"]}</span><br />
                  </Timeline.Item>
                })}
              </Timeline>
            </Col>
          </Row>
          <h3>Skill</h3>
          <Tabs tabPosition="left" className="mh-237">
            {
              Object.keys(skillInfo).map(function (key0, index) {
                return <TabPane tab={key0} key={index}>
                  {Object.keys(skillInfo[key0]).map(function (key1, jndex) {
                    // console.log(skillInfo[key0][key1]);
                    return <>{key1}<Progress percent={skillInfo[key0][key1]} key={index + "+" + jndex} showInfo={false} /></>
                  })}
                </TabPane>
              })}
          </Tabs>
        </Col>
        <div class="my-2">&nbsp;</div>
      </Row>

    </Container>
  </Layout>
)

export default IndexPage

import React, { useState } from "react"
import { Link } from "gatsby"
import { Row, Col, Container, Image } from "react-bootstrap"
import 'antd/dist/antd.css';
import { MenuUnfoldOutlined, TagsOutlined } from '@ant-design/icons'
import _ from 'lodash'
import { Tag } from 'antd';

import Layout from "../components/menuLayout"
import SEO from "../components/seo"
import projectData from "../data/projectList.json"
import projectFilter from "../data/projectList.json"

const arrMenuItem = _.concat(_.sortBy(["java", "php", "react", "vue", "bootstrap", "scss", "ant-design", "others"]), ["study purpose"]);

const menuList = [
  {
    "menuTitle": "Types",
    "menuItem": ["All", "Website Apps", "Desktop Apps", "Others"],
    "menuIcon": <MenuUnfoldOutlined />
  },
  {
    "menuTitle": "Tags",
    "menuItem": arrMenuItem,
    "menuIcon": <TagsOutlined />
  }
  // {
  //   "menuTitle": "asd",
  //   "menuItem": ["asdads"],
  //   "menuIcon": "sdad"
  // }
]



function ProjectPage() {

  const [projectList, setprojectList] = useState([projectData][0])

  const menuClick = ({ key }) => {
    var filteredObj = _.filter(projectFilter, (key0) => {
      if (key0.catelog === key || key0.tags.indexOf(key) > -1 || key === "All")
        return true
    });
    setprojectList(filteredObj)
  }

  return <Layout pageInfo={{ pageName: "projects" }} menuList={menuList} menuClick={menuClick}>
    <SEO title="Projects" />
    <Container className="bg-white pt-4" fluild>
      {projectList && projectList.map((key0, index) => {
        return <Row key={index} className="border-bot-grey py-4">
          <Col lg="9">
            <h5>{key0.name}</h5>
            <p class="text-grey">{key0.catelog}</p>
            {key0.tags.map((key1, jndex) => {
              return <Tag key={key1 + "" + jndex}><TagsOutlined /> {key1}</Tag>
            })}
            <br />
            <br />
            <div class="py-1">
              <Link to={"/projects/details"} state={key0}>
                Details
            </Link>
            </div>
          </Col>
          <Col lg="3">
            <Image fluid className="mxh-124" src={key0.images[0].src} />
          </Col>
        </Row>
      })}

    </Container>
  </Layout>
}

export default ProjectPage
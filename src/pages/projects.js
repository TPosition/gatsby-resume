import React from "react"
import { Link } from "gatsby"
import { Row, Col, Container, Image } from "react-bootstrap"
import 'antd/dist/antd.css';
import { MenuUnfoldOutlined, TagsOutlined } from '@ant-design/icons'
import _ from 'lodash'
import { Tag } from 'antd';

import Layout from "../components/menuLayout"
import SEO from "../components/seo"

const arrMenuItem = _.concat(_.sortBy(["java", "php", "react", "vue", "bootstrap", "scss", "ant-design"]), ["study purpose"]);

const menuList = [
  {
    "menuTitle": "Types",
    "menuItem": ["All", "Website Apps", "Desktop Apps"],
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

const projectList = [
  {
    "id": "myrc",
    "name": "MYR-Currency",
    "catelog": "Website Apps",
    "url": "https://myrcurrency-4e167.web.app/",
    "github": "https://github.com/TPosition/myrCurrency",
    "tags": ["react", "bootstrap", "scss", "study purpose"],
    "milestones": [
      { "time": "Feb 2021", "event": "Project start" },
      { "time": "Mar 2021", "event": "Project end" },
    ],
    "images": [
      {
        "src": "../images/myrc/0.png", "caption": "Home page",
      },
      {
        "src": "../images/myrc/1.png", "caption": "To calculate the exchange rate instantly",
      },
    ],
    "description": "A website to calculate live currency and foreign exchange rates that prioritize Malaysia Ringgit.||Although there are many improvement and features should be implemented, yet after I start the project and designed the UI, I found that there are only limited of related API with restrictions under free account.|Thus, I think it is pointless to develop this website so I closed this project."
  },
  // {
  //   "id": "asdqwe",
  //   "name": "ascewd",
  //   "catelog": "Website Apps",
  //   "url": null,
  // "github": null,
  //   "tags": ["asfasd"],
  //   "milestones": [
  //     { "time": "asdcx", "event": "Project start" },
  //   ],
  //   "images": [
  //     { "file": "sadasd", "caption": "首頁" },
  //   ],
  // "description":"sdsadadfzxc"
  // },
]

const projectPage = () => (

  <Layout pageInfo={{ pageName: "projects" }} menuList={menuList}>
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
            <Image fluid src={key0.images[0].src} />
          </Col>
        </Row>
      })}

    </Container>
  </Layout>
)

export default projectPage
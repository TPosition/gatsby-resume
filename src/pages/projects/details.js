import React from "react"
import { Row, Col, Container, Image, Carousel } from "react-bootstrap"
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { Timeline, Tag } from 'antd';
import { TagsOutlined, ClockCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import _ from "lodash"

import Layout from "../../components/layout"
import SEO from "../../components/seo"


const projectTemplate = (props) => {
    const projectInfo = props.location.state;
    if (!projectInfo) {
        return window.location.pathname = '/projects'
    }

    return (
        <Layout>
            <SEO title={projectInfo.name} keywords={[`resume`]} />
            <Container className="bg-white" fluild>
                <Row>
                    <Col lg="6">
                        <h3>{projectInfo.name}</h3>
                        <p class="text-grey">{projectInfo.catelog}</p>
                        <Row className="pb-3">
                            {projectInfo.tags.map((key0, index) => {
                                return <Tag key={key0 + "" + index}><TagsOutlined /> {key0}</Tag>
                            })}
                        </Row>
                        <Carousel className="bg-black-transparent mb-4">
                            {
                                projectInfo.images.map((key0) => {
                                    return <Carousel.Item>
                                        <Image fluid src={key0.src} className="d-block w-100" />
                                        <Carousel.Caption>
                                            <p>{key0.caption}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                })
                            }
                        </Carousel>
                    </Col>
                    <Col lg="6">
                        <Row>
                            <Col>
                                <h3>Description</h3>
                                <p dangerouslySetInnerHTML={{ __html: projectInfo.description.replace(/\|/g, '<br>') }} ></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>Milestones</h3>
                                <Timeline>
                                    {projectInfo.milestones.map((key0) => {
                                        return <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="blue">
                                            <span class="text-secondary font-12">{key0.time}</span><br />
                                            <span>{key0.event}</span>
                                        </Timeline.Item>
                                    })}
                                </Timeline>
                            </Col>
                        </Row>
                    </Col>
                    <div class="my-5">&nbsp;</div>
                </Row>
            </Container>
        </Layout >)
}


export default projectTemplate


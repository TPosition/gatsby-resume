import React, { useEffect } from "react"
import { Row, Col, Container, Image, Carousel } from "react-bootstrap"
import { Timeline, Tag } from 'antd';
import { TagsOutlined, ClockCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Redirect } from '@reach/router'

import Layout from "../../components/layout"
import SEO from "../../components/seo"


const projectTemplate = (props) => {
    const projectInfo = props.location.state;
    if (!projectInfo) {
        return <Redirect noThrow to="/projects" />
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
                        <Row>
                            <Col>
                                <span className={projectInfo.url ? null : "d-none"}>Demo:&emsp; <a target="_blank" href={projectInfo.url}>{projectInfo.url}</a></span><br />
                                <span className={projectInfo.github ? null : "d-none"}>Github:&ensp; <a target="_blank" href={projectInfo.github}> {projectInfo.github}</a></span><br /><br />
                            </Col>
                        </Row>
                        <Carousel className="bg-black-transparent mb-4">
                            {
                                projectInfo.images.map((key0) => {
                                    return <Carousel.Item interval={3000}>
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


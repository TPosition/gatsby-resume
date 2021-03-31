import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { menuClick } from "../pages/projects"


import Navbar from "./navBar"

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const menuLayout = ({ children, pageInfo, menuList = [] }) => {
    return (
        <Layout>
            <Container fluid className="px-0 main bg-silver">
                <Navbar fluid pageInfo={pageInfo} />
                <Layout>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        className="site-layout-background">
                        <Menu onClick={menuClick}
                            mode="inline"
                            defaultSelectedKeys={['All']}
                            defaultOpenKeys={['Types', 'Tags']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            {
                                menuList && menuList.map((key0, index) => {
                                    return <SubMenu key={key0.menuTitle} icon={key0.menuIcon} title={key0.menuTitle}>
                                        {key0.menuItem && key0.menuItem.map((key1, jndex) => {
                                            return <Menu.Item key={key1}>{key1}</Menu.Item>
                                        })}
                                    </SubMenu>
                                })
                            }
                        </Menu>
                    </Sider>
                    <Container>
                        {children}
                    </Container>
                </Layout>
            </Container>
            <Container fluid className="px-0">
                <Row noGutters>
                    <Col className="footer-col">
                        <footer>
                            <span>
                                Ting © {new Date().getFullYear()}
                            </span>
                        </footer>
                    </Col>
                </Row>
            </Container>

        </Layout >

    )
}

export default menuLayout

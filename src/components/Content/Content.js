import styles from "./Content.module.css";
import { CrownOutlined, DollarOutlined, FileDoneOutlined, ProfileOutlined, SearchOutlined, WalletOutlined } from "@ant-design/icons";
import { Card, Input, Statistic, Space } from "antd";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

const ContentComponent = () => {
    return (
        <div className={styles['content-container']}>
            <div className={styles['content-inner-container']}>
                <div className={styles['content-header-container']}>
                    <h3>Hello Thousif <CrownOutlined />,</h3>
                    <Input style={{ height: "30px", width: "200px" }} prefix={<SearchOutlined />} placeholder="Search" />
                </div>
                <div className={`${styles['content-summary-container']} ${styles['flex-container-row']}`}>
                    <Card className={styles['summary-card1']}>
                        <Space direction="horizontal">
                            <DollarOutlined style={{ color: "green", padding: 30, borderRadius: 60, fontSize: 50, backgroundColor: "#bef5bc" }} />
                            <Statistic title="Earning" value="$198k" />
                        </Space>
                    </Card>
                    <Card className={styles['summary-card2']}>
                        <Space direction="horizontal">
                            <ProfileOutlined style={{ color: "#50148c", padding: 30, borderRadius: 60, fontSize: 50, backgroundColor: "#dbc7f0" }} />
                            <Statistic title="Orders" value="$2.4k" />
                        </Space>
                    </Card>
                    <Card className={styles['summary-card3']}>
                        <Space direction="horizontal">
                            <WalletOutlined style={{ color: "#083475", padding: 30, borderRadius: 60, fontSize: 50, backgroundColor: "#acc4e8" }} />
                            <Statistic title="Balance" value="$2.4k" />
                        </Space>
                    </Card>
                    <Card className={styles['summary-card4']}>
                        <Space direction="horizontal">
                            <FileDoneOutlined style={{ color: "#a31239", padding: 30, borderRadius: 60, fontSize: 50, backgroundColor: "#ebc7d1" }} />
                            <Statistic title="Total Sales" value="$89k" />
                        </Space>
                    </Card>
                </div>
                <div className={`${styles['content-graph-container']} ${styles['flex-container-row']}`}>
                    <Card className={styles['graph-card1']}>
                        <BarChart />
                    </Card>
                    <Card className={styles['graph-card2']}>
                        <PieChart />
                    </Card>
                </div>
                <div className={styles['content-grid-container']}>

                </div>
            </div>
        </div>
    )
}

export default ContentComponent;
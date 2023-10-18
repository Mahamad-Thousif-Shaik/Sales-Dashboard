import styles from "./Sidebar.module.css";
import { SettingOutlined, AppstoreOutlined,CommentOutlined,DollarOutlined,BulbOutlined, UserOutlined, LaptopOutlined, RightOutlined } from "@ant-design/icons";

const Sidebar = () => {
    return (
        <div>
            <div className={styles['dashboard-header-container']}>
                <SettingOutlined style={{ color: "white", marginRight:"15px" }} />
                <h2 className={styles['dashboard-header']}>Dashboard</h2>
            </div>
            <ul className={styles['unordered-list']}>
                <li className={styles['menu-list-dashboard']}><span><AppstoreOutlined style={{marginRight:"10px"}}/> Dashboard</span> <RightOutlined /></li>
                <li className={styles['menu-list']}><span><LaptopOutlined style={{marginRight:"10px"}}/> Product</span> <RightOutlined /></li>
                <li className={styles['menu-list']}><span><UserOutlined style={{marginRight:"10px"}}/> Customers</span> <RightOutlined /></li>
                <li className={styles['menu-list']}><span><DollarOutlined style={{marginRight:"10px"}}/> Income</span> <RightOutlined /></li>
                <li className={styles['menu-list']}><span><BulbOutlined style={{marginRight:"10px"}}/> Promote</span> <RightOutlined /></li>
                <li className={styles['menu-list']}><span><CommentOutlined style={{marginRight:"10px"}}/> Help</span> <RightOutlined /></li>
            </ul>
        </div>
    )
}

export default Sidebar;
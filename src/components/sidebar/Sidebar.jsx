import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import PeopleIcon from '@mui/icons-material/People';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">Night Owl</span>
      </div>
      <hr />
      <div className="center">
        <ul>
            <p className="title">REPORTS</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <SubscriptionsOutlinedIcon className="icon" />
            <span>My Subscription</span>
          </li>
          <p className="title">ADMIN PANEL</p>  
          <li>
            <PeopleIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <VideoCameraFrontOutlinedIcon className="icon" />
            <span>Cameras</span>
          </li>  
        </ul>  
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>  
  )
}

export default Sidebar
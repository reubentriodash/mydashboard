import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PeopleIcon from '@mui/icons-material/People';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import "./widget.scss"

const Widget = ({type}) => {

    let data;

    //temporary data
    const amount = 100;
    const diff = 20;

    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney: false,
                link: "View all users",
                icon: <PeopleIcon className="icon" style ={{color:"crimson"}}/>,
            };
            break;
            case "customer":
            data={
                title:"CUSTOMERS",
                isMoney: false,
                link: "View all customers & plans",
                icon: <PeopleIcon className="icon" style ={{color:"goldenrod", backgroundColor:"lightyellow"}}/>,
            };
            break;
            case "camera":
            data={
                title:"CAMERAS",
                isMoney: false,
                link: "View all cameras",
                icon: <VideoCameraFrontOutlinedIcon className="icon"/>,
            };
            break;
            case "thief":
            data={
                title:"THEIVES",
                isMoney: false,
                link: "View all incidents",
                icon: <PeopleIcon className="icon" style ={{color:"red", backgroundColor:"pink"}}/>,
            };
            break;
        default:
            break;

    }

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <ArrowDropUpIcon/>
                {diff} %
            </div>
                {data.icon}
        </div>
    </div>
  )
}

export default Widget
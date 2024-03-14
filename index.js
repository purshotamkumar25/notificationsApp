const Notification = props => {
  const {className, iconUrl, message} = props; 
  const containerClassName = `notification-container ${className}`;
 

  return (
    <div className={containerClassName}>
     <img className="icon" src={iconUrl} />
     <p className="message">{message}</p>
    </div>
  );
  }
const element = {
  <div className="notification-app-container">
   <h1 className= "title">Notification</h1>
   <div className="notification-list-container">
    <Notification 
    className="primary-bg-color"
    iconUrl="https://assets.ccbp.in/react-js/primary-icon-img.png"
    message="Information-Message" 
    />
     <Notification 
    className="success-bg-color"
    iconUrl="https://assets.ccbp.in/react-js/success-icon-img.png"
    message="Success-Message" 
    />
     <Notification 
    className="warning-bg-color"
    iconUrl="https://assets.ccbp.in/react-js/warning-icon-img.png"
    message="Warning-Message" 
    />
     <Notification 
    className="danger-bg-color"
    iconUrl="https://assets.ccbp.in/react-js/danger-icon-img.png"
    message="Error-Message" 
    />
   </div>
  </div>
}

ReactDOM.render(element, document.getElementById('root'))

import React, { useEffect, useRef, useState } from "react";
import Alert from "react-bootstrap/Alert";
import { useStore } from "../store/store";

function Header(props) {
  const { alerts, removeAlert, clearAlerts } = useStore((state) => state);
  const [ clearStage, setClearStage ] = useState(0);
  const stageTimer = useRef(null);

  //STAGE STATE MACHINE
  useEffect(() => {
    clearTimeout(stageTimer.current);
    switch(clearStage) {
      case 0: //Idle, triggered by a new non-empty alert list or mouse movement
        stageTimer.current = setTimeout(() => setClearStage(1), 1000);
        break;
      case 1: //Preparing to fade
        stageTimer.current = setTimeout(() => setClearStage(2), 5000);
        break;
      case 2: //Fading
        stageTimer.current = setTimeout(() => setClearStage(3), 5000);
        break;
      case 3: //Emptied
        clearAlerts();
        break;
      default:
        break;
    }
    return function() {clearTimeout(stageTimer.current)}
  }, [clearStage, clearAlerts])

  useEffect(() => {
    if (alerts.length > 0) setClearStage(0);
  }, [alerts]);

  const stageStyles = [
    {transitionDuration:"0s",opacity:1},
    {opacity:1},
    {opacity:0},
  ]

  return (
    <div className="alerts-modals" onMouseMove={(event) => setClearStage(0)} style={stageStyles[clearStage]}>
      {alerts.map(alert => (
        <Alert key={alert.id} variant="danger" onClose={() => removeAlert(alert.id)} dismissible>
          <Alert.Heading>{alert.header}</Alert.Heading>
          <p>
            {alert.body}
          </p>
        </Alert>
      ))}
    </div>
  )
}

export default Header;
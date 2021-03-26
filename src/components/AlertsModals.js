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
      case 0: // Idle/reset - triggered by a new non-empty alert list or mouse movement. Clears fade animation.
        stageTimer.current = setTimeout(() => setClearStage(1), 1000);
        break;
      case 1: // Fading - animation makes first half solid and last half fade out
        stageTimer.current = setTimeout(() => setClearStage(2), 10000);
        break;
      case 2: // Emptied
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
    {animation:""},
    {animation:"fade-out 10s linear forwards"},
    {visibility:"hidden"}
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
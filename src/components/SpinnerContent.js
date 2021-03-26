import React from "react";
import Spinner from "react-bootstrap/Spinner";

function SpinnerContent(props) {
  return <>
    {props.spinWhen && <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/>}
    <span>{props.children}</span>
    </>
}

export default SpinnerContent;
import React from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../assets/css/custun.css";

export default function WithLabel() {
  const now = 60;
  return <ProgressBar className="html" now={now} label={`${now}%`} />;
}

import ProgressBar from "react-bootstrap/ProgressBar";
import "../../../assets/css/custun.css";

function WithLabelCSS() {
  const now = 80;
  return <ProgressBar className="css" now={now} label={`${now}%`} />;
}

export default WithLabelCSS;

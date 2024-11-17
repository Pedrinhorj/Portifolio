import ProgressBar from "react-bootstrap/ProgressBar";
import "../../../assets/css/custun.css";

function WithLabelReact() {
  const now = 25;
  return <ProgressBar className="React" now={now} label={`${now}%`} />;
}

export default WithLabelReact;

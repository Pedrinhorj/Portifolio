import ProgressBar from "react-bootstrap/ProgressBar";
import "../../../assets/css/custun.css";

function WithLabelJS() {
  const now = 40;
  return <ProgressBar className="js" now={now} label={`${now}%`} />;
}

export default WithLabelJS;

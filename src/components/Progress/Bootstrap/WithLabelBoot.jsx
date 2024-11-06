import ProgressBar from "react-bootstrap/ProgressBar";
import "../../../assets/css/custun.css";

function WithLabelBoot() {
  const now = 65;
  return <ProgressBar className="boot" now={now} label={`${now}%`} />;
}

export default WithLabelBoot;

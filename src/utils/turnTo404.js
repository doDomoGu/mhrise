import { useHistory } from "react-router-dom";

function TurnTo404() {
  let history = useHistory();

  history.push("/404");
  history.go();
}

export default TurnTo404;

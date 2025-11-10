import { useNavigate, useSearchParams } from "react-router-dom";

import styles from "./Map.module.css";

function Map() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const navigate = useNavigate();

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>
        Position: {lat}, {lng}
      </h1>
    </div>
  );
}

export default Map;

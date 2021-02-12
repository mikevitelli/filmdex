import { Box } from "@material-ui/core";

import styles from "../../styles/Home.module.css";

const PageTemplate = (props) => {
  return (
    <>
      <Box>
        <div className={styles.container}>
          <div className={styles.filmGrid}></div>
          <a className={styles.card}>{props.children}</a>
        </div>
      </Box>
    </>
  );
};

export default PageTemplate;

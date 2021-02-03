import { Box, Paper } from "@material-ui/core";

import styles from "../../styles/LoginStyles.module.css";

const PageTemplate = (props) => {
  return (
    <>
      <Box>
        <div className={styles.container}>
          <Paper className={styles.paper} elevation={3}>
            {props.children}
          </Paper>
        </div>
      </Box>
    </>
  );
};

export default PageTemplate;

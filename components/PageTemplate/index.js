import { Box } from "@material-ui/core";

// import styles from "../../styles/Home.module.css";

const PageTemplate = (props) => {
  return (
    <>
      <Box>
        <a>{props.children}</a>
      </Box>
    </>
  );
};

export default PageTemplate;

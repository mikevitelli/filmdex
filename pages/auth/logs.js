function Logs() {
  return <div>Logs</div>;
}

export async function getStaticProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}

export default Logs;

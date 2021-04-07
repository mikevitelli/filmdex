function Bookmarks() {
  return <div>Bookmarks</div>;
}

export async function getStaticProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}

export default Bookmarks;

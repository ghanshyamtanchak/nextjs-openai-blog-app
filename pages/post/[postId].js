import { withApiAuthRequired } from "@auth0/nextjs-auth0";

export default function Post() {
  return (
    <div>
      <h1>post single page</h1>
    </div>
  );
}

export const getServerSideProps = withApiAuthRequired(() => {
  return {
    props: {},
  };
});

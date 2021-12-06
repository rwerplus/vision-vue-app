import { NextPage } from "next";

interface Props {
  userAgent?: string;
}

const Login: NextPage<Props> = ({ userAgent }) => {
  return <div>
    {userAgent}
  </div>;
};

Login.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default Login;

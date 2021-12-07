import { NextPage } from "next";
import { getNotificationV2EX } from './axios/request';

interface Props {
  userAgent?: string;
  latestReminder?: any,
}

const Login: NextPage<Props> = (props) => {
  return <div>
    {props.userAgent}
    {props.latestReminder}
  </div>;
};

Login.getInitialProps = async ({ req }) => {
  console.log("req", req);
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  try {
    const latestReminder = await getNotificationV2EX();
    return { userAgent, latestReminder };
  } catch (e) {
    console.log(e);
    return { userAgent }
  }
};

export default Login;

import { Button, Result } from 'antd';
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const nav = useNavigate();
  const handleGoHome = () => {
    nav("/")
  }
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button onClick={handleGoHome} type="primary">Back Home</Button>}
    />
  )
}

export default NotFoundPage;
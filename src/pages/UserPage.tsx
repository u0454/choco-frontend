import { useAppSelector } from "../app/hooks/hooks";
import OrderSearch from "../components/orderSearch/OrderSearch";
import User from "../components/user/User";
import UserFeatures from "../components/user/UserFeatures";

const UserPage = () => {
  const { userEmail } = useAppSelector((state) => state.login);

  return (
    <main>
      <User headerText={`Hi , ${userEmail}`}>
        <UserFeatures />
      </User>
    </main>
  );
};

export default UserPage;

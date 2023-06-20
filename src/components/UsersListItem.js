import { BsFillTrashFill } from "react-icons/bs";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  return (
    <div className="mb-2 border-rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <Button loading={isLoading} onClick={handleClick}>
          <BsFillTrashFill />
        </Button>
        {error && <div>Error Deleting User</div>}
        {user.name}
      </div>
    </div>
  );
}

export default UsersListItem;

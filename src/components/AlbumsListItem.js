import { BsFillTrashFill } from "react-icons/bs";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

function AlbumsListItem({ album }) {
  const header = (
    <div>
      <Button>
        <BsFillTrashFill />
      </Button>
      {album.title}
    </div>
  );

  return (
    <ExpandablePanel key={album.id} header={header}>
      List of Photos in the Album
    </ExpandablePanel>
  );
}

export default AlbumsListItem;

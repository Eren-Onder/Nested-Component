import ChildrenListView from "./ChildrenListView";
import FriendsListView from "./FriendsListView";
import Person from "./person";
export default function PersonDetailsView(props) {
  return (
    <>
      <Person person={props.person} />
      <ChildrenListView children={props.person.children} />
      <FriendsListView friends={props.person.friends} />
    </>
  );
}

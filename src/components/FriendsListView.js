import Friends from "./Friends";
import { CardGroup, Card } from "react-bootstrap";

export default function FriendsListView(props) {
  const allChild = props.friends.map((friend) => (
    <Friend friend={friend}></Friend>
  ));
  return (
    <CardGroup>
      <Card.bady>
        <Card.title>FRIENDS</Card.title>
      </Card.bady>
      {allChild}
    </CardGroup>
  );
}

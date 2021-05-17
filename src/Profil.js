import PersonDetailsView from "./components/PersonelDetails";

function Profil(props) {
  const allPersonelDetails = props.list.map((person) => (
    <PersonDetailsView person={person} />
  ));
  return <div>{allPersonelDetails}</div>;
}
export default Profil;

import "bootstrap/dist/css/bootstrap.min.css";
import Profil from "./Profil";
import Foreigners from "./services/foreigners.json";
// verileri atadan toruna göndermeye çalışılmıştır.
function App() {
  return (
    <div className="App">
      <Profil list={Foreigners} />
    </div>
  );
}

export default App;

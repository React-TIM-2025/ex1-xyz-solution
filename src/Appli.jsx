import './Appli.scss';

// Composants
import Header from "./Header";
import ListeCategories from "./ListeCategories";
import TableauProduits from "./TableauProduits";

function Appli() {

  return (
    <div className="Appli">
          <Header/>
          <ListeCategories/>
          <TableauProduits/>
    </div>

  )
}

export default Appli;

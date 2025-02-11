import "./ListeCategories.scss";


// Categories
import Categories from "./Categories";

import catMenu from "./data/categories.json";

function ListeCategories(){
  

  return(
    
    <section className="ListeCategories">
      <h1 className="ListeCategories__titre">
        Catalogue
      </h1>

      <ul className="ListeCategories__liste"> 
        {
          catMenu.map((uneCategorie) => <Categories key={uneCategorie.key} nom ={uneCategorie.categorie} couleure={uneCategorie.couleure} />)
        }
      </ul>
    </section>
    
  );
}

export default ListeCategories;
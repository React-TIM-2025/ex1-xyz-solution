import "./TableauProduits.scss";


// Produits
import Produit from "./Produit";
import produitData from "./data/produits.json";


function TableauProduits(){
  

  return(
    
    <section className="ListeProduits">
      <div className="ListeProduits__header">
        <h1 className="ListeProduits__header--mots">
          Produit
        </h1>
        <h1 className="ListeProduits__header--mots">
          Catégories
        </h1>
        <h1 className="ListeProduits__header--mots">
          Unités
        </h1>
        <h1 className="ListeProduits__header--mots">
          Ventes
        </h1>
      </div>

      <ul className="ListeProduits__liste"> 
        {
          produitData.map((unProduit) => <Produit key={unProduit.key} 
            id = {unProduit.id} 
            img = {unProduit.avatar}
            nom = {unProduit.nom} 
            categories = {unProduit.categories}
            unites = {unProduit.unites}
            ventes = {unProduit.ventes}
          />)
        }
      </ul>
    </section>
    
  );
}

export default TableauProduits;
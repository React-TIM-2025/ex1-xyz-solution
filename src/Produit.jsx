import "./Produit.scss";

import categoriesData from "./data/categories.json";

// eslint-disable-next-line react/prop-types
function Produit({id, img, nom, categories, unites, ventes}){

  // id = int
  // img = lien vers image
  // nom = string
  // categorie = {}
  // unites = int
  // ventes = int 



  return(
      <section className="Produit">
        <img src={img} alt="" className="" />
        <p className="Produit__nom">{nom}</p>
        <button className="Produit__modifier">Modifier</button>

        {/* 
        1: Parcourir l'input categories de la fonction
        2: Cross-reference avec categoriesData. Si il contient un objet qui a id = categories, afficher le nom de la categorie
        */}
        <div className="Produit__categories">
          {categories.map((categorie) => {
            // FIND (mentionner en classe par Camille)
            let categorieDeLaListe = categoriesData.find((cat) => cat.id === categorie);
            
            return <div key={categorieDeLaListe.id} 
            className="Produit__categorie" 
            style={{backgroundColor: categorieDeLaListe.couleure}}>{categorieDeLaListe.categorie}</div>
          })}
          
        </div>

        <p className="Produit__unites">{unites}</p>
        <p className="Produit__ventes">{ventes} $</p>
      </section>
  );
}

export default Produit;
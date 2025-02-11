import "./Categories.scss";


// eslint-disable-next-line react/prop-types
function Categories({nom, couleure}){



  return(
      <li className="Categorie__item" style={{backgroundColor: couleure}}>{nom}</li>
  );
}

export default Categories;
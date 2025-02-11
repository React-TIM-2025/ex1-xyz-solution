import "./Header.scss";

function Header(){
  

  return(
    
    <header className="Header">
      <h2 className="Header__appli">
        xYz
      </h2>
      <h2 className="Header__user">
        ADMIN
      </h2>
      <input type="text" value="Recherche" className="Header__recherche" />
      <button className="Header__connexion">Connexion</button>
      <button className="Header__Inscription">Inscription</button>
    </header>
    
  );
}

export default Header;
import React from "react";
import { Link } from "react-router-dom";
import Error from "../../designs/img/ERROR.jpg";

/* Error Page  */
const Error = () => (
  <div className="error-page">
    <main>
      <section className="error">
        <h2 aria-hidden="true">Error 404</h2>
        <img src={Error} alt="404 Error" className="red-error" />
        <p className="text-error">La page demandée n'existe pas</p>
        <p className="text-error">Veuillez retourner à la page d'accueil.</p>
        <Link to="/">
          <button className="button-404">Retour à la page d'accueil</button>
        </Link>
      </section>
    </main>
  </div>
);

export default Error;

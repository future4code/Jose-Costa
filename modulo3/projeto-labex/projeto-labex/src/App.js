import { useState, useEffect } from "react";
import { useGetTrips } from "./services/useGetTrips"

const App = () => {
  const [trips, loadingTrips, errorTrips] = useGetTrips();

  console.log(trips, loadingTrips, errorTrips);

  return (
    <div>
      {loadingTrips && <p>Carregando...</p>}
      {!loadingTrips && trips && trips.length === 0 && <p>Sem trips adicionadas.</p>}
      {!loadingTrips && errorTrips && <p>Ocorreu um erro inesperado! Reinicie a página.</p>}
      {!loadingTrips && trips && trips.length > 0 && <p>Lista de trips:</p>}
    </div>
  );
}

export default App;

import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { obterId } from "../../util";
import { listaDeEventosState } from "../atom";

const useAdicionarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return (evento: IEvento) => {
    const hoje = new Date();
    if (evento.inicio < hoje) {
      throw new Error(
        "Eventos não podem ser cadastrados com data menor que a Atual!"
      );
    }
    evento.id = obterId();
    return setListaDeEventos((listaAntiga) => [...listaAntiga, evento]);
  };
};

export default useAdicionarEvento;

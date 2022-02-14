import React from "react";
import { getData } from "../../hooks/getData";
import { Container, Text } from "./styles";

type Props = {
  step1?: boolean;
  step2?: boolean;
  step3?: boolean;
  step4?: boolean;
  step5?: boolean;
};

export function Steps({
  step1 = false,
  step2 = false,
  step3 = false,
  step4 = false,
  step5 = false,
}: Props) {
  const { vehicle, brand, model } = getData();
  return (
    <Container>
      {step1 && <Text> Veiculos {">"} </Text>}

      {step2 && <Text>{vehicle} </Text>}

      {step3 && (
        <Text>
          {">"} {brand.nome}{" "}
        </Text>
      )}

      {step4 && (
        <Text>
          {">"} {model.nome} {">"}{" "}
        </Text>
      )}

      {step5 && <Text> 1995-1 Gasolina</Text>}
    </Container>
  );
}

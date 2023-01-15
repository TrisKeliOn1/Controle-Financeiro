import React from 'react';
import GridItem from "../GridItem";
import * as C from "./styles";

const Grid = ({ itens, setItens }) => {
  
  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.th width={40}>Descrição</C.th>
          <C.th width={40}>Valor</C.th>
          <C.th width={10} alignCenter>Tipo</C.th>
          <C.th width={10}></C.th>

        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {itens?.map((item, index) => (
          <GridItem hey={index} item={item} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid
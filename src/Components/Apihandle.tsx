import { Label } from "@mui/icons-material";
import { table } from "console";
import { useState } from "react";
type propstype = {
  usedata: any[];
  gridCols: {
    key: string;
    label: string;
    displayfield?: any;
  }[];
  loading?: boolean;
};
export default function Guide(props: propstype) {
  const { usedata, gridCols, loading } = props;
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <table>
          <thead>
            {gridCols.map((col, ind) => (
              <th key={ind}>{col.label}</th>
            ))}
          </thead>
          <tbody>
            {usedata.map((row, rowindex) => (
              <tr>
                {gridCols.map((col, ind) => (
                  <td key={ind}>
                    {col.displayfield ? col.displayfield(row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          </table>
      )}
    </>
  );
}

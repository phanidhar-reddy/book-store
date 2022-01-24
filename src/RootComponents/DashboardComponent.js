import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useTable } from "react-table";

const tableColoms = [
  {
    Header: "Book Name",
    accessor: "bookname",
  },
  {
    Header: "Date Added",
    accessor: "currentDate",
  },
  {
    Header: "Pages Read",
    accessor: "pagesRead",
  },
  {
    Header: "Total Pages",
    accessor: "totalPages",
  },
];

export const DashboardComponent = () => {
  const books = useSelector((state) => state?.marathonReducer?.marathon);
  const columns = useMemo(() => tableColoms, []);
  const data = useMemo(() => books, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  console.log(books);

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

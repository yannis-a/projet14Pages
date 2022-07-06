import React, { useMemo, useState, useCallback, useRef } from "react";
import { AgGridReact } from "ag-grid-react";

const Table = (data) => {
  const gridRef = useRef();

  // states
  const [rowData] = useState(data.data);
  const [columnDefs] = useState([
    { field: "firstName" , flex : 1.2},
    { field: "lastName" , flex : 1.2},
    { field: "startDate", flex: 1.2 },
    { field: "department", flex: 1.2 },
    { headerName: "Date of Birth", field: "birthDay", flex: 1.2 },
    { field: "street", flex: 1.5 },
    { field: "city", flex: 1.2 },
    { field: "state", flex: 0.8 },
    { field: "zipCode" },
  ]);

  //memos
  const defaultColDef = useMemo(
    () => ({ sortable: true, flex: 1, wrapText: true, autoHeight: true }),
    []
  );

  //functions
  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById("filter-text-box").value
    );
  }, []);

  const onPageSizeChanged = useCallback(() => {
    var value = document.getElementById("page-size").value;
    gridRef.current.api.paginationSetPageSize(Number(value));
  }, []);

  return (
    <div className="table">
      <div className="table-header">
        <div className="pageSize">
          Page Size : &nbsp;
          <select onChange={onPageSizeChanged} id="page-size">
            <option value="10">
              10
            </option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className="search">
          <span>Search : &nbsp;</span>
          <input
            type="text"
            id="filter-text-box"
            onInput={onFilterTextBoxChanged}
          />
        </div>
      </div>

      <div className="ag-theme-alpine">
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          cacheQuickFilter={true}
          animateRows={true}
          pagination={true}
          paginationAutoPageSize={true}
          paginationPageSize={10}
        />
      </div>
    </div>
  );
};

export default Table;

import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const BasicTable = () => {
  const [data, setData] = useState([
    { id: 1, name: "", description: "", selector: "", selectorType: "", type: "", source: "" },
    { id: 2, name: "", description: "", selector: "", selectorType: "", type: "", source: "" },
    { id: 3, name: "", description: "", selector: "", selectorType: "", type: "", source: "" }
  ]);

  const addRow = () => {
    setData([
      ...data,
      { id: data.length + 1, name: "", description: "", selector: "", selectorType: "", type:"", source: "" }
    ]);
  };

  const selectorTypeOptions = [
    { label: "JSON", value: "JSON" },
    { label: "XML", value: "XML" }
  ];

  const columns = [
    { field: "name", header: "Name" },
    { field: "description", header: "Description" },
    { field: "selector", header: "Selector" },
    {
      field: "selectorType",
      header: "Selector Type",
      body: (rowData) => (
        <Dropdown
          value={rowData.selectorType}
          options={selectorTypeOptions}
          onChange={(e) =>
            setData(
              data.map((d) =>
                d.id === rowData.id ? { ...d, selectorType: e.target.value } : d
              )
            )
          }
        />
      )
    },
    {
      field: "type",
      header: "Type",
      body: (rowData) => (
        <InputText
          value={rowData.type}
          onChange={(e) =>
            setData(
              data.map((d) =>
                d.id === rowData.id ? { ...d, type: e.target.value } : d
              )
            )
          }
        />
      )
    },
    { field: "source", header: "Source" }
  ];

  return (
    <div className="p-d-flex p-flex-column basic-table-wrapper">
      <DataTable value={data} className="p-datatable-striped p-datatable-bordered" style={{ marginBottom: "1rem" }}>
        {columns.map((col) => (
          <Column
            key={col.field}
            field={col.field}
            header={col.header}
            body={(rowData) =>
              col.body ? (
                col.body(rowData)
              ) : (
                <InputText
                  value={rowData[col.field]}
                  onChange={(e) =>
                    setData(
                      data.map((d) =>
                        d.id === rowData.id ? { ...d, [col.field]: e.target.value } : d
                      )
                    )
                  }
                />
              )
            }
          />
        ))}
      </DataTable>
      <div className="p-d-flex p-jc-end">
        <Button icon="pi pi-plus" onClick={addRow}  />
      </div>
      <div className="p-d-block" style={{ marginTop: '30px' }}>
        <Button label="Generate Template" />
      </div>
      
    </div>
  );
};

export default BasicTable;

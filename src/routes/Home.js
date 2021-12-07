import React from "react";
import styled from "styled-components";
import Papa from "papaparse";
import Input from "../components/extensible/Input.js";

const ColumnMappingWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 0.5rem;
    align-items: center;
`;

const ColumnMappingHeader = styled.h4`
    text-align: center;
    margin: 0;
`;

const ColumnMappings = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.25rem;
`;

function Home () {
    const [file, setFile] = React.useState(null);
    const [columns, setColumns] = React.useState([]);
    const [mappedColumns, setMappedColumns] = React.useState([]);
    const [rows, setRows] = React.useState([]);

    const onFileChange = (event) => { setFile(event.target.files[0]); }
    const onColumnMappingChange = (event, column) => {
        const columnIndex = columns.indexOf(column);
        if (columnIndex === -1) {
            return;
        }
        const _mappedColumns = [ ...mappedColumns ];
        _mappedColumns[ columnIndex ] = event.target.value;
        setMappedColumns(_mappedColumns);
    }
    const formatColumn = (column) => {
        if (!column) return '';
        return column.replace(/^\s+|\s+$/g, '').trim();
    }

    React.useEffect(() => {
        Papa.parse(file, {
            worker: true,
            step: function (results) {
                setRows(rows => [ ...rows, results.data ]);
            }
        })
    }, [file]);

    React.useEffect(() => {
        setColumns(Array.from(new Set(rows[0]
            ?.map(column => formatColumn(column))
            ?.filter(column => column.length > 0))));
    }, [rows[0]]);

    return (
        <React.Fragment>
            <h3>1. Upload File</h3>
            <Input type="file" onChange={ onFileChange } />
            { columns.length > 0 && (
                <React.Fragment>
                    <hr />
                    <h3>2. Map Columns</h3>
                    <ColumnMappings>
                        <ColumnMappingWrapper>
                            <ColumnMappingHeader>From</ColumnMappingHeader>
                            <div></div>
                            <ColumnMappingHeader>To</ColumnMappingHeader>
                        </ColumnMappingWrapper>
                        { columns?.map(column => column && (
                            <ColumnMappingWrapper key={ column }>
                                <Input value={ column } disabled />
                                <div>-></div>
                                <Input onChange={ (event) => { onColumnMappingChange(event, column) } } />
                            </ColumnMappingWrapper>
                        ))}
                    </ColumnMappings>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default Home;
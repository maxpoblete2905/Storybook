import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { BsTrash, BsPlus } from "react-icons/bs";
import EditForm from "./EditForm";
import DeleteForm from "./DeleteForm";
import Filter from "./Filter";
import { TableColumn, TableComponent } from "./Table.component";
import { CreateForm } from "./CreateForm";
import { v4 as uuidv4 } from "uuid";
import { ExcelDownloadButton } from "../downloadExcel/buttonExcel";
import Pagination from "../pagination/Paginacion";

export interface TableData {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  creationDate: string;
}

const inputs = ["id", "nombre", "apellido", "email", "creationDate"];

export interface MantainerProps {
  data: TableData[];
  columns: TableColumn[];
  emitOnSubmitCreate: (data: TableData) => void;
  emitOnSubmitDelete: (data: string[]) => void;
  emitOnSubmitEdit: (data: TableData) => void;
}

const initialItem: TableData = {
  id: "0",
  nombre: "",
  apellido: "",
  email: "",
  creationDate: "",
};

export const MantainerComponent: React.FC<MantainerProps> = ({
  data,
  columns,
  emitOnSubmitCreate,
  emitOnSubmitDelete,
  emitOnSubmitEdit,
}) => {
  const [filter, setFilter] = useState<string>("");
  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [dataList, setDataList] = useState<TableData[]>([]);
  const [dataPerPage] = useState<number>(10);
  const [selectedItem, setSelectedItem] = useState<TableData>(initialItem);

  useEffect(() => {
    setDataList(data);
  }, [data]);

  const toDate = (dateString: string): Date => {
    return new Date(dateString);
  };

  const handleDeleteClick = useCallback((id: string) => {
    setSelectedItemIds([id]);
    setShowDeleteModal(true);
  }, []);

  const handleDeleteMultiple = useCallback(() => {
    setShowDeleteModal(true);
  }, []);

  const handleConfirmDelete = useCallback(() => {
    const newArray = dataList.filter(
      (item) => !selectedItemIds.includes(item.id)
    );

    setDataList(newArray);
    emitOnSubmitDelete(selectedItemIds);
    setShowDeleteModal(false);
    setSelectedItemIds([]);
  }, [dataList, selectedItemIds, emitOnSubmitDelete]);

  const handleEditClick = useCallback((table: TableData) => {
    if (table) {
      setSelectedItem(table);
      setShowEditModal(true);
    }
  }, []);

  const handleEditSave = useCallback(
    (editedItem: TableData) => {
      const updatedDataList = dataList.map((item) =>
        item.id === editedItem.id ? editedItem : item
      );
      setDataList(updatedDataList);
      emitOnSubmitEdit(editedItem);
      console.log("se edita un elemento");
    },
    [dataList, emitOnSubmitEdit]
  );

  const handleCreateSave = useCallback(
    (editedItem: TableData) => {
      const currentDate = new Date();
      editedItem.creationDate =
        currentDate.toISOString().split(".")[0] + ".000Z";
      editedItem.id = uuidv4();
      emitOnSubmitCreate(editedItem);
      setDataList((prevDataList) => [editedItem, ...prevDataList]);
      console.log("Agregar un nuevo elemento");
    },
    [emitOnSubmitCreate]
  );

  const handleAddClick = useCallback(() => {
    setShowCreateModal(true);
  }, []);

  const handleCheckboxChange = useCallback(
    (id: string) => {
      const selectedIndex = selectedItemIds.indexOf(id);
      if (selectedIndex === -1) {
        setSelectedItemIds([...selectedItemIds, id]);
      } else {
        setSelectedItemIds([
          ...selectedItemIds.slice(0, selectedIndex),
          ...selectedItemIds.slice(selectedIndex + 1),
        ]);
      }
    },
    [selectedItemIds]
  );

  function removeAccents(str: string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const sortedData = useMemo(() => {
    return dataList
      .filter(
        ({ nombre, apellido, email }) =>
          (removeAccents(nombre)
            ?.toLowerCase()
            ?.includes(removeAccents(filter.trim())?.toLowerCase()) ??
            false) ||
          (removeAccents(apellido)
            ?.toLowerCase()
            ?.includes(removeAccents(filter.trim())?.toLowerCase()) ??
            false) ||
          (removeAccents(email)
            ?.toLowerCase()
            ?.includes(removeAccents(filter.trim())?.toLowerCase()) ??
            false)
      )
      .sort(
        (a, b) =>
          toDate(b.creationDate).getTime() - toDate(a.creationDate).getTime()
      );
  }, [dataList, filter]);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = sortedData.slice(indexOfFirstData, indexOfLastData);

  const paginate = useCallback(
    (pageNumber: number) => setCurrentPage(pageNumber),
    []
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Card>
        <Card.Header>
          <Row className="align-items-center justify-content-between">
            <Col md={8}>
              <Filter value={filter} onChange={setFilter} />
            </Col>

            <Col
              md={4}
              className="text-right d-flex justify-content-end align-items-center"
            >
              <Button
                variant="danger"
                style={{ marginRight: "5px" }}
                onClick={handleDeleteMultiple}
                disabled={selectedItemIds.length === 0}
              >
                <BsTrash />
              </Button>
              <Button
                variant="success"
                onClick={handleAddClick}
                style={{ marginRight: "5px" }}
              >
                <BsPlus />
              </Button>
              <ExcelDownloadButton data={currentData} fileName={"mi-data"} />
            </Col>
          </Row>
        </Card.Header>

        <Card.Body style={{ padding: 0 }}>
          <TableComponent
            data={currentData}
            handleCheckboxChange={handleCheckboxChange}
            handleEditClick={handleEditClick}
            selectedItemIds={selectedItemIds}
            handleDeleteClick={handleDeleteClick}
            columns={columns}
          />
        </Card.Body>
        <Card.Footer style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            totalPages={Math.ceil(sortedData.length / dataPerPage)}
            currentPage={currentPage}
            paginate={paginate}
          />
        </Card.Footer>
      </Card>

      <DeleteForm
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        onDelete={handleConfirmDelete}
      />

      <EditForm
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        selectedItem={selectedItem}
        onSave={handleEditSave}
      />
      <CreateForm
        show={showCreateModal}
        onHide={() => setShowCreateModal(false)}
        onSave={handleCreateSave}
        inputs={inputs}
      />
    </div>
  );
};

export default MantainerComponent;

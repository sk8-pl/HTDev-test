import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import TaskCard from "./task-card";
import Pagination from "@mui/material/Pagination";
import usePagination from "../../hooks/usePagintaion";
import { TaskObjectType } from "../../interfaces/date.inteface";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

const TaskList = () => {
  const storeList = useSelector((state: RootState) => state.dataList.list);
  const [page, setPage] = useState(1);
  const [visibleCards, setVisibleCards] = useState("4");

  const count = Math.ceil(storeList.length / +visibleCards);
  const _DATA = usePagination(storeList, +visibleCards);

  const handleChangeItemPage = (event: SelectChangeEvent) => {
    setVisibleCards(event.target.value);
  };

  const handleChangePage = (e: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <React.Fragment>
      <Box
        sx={{ minWidth: 275 }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {_DATA.currentData().map((e: TaskObjectType) => (
          <TaskCard
            key={e.date.datetime}
            text={e.text}
            sign={e.sign}
            tz={e.tz}
            date={e.date}
            index={storeList.indexOf(e)}
          />
        ))}
      </Box>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            value={visibleCards}
            onChange={handleChangeItemPage}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={4}></MenuItem>
            <MenuItem value={4}>4 карточки</MenuItem>
            <MenuItem value={8}>8 карточек</MenuItem>
            <MenuItem value={12}>12 карточек</MenuItem>
          </Select>
          <FormHelperText>Показывать на странице</FormHelperText>
        </FormControl>
        <Pagination
          count={count}
          page={page}
          showFirstButton
          showLastButton
          onChange={handleChangePage}
        />
      </div>
    </React.Fragment>
  );
}

export default TaskList;

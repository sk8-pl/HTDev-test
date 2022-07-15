import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import TaskObject from "../../../interfaces/date.inteface";

const TaskCard = (props: TaskObject) => {
  const { text, sign, date, index } = props;

  return (
    <Card
      variant="outlined"
      style={{
        maxWidth: "48%",
        height: "auto",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {sign}
        </Typography>
        <Typography variant="h5" component="div">
          Запись №{index+1}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {date.datetime}
        </Typography>
        <Typography variant="body2">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TaskCard;

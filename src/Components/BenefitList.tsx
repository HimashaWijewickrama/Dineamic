import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

export default function BenefitList() {
  return (
    <List sx={{ width: "100%" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FitnessCenterIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Good Source of Protein" />
        <ListItemAvatar>
          <Avatar>
            <MonitorHeartIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Excellent Source of Fiber" />
        <ListItemAvatar>
          <Avatar>
            <LocalPharmacyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="3.1 Serves of Vegetable" />
      </ListItem>
    </List>
  );
}

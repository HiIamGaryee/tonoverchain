import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ImageIcon from "@mui/icons-material/Image";
import StarsIcon from "@mui/icons-material/Stars";
import { useNavigate } from "react-router-dom";

const links = [
  { label: "Dashboard", icon: <DashboardIcon />, link: "/merchant/dashboard" },
  { label: "Ads", icon: <StarsIcon />, link: "/merchant/ads" },
  { label: "Edit My Store", icon: <ImageIcon />, link: "/merchant/profile" },
] as const;

const drawerW = 220;

const MerchantSidebar = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerW,
        display: { xs: "none", md: "block" },
        "& .MuiDrawer-paper": {
          width: drawerW,
          bgcolor: "#111827",
          color: "#fff",
        },
      }}
    >
      <Typography px={3} py={2} fontWeight={700}>
        Ton Over Chain
      </Typography>
      <List dense>
        {links.map(({ label, icon, link }) => (
          <ListItem disablePadding key={label} onClick={() => navigate(link)}>
            <ListItemButton>
              <ListItemIcon sx={{ color: "inherit" }}>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
export default MerchantSidebar;

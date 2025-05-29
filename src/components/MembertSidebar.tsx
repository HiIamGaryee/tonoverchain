// components/MembertSidebar.tsx
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
import PersonIcon from "@mui/icons-material/Person";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useNavigate } from "react-router-dom";

const links = [
  { label: "Dashboard", icon: <DashboardIcon />, link: "/dashboard" },
  { label: "Profile", icon: <PersonIcon />, link: "/member/profile" },
  { label: "Explore", icon: <TravelExploreIcon />, link: "/explore" },
  { label: "Shop", icon: <StorefrontIcon />, link: "/explore/shop" },
] as const;
const drawerW = 220;

const MembertSidebar = () => {
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

export default MembertSidebar;

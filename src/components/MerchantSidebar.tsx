// components/MerchantSidebar.tsx
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

const links = [
  { label: "Dashboard", icon: <DashboardIcon /> },
  { label: "AI Generate", icon: <ImageIcon /> },
  { label: "Smart BG", icon: <StarsIcon /> },
] as const;

const drawerW = 220;

const MerchantSidebar = () => (
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
      Aether
    </Typography>
    <List dense>
      {links.map(({ label, icon }) => (
        <ListItem disablePadding key={label}>
          <ListItemButton>
            <ListItemIcon sx={{ color: "inherit" }}>{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default MerchantSidebar;

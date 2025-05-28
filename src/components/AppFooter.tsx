// components/AppFooter.tsx
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import {
  HomeRounded,
  ExploreRounded,
  AddCircleRounded,
  CampaignRounded,
  PersonRounded,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

const routes = ["/", "/explore", "/post", "/ads", "/profile"] as const;

export default function AppFooter() {
  const nav = useNavigate();
  const { pathname } = useLocation();

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels={false}
        value={routes.indexOf(pathname as any)}
        onChange={(_, i) => nav(routes[i])}
      >
        {[
          HomeRounded,
          ExploreRounded,
          AddCircleRounded,
          CampaignRounded,
          PersonRounded,
        ].map((Icon, i) => (
          <BottomNavigationAction key={i} icon={<Icon />} />
        ))}
      </BottomNavigation>
    </Paper>
  );
}

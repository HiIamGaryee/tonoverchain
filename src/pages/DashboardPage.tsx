// pages/Dashboard.tsx
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import MembertSidebar from "../components/MembertSidebar";

interface Shop {
  id: number;
  name: string;
  image: string;
  lastVisit: string;
}

/* data — swap for real API later */
const lastVisited: Shop[] = [
  {
    id: 1,
    name: "Latte Love Café",
    image: "/img/latte.jpg",
    lastVisit: "2025-05-25",
  },
  {
    id: 2,
    name: "Moonlight Bistro",
    image: "/img/moon.jpg",
    lastVisit: "2025-05-12",
  },
  {
    id: 3,
    name: "Crimson Bar",
    image: "/img/crimson.jpg",
    lastVisit: "2025-04-30",
  },
];

const DashboardPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "background.default",
        minHeight: "100vh",
      }}
    >
      <MembertSidebar />

      <Box sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Welcome back, lovers
        </Typography>

        <Typography variant="subtitle1" mb={2}>
          Your recent adventures
        </Typography>

        <Grid container spacing={2}>
          {lastVisited.map((shop) => (
            <Grid
              key={shop.id}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
            >
              <Card>
                <CardMedia
                  component="img"
                  height={140}
                  image={shop.image}
                  alt={shop.name}
                />
                <CardContent>
                  <Typography variant="h6">{shop.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Visited on {shop.lastVisit}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardPage;

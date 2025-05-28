// pages/MerchantDashboardPage.tsx
import {
  Box,
  Typography,
  CircularProgress,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Stack,
  Button,
} from "@mui/material";
import MerchantSidebar from "../../components/MerchantSidebar";

const metrics = { progress: 75, totalAds: 12, activeRewards: 4 } as const;
const tasks = [
  { id: 1, text: "Fund next reward pool", done: false },
  { id: 2, text: "Approve pending couple split", done: true },
  { id: 3, text: "Reply to 3 reviews", done: false },
] as const;

const MerchantDashboardPage = () => (
  <Box sx={{ display: "flex", bgcolor: "#0f172a", minHeight: "100vh" }}>
    <MerchantSidebar />

    <Box
      sx={{
        flexGrow: 1,
        p: 4,
        color: "#e2e8f0",
        maxWidth: { md: "calc(100% - 220px - 300px)" },
      }}
    >
      <Typography variant="h5" gutterBottom>
        Morning, Merchant 👋
      </Typography>

      {/* Preview card */}
      <Card
        sx={{
          mb: 4,
          bgcolor: "#1e293b",
          width: "100%",
          height: "auto",
          aspectRatio: 16 / 9,
        }}
      >
        <CardContent sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
          <Box
            component="img"
            src="https://via.placeholder.com/300x320.png?text=Your+Shop+Image"
            alt="Shop preview"
            sx={{ width: 280, borderRadius: 2 }}
          />

          <Box flex={1} minWidth={240}>
            <Typography variant="h6" mb={1}>
              Black Panther Chibi
            </Typography>
            <Typography variant="body2" mb={3}>
              Your shop cover goes here—upload any time to charm your patrons.
            </Typography>
            <Button>Edit Now</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>

    {/* Right column */}
    <Box
      sx={{
        width: 300,
        p: 4,
        display: { xs: "none", md: "block" },
        color: "#e2e8f0",
      }}
    >
      <Card sx={{ bgcolor: "#1e293b" }}>
        <CardContent>
          <Stack alignItems="center" mb={2}>
            <Box position="relative" display="inline-flex">
              <CircularProgress
                variant="determinate"
                value={metrics.progress}
                size={120}
                thickness={4}
              />
              <Box
                position="absolute"
                top={0}
                left={0}
                bottom={0}
                right={0}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="h6">{metrics.progress}%</Typography>
              </Box>
            </Box>
            <Typography variant="body2">Monthly sales target</Typography>
          </Stack>

          <Typography variant="subtitle1" gutterBottom>
            Today’s tasks
          </Typography>
          <List dense>
            {tasks.map(({ id, text, done }) => (
              <ListItem key={id} sx={{ pl: 0 }}>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    sx: { textDecoration: done ? "line-through" : "none" },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  </Box>
);

export default MerchantDashboardPage;

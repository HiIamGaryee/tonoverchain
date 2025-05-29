// pages/HomePage.tsx
import {
  Box,
  Button,
  Typography,
  Grid,
  Stack,
  Card,
  CardContent,
  keyframes,
} from "@mui/material";
import HomeImg from "../assets/home1.png";
import { useNavigate } from "react-router-dom";
import FaqSection from "../components/FaqSection";

const heroStats = [
  { label: "Couple users", value: "47+" },
  { label: "Rewards earned", value: "200+" },
] as const;

const services = [
  {
    icon: "💞",
    title: "Joint Rewards",
    desc: "Earn points together every time you revisit your favorite spots.",
  },
  {
    icon: "⚖️",
    title: "Bill Auto-Split",
    desc: "Smart contracts settle utilities the moment they arrive.",
  },
  {
    icon: "📊",
    title: "Couple Analytics",
    desc: "See spending habits and sweet spots at a glance.",
  },
] as const;

const HomePage = () => {
  const navigate = useNavigate();
  const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
  return (
    <Box sx={{ bgcolor: "background.default", color: "#f3f0f4", pb: 10 }}>
      {/* hero */}
      <Grid
        container
        spacing={4}
        alignItems="center"
        px={{ xs: 2, md: 6 }}
        pt={{ xs: 6, md: 10 }}
      >
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Typography
            variant="overline"
            sx={{ color: "primary.main", fontWeight: 700 }}
          >
            Web3 • Couples • Loyalty
          </Typography>

          <Typography
            variant="h3"
            fontWeight={700}
            lineHeight={1.1}
            mb={2}
            sx={{ fontSize: { xs: "2.2rem", md: "3.2rem" } }}
          >
            Experience Love-Powered Rewards
          </Typography>

          <Typography variant="body1" mb={4} maxWidth={450}>
            This is a Web3-powered loyalty and utility bill-sharing app for
            couples. Revisit your favorite cafes and stores, earn rewards
            together, and auto-split utility bills <em>fairly</em> via smart
            contracts. Rekindle memories. Build habits. Share love.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate(`/dashboard`)}
            >
              Login as User
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => navigate(`/merchant/dashboard`)}
            >
              Login as Merchant
            </Button>
          </Stack>

          <Stack direction="row" spacing={3}>
            {heroStats.map(({ label, value }) => (
              <Box key={label}>
                <Typography variant="h4" fontWeight={700} color="primary.main">
                  {value}
                </Typography>
                <Typography variant="caption">{label}</Typography>
              </Box>
            ))}
          </Stack>
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
          textAlign="center"
        >
          <Box
            component="img"
            src={HomeImg}
            alt="Couple in VR"
            sx={{
              width: { xs: "100%", md: 420 },
              borderRadius: 3,
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>

      <Box textAlign="center" mt={{ xs: 10, md: 14 }} px={2}>
        <Typography
          variant="overline"
          sx={{ color: "primary.main", fontWeight: 700 }}
        >
          Our Services
        </Typography>
        <Typography
          variant="h4"
          fontWeight={700}
          mb={6}
          sx={{ fontSize: { xs: "2rem", md: "2.8rem" } }}
        >
          Artificial Intelligence Meets Romance
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          maxWidth={1200}
          mx="auto"
        >
          {services.map(({ icon, title, desc }, idx) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={title}
              sx={{
                animation: `${fadeInUp} 0.6s ease-out`,
                animationDelay: `${idx * 0.15}s`,
                animationFillMode: "both",
              }}
            >
              <Card
                sx={{
                  bgcolor: "#17151d",
                  borderRadius: 3,
                  p: 3,
                  height: "100%",
                  boxShadow: "0 0 12px transparent",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 0 20px #E5007D",
                  },
                }}
                elevation={0}
              >
                <CardContent>
                  <Typography fontSize={40} mb={2}>
                    {icon}
                  </Typography>
                  <Typography variant="h6" fontWeight={600} mb={1} color="#fff">
                    {title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <FaqSection />
    </Box>
  );
};

export default HomePage;

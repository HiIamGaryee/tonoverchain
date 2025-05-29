import {
  Box,
  Typography,
  List,
  ListItem,
  Card,
  CardMedia,
  CardContent,
  Rating,
  useTheme,
  keyframes,
} from "@mui/material";
import MembertSidebar from "../components/MembertSidebar";

const glowIn = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

interface Shop {
  id: number;
  name: string;
  image: string;
  rating: number;
  address: string;
}

const shops: Shop[] = [
  {
    id: 1,
    name: "Rose Café",
    image: "/img/rose.jpg",
    rating: 4.7,
    address: "123 Bloom St.",
  },
  {
    id: 2,
    name: "BitterSweet",
    image: "/img/bitter.jpg",
    rating: 4.6,
    address: "9 Cocoa Ave.",
  },
  {
    id: 3,
    name: "Steam & Cream",
    image: "/img/steam.jpg",
    rating: 4.9,
    address: "78 Froth Rd.",
  },
];

const ExploreShopsPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "background.default",
        minHeight: "100vh",
      }}
    >
      <MembertSidebar />
      <Typography
        variant="h5"
        fontWeight={700}
        sx={{
          color: "primary.main",
          mb: 4,
          textTransform: "uppercase",
          textShadow: `0 0 6px #E5007D`,
        }}
      >
        Explore Shops
      </Typography>
      <List disablePadding>
        {shops.map((shop, index) => (
          <ListItem
            key={shop.id}
            disableGutters
            sx={{
              mb: 3,
              animation: `${glowIn} 0.5s ease ${index * 0.1}s both`,
            }}
          >
            <Card
              sx={{
                display: "flex",
                width: "100%",
                borderRadius: 3,
                overflow: "hidden",
                bgcolor: "#16131d",
                boxShadow: `0 0 12px -4px #E5007D`,
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: `0 0 20px 2px #E5007D`,
                  transform: "scale(1.015)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={shop.image}
                sx={{
                  width: { xs: 100, sm: 140 },
                  objectFit: "cover",
                  filter: "brightness(1.1)",
                }}
                alt={shop.name}
              />

              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  px: 3,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{
                    color: "#fff",
                    mb: 0.5,
                    textShadow: `0 0 6px #E5007D`,
                  }}
                >
                  {shop.name}
                </Typography>

                <Rating
                  value={shop.rating}
                  precision={0.1}
                  readOnly
                  size="small"
                  sx={{ mb: 0.5 }}
                />

                <Typography
                  variant="caption"
                  sx={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {shop.address}
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ExploreShopsPage;

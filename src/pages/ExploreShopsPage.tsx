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
  style: string;
}

const shops: Shop[] = [
  {
    id: 1,
    name: "Rose Café",
    image: "/assets/shop10.jpg",
    rating: 4.7,
    address:
      "Lot 11-1, Ground Floor, IOI Rio City, Bandar Puteri, 47100 Puchong, Selangor, Malaysia",
    style: "Western",
  },
  {
    id: 2,
    name: "BitterSweet",
    image: "/assets/shop11.jpg",
    rating: 4.6,
    address:
      "No. 88, Jalan Mahsuri, Bayan Baru, 11900 Bayan Lepas, Penang, Malaysia",
    style: "Alcohol/Bar",
  },
  {
    id: 3,
    name: "Steam & Cream",
    image: "/assets/shop12.jpg",
    rating: 4.9,
    address:
      "Lot G-15, Gurney Paragon Mall, Gurney Drive, 10250 Georgetown, Penang, Malaysia",
    style: "Dessert Café",
  },
  {
    id: 4,
    name: "Luna Beans",
    image: "/assets/shop1.jpg",
    rating: 4.5,
    address:
      "No. 22, Jalan Austin Heights 8/3, Taman Mount Austin, 81100 Johor Bahru, Johor, Malaysia",
    style: "Dessert Café",
  },
  {
    id: 5,
    name: "Twilight Teahouse",
    image: "/assets/shop2.jpg",
    rating: 4.8,
    address: "25A, Jalan Hang Lekiu, 75200 Melaka, Malaysia",
    style: "Chinese Tea",
  },
  {
    id: 6,
    name: "Crimson Drip",
    image: "/assets/shop3.jpg",
    rating: 4.4,
    address:
      "No. 1, Jalan Bundusan, Penampang, 88300 Kota Kinabalu, Sabah, Malaysia",
    style: "Alcohol/Bar",
  },
  {
    id: 7,
    name: "Velvet Roast",
    image: "/assets/shop4.jpg",
    rating: 4.6,
    address:
      "Lot 26, 1st Floor, Berjaya Megamall, Jalan Tun Ismail, 25000 Kuantan, Pahang, Malaysia",
    style: "Western",
  },
  {
    id: 8,
    name: "Saffron & Beans",
    image: "/assets/shop5.jpg",
    rating: 4.9,
    address:
      "No. 48, Jalan Yam Tuan, Bandar Seremban, 70000 Seremban, Negeri Sembilan, Malaysia",
    style: "Fusion Café",
  },
  {
    id: 9,
    name: "Rabbit Hole of Chai",
    image: "/assets/shop6.jpg",
    rating: 4.7,
    address:
      "Lot G10, AEON Shah Alam, Jalan Akuatik 13/64, Seksyen 13, 40100 Shah Alam, Selangor, Malaysia",
    style: "Alcohol/Bar",
  },
  {
    id: 10,
    name: "Noir Café",
    image: "/assets/shop7.jpg",
    rating: 4.6,
    address:
      "Level 1, Alamanda Shopping Centre, Jalan Alamanda, Presint 1, 62000 Putrajaya, Malaysia",
    style: "Minimalist Coffee",
  },
  {
    id: 11,
    name: "Midnight Brew",
    image: "/assets/shop8.jpg",
    rating: 4.5,
    address:
      "Unit C-01-02, Shaftsbury Square, Jalan Impact, Cyber 6, 63000 Cyberjaya, Selangor, Malaysia",
    style: "Alcohol/Bar",
  },
  {
    id: 12,
    name: "Sakura Sips",
    image: "/assets/shop9.jpg",
    rating: 4.8,
    address: "33, Jalan SS 2/75, SS 2, 47300 Petaling Jaya, Selangor, Malaysia",
    style: "Japanese",
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
                  aspectRatio: 1 / 1,
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
                  sx={{ color: "rgba(255,255,255,0.8)", fontStyle: "italic" }}
                >
                  {shop.style}
                </Typography>
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

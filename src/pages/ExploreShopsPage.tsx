// pages/ExploreShops.tsx
import {
  Box,
  Typography,
  List,
  ListItem,
  Card,
  CardMedia,
  CardContent,
  Rating,
} from "@mui/material";

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
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Explore shops
      </Typography>

      <List disablePadding>
        {shops.map((shop) => (
          <ListItem key={shop.id} disableGutters sx={{ mb: 2 }}>
            <Card sx={{ display: "flex", width: "100%" }}>
              <CardMedia
                component="img"
                image={shop.image}
                sx={{ width: { xs: 100, sm: 120, md: 140 } }}
                alt={shop.name}
              />

              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">{shop.name}</Typography>
                <Rating
                  value={shop.rating}
                  precision={0.1}
                  readOnly
                  size="small"
                  sx={{ mb: 0.5 }}
                />
                <Typography variant="body2" color="text.secondary">
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

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MembertSidebar from "../components/MembertSidebar";

const gallery = [
  "/img/shop-hero.jpg",
  "/img/shop-int-1.jpg",
  "/img/shop-int-2.jpg",
] as const;

const reviews = [
  {
    id: 1,
    user: "Mia",
    avatar: "/img/avatars/mia.png",
    rating: 4.8,
    comment: "Perfect date-night vibes. The latte art is flirty too.",
  },
  {
    id: 2,
    user: "Harper",
    avatar: "/img/avatars/harper.png",
    rating: 4.6,
    comment: "Blockchain checkout worked like a charm — split bill bliss.",
  },
] as const;

const ShopDetailPage = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <MembertSidebar />

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ fontWeight: 700 }}>
          Crimson Bar
          <IconButton
            size="small"
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <Card sx={{ mb: 2 }}>
            <CardMedia component="img" image={gallery[0]} alt="Shop hero" />
          </Card>

          <Stack direction="row" alignItems="center" spacing={1} mb={2}>
            <Rating value={4.7} precision={0.1} readOnly size="small" />
            <Typography variant="body2" color="text.secondary">
              4.7 • 218 reviews
            </Typography>
          </Stack>

          <Typography variant="body1" mb={3}>
            Craft cocktails, sultry lighting, and a loyalty program that rewards
            you with more than just points — it remembers every anniversary
            toast.
          </Typography>

          <Divider sx={{ mb: 2 }} />

          <Typography variant="h6" gutterBottom>
            Reviews
          </Typography>

          {reviews.map(({ id, user, avatar, rating, comment }) => (
            <Card key={id} sx={{ mb: 2 }}>
              <CardContent sx={{ display: "flex", gap: 2 }}>
                <Avatar src={avatar} alt={user} />
                <Box>
                  <Typography variant="subtitle1">{user}</Typography>
                  <Rating
                    value={rating}
                    precision={0.1}
                    readOnly
                    size="small"
                  />
                  <Typography variant="body2" color="text.secondary">
                    {comment}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button fullWidth variant="contained" onClick={handleClose}>
            Booking Now
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ShopDetailPage;

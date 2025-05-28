// MerchantProfileSettingPage.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Chip,
  Divider,
  Switch,
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const categories = ["Cafe", "Bar", "Restaurant", "Retail"] as const;

const fields = [
  { label: "Store name", name: "storeName", value: "Crimson Bar" },
  { label: "Address", name: "address", value: "77 Ember St." },
  { label: "Tagline", name: "tagline", value: "Love in every sip" },
] as const;

const MerchantProfileSettingPage = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigate(-1); // slide back to previous view
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      aria-labelledby="merchant-settings-title"
    >
      <DialogTitle id="merchant-settings-title" sx={{ fontWeight: 700 }}>
        Merchant settings
        <IconButton
          size="small"
          onClick={handleClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Box component="form" noValidate>
          {fields.map(({ label, name, value }) => (
            <TextField
              key={name}
              fullWidth
              margin="normal"
              label={label}
              defaultValue={value}
            />
          ))}

          <Typography variant="subtitle1" mt={2} mb={1}>
            Category
          </Typography>

          <Stack direction="row" spacing={1} mb={2} flexWrap="wrap">
            {categories.map((item) => (
              <Chip
                key={item}
                label={item}
                color={item === "Bar" ? "primary" : "default"}
              />
            ))}
          </Stack>

          <TextField
            fullWidth
            margin="normal"
            label="About"
            multiline
            minRows={4}
            defaultValue="Craft cocktails & blockchain loyalty rewards for couples."
          />

          <Divider sx={{ my: 3 }} />

          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Allow sponsored placement"
            sx={{ mb: 2 }}
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button variant="contained" fullWidth onClick={handleClose}>
          Save profile
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MerchantProfileSettingPage;

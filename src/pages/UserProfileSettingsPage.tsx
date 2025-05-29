import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  IconButton,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const fields = [
  { label: "Full name", name: "fullName", value: "Bae" },
  { label: "Email", name: "email", value: "bae@lovechain.dev" },
  { label: "Phone", name: "phone", value: "+1 555-321-0987" },
  { label: "Date of birth", name: "dob", value: "1995-12-27" },
] as const;

const UserProfileSettingsPage = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ fontWeight: 700 }}>
        User Settings
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
          <Stack direction="column" alignItems="center" spacing={1} mb={3}>
            <Avatar src="/img/avatars/you.png" sx={{ width: 80, height: 80 }} />
            <Button size="small" variant="outlined">
              Change photo
            </Button>
          </Stack>

          {fields.map(({ label, name, value }) => (
            <TextField
              key={name}
              fullWidth
              margin="normal"
              label={label}
              defaultValue={value}
              // type={type}
            />
          ))}

          <Divider sx={{ my: 3 }} />

          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Enable dark mode"
            sx={{ mb: 2 }}
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button fullWidth variant="contained" onClick={handleClose}>
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserProfileSettingsPage;

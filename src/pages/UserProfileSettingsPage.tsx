import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Stack,
  Switch,
  FormControlLabel,
  Divider,
} from "@mui/material";

const UserProfileSettingsPage = () => {
  return (
    <Box component="form" sx={{ p: 2, maxWidth: 480, mx: "auto" }}>
      <Stack direction="column" alignItems="center" spacing={1} mb={3}>
        <Avatar src="/img/avatars/you.png" sx={{ width: 80, height: 80 }} />
        <Button size="small" variant="outlined">
          Change photo
        </Button>
      </Stack>

      {(
        [
          { label: "Full name", name: "fullName", value: "Bae" },
          { label: "Email", name: "email", value: "bae@lovechain.dev" },
          { label: "Phone", name: "phone", value: "+1 555-321-0987" },
          {
            label: "Date of birth",
            name: "dob",
            value: "1995-12-27",
            // type: "date",
          },
        ] as const
      ).map(({ label, name, value }) => (
        <TextField
          key={name}
          fullWidth
          margin="normal"
          label={label}
          defaultValue={value}
          type="text"
        />
      ))}

      <Divider sx={{ my: 3 }} />

      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Enable dark mode"
        sx={{ mb: 2 }}
      />

      <Button fullWidth variant="contained">
        Save changes
      </Button>
    </Box>
  );
};

export default UserProfileSettingsPage;

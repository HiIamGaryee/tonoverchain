// pages/PostAdPage.tsx
import {
  Box,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const fields = [
  { label: "Headline", name: "title" },
  { label: "Description", name: "desc", multiline: true, rows: 3 },
  { label: "Budget (TON)", name: "budget", type: "number" },
] as const;

export default function PostAdPage() {
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  const [form, setForm] = useState({ title: "", desc: "", budget: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Box component="form" sx={{ p: 2, pb: 10 /* footer gap */ }}>
      {fields.map((f) => (
        <TextField
          key={f.name}
          fullWidth
          margin="normal"
          value={form[f.name]}
          onChange={handleChange}
          {...f}
        />
      ))}

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2 }}
        onClick={() => setOpen(true)}
      >
        Proceed to payment
      </Button>

      {/* mini-dialog selector */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Choose payment method</DialogTitle>
        <List>
          {[
            { label: "Credit / Debit", icon: CreditCardIcon },
            { label: "Pay with QR", icon: QrCode2Icon },
          ].map(({ label, icon: Icon }) => (
            <ListItemButton
              key={label}
              onClick={() => {
                setOpen(false);
                nav("/"); // redirect after fake pay
              }}
            >
              <Icon sx={{ mr: 2 }} />
              <ListItemText primary={label} />
            </ListItemButton>
          ))}
        </List>
      </Dialog>
    </Box>
  );
}

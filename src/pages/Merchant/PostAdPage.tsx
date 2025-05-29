// pages/PostAdPage.tsx
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  IconButton,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const fields = [
  { label: "Headline", name: "title" },
  { label: "Description", name: "desc", multiline: true, rows: 3 },
  { label: "Budget (TON)", name: "budget", type: "number" },
] as const;

export default function PostAdPage() {
  const [open, setOpen] = useState(true);
  const [payOpen, setPayOpen] = useState(false);
  const nav = useNavigate();
  const [form, setForm] = useState({ title: "", desc: "", budget: "" });

  const handleClose = () => {
    setOpen(false);
    nav(-1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ fontWeight: 700 }}>
          Post New Ad
          <IconButton
            size="small"
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
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
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => setPayOpen(true)}
          >
            Proceed to payment
          </Button>
        </DialogActions>
      </Dialog>

      {/* payment method dialog */}
      <Dialog open={payOpen} onClose={() => setPayOpen(false)}>
        <DialogTitle>Choose payment method</DialogTitle>
        <List>
          {[
            { label: "Credit / Debit", icon: CreditCardIcon },
            { label: "Pay with QR", icon: QrCode2Icon },
          ].map(({ label, icon: Icon }) => (
            <ListItemButton
              key={label}
              onClick={() => {
                setPayOpen(false);
                nav("/");
              }}
            >
              <Icon sx={{ mr: 2 }} />
              <ListItemText primary={label} />
            </ListItemButton>
          ))}
        </List>
      </Dialog>
    </>
  );
}

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { keyframes } from "@emotion/react";

const underlineSlide = keyframes`
  from {
    width: 0;
    left: 0;
  }
  to {
    width: 100%;
    left: 0;
  }
`;

const faqs = [
  {
    q: "How do we earn loyalty points?",
    a: "Simply pay with a linked wallet at partner stores; points credit instantly.",
  },
  {
    q: "Can we change the split ratio?",
    a: "Yes, update it any time in Settings — the next bill respects the new share.",
  },
  {
    q: "Is the smart contract audited?",
    a: "Absolutely. Third-party audits keep our love (and funds) secure.",
  },
] as const;

const FaqSection = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box mt={{ xs: 12, md: 16 }} px={{ xs: 2, md: 6 }}>
      <Typography
        variant="overline"
        sx={{ color: "primary.main", fontWeight: 700 }}
      >
        Need Answers?
      </Typography>
      <Typography
        variant="h4"
        fontWeight={700}
        mb={4}
        sx={{ fontSize: { xs: "2rem", md: "2.8rem" } }}
      >
        Frequently Asked Questions
      </Typography>

      {faqs.map(({ q, a }, idx) => (
        <Accordion
          key={q}
          expanded={expanded === `panel${idx}`}
          onChange={handleChange(`panel${idx}`)}
          sx={{
            bgcolor: "#17151d",
            mb: 2,
            "&:before": { display: "none" },
            overflow: "hidden",
            position: "relative",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
            <Typography fontWeight={600} color="#fff">
              {q}
            </Typography>
          </AccordionSummary>

          <AccordionDetails
            sx={{
              animation:
                expanded === `panel${idx}` ? "fadeIn 0.3s ease" : "none",
              "@keyframes fadeIn": {
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
            }}
          >
            <Typography variant="body2" color="rgba(255,255,255,0.8)">
              {a}
            </Typography>
          </AccordionDetails>

          {expanded === `panel${idx}` && (
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "3px",
                bgcolor: "#E5007D",
                animation: `${underlineSlide} 0.4s ease-out forwards`,
              }}
            />
          )}
        </Accordion>
      ))}
    </Box>
  );
};

export default FaqSection;

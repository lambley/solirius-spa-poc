import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const cardData = [
  {
    icon: <TrendingUpIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Helping you to Grow and Scale",
    description: "We provide tailored support to help you achieve your business objectives and drive growth.",
  },
  {
    icon: <TipsAndUpdatesIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Provide Specialised Skills and Expertise",
    description: "We utilise our deep industry knowledge to help you overcome challenges and achieve your goals.",
  },
  {
    icon: <HourglassBottomIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Reduce Risk and Improve Efficiency",
    description: "We work with you to continuously improve your processes and technology for long-term success.",
  },
];

export default function LandingCards() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center", mt: 3 }}>
      {cardData.map((card, idx) => (
        <Card key={idx} sx={{ minWidth: 320, maxWidth: 400, width: "100%", boxShadow: 3 }}>
          <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {card.icon}
            <Box>
              <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
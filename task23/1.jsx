import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Carousel from "react-material-ui-carousel";

export default function MUIPractice() {
  const items = [
    { name: "First Slide", description: "This is the first carousel slide." },
    { name: "Second Slide", description: "This is the second carousel slide." },
    { name: "Third Slide", description: "This is the third carousel slide." },
  ];

  return (
    <div>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            🌟 MUI Practice
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ my: 4 }}>
        {/* Cards Section */}
        <Typography variant="h5" gutterBottom>
          Cards
        </Typography>
        <Grid container spacing={3}>
          {[1, 2, 3].map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card}>
              <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://picsum.photos/400/200?random=${card}`}
                  alt="Random"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Card {card}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is a sample card using Material UI.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Accordion Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" gutterBottom>
            Accordion
          </Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This is the first accordion content. You can put text or components here.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>This is the second accordion content.</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Carousel Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" gutterBottom>
            Carousel
          </Typography>
          <Carousel autoPlay animation="slide">
            {items.map((item, i) => (
              <Box
                key={i}
                sx={{
                  height: 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#f3f4f6",
                  borderRadius: 2,
                  boxShadow: 2,
                  p: 3,
                }}
              >
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" sx={{ ml: 2 }}>
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{ p: 2, mt: 4, textAlign: "center", bgcolor: "primary.main", color: "white" }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} MUI Practice. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
}

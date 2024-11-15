import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Stack,
    TextField,
    Typography,
    useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import "../Styles/FAQ.css";
import { HomeSectionTitle } from "./HomeSectionTitle";

const FAQ: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="faq-section">
      <HomeSectionTitle homesectiontitle="FAQ" />
      <div className="container">
        <Box sx={{ width: "100%" }}>
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            sx={{ flexWrap: "wrap" }}
          >
            <h1>
              If you can't find the answer you are looking for here, please
              contact{" "}
              <span onClick={handleClickOpen}>
                our customer services care team.
              </span>
            </h1>
          </Stack>
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title"
            sx={{
                color: "#a3872d", 
                fontFamily:"Julius Sans One, serif",
                fontWeight: 600,
                fontSize: "20px",
            }}>
              {"Ask a question from us"}
            </DialogTitle>
            <Divider sx={{backgroundColor: "#a3872d"}}/>
            <DialogContent >
              <DialogContentText 
              sx={{
                fontFamily: "Yanone Kaffeesatz, sans-serif",
                color: "#a3872d",
                fontSize: "18px",
                fontWeight: "600",
                }}>
                The best answers come from shorter! Cause, type your question as
                a single sentense. Our agent will contact you soon!
                <br />
                * For urgent matters please call us at 610-687-1575
                <br/>
                <Box flex={2}>
                  <form>
                    <TextField
                      label="Full name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      placeholder="Please enter your name *"
                      sx={{
                        fontFamily: "Bad Script, serif",
                      }}
                      required
                    />
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      placeholder="Please enter your email address *"
                      required
                      type="email"
                    />
                    <TextField
                      label="Message"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      multiline
                      rows={4}
                      placeholder="Please enter your question *"
                      required
                    />

                    {/* Submit button */}
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      Submit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      Cancel
                    </Button>
                  </form>
                </Box>
              </DialogContentText>
            </DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
        </Box>
        <Box sx={{ width: "100%", marginLeft: "5px", marginRight: "5px" }}>
          <Stack spacing={2} direction="column">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="faq-question">
                  Can we pay online?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="faq-answer">
                  Yes, you may pay for the order through our online or direct
                  payment facility.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="faq-question">
                  For how many people would the portion be enough?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="faq-answer">
                  The portion sizes are generally enough for 2-3 people,
                  depending on the order.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography className="faq-question">
                  Is there a minimum order value?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="faq-answer">
                  Yes, the minimum order value is specified on our platform
                  during checkout.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default FAQ;

// FAQ.tsx

import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../Styles/FAQ.css";

const FAQ: React.FC = () => {
    return (
        <div className="faq-section">
            <h2>Frequently Asked Questions</h2>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography className="faq-question">Can we pay online?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="faq-answer">
                        Yes, you may pay for the order through our online or direct payment facility.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography className="faq-question">For how many people would the portion be enough?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="faq-answer">
                        The portion sizes are generally enough for 2-3 people, depending on the order.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                    <Typography className="faq-question">Is there a minimum order value?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="faq-answer">
                        Yes, the minimum order value is specified on our platform during checkout.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default FAQ;

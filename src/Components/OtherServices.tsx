// OtherServices.tsx

import React from 'react';
import '../Styles/OtherServices.css';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import Service from './Service';

const OtherServices: React.FC = () => {
    return (
        <div className="services-section">
            <h2>Other Services</h2>
            <p className="description">
                We have designed a range of Gift Vouchers, keeping you in mind. It’s perfect for any occasion and can
                be utilized at any of our hotel’s restaurants or on The Kingsbury Indulgence platform. That’s not all –
                convenient Laundry Services within 48 hours, are also available for a quick wash, press or dry clean.
            </p>
            
            <div className="food-delivery">
                <h3>Food orders are delivered daily from</h3>
                <div className="time">
                    <span>10.30 A.M.</span> - <span>10.30 P.M.</span>
                </div>
                <p className="subtext">Orders placed after 10.30 p.m. will be delivered the following day.</p>
            </div>

            <div className="features">
                <Service/>
                {/* <Feature 
                    icon="safety-icon.png" 
                    title="Safety" 
                    description="Stringent protocols are followed in food preparation and handling"
                />
                <Feature 
                    icon="delivery-icon.png" 
                    title="Personalised Delivery" 
                    description="Deliveries are made solely by Hotel staff members"
                />
                <DeliveryDiningIcon/>
                <Feature 
                    icon=""
                    title="Quality" 
                    description="Five-star quality and service"
                /> */}
            </div>
        </div>
    );
};

type FeatureProps = {
    icon: string;
    title: string;
    description: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
    return (
        <div className="feature">
            <img src={icon} alt={`${title} Icon`} />
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default OtherServices;

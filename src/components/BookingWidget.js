// src/components/BookingWidget.js
import React from 'react';

const BookingWidget = () => (
    <section style={{ height: '496px', boxShadow: 'rgba(142, 151, 158, 0.15) 0px 4px 19px 0px', borderRadius: '16px', overflow: 'hidden', width: '100%', maxWidth: '650px' }}>
        <iframe
            src="https://adplist.org/widgets/booking?src=ibrahim-mohamed"
            title="Booking Widget"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: '0px' }}
        ></iframe>
    </section>
);

export default BookingWidget;
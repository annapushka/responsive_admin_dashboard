import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import './TrelloCard.scss';

type Props = {
    text: string;
};

const TrelloCard = ({ text }: Props) => {
    return (
        <Card className='trelloCard'>
            <Typography variant="body2">
                {text}
            </Typography>
        </Card>
    );
};

export default TrelloCard;
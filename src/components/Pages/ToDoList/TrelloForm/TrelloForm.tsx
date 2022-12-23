import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { Button, Card } from '@mui/material';

import './TrelloForm.scss';

const TrelloForm = (props: any) => {
    const { list, closeForm } = props;

    const [text, setText] = useState('');

    const placeholder = list ? "Enter list title..." : "Enter a title for this card...";
    const buttonTitle = list ? "Add List" : "Add Card";

    const hendlerTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value);

    return (
        <div className='trelloForm'>
            <Card style={{
                overflow: "visible",
                minHeight: 80,
                minWidth: 250,
                padding: "0.5rem"
            }}>
                <TextareaAutosize
                    placeholder={placeholder}
                    autoFocus
                    onBlur={closeForm}
                    value={text}
                    onChange={hendlerTextChange}
                    style={{
                        resize: "none",
                        width: "100%",
                        outline: "none",
                        border: "none",
                        overflow: "hidden"
                    }}
                />
            </Card>
            <div className="">
                <Button
                    variant='contained'
                    style={{

                    }}
                />
            </div>
        </div>
    );
};

export default TrelloForm;
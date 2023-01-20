import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { Button, Card } from '@mui/material';
import Icon from '@mui/material/Icon';

import './TrelloForm.scss';

const TrelloForm = (props: any) => {

    const { list, closeForm, addCard, addList, listID } = props;
    const [text, setText] = useState('');

    const placeholder = list ? "Enter list title..." : "Enter a title for this card...";
    const buttonTitle = list ? "Add List" : "Add Card";

    const hendlerTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value);

    const handleAdd = () => {
        list ? addList(text) : addCard(text, listID);
        closeForm();
    }

    const handleClose = () => {
        setText('');
        closeForm();
    }

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
            <div className="trelloForm__btns">
                <Button
                    onMouseDown={handleAdd}
                    variant='contained'
                    style={{
                        color: "white",
                        backgroundColor: "#8de02c"
                    }}
                >
                    {buttonTitle}
                </Button>
                <Icon
                    style={{
                        marginLeft: 8,
                        cursor: "pointer"
                    }}
                    onMouseDown={handleClose}
                >close</Icon>
            </div>
        </div>
    );
};

export default TrelloForm;
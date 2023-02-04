import React, { useState, MouseEvent, ChangeEvent } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { observer } from 'mobx-react-lite';
import listsStore from '../../../../../store/listsStore';

import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import TrelloElementMenuInput from './TrelloElementMenuInput';
import DatePicker from '../../../../DatePicker/DatePicker';

type Props = {
    id: string;
    text: string;
    type: string;
    listID: string;
};

const TrelloElementMenu = observer(({ id, text, type, listID }: Props) => {
    const { duplicateItem, archiveItem, editItem } = listsStore;
    const [title, setTitle] = useState(text);
    const [modalEdit, setModalEdit] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [deadlineInput, setDeadlineInput] = useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDuplicate = () => {
        duplicateItem(id, type, listID);
        setAnchorEl(null);
    }

    const handleArchive = () => {
        archiveItem(id, type, listID);
        setAnchorEl(null);
    }

    const handleEdit = () => {
        setModalEdit(true);
        editItem(id, title, type, listID);
    }

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => setTitle(e.target.value);

    const handleInputDeadline = () => {
        setDeadlineInput(true);
    }

    const handleDeadline = (value: Dayjs | null) => {
        console.log(value);
        setDeadlineInput(false);
        setAnchorEl(null);
    }

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                {type === 'list' ? (
                    <MoreHorizIcon />
                ) : (
                    <EditIcon fontSize='small' />
                )}
            </IconButton>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {modalEdit && (
                    <TrelloElementMenuInput title={title} handleChange={handleChange} type={type} />
                )}
                <MenuItem onClick={handleEdit} disableRipple>
                    <EditIcon />
                    Edit
                </MenuItem>
                <MenuItem onClick={handleDuplicate} disableRipple itemID={id}>
                    <FileCopyIcon />
                    Duplicate
                </MenuItem>
                {type === 'card' && (
                    <MenuItem onClick={handleInputDeadline} disableRipple itemID={id}>
                        {deadlineInput ? (
                            <DatePicker handleDeadline={handleDeadline} />
                        ) : (
                            <>
                                <AlarmIcon />
                                Deadline
                            </>
                        )}
                    </MenuItem>
                )}
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleArchive} disableRipple>
                    <ArchiveIcon />
                    Archive
                </MenuItem>
            </StyledMenu>
        </div>
    );
});

export default TrelloElementMenu;

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 14,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));
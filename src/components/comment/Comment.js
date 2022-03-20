import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


export default function Comment(props) {
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Travis Howard" src={props.user.profilePicture} />
            </ListItemAvatar>
            <ListItemText
                primary={props.user.username}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            comment section
                        </Typography>
                    </React.Fragment>
                }
             />
        </ListItem>
        <Divider variant="inset" component="li" />
        
        </List>
    )
}

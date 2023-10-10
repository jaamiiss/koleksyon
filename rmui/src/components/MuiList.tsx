import { Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, ListItemButton, Divider } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail'

export const MuiList = () => {
  return (
    <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
        <List>
            <ListItem>
                <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar>
                            <MailIcon />
                        </Avatar>
                    </ListItemAvatar>                    
                </ListItemIcon>
                <ListItemText primary='List Item 1' />
            </ListItem>
            <Divider />
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary='List Item 2' />
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemIcon>
                    <MailIcon />
                </ListItemIcon>
                <ListItemText primary='List Item 3' secondary='Secondary Text'/>
            </ListItem>
        </List>
    </Box>
  )
}
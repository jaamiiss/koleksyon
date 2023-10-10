import { BottomNavigation, BottomNavigationAction, Box, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import { useState } from "react"

export const MuiBottomNavigation = () => {
    const [value, setValue] = useState(0)
    const arrayComponents: JSX.Element[] = []
    const createNavigationComponent = (text: string): JSX.Element => {
        return (
            <Box display='flex' justifyContent='center' alignItems='center' key={text}>
                <Typography variant='h5'>{text}</Typography>
            </Box>
        )
    }

    arrayComponents.push(createNavigationComponent('Newsfeed'))
    arrayComponents.push(createNavigationComponent('My Favorites'))
    arrayComponents.push(createNavigationComponent('My Profile'))

    return (
        <>
            {arrayComponents[value]}
            <BottomNavigation 
            sx={{ width: '100%', position: 'absolute', bottom: 0 }}
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue)
            }}
            showLabels>
                <BottomNavigationAction label='Home' icon={<HomeIcon />} />
                <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
                <BottomNavigationAction label='Profile' icon={<PersonIcon />} />
            </BottomNavigation>
        </>
    )
}
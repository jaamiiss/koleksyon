import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material"

export const MuiCard = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia 
                component='img'
                height='140'
                image='https://source.unsplash.com/random'
                alt='unsplash image'/>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>React</Typography>
                <Typography gutterBottom variant='body2' color='text.secondary'>
                    React is a JavaScript library for building user interfaces.
                    React can be used a base in the deveopment of single-page or mobile applications.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}
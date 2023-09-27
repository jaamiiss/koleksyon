import { Typography } from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>

        <Typography variant='subtitle1'>Subtitle 1</Typography>
        <Typography variant='subtitle2'>Subtitle 2</Typography>

        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sunt pariatur non sequi esse quasi distinctio accusamus ad perspiciatis facilis, nobis, commodi est modi. Repellendus consectetur voluptates nobis suscipit sed.</Typography>
        <Typography variant='body2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit rem aliquam fugiat alias molestias amet soluta eveniet laboriosam nesciunt excepturi earum, sed inventore laudantium assumenda magnam nobis eius in voluptatibus!</Typography>
    </div>
    )
}
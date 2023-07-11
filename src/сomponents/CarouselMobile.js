import React from 'react';

import {
  TbWifi,
  TbTeapot,
  TbAirConditioning,
  TbDeviceDesktop,
  TbMicrowave,
  TbBed,
} from 'react-icons/tb';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './CarouselMobile.module.css';

import { Container, Grid, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { styled } from '@mui/material/styles';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CarouselMobile({
  images,
  title,
  description,
  descriptionRoom,
  bookLink,
}) {
  const swiperCardOptions = {
    allowSlideNext: true, // Отключает переключение к следующему слайду
    allowSlidePrev: true, // Отключает переключение к предыдущему слайду
    allowTouchMove: true, // Отключает свайп
    loop: true, // Включает зациклиность слайдера
    pagination: true, // Включает кнопки пагинации
  };

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card
        sx={{
          backgroundColor: 'rgb(209 209 209 / 31%);',
          borderRadius: '20px',
          margin: '10px',
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <Swiper
          {...swiperCardOptions}
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          modules={[Pagination]}
        >
          {images.map((img) => (
            <SwiperSlide>
              <CardMedia
                component="img"
                image={img}
                title="room"
                sx={{
                  height: '20rem',
                  objectFit: 'cover',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <CardActions disableSpacing>
          <Typography
            sx={{
              marginLeft: '40%',
            }}
          >
            Больше про комнату
          </Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ marginBottom: '20px' }}>
                    Удобства в номерах
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    <TbWifi className={styles.cardIcons} />
                    <Typography paragraph>бесплатный интернет Wi-Fi</Typography>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    <TbAirConditioning className={styles.cardIcons} />
                    <Typography paragraph>Кондиционер</Typography>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    <TbTeapot className={styles.cardIcons} />
                    <Typography paragraph>Чайник</Typography>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    <TbDeviceDesktop className={styles.cardIcons} />
                    <Typography paragraph>Телевизор</Typography>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    <TbMicrowave className={styles.cardIcons} />
                    <Typography paragraph>Микроволновка</Typography>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    <TbBed className={styles.cardIcons} />
                    <Typography paragraph>Двух местная кровать</Typography>
                  </Typography>
                </Grid>
                <Grid item xs={6}></Grid>
              </Grid>
            </Container>
            <Typography variant="h6">Описание комнаты:</Typography>
            <Typography paragraph>{descriptionRoom}</Typography>
            <Button
              variant="contained"
              href={bookLink}
              target="_blank"
              color="inherit"
              sx={{
                borderColor: '#fff',
                color: '#000',
                backgroundColor: 'inherit',
              }}
            >
              Забронировать номер
            </Button>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}

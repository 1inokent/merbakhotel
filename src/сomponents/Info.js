import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import { Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

// import styles from './Info.module.css';

import YMap from './Map';

export default function Info() {
  return (
    // <div className={styles.container} id="info">
    //   <div className={styles.box}>
    //     <h2 className={styles.h2}>Добро пожаловать в гостевой дом Mer Bak</h2>
    //     <div className={styles.imgContainer}>
    //       <div className={styles.imgHotelContainer}>
    //         <div className={styles.imgHotel}>a</div>
    //       </div>
    //       <p className={styles.p}>
    //         Мы рады приветствовать вас в нашем уютном гостевом доме,
    //         расположенном по адресу: улица Чернышевского, 8. Наше прекрасное
    //         местоположение всего в 450 метрах от моря делает нас идеальным
    //         выбором для отдыха. Вы сможете насладиться одним из лучших песчаных
    //         пляжей, которые предлагает наш город. В "Mer Bak" у нас есть 14
    //         номеров со всеми удобствами, где вы сможете комфортно разместиться.
    //         Мы приложим все усилия, чтобы ваше пребывание у нас было приятным и
    //         незабываемым.
    //       </p>
    //     </div>
    //     <h2>Мы находимся</h2>
    //     <div className={styles.adressDescription}>
    //       <p className={styles.p}>
    //         Гостевой дом "Mer Bak" расположен на улице Чернышевского, 8 в городе
    //         Феодосия. Это удобное место нахождения, где вы найдете рядом
    //         столовую и продуктовый магазин для удобства питания и покупок. Он
    //         также находится всего в трех минутах ходьбы от автовокзала,
    //         обеспечивая легкий доступ к общественному транспорту. Если вы
    //         предпочитаете автомобильное передвижение, то центр города находится
    //         всего в 15 минутах езды. Таким образом, гостевой дом "Mer Bak" имеет
    //         удобное расположение, предоставляя доступ ко всем необходимым
    //         удобствам и близость к основным местам интереса.
    //       </p>
    //     </div>
    //   </div>
    //   <YMap />
    // </div>

    <>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, md: 25, xl: 25 }}
        maxWidth="xl"
        m={{ xs: 0, sm: 1, md: 5, lg: 5 }}
        alignItems="center"
        mb={{ xs: 0, sm: 1, md: 3, lg: 3 }}
      >
        <Grid item xs={12} md={12} lg={12} m="5px">
          <Typography variant="h5" id="info" fontWeight={500}>
            Добро пожаловать в гостевой дом Mer Bak
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Avatar
            alt="тут фото отеля"
            src="https://hmd.tvil.ru/tmp/20170702/e11/1388813.jpeg"
            sx={{
              objectFit: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              maxWidth: '500px',
              height: '300px',
              borderRadius: '10%',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="subtitle1">
            Мы рады приветствовать вас в нашем уютном гостевом доме. Наше
            прекрасное местоположение всего в 450 метрах от моря делает нас
            идеальным выбором для отдыха. Вы сможете насладиться одним из лучших
            песчаных пляжей, которые предлагает наш город. В "Mer Bak" у нас
            есть 14 номеров со всеми удобствами, где вы сможете комфортно
            разместиться. Мы приложим все усилия, чтобы ваше пребывание у нас
            было приятным и незабываемым.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h5" fontWeight={500}>
            Мы находимся
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="subtitle1">
            Гостевой дом "Mer Bak" расположен в
            <b> городе Феодосия на улице Чернышевского, 8</b>. Это удобное место
            нахождения, где вы найдете рядом столовую и продуктовый магазин для
            удобства питания и покупок. Он также находится всего в трех минутах
            ходьбы от автовокзала, обеспечивая легкий доступ к общественному
            транспорту. Если вы предпочитаете автомобильное передвижение, то
            центр города находится всего в 15 минутах езды. Таким образом,
            гостевой дом "Mer Bak" имеет удобное расположение, предоставляя
            доступ ко всем необходимым удобствам и близость к основным местам
            интереса.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <YMap />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Divider />
        </Grid>
      </Grid>
    </>
  );
}

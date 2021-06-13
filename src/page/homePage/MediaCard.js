import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    margin: 'auto',
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           簡介
          </Typography>
          <Typography variant="body1"  component="p" >
            <p>埃及全名為埃及阿拉伯共和國，是東北非洲人口最多的國家，面積為1,020,000平方公里，人口數在2020年突破一億，國土橫跨亞、非兩洲，境內的蘇伊士運河連接地中海與紅海、亞洲與歐洲短途運輸路線，是十分重要的國際運河。埃及也是四大文明古國之一，尚有中國、印度、巴比倫，原存在於當地的古埃及文明在希臘與羅馬人的統治下逐漸沒落，最後被阿拉伯文明取代，官方語言為阿拉伯語，通用英語和法語，伊斯蘭教為其國教，信徒主要為遜尼派。</p>
            <p>境內有許多著名景點，如:著名古城:尼羅河畔的開羅、盧克索；舉世聞名的歷史遺產:胡夫金字塔、獅身人面像、盧克索神廟、國王谷的陵墓、圖坦卡蒙黃金面具、阿布辛貝神廟等，除此之外，還有全世界最大的撒哈拉沙漠與世界十大潛水點之一的東部西奈半島沿岸的紅海海域，以及烤餅、鳥蛇湯、烤鴿、鷹嘴豆泥、米布丁等當地經典美食。</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
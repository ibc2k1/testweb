import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Router_area from "./router_area";


const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    margin: 'auto',
  },
  media: {
    height: 140,
  },
});

export default function Area() {
  const classes = useStyles();

  return (
    <div>
      <Router_area/>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/931881/pexels-photo-931881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            四大地理區
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <h3>尼羅河谷</h3>
            <p>埃及的面積雖有一百萬平方公里，但境內絕大部分均為黃沙無垠的沙漠，只有寬約十六公里的尼羅河谷及開羅以下的三角洲 ，才是一條綠帶，面積約為33700平方公里，僅為其總面積的三十分之一。但在此狹窄的綠帶上，卻居住了埃及百分之九十的人口，其重要性不言而喻。西諺所說：「尼羅河上午乾涸，埃及下午死亡」，確係實情。綠帶上每方英哩有人口二千人以上，十分稠密。所有埃及的重要城市，均沿尼羅河分布。只有蘇伊士運河區為一例外。開羅以北，稱為下埃及（Lower Egypt），沿海有不少鹹水潟湖，如馬加特湖（Lake Maritt）、艾德庫湖（Lake Maritt）、布如勒斯湖及曼沙來湖等，目前僅為沮洳湖泊之區，如仿荷蘭辦法，亦可能變為海埔地。英國電影《尼羅河上的慘案》渲染了尼羅河一帶的綺麗風光。</p>
            <h3>西部沙漠</h3>
            <p>尼羅河谷以西稱為西部沙漠約占全埃面積的四分之三，西南角有亞琛基岩出露形成的吉夫基比爾高原，高約二千公尺，此再徑沙積的高原周圍僅有少數綠洲。沙漠北部有西瓦及卡塔拉石灰岩窪地，卡塔拉窪地低於海平面132公尺，內有鹹湖及沼澤，不能人居；由西瓦綠洲向南到吉夫基比爾高原間，有一大片沙礫及沙丘，稱為大沙海（Great Sand Sea），荒漠寂寂，不易通過。本區只有極少數的牧人居住在少數綠洲，以牲畜、穀物、菜蔬過自給自足式的主活，僅以少數的棗子及橄欖油向外交換日用工業品。埃及政府正在本區試鑽地下深水井，增加水源，以便容納大量人口，由尼羅河谷現已建有鐵路以通西瓦及卡爾加（Kharga）綠洲。</p>
            <h3>東部沙漠</h3>
            <p>尼羅河谷以東的沙漠區，稱為東部沙漠，本區地形複雜，有由亞琛基岩出露所成的紅海高地，也有切割的石灰岩高原，本區一般高度約600~700公尺，但少數山峰可達2100公尺。如沙葉布山（Gebel Shayeb）高達2380公尺。臨時性的河流自山區分向紅海及尼羅河谷入注，將山區切割成峽谷。本區因有山嶺關係，故水源情況較西沙漠區為佳，埃及牧人亦樂於在本區放牧。由於磷石及石油的開發，近年本區又形成一些礦鎮。</p>
            <h3>西奈半島</h3>
            <p>蘇伊士運河以東的一塊半島稱為西奈半島。西奈半島是一片多山的高原，北部為石灰岩高原，中南部為艾格馬（Egma）高原，高一千六百餘公尺，最高的凱瑟琳山高2629公尺，亦為全埃及的最高山。此山由火成岩及變質岩組成，呈現紅色。西奈半島西為蘇伊士海，東為阿卡巴灣，兩灣皆由斷層陷落所形成，阿卡巴灣曾於1967年被埃及短期封鎖，為當年六月以阿第二次戰爭的導火線，六天戰役結束，西奈半島全境被以色列軍攻佔。1982年埃及取回主權。西奈半島亦為乾燥的沙漠區，北部年雨量約百餘公厘，南部尖端只有六十公厘左右。除牧人外，半島西部的烏木包格馬（Um Bogma）有錳礦，蘇爾、阿爾等地有油田，為埃及能源所在。</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    
  );
}
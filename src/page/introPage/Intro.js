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

export default function Intro() {
  const classes = useStyles();

  return (
    <div>
      <Router_area/>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/4388159/pexels-photo-4388159.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            宗教
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p"> 
            <p>宗教傳統在埃及具有深厚的民眾基礎，埃及約90%的人口信仰伊斯蘭教遜尼派，約10%的人口信仰基督教的科普特正教、科普特天主教和希臘正教等教派。科普特正教為東方正教會中的一個獨立教派，埃及科普特人多屬於此教派。伊斯蘭公民社會尤其是非政府組織往往在其組織名稱中包含伊斯蘭、穆斯林等字樣，或者與伊斯蘭的文化、思想、歷史密切相關，如青年穆斯林協會（Young Men’s Muslim Association），清晰地表達了它要求在真主的旗幟下開展社會活動的願望，並以清真寺為基地。</p>
            <h3>主要宗教</h3>
            <h4>1. 伊斯蘭教</h4>
            <p>自1980年埃及憲法第二條修正以來，伊斯蘭教成為為埃及的國教；在此之前，埃及為世俗國家。絕大多數埃及穆斯林是遜尼派，其餘的穆斯林屬於什葉派中的十二伊瑪目派和伊斯瑪儀派。[17]許多遜尼派穆斯林也遵循蘇菲派的傳統[18]。埃及是世界上最重要的遜尼派學府，艾資哈爾大學是伊斯蘭教歷史最悠久的高等教育機構（成立於公元 970 年左右），被許多人認為是世界上現存最古老的大學。
            法蒂瑪王朝的哈里發使埃及成為帝國的中心，訂定開羅為王朝的首都。埃及的各種社會團體和階級在日常生活中對伊斯蘭教應用不同。艾資哈爾的文學神學家們普遍反對受到蘇菲主義影響的農村宗教傳教士和農民所實賤的伊斯蘭教。自伊斯蘭教傳入埃及以來，蘇菲主義在埃及蓬勃發展。大多數上層和中產階級的穆斯林認為，宗教表達是每個人的私事，或者伊斯蘭教應該在公共生活中扮演更重要的角色。長期以來，伊斯蘭宗教復興運動在大多數城市和許多村莊都存在，呼籲貫穿於整個階層。 根據埃及的憲法，任何新的立法法律都必須至少隱含地同意伊斯蘭教法。埃及遜尼派伊斯蘭教的主流哈乃斐學派主要由國家控制，通過埃及宗教事務部（Ministry of Awqaf (Egypt)）控制。宗教事務部掌管埃及所有清真寺並監督穆斯林阿訇（伊瑪目），艾資哈爾大學培育了不少伊瑪目人才；此外宗教事務部受予伊斯蘭教令對伊斯蘭教問題的判決權力。</p>
            <h4>2. 基督宗教</h4>
            <p>約95％的埃及基督徒是亞歷山大科普特正教會的信徒，[8][9]科普特人是西亞和北非地區最大的基督徒社群，根據不同的統計數據，科普特人約佔埃及總人口10％-15％[19][20]。其他埃及本地基督徒屬於科普特禮天主教會、埃及福音教會和各種基督新教教派的信徒。非埃及本地基督徒社群主要分布在開羅和亞歷山大港，屬於亞美尼亞使徒教會、普世聖公宗（耶路撒冷及中東教省）、羅馬天主教（默基特希臘禮天主教會、亞美尼亞禮天主教會、馬龍尼禮教會、加色丁禮天主教會、敘利亞禮天主教會）和敘利亞東方正統教會。</p>
            <h4>3. 猶太教</h4>
            <p>根據1948年的人口普查埃及有65639個猶太人，包括猶太教卡拉派。1956年第二次中東戰爭，大批猶太人被賈邁勒·阿卜杜勒·納瑟驅逐。他們的埃及公民身份被撤銷，他財產被沒收。之後，埃及猶太人不斷向外移民，到1967年第三次中東戰爭達到高峰。截至2016年，埃及共有6名猶太人。</p>
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
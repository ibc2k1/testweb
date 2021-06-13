import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export function Wheather() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
        <div className={classes.root}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>天氣</Typography>
            <Typography className={classes.secondaryHeading}>氣溫/雨量</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <p>埃及的氣候很單純，除了冬季的十二月、一月、二月以外，其它月份都是又乾又熱的氣候。</p>

            <p>早晚溫差較大，夏季悶且炎熱，冬天則相差近10度以上，清晨及傍晚開始溫度落在9～15度左右，並且幾乎不下雨。</p>        
        
            <p>冬天10月～3月也是埃及旅遊旺季，所以還是要記得戴防寒衣物，像是圍巾、風衣、口罩等衣物，白天的話還是會有點熱，建議帶點防曬用具。</p>         

            <p>亞力山卓港是埃及年雨量最多的地方，年雨量約190公厘；南部的亞斯文五年的總雨量卻只有10公厘。</p>

            <p>在三月到四月間，最明顯的氣候現象是坎辛風 (Khamsin)。這種風從乾燥的西部沙漠吹來，又熱又乾而且夾帶著砂土，平均風速可達到每小時150公里。</p>

            
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }

  export function Entry() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
        <div className={classes.root}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>入境須知</Typography>
            <Typography className={classes.secondaryHeading}>幣別/換匯與簽證</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <h2>1. 幣別</h2>
              <p>主要使用埃及鎊，皮阿斯特、米利姆為輔幣</p>
              <p>在埃及，最常使用的就是埃鎊或美金。由於埃及廁所也都會收取費用，建議小鈔的埃鎊可以多換喔！由於在埃及，到處都有小販，若買伴手禮提供美金，有可能給整數不會找零，大家可以多注意！另外，據說當地旅行社，大多收取為美金，若你是自助旅行找當地旅行社遊玩的話，可以先確認好收取費用的幣別喔！</p>
              <h2>2. 換匯</h2>
              <p>台灣沒辦法直接換，可以帶美金去當地機場換。</p>
              <p>1埃及鎊鎊=100皮阿斯特=1000米利姆;        
              1埃及鎊=1.88台幣，紙鈔有200元、100元、50元、20元、10元、5元；硬幣則有‎5、10、25、50皮阿斯特、1鎊。 </p>
              <h2>3. 簽證</h2>
              <p>我國人得於抵達埃及國際機場（港口）時申辦落地簽證，停留效期30日:</p>
              <p>以開羅國際機場申辦落地簽證為例，須持6個月以上效期之中華民國護照，填妥白色入境卡，並在埃及移民護照關口前銀行櫃檯購買落地簽證貼紙1張（單次入境為25美元）
              ，嗣交由海關人員貼於護照頁上並蓋入境章戳，即可順利入境。惟部分航空公司對未持來回或前往第三國機票旅客，曾有拒絕登機情事發生。</p>
              <p></p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        
      </div>
    );
  }

  export function Live() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
        <div className={classes.root}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>生活</Typography>
            <Typography className={classes.secondaryHeading}>基本生活/交通</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <h2>1. 電壓／插座</h2>
              <p>埃及的電壓為220-240V，屬於雙圓頭規格的插座。</p>
              <h2>2. 時差</h2>
              <p>埃及與台灣的時差約6小時，若台灣現在中午12點，埃及則是早上約6點左右。</p>
              <h2>3. 網路</h2>
              <p>基本上，埃及的wifi沒有一般城市那麼普遍，因此網卡就很重要了，建議出發前，先買好以備不時之需，出發前先打聽一下旅館或餐廳有無wifi。</p>
              <h2>4. 交通工具</h2>
              <p>(1)夜臥火車:開羅-盧克索-阿斯旺臥舖火車，從亞斯文到吉薩時間路程約13小時內，基本上都會延誤抵達，建議出發前2週預定車票才能確保有座位，車上會供應早餐及小瓶裝水。</p>
              <p>(2)公車(巴士):整個開羅公車覆蓋廣泛且費用親民，開羅還有禁止乘客行駛時站立的公交汽車，票價稍貴，但是地上交通雍堵，不建議遊客依靠公交汽車觀光開羅，除非對開羅的地理情況非常熟悉，否則易迷路。</p>
              <p>(3)開羅地鐵:如果是去地鐵上附近可以到達的景點，那麼開羅地鐵是非常方便的，目前共3條營運線，地鐵大部分都有經過主要觀光景點，費用相當便宜，自由行也非常方便，地鐵第二節車廂有專為女性設計專用車廂。</p>
              <p>(4)亞歷山卓電車:電車於1860年運營，目前非洲最古老的輕軌系統，亞歷山卓主要以輕軌為主要運輸交通工具，如果要往返地中海沿岸亞歷山卓，近距離活動是個方便選擇。</p>
              <p>(5)租車:選擇租車是到市區內外最方便活動的交通方式，但是埃及每天的交通量大，停車場一位難求，另外要特別注意在開羅的交通是極為混亂的汽車喇叭聲，當地車輛並不會嚴謹的遵守交通規則，且時常有行人穿越馬路。</p>
              <p>(6)Uber:Uber司機會使用GPS導航，部分司機只願意載客人到附近的地點，司機會撥打給你詢問位置，費用最少10埃鎊起跳。</p>
              <p></p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        
      </div>
    );
  }

  export function Culture() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
        <div className={classes.root}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>風俗民情</Typography>
            <Typography className={classes.secondaryHeading}>文化</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <h2>1. 宗教信仰</h2>
              <p>若碰到齋戒月，穆斯林是規定從早到晚不可進食飲水，因此也盡量避免在公共場合吃喝，
              有時當地店家也會配合齋戒月不開門，自助旅行時可以特別注意。</p>
              <h2>2. 攝影</h2>
              <p>(1)警察、軍人、政府機關、軍事單位不可以拍攝，被發現有可能引發麻煩。</p>
              <p>(2)蒙面婦女未經允許不可拍攝。是個沒有禮貌的行為。</p>    
              <p>(3)穆斯林做禮拜時，不可以拍照，是一件非常不尊重的事情。</p>
              <h2>3. 小費</h2>
              <p>在埃及，小費勢必不可少，尤其埃及人相當喜歡索取小費，因此即便是一般的服務場合（EX. 公廁、速食店等）
              ，記得給予1~2元的埃及鎊，若無提供小費，埃及人很有可能會強力索討，最後未處理好，甚至有可能會引發不悅。      
              ，如果跟團的話，可能需要給導遊小費。</p>
              <h2>4. 消費</h2>
              <p>在觀光景點買東西的話，當地攤販通常會哄抬價格，所以可以適當的殺價一下。</p>
              <p>埃及上廁所需付費，約1.5~2.5埃鎊左右，記得請備好零錢，有時候清潔人員不會找錢，也小心確認是否為真的清潔人員
              ，有時可能會有仿冒者喔。</p>
              <p>在市集觀光時記得要小心扒手。</p>
              <p></p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        
      </div>
    );
  }
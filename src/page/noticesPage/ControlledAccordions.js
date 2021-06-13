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
    flexBasis: '50%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
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
          <Typography className={classes.secondaryHeading}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>入境須知</Typography>
          <Typography className={classes.secondaryHeading}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>風俗民情</Typography>
          <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>1.文化禁忌
            由於埃及是伊斯蘭教國家，因此相對保守，以下有些禁忌在旅遊時須注意，這樣才不會誤觸喔！</p>
            <p>2.服裝：基本上沒有太大的規定，但建議不要穿著背心與超級短褲、短裙，因為埃及太陽實在太大，真的要小心不要曬傷！另外也有旅人建議，太過性感的衣服不建議穿到清真寺中，會引發當地人的不悅。</p>
            <p>3.飲食：</p>
            <p>
	        1.穆斯林通常忌諱喝酒，因此唯有觀光客餐廳才買得到酒，如果自助旅行時去當地店家，買不到酒也別太傷心。
	        2.由於宗教關係，所以埃及人大家禁忌吃豬肉、狗肉、驢肉、龜、鱉、動物的血，以及沒有按照教規宰殺的動物。
	        3.若不小心碰到齋戒月，穆斯林是規定從早到晚不可進食飲水，因此也盡量避免在公共場合吃喝，有時當地店家也會配合齋戒月不開門，自助旅行時可以特別注意。</p>
            <p>4.攝影：
            1.「警察、軍人、政府機關、軍事單位」不可以拍攝！被發現有可能引發麻煩！
            2.「蒙面婦女」未經允許不可拍攝！是個沒有禮貌的行為！
            3.穆斯林做禮拜時，不可以拍照，是一件非常不尊重的事情。</p>
            <p>5.小費：
            在埃及，小費勢必不可少！尤其埃及人相當喜歡索取小費，因此即便是一般的服務場合（EX.	公廁、速食店等），記得給予1~2元的埃及鎊，若無提供小費，埃及人很有可能會強力索討，最後未處理好，甚至有可能會引發不悅。
            (如果跟團的話，可能需要給導遊小費)</p>
            <p>
            殺價:
            在觀光景點買東西的話，當地攤販通常會哄抬價格，所以可以適當的殺價一下。
            ※埃及上廁所需付費，約1.5~2.5埃鎊左右，記得請備好零錢，有時候清潔人員不會找錢喔！也小心確認是否為真的清潔人員，有時可能會有仿冒者喔！
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>其他</Typography>
          <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
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

export default function History() {
  const classes = useStyles();

  return (
    <div>
      <Router_area/>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.freeimages.com/images/large-previews/f4a/miniature-1-1548487.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            歷史
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <h3>古埃及到中世紀</h3>
            <p>古埃及的歷史悠久，是世界文明古國之一。古埃及文明和文化知識在古埃及滅國後並沒有被傳承下來，直到現代才被考古學發現後重新被世人認知。雖然有許多考古遺址的發掘，人們對古埃及歷史的了解卻仍然非常有限。
            公元前4000年出現一系列城邦，目前發現公元前3400年的聖書體石板。據出土文獻，法老蠍子王兼並了這些城邦，建立了統一王朝。
              公元前3100年左右，古埃及分裂為上下埃及，最後由法老美尼斯重新統一。
              公元前11世紀至公元7世紀，斷斷續續被亞述、波斯、馬其頓和羅馬帝國征服。
              公元4－7世紀併入東羅馬帝國。
              公元7世紀中期，阿拉伯人入侵，建立阿拉伯帝國。640年，埃及完全被阿拉伯人占領，隨之開始阿拉伯化。至12世紀，已普遍使用阿拉伯語，皈依伊斯蘭教，延綿數千年的古埃及文明被阿拉伯文明取代，當地的人們對於宏偉的金字塔與神殿雕像可以說是一無所知。
              1249年開始由馬木留克軍團指揮官統治。
              1517年被土耳其人征服。成為鄂圖曼帝國的行省。</p>
            <h3>近代埃及</h3>
            <p>埃及在經過土耳其人統治數百年後，先後被法國和英國等國家侵略占領，期間也有穆罕默德·阿里帕夏等本土王朝崛起。
              1798年－1801年一度被拿破崙佔領。1882年被英國軍隊佔領。1914年埃及成為英國的保護國。1922年2月28日，英國被迫承認埃及獨立，但仍保留對埃及國防、外交、少數民族等權，埃及當局仍然是英國控制下的衛星國，按英埃政府間協議英國可以隨時為了保護英國在埃及利益對埃及出兵。</p>
            <h3>現代埃及</h3>
            <p>埃及在泛阿拉伯主義思想的影響下逐漸擺脫西方殖民統治，但依舊動盪至今。
              1952年7月23日，以阿里·納賽爾為首的「自由軍官組織」發動軍事政變，推翻法魯克王朝，成立「革命指導委員會」，掌握國家政權，獲得真正獨立。
              1953年6月18日廢除帝制，成立共和國。
              1954年，英國被迫同意分批從埃及撤軍，直到1956年英軍才全部撤出埃及，但仍然保持對蘇伊士運河區的事實治權。
              1956年，納賽爾將蘇伊士運河收為國有，引發第二次中東戰爭，英國與法國、以色列組成聯軍，突擊控制了西奈半島與蘇伊士運河區，圍殲了多支埃及軍隊，並對埃及的多座大城市展開戰略轟炸以震懾埃及軍民。埃及被炸毀民房1萬多棟，炸死1000多人，受傷20 000多人。
              1958年2月，埃及與敘利亞合併，成立阿拉伯聯合共和國。1961年9月，敘利亞脫離阿拉伯聯合共和國。
              1967年，第三次中東戰爭爆發，埃及失去西奈半島。
              1970年，納賽爾去世，由沙達特繼任總統。1971年9月，改國名為「埃及阿拉伯共和國」。
              1978年，埃及與以色列簽訂和平條約。1982年埃及取回西奈半島的主權。1989年塔巴亦歸還埃及。</p>
            <h5>穆巴拉克時代</h5>
            <p>1981年10月14日，沙達特總統於紀念贖罪日戰爭八周年的閱兵大典遭同情伊斯蘭份子的士兵槍殺，旁邊的副總統穆巴拉克僥倖躲過一劫，八天後在軍隊擁戴下繼任總統，從此埃及實行獨裁統治，一直處在戒嚴和緊急狀態直到埃及革命迫使穆巴拉克下台，軍方接管政權之後才解除。
            自2011年1月24日開始，埃及發生了舉世矚目的埃及革命，人民普遍對時任埃及總統穆巴拉克、現行制度及生活表示不滿，遂漸漸開始示威遊行，要求穆巴拉克總統下台並對埃及現行不民主的政治體系制度進行改革；期間穆巴拉克總統表示將不退任總統一職，但不參加2011年9月總統選舉競選六連任，由於總統堅持留任並不為人民接受以及期間發生槍戰人民遭槍殺，導致示威遊行範圍自解放廣場擴大到埃及多個省份並進行抗議、示威及靜坐。
            2011年2月11日，副總統奧馬爾·蘇萊曼宣布穆巴拉克辭職，政權由軍方領導的武裝部隊最高委員會接管。穆巴拉克及其近親已搭直升機飛到距離首都開羅400公里，位於紅海度假勝地沙姆沙伊赫。軍方掌握國家過渡政權。
            2011年11月21日，根據外電報導，執政軍方最高委員會因政權移交速度慢，不滿的民眾再度走上街頭，要求軍方將政權移交給文人政府。衝突中有多名民眾死亡及受傷，新衝突逐漸蔓延到全國各地，軍方面臨強大壓力。11月24日，軍方出乎預料的表達歉意，表示軍方不會戀棧權位，之後的國會大選及總統選舉都會如期舉行。軍方表示現在交出政權「違背」民眾的託付，另一方面示威民眾則表示，若軍方不立刻下臺，他們決不會離開解放廣場。目前衝突雖暫時平息，但隨時有可能再度發生抗爭行動。
            2011年11月28日至2012年1月11日，埃及分成三個階段進行了人民議會的選舉工作，結果伊斯蘭自由與正義黨領導的埃及民主聯盟獲得498席中的235席，成為議會的第一大黨派，極端保守的Al-Nour Party獲得107席為第二大黨，獲得38席的New Wafd Party是第三大黨。伊斯蘭政黨獲得超過三分之二的席位。
            2012年6月14日，埃及最高憲法法院裁定人民議會選舉依據的選舉法違憲，因此下令解散新國會。6月17日，武裝部隊最高委員會公布了修正後的《憲法宣言》，此次修改共涉及8個條款，修正案限制了總統職權[8]。</p>
            <h5>阿拉伯之春後的埃及</h5>

            <p>2012年6月24日，埃及最高總統選舉委員會公布，穆斯林兄弟會下屬自由與正義黨主席穆罕默德·穆爾西擊敗前總理艾哈邁德·沙菲克，贏得穆巴拉克下台後的首次埃及民主總統大選。8月2日，總理希沙姆·甘迪勒組建的新內閣正式上任[9]。8月12日，總統穆爾西對軍隊高層做出重大人事調整，國防部長穆罕默德·海珊·坦塔維和軍隊總參謀長薩米·阿南分別由阿卜杜勒-法塔赫·塞西與西德基·蘇卜希繼任；同時宣布武裝部隊最高委員會於6月17日通過的限制總統權力的憲法修正案無效，公布的新憲法聲明從當天起生效；這項決定得到了軍隊的支持，此舉被認為是民選政府鞏固執政基礎的重要一步，軍官將逐漸退出埃及權力的核心，文官執政將成為埃及改革的方向[10]。
            2013年總統穆爾西發動修憲，以使埃及轉型為文官政府，威脅了軍方的既得利益。
            2013年埃及爆發多輪示威，要求穆爾西下台。7月3日，穆爾西遭到以國防部長阿卜杜勒-法塔赫·塞西為首的軍方罷黜和軟禁，由阿德里·曼蘇爾擔任臨時總統，軍方宣稱將會提早舉行國會和總統選舉，並修改憲法，目的是讓阿卜杜勒-法塔赫·塞西成為總統[11]。此後穆兄會的支持者一直堅持示威抗議活動以聲援穆爾西，抗議者與軍隊發生的衝突造成了大量人員傷亡[12]，埃及社會和局勢正面臨嚴重的挑戰。8月14日，埃及安全部隊在開羅兩處穆爾西支持者的營地展開清場行動，據報導行動已造成525人死亡和3717人受傷。[13]穆兄會支持者的持續示威抗議和嚴重流血衝突事件，埃及社會也面臨著嚴重的分裂和對立局面[14]。
            2014年6月，塞西正式當選總統。
            2015年，舉辦新的議會選舉，塞西及軍方的支持者當選議員，控制國會。</p>
            
         </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    
  );
}
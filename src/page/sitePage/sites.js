import React, { useState } from 'react'
import TpModal from '../foodPage/TpModal.js'
import styled from 'styled-components'

const ModalContent = styled.div`
  margin-bottom: 15px;
`

export function Site1 (){
  const [isVisible, setIsVisible] = useState(false)

  const handleToggleModalShowUp = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>
      <h1> 景點 </h1>

      <div>
      <img className="food-img" src="https://i0.wp.com/jingxuan.tw/wp-content/uploads/20200613141617_73.jpg"></img>
      </div>

      <h1>   </h1>
      <h2>埃及博物館</h2>
      
      {/* 開起視窗按鈕 */}
      <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>

      {/* 彈跳視窗 */}
      <TpModal
        title='埃及博物館'
        isVisible={isVisible}
        onClose={handleToggleModalShowUp}
      >

        <ModalContent>
          <div> 埃及國家博物館位於開羅市中心的解放廣場附近，內部陳列著古埃及時期至古羅馬統治時期的遺物，是世界上最著名的博物館之一。
              博物館爲古樸的磚紅色建築，分爲兩層。博物館的一樓按照埃及古代歷史發展順序展出，你可以在這裡看到從古國王時期到公元五、六世紀的羅馬統治時期的珍貴文物。
              二樓是以專題陳列室的形式展出，在此你可以親眼目睹法老金碧輝煌的黃金葬禮面罩、黃金棺材、黃金寶座等。</div>
        </ModalContent>

      </TpModal>

      <h1>   </h1>

    </>
  )
}

export function Site2 () {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggleModalShowUp = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>

      <div>
      <img className="food-img" src="https://github.com/ibc2k1/picture/blob/master/S__28180906.jpg?raw=true"></img>
      </div>

      <h1>   </h1>
      <h2>尼羅河</h2>
      
      {/* 開起視窗按鈕 */}
      <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>

      {/* 彈跳視窗 */}
      <TpModal
        title='尼羅河'
        isVisible={isVisible}
        onClose={handleToggleModalShowUp}
      >

        <ModalContent>
          <div> 尼羅河不但是孕育古埃及文明的母親河，同時也是世界上最長的河流，在亞斯文及路克索兩個城市間移動
              ，搭乘遊輪便是相當受歡迎的選項。除了可享受搭船的樂趣及欣賞尼羅河風光，也能沿途遊覽神廟古蹟。可以前往自己遊輪的頂樓甲板跟尼羅河小販購物
              ，尼羅河小販會划船到郵輪兩側拋紀念毛巾上來販賣。尼羅河上有水閘門，藉著水壩來調節水位讓船隻安全駛過高低落差處。</div>
        </ModalContent>

      </TpModal>

      <h1>   </h1>

    </>
  )
}

export function Site3 () {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggleModalShowUp = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>

      <div>
      <img className="food-img" src="https://github.com/ibc2k1/picture/blob/master/S__28180721.jpg?raw=true"></img>
      </div>
      
      <h1>   </h1>
      <h2>吉薩金字塔</h2>

      {/* 開起視窗按鈕 */}
      <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>
     

      {/* 彈跳視窗 */}
      <TpModal
        title='吉薩金字塔'
        isVisible={isVisible}
        onClose={handleToggleModalShowUp}
      >

        <ModalContent>
          <div> 位於吉薩平原上的吉薩金字塔是一個金字塔群的總稱，而不是一座單獨的金字塔，它們分別建造於公元前2600年至2500年，是古埃及文明的代名詞
              ，也是世界七大奇跡之一。吉薩金字塔中三座最大、保存最完好的金字塔分別胡夫金字塔、卡夫拉金字塔和門卡烏拉金字塔，三座金字塔的排列是按照獵戶星座而排列。</div>
        </ModalContent>

      </TpModal>

      <h1>   </h1>

    </>
  )
}

export function Site4 () {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggleModalShowUp = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>

      <div>
      <img className="food-img" src="https://github.com/ibc2k1/picture/blob/master/S__28180909.jpg?raw=true"></img>
      </div>

      <h1>   </h1>
      <h2>獅身人面像</h2>
      
      {/* 開起視窗按鈕 */}
      <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>

      {/* 彈跳視窗 */}
      <TpModal
        title='獅身人面像'
        isVisible={isVisible}
        onClose={handleToggleModalShowUp}
      >

        <ModalContent>
          <div> 位於金字塔景區，在胡夫金字塔和卡夫拉金字塔的附近，已有4000年歷史的獅身人面像與金字塔同為古埃及文明最有代表性的遺跡
              ，它也是埃及的代名詞。在開羅，獅身人面像不止這一座，只是這一座是開羅最大的一座，也是最有名的一座。獅身人面像顧名思義它是個人臉獅身的雕像
              ，前爪向前臥在沙漠上，整個雕像高22米，長57米，除了前爪外，全部由一塊天然岩石雕成。</div>
        </ModalContent>

      </TpModal>

      <h1>   </h1>

    </>
  )
}

export function Site5 () {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggleModalShowUp = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>

      <div>
      <img className="food-img" src="https://image.cdn-eztravel.com.tw/bb-6CtFPXQf-L0MXLTifB-eXPjbAdJGvCx5OQIulgjk/g:ce/aHR0cHM6Ly92YWNhdGlvbi5jZG4tZXp0cmF2ZWwuY29tLnR3L2ltZy9WRFIvRUdfMTc5MTA4MjczLmpwZw.jpg"></img>
      </div>

      <h1>   </h1>
      <h2>帝王谷</h2>
      
      {/* 開起視窗按鈕 */}
      <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>

      {/* 彈跳視窗 */}
      <TpModal
        title='帝王谷'
        isVisible={isVisible}
        onClose={handleToggleModalShowUp}
      >

        <ModalContent>
          <div> 帝王谷是埃及埋葬古埃及新王朝時期18到20王朝的法老和貴族的一個山谷。
              法老們就在尼羅河西岸的這些峭壁上開鑿墓室，用來安放他們顯貴的遺體，同時這裡還建有許多巨大的柱廊和神廟。這裡是一處雄偉的墓葬群
              ，一共有60多座帝王陵墓，埋葬著埃及第17王朝到第20王朝期間的64位法老。</div>
        </ModalContent>

      </TpModal>

      <h1>   </h1>

    </>
  )
}

export function Site6 () {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggleModalShowUp = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>

      <div>
      <img className="food-img" src="https://github.com/ibc2k1/picture/blob/master/S__28180723.jpg?raw=true"></img>
      </div>

      <h1>   </h1>
      <h2>阿布辛貝神殿</h2>
      
      {/* 開起視窗按鈕 */}
      <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>

      {/* 彈跳視窗 */}
      <TpModal
        title='阿布辛貝神殿'
        isVisible={isVisible}
        onClose={handleToggleModalShowUp}
      >

        <ModalContent>
          <div>阿布辛貝神殿是知名的法老「拉美西斯二世」，他在世的時候為他最寵愛的妻子所建立的。
              阿布辛貝神殿本來是在亞斯文的，但因為要蓋亞斯文水壩的關係，神殿會被淹沒在水底下，因此聯合國教克文組織發起了前所未有的「努比亞行動計劃」
              ，花了快要四年的時間，把神殿一塊又一塊的拆掉，從亞斯文搬到現在的位置後再一塊一塊地把神殿組合上去。</div>
        </ModalContent>

      </TpModal>

      <h1>   </h1>

    </>
  )
}

export function Site7 () {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggleModalShowUp = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>

      <div>
      <img className="food-img" src="https://e.share.photo.xuite.net/pig16162/1e9a702/13082879/662990083_m.jpg"></img>
      </div>

      <h1>   </h1>
      <h2>卡納克神殿</h2>
      
      {/* 開起視窗按鈕 */}
      <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>

      {/* 彈跳視窗 */}
      <TpModal
        title='卡納克神殿'
        isVisible={isVisible}
        onClose={handleToggleModalShowUp}
      >

        <ModalContent>
          <div>卡納克大神殿，是埃及境內最大的古代神殿，面積十八萬平方公尺，建築時間始建於十二王朝，一直到古埃及滅亡時，陸陸續續修建了一千九百年都尚未完工
              ，因此有人說如果去過卡納克大神殿，埃及其他的神廟可以省下來不必去，因為埃及全境的神廟風格，這裡都已準備齊全了
              ，包含塔門、外院（中庭）內殿（含多柱廳），供奉廳（即小禮堂，供有托著神像的船，為最神聖處）。</div>
        </ModalContent>

      </TpModal>

      <h1>   </h1>

    </>
  )
}

export function Site8 () {
    const [isVisible, setIsVisible] = useState(false)
  
    const handleToggleModalShowUp = () => {
      setIsVisible(!isVisible)
    }
  
    return (
      <>
  
        <div>
        <img className="food-img" src="https://cloudmiao.tw/wp-content/uploads/20170910014331_15.jpg"></img>
        </div>
        
        <h1>   </h1>
        <h2>路克索神殿</h2>
  
        {/* 開起視窗按鈕 */}
        <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>
  
        {/* 彈跳視窗 */}
        <TpModal
          title='路克索神殿'
          isVisible={isVisible}
          onClose={handleToggleModalShowUp}
        >
  
          <ModalContent>
            <div>路克索神殿位於古埃及中王國和新王國的都城底比斯南半部遺址上。
                埃及人常說：“沒有到過路克索，就不算到過埃及”。 路克索神廟證明了路克索輝煌的過去。
                它是古埃及第十八王朝的第十九個法老（西元前1398－1361年在位）艾米諾菲斯三世為祭奉太陽神阿蒙、他的妃子及兒子月亮神而修建的。
                到第十八王朝後期，又經拉美西斯二世擴建，形成現今留存下來的規模。</div>
          </ModalContent>
  
        </TpModal>
  
        <h1>   </h1>
  
      </>
    )
  }
  
  export function Site9 () {
      const [isVisible, setIsVisible] = useState(false)
    
      const handleToggleModalShowUp = () => {
        setIsVisible(!isVisible)
      }
    
      return (
        <>
    
          <div>
          <img className="food-img" src="https://github.com/ibc2k1/picture/blob/master/S__28180910.jpg?raw=true"></img>
          </div>
          
          <h1>   </h1>
          <h2>哈利利市集</h2>
    
          {/* 開起視窗按鈕 */}
          <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>
    
          {/* 彈跳視窗 */}
          <TpModal
            title='哈利利市集'
            isVisible={isVisible}
            onClose={handleToggleModalShowUp}
          >
    
            <ModalContent>
              <div>開羅哈利利市集幾乎是觀光客必逛的地方。由驛站改建的 Khan al-khalili 哈利利市集也是全埃及最大的傳統市集
                  ，它的區域範圍很廣，賣的東西也很多樣，除了觀光客必買的紀念品外，還有莎草紙、絲綢、香料、織毯、珠寶、陶瓷器、金銀飾品、水煙 …等。</div>
            </ModalContent>
    
          </TpModal>
    
          <h1>   </h1>
    
        </>
      )
    }
  
    export function Site10 () {
      const [isVisible, setIsVisible] = useState(false)
    
      const handleToggleModalShowUp = () => {
        setIsVisible(!isVisible)
      }
    
      return (
        <>
    
          <div>
          <img className="food-img" src="http://pic.pimg.tw/chiyuanchin/1378819877-1992264793.jpg"></img>
          </div>
          
          <h1>   </h1>
          <h2>穆罕默德·阿里清真寺</h2>
    
          {/* 開起視窗按鈕 */}
          <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>
    
          {/* 彈跳視窗 */}
          <TpModal
            title='穆罕默德·阿里清真寺'
            isVisible={isVisible}
            onClose={handleToggleModalShowUp}
          >
    
            <ModalContent>
              <div>阿里清真寺包含寺內的禮拜殿和室外的庭院兩部分。高聳而華麗的禮拜殿，是清真寺最引人注目的部分。
                  禮拜殿內非常舒適，在熾熱的開羅市區裡，阿里清真寺令人倍感清涼，殿內採用了極佳的採光設計，自然光從圓頂密佈的彩色天窗透下，營造出極其神聖的意境。</div>
            </ModalContent>
    
          </TpModal>
    
          <h1>   </h1>
    
        </>
      )
    }
  
    export function Site11 () {
      const [isVisible, setIsVisible] = useState(false)
    
      const handleToggleModalShowUp = () => {
        setIsVisible(!isVisible)
      }
    
      return (
        <>
    
          <div>
          <img className="food-img" src="https://i.ytimg.com/vi/KbWApoumoF8/maxresdefault.jpg"></img>
          </div>
          
          <h1>   </h1>
          <h2>康夢波神殿</h2>
    
          {/* 開起視窗按鈕 */}
          <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>
    
          {/* 彈跳視窗 */}
          <TpModal
            title='康夢波神殿'
            isVisible={isVisible}
            onClose={handleToggleModalShowUp}
          >
    
            <ModalContent>
              <div>康夢波神殿以有雙神殿聞名，因為它祭奉了兩個埃及神:鱷魚神索貝克(Sobek)以及老鷹神大荷魯斯(Haroeris,"Horus the Elder")
                  ，並分別為這兩位埃及神建造兩套齊全對稱的神殿、大廳、祭室以及房間，康夢波神殿的南邊是老鷹神大荷魯斯，北邊則是鱷魚神索貝克
                  ，這種完全對稱的雙神殿在埃及是不常見的，也是康夢波神殿最獨特之處。</div>
            </ModalContent>
    
          </TpModal>
    
          <h1>   </h1>
    
        </>
      )
    }
  
    export function Site12 () {
      const [isVisible, setIsVisible] = useState(false)
    
      const handleToggleModalShowUp = () => {
        setIsVisible(!isVisible)
      }
    
      return (
        <>
    
          <div>
          <img className="food-img" src="https://github.com/ibc2k1/picture/blob/master/S__28180726.jpg?raw=true"></img>
          </div>
          
          <h1>   </h1>
          <h2>撒哈拉沙漠</h2>
    
          {/* 開起視窗按鈕 */}
          <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>
    
          {/* 彈跳視窗 */}
          <TpModal
            title='撒哈拉沙漠'
            isVisible={isVisible}
            onClose={handleToggleModalShowUp}
          >
    
            <ModalContent>
              <div>撒哈拉沙漠是世界最熱的荒漠，總面積達940萬平方公里，有吉普車飆沙和看夕陽等活動。
                  離開市區不遠處就是沙漠，車子一拐，離開柏油路面進入了礫漠。礫漠中是沒有馬路的，完全憑司機的方向感或興致開。四輪驅動的車子在沙漠中奔馳著，黃沙滾滾。</div>
            </ModalContent>
    
          </TpModal>
    
          <h1>   </h1>
    
        </>
      )
    }
  
    export function Site13 () {
      const [isVisible, setIsVisible] = useState(false)
    
      const handleToggleModalShowUp = () => {
        setIsVisible(!isVisible)
      }
    
      return (
        <>
    
          <div>
          <img className="food-img" src="https://github.com/ibc2k1/picture/blob/master/S__28180727.jpg?raw=true"></img>
          </div>
          
          <h1>   </h1>
          <h2>紅海</h2>
    
          {/* 開起視窗按鈕 */}
          <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>
    
          {/* 彈跳視窗 */}
          <TpModal
            title='紅海'
            isVisible={isVisible}
            onClose={handleToggleModalShowUp}
          >
    
            <ModalContent>
              <div>對歐洲人來說，紅海沿岸一直是熱門的度假勝地，是全球頂級的潛水勝地之一，擁有超過2000種海洋生物及200多種軟硬珊瑚
                  ，其中不乏只有在紅海才能看到的獨特品種。住在紅海沿岸邊的飯店，可以在紅海看日出，紅海地區幾乎全年無雨，能享受到晴朗的海邊度假時光。</div>
            </ModalContent>
    
          </TpModal>
    
          <h1>   </h1>
    
        </>
      )
    }
  
    export function Site14 () {
      const [isVisible, setIsVisible] = useState(false)
    
      const handleToggleModalShowUp = () => {
        setIsVisible(!isVisible)
      }
    
      return (
        <>
    
          <div>
          <img className="food-img" src="https://angela51.com/wp-content/uploads/20180418153553_21.jpg"></img>
          </div>
          
          <h1>   </h1>
          <h2>貝都因村落</h2>
    
          {/* 開起視窗按鈕 */}
          <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>
    
          {/* 彈跳視窗 */}
          <TpModal
            title='貝都因村落'
            isVisible={isVisible}
            onClose={handleToggleModalShowUp}
          >
    
            <ModalContent>
              <div>貝都因（Bedouni）在阿拉伯文裡是指居住在沙漠的人，逐水草而居是貝都因人最基本的生活方式，他們主要靠著養駝、養羊、狩獵維生
                  ，在沙漠中過著自給自足、日出而作日落而息的生活。可以參觀他們的部落，體驗沒有現代科技破壞的生活。</div>
            </ModalContent>
    
          </TpModal>
    
          <h1>   </h1>
    
        </>
      )
    }
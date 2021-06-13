import React, { useState } from 'react'
import TpModal from './TpModal.js'
import styled from 'styled-components'
import './food.css'

const ModalContent = styled.div`
  margin-bottom: 15px;
`

export function Food1 (){
  const [isVisible, setIsVisible] = useState(false)

  const handleToggleModalShowUp = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>

      <h1>特色美食</h1>
      <div>
      <img className="food-img" src="https://pic.pimg.tw/pj20120619/1557977304-1612534529_wn.jpg"></img>
      </div>

      <h1>   </h1>
      <h2>烤餅(Aish)</h2>
      
      {/* 開起視窗按鈕 */}
      <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>

      {/* 彈跳視窗 */}
      <TpModal
        title='烤餅(Aish)'
        isVisible={isVisible}
        onClose={handleToggleModalShowUp}
      >

        <ModalContent>
          <div> 家戶必備的烤餅，埃及人三餐都可以吃麵包，重要程度就像我們的白米飯一樣。
            埃及烤餅餅剛出爐時圓滾滾熱呼呼的，不用多少時間，就像消風的氣球一樣扁了
            ，撕開後裡面是空心的，可以夾著蔬菜、肉類或是Falafel吃，這種麵包咬起來頗有韌性。</div>
        </ModalContent>

      </TpModal>

      <h1>   </h1>

    </>
  )
}

export function Food2 () {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggleModalShowUp = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>

      <div>
      <img className="food-img" src="https://i.pinimg.com/originals/ae/bd/ab/aebdab22907220b18027d75a765ae526.jpg"></img>
      </div>

      <h1>   </h1>
      <h2>鳥舌湯(Lisan Asfour)</h2>
      
      {/* 開起視窗按鈕 */}
      <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>

      {/* 彈跳視窗 */}
      <TpModal
        title='鳥舌湯(Lisan Asfour)'
        isVisible={isVisible}
        onClose={handleToggleModalShowUp}
      >

        <ModalContent>
          <div> 鳥舌湯是埃及最受歡迎的湯品，不過可不要被它的名字所迷惑，這種湯不是由鳥的舌頭燉成的
            ，而是由一種和鳥舌頭形狀相似的麵條為主料，加入肥厚的雞胸肉，煮好的雞湯和多種調味料製作而成的。
            鳥舌面吃起來滑嫩無比，湯則更是鮮美。</div>
        </ModalContent>

      </TpModal>

      <h1>   </h1>

    </>
  )
}

export function Food3 () {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggleModalShowUp = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>

      <div>
      <img className="food-img" src="http://4.blog.xuite.net/4/9/a/7/11304171/blog_1439776/txt/40411733/4.jpg"></img>
      </div>
      
      <h1>   </h1>
      <h2>烤鴿(Hamaam)</h2>

      {/* 開起視窗按鈕 */}
      <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>
     

      {/* 彈跳視窗 */}
      <TpModal
        title='烤鴿(Hamaam)'
        isVisible={isVisible}
        onClose={handleToggleModalShowUp}
      >

        <ModalContent>
          <div> 烤鴿子是非常受歡迎的一道傳統名菜。
            先在鴿子的體內塞滿麥子、大米、香料甚至還有碎羊肝，再用炭火燒烤。烤熟後連肉帶骨一起吃，肥瘦適宜，酥脆美味。</div>
        </ModalContent>

      </TpModal>

      <h1>   </h1>

    </>
  )
}

export function Food4 () {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggleModalShowUp = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>

      <div>
      <img className="food-img" src="https://media-cdn.tripadvisor.com/media/photo-s/05/4f/83/9b/pirates-premier-sailing.jpg"></img>
      </div>

      <h1>   </h1>
      <h2>烤肉(Kofta)</h2>
      
      {/* 開起視窗按鈕 */}
      <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>

      {/* 彈跳視窗 */}
      <TpModal
        title='烤肉(Kofta)'
        isVisible={isVisible}
        onClose={handleToggleModalShowUp}
      >

        <ModalContent>
          <div> 烤肉是將小牛肉或羊羔肉剁成極細的肉末，以香料和洋蔥調味後，用鐵簽串起來烤制而成的肉棒，通常呈橢圓形，上桌時會在盤底鋪上西芹葉以減少油膩感。</div>
        </ModalContent>

      </TpModal>

      <h1>   </h1>

    </>
  )
}

export function Food5 () {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggleModalShowUp = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>

      <div>
      <img className="food-img" src="http://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Molokheya_hi_res.JPG/740px-Molokheya_hi_res.JPG"></img>
      </div>

      <h1>   </h1>
      <h2>錦葵湯(Molokhia)</h2>
      
      {/* 開起視窗按鈕 */}
      <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>

      {/* 彈跳視窗 */}
      <TpModal
        title='錦葵湯(Molokhia)'
        isVisible={isVisible}
        onClose={handleToggleModalShowUp}
      >

        <ModalContent>
          <div> 錦葵湯是一道用盛產於尼羅河兩岸的錦葵，加以雞肉、大蒜一起燉製而成的濃湯， 濃綠粘稠，味道鮮美，經常被埃及人淋在米飯上食用。</div>
        </ModalContent>

      </TpModal>

      <h1>   </h1>

    </>
  )
}

export function Food6 () {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggleModalShowUp = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>

      <div>
      <img className="food-img" src="https://amiraspantry.com/wp-content/uploads/2018/05/koshari-IG-500x375.png"></img>
      </div>

      <h1>   </h1>
      <h2>雜豆飯(Koshari)</h2>
      
      {/* 開起視窗按鈕 */}
      <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>

      {/* 彈跳視窗 */}
      <TpModal
        title='雜豆飯(Koshari)'
        isVisible={isVisible}
        onClose={handleToggleModalShowUp}
      >

        <ModalContent>
          <div>Koshari是埃及的平民特色美食，也是最出名的美食，由米飯、通心粉、洋蔥、黑扁豆及番茄醬等製成。
          材料分開烹調，吃時再拌在一起，可根據喜好加入醋、蒜、辣醬、炸圓蔥和豌豆等調味。</div>
        </ModalContent>

      </TpModal>

      <h1>   </h1>

    </>
  )
}

export function Food7 () {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggleModalShowUp = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>

      <div>
      <img className="food-img" src="https://github.com/ibc2k1/picture/blob/master/S__28180722.jpg?raw=true"></img>
      </div>

      <h1>   </h1>
      <h2>鮮榨果汁(Fresh juice)</h2>
      
      {/* 開起視窗按鈕 */}
      <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>

      {/* 彈跳視窗 */}
      <TpModal
        title='鮮榨果汁(Fresh juice)'
        isVisible={isVisible}
        onClose={handleToggleModalShowUp}
      >

        <ModalContent>
          <div>埃及的果汁是當場用新鮮水果榨成的純天然果汁，味道很甜，價格低廉。</div>
        </ModalContent>

      </TpModal>

      <h1>   </h1>

    </>
  )
}

export function Food8 () {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggleModalShowUp = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>

      <div>
      <img className="food-img" src="https://cdn.jourtrip.com/images/_blog/EGY/bb0d74dbd73f/06.jpg"></img>
      </div>
      
      <h1>   </h1>
      <h2>椰棗(Date plam)</h2>

      {/* 開起視窗按鈕 */}
      <center><input type='button' value='detail' onClick={handleToggleModalShowUp} /></center>

      {/* 彈跳視窗 */}
      <TpModal
        title='椰棗(Date plam)'
        isVisible={isVisible}
        onClose={handleToggleModalShowUp}
      >

        <ModalContent>
          <div>椰棗是高纖維的水果，不管新鮮吃，還是曬乾吃都很甜，適合當伴手禮。</div>
        </ModalContent>

      </TpModal>

      <h1>   </h1>

    </>
  )
}
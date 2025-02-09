// @ts-check
type Props = {
  dogurl: string
  imgUpdate: () => void
  imgReset: () => void
}

export const DogListContainer = ( {dogurl, imgUpdate, imgReset} : Props ) => {
  return (
    // <> </>はReactフラグメントと呼ばれるもので、複数の要素をまとめて返すことができる
    <>
      <p>犬の画像を表示するサイトです</p>
      <div className='dog-img-wrapper'>
        <img src={dogurl} alt="犬の画像" className='dog-img' />
      </div>
      <div className='btn-wrapper'>
        <button onClick={imgUpdate}>更新</button>
        <button onClick={imgReset}>戻す</button>
      </div>
    </>
  )
}

export default DogListContainer

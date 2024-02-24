import Image from 'next/image'
import DownloadIcon from '/public/images/icons/download.webp'
import StreamingIcon from '/public/images/icons/streaming.webp'
import DevicesIcon from '/public/images/icons/devices.webp'

const SEOFeatures = () => {
  return (
    <div className='w-screen flex text-center justify-around items-center text-purple-300 text-3xl container px-6 pt-6 pb-4 mb-12'>
      <div className='flex flex-col w-64 items-center'>
        <Image
          src={DownloadIcon}
          alt='Download Icon'
          width={200}
          height={300}
          className='pt-4'
        />
        <p>Download To Any Device</p>
      </div>
      <div className='flex flex-col w-64 items-center'>
        <Image
          src={StreamingIcon}
          alt='Streaming Icon'
          width={200}
          height={300}
          className='py-4'
        />
        <p>Stream On Any Device</p>
      </div>
      <div className='flex flex-col w-64 items-center'>
        <Image
          src={DevicesIcon}
          alt='Devices Icon'
          width={250}
          height={350}
          className='py-4'
        />
        <p>Enjoy on All Devices</p>
      </div>
    </div>
  )
}

export default SEOFeatures
import image1 from '../../../public/img/YT Website Slider  -1.jpg'
import image2 from '../../../public/img/YT Website Slider  -2.jpg'


export const images: string[] = [image1, image2]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex

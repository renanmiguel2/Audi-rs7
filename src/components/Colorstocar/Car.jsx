import { useState } from "react"
import carBlack from "../../img/imgTrocadecor/imgCarro/rs7Black.png"
import carBlue from "../../img/imgTrocadecor/imgCarro/rs7Blue.png"
import carGray from "../../img/imgTrocadecor/imgCarro/rs7Gray.png"
import carWhite from "../../img/imgTrocadecor/imgCarro/rs7White.png"
import corBlack from "../../img/imgTrocadecor/imgColors/colorBlack.webp"
import corBlue from "../../img/imgTrocadecor/imgColors/colorBlue.webp"
import corGray from "../../img/imgTrocadecor/imgColors/colorGray.webp"
import corWhite from "../../img/imgTrocadecor/imgColors/colorWhite.webp"
function Car () {
    const colors = [
        {id: 'blue', imageCar: carBlue, imageColor: corBlue },
        {id: 'Black', imageCar: carBlack, imageColor: corBlack},
        {id: 'Gray', imageCar: carGray, imageColor: corGray},
        {id: 'White', imageCar: carWhite, imageColor: corWhite}
    ]
    const [selectedColor, setSelectedColor] = useState('Black')
    
    return (
        <div className="flex flex-col items-center">
            <div className="relative">
                <img src={colors.find(color => color.id ===selectedColor).imageCar} className="max-w-full" />
            <div className=" absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center px-4 md:px-10 py-2 gap-3 bg-[#4b5563] rounded-full">
                {colors.map((color) => (
                        <button key={color.id} className="flex items-center" onClick={() => setSelectedColor(color.id)}>
                            <img src={color.imageColor} className={`w-10  rounded-full cursor-pointer border-2 ${selectedColor === color.id ? 'border-white scale-120 duration-200' : 'border-transparent'}`} />
                        </button>
                ))}
                
            </div>
            </div>
        </div>
    )
}
export default Car
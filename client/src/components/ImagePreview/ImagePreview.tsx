import React from "react"
import { useImagePreviewStyles } from "./styles"


interface IImagePreviewProps {
    src: string
}

export const ImagePreview: React.FC<IImagePreviewProps> = React.memo(({ src }) => {
    const classes = useImagePreviewStyles()
    return <div className={classes.preview}>
        <img
            src={src}
            className={classes.imagePreview}
        />
    </div>
})
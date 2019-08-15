
export const getImage = (images, width, height) => {
    for (let image of images) {
        if (image.width === width && image.height === height) {
            return image;
        }
    }

    return null;
}

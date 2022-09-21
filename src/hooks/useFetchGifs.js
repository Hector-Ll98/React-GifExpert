import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, seIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        seIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

  return {
    images,
    isLoading
  }
}

import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['chihiro']);

    // funcion para agregar categoria
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />

            {
                categories.map((category) =>
                    <GifGrid
                        category={category}
                        key={category}
                    />)
            }
        </>
    )
}

export default GifExpertApp

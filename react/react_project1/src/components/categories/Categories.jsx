import CategoryItem from "./CategoryItem";

export default function Categories() {
    const categories = [
        { label: "Fashion", img_url: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/fashion.svg" },
        { label: "Mobiles", img_url: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/mobiles.svg" },
        { label: "Electronics", img_url: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/electronics.svg" },
        { label: "Home", img_url: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/home.svg" },
        { label: "Appliances", img_url: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/tv.svg" },
        { label: "Furnitures", img_url: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/furniture.svg" },
        { label: "Food", img_url: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/food.svg" },
        { label: "2 wheeler", img_url: "https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/auto-new.svg" },
    ];
    return <div className="container">
        <div className="row">
            {categories.map((categoryObj) => {
                return <div className="col">
                    <CategoryItem categoryObj={categoryObj}  />
                </div>
                
            })}
        </div>
    </div>
}
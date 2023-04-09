import {
    View,
    ScrollView
} from "react-native";
import Header from "./components/Header";
import Product from "./components/Product";

function AppNew(){

    const products = [
        {
            name : "Samsung Phone",
            price : 3000,
            color: "white",
            image: "https://static.vecteezy.com/system/resources/thumbnails/011/047/531/small/smartphone-and-mobile-phone-free-png.png"
        },
        {
            name : "Apple Iphone",
            price : 50000,
            color: "green",
            image: "https://static.vecteezy.com/system/resources/thumbnails/011/047/531/small/smartphone-and-mobile-phone-free-png.png"
        },
        {
            name : "Motorola Phone",
            price : 25000,
            color: "blue",
            image: "https://static.vecteezy.com/system/resources/thumbnails/011/047/531/small/smartphone-and-mobile-phone-free-png.png"
        },
        {
            name : "Blackberry Watch",
            price : 8500,
            color: "black",
            image: "https://static.vecteezy.com/system/resources/thumbnails/011/047/531/small/smartphone-and-mobile-phone-free-png.png"
        },
    ]
    return <View>
        <Header/>
        <ScrollView style={{ marginBottom: 60}}>
        {
            products.map((item, index)=>{
                return <Product item={item}/>
            })
        }
        </ScrollView>
    </View>
}

export default AppNew;